import { createRef, RefObject, useEffect, useMemo, useState } from "react";
import { InputAndOutput } from "components/InputAndOutput";
import { Keyboard } from "components/Keyboard";
import { useHeaderAndKeyboardResizeObserver } from "hooks/CustomHooks";
import { isPC } from "utils/helper";
import { db, NumemoInput } from "db";
import { useLiveQuery } from "dexie-react-hooks";

const TMP_TAB_ID = "test tab 1";

export function NumemoPage() {
  const [numemoInputs, setNumemoInputs] = useState<NumemoInput[]>([]);
  const { keyboardHeight, headerHeight } = useHeaderAndKeyboardResizeObserver();
  // const numemo = useLiveQuery(async () => {
  //   console.log("use query");

  //   const inputs = await db.numemoInputs.toArray();
  //   console.log(inputs);
  //   // if (inputs) setNumemoInputs(inputs);
  //   return inputs;
  // }, [numemoInputs]);

  const numemoListMaxHeightStyle = {
    maxHeight: `calc(100vh - ${keyboardHeight + headerHeight}px`,
  };

  const refs = useMemo(() => {
    const refs = new Map<string, RefObject<HTMLInputElement>>();
    numemoInputs.forEach((v) => refs.set(v.id, createRef<HTMLInputElement>()));
    return refs;
  }, [numemoInputs]);

  useEffect(() => {
    console.log("Numemo Page Mounted");

    // TODO: タブ機能実装後削除
    async function addInitialTab() {
      try {
        const tabCount = await db.tabs.count();

        if (!tabCount) {
          const newInput: NumemoInput = {
            id: crypto.randomUUID(),
            content: "",
            isEditing: true,
            createdAt: Date(),
            sortNum: 0,
          };
          await db.tabs.add({
            id: TMP_TAB_ID,
            isEditing: true,
            numemoInputIds: [],
            inputs: [newInput],
          });
        }
      } catch (error) {
        console.warn(error);
      }
    }

    addInitialTab();

    return console.log("Numemo Page Unmounted");
  }, []);

  useEffect(() => {
    async function getInitialNumemoInputs() {
      const initialNumemoTab = await db.tabs
        .where("id")
        .equals(TMP_TAB_ID)
        .first();

      const initialNumemoInputs = initialNumemoTab?.inputs;

      console.log(initialNumemoInputs);
      if (initialNumemoInputs) setNumemoInputs(initialNumemoInputs);
    }

    getInitialNumemoInputs();
    // getInitialNumemoInputs();
  }, []);

  useEffect(() => {
    const editingInput = numemoInputs.find((nInput) => nInput.isEditing);
    if (editingInput) {
      const editingInputRef = refs.get(editingInput.id);
      if (isPC()) editingInputRef?.current?.focus();
      editingInputRef?.current?.scrollIntoView({ behavior: "smooth" });
    }

    async function updateLocalDb() {
      const existingStateNumemoInputKeys = numemoInputs.map(
        (nInput) => nInput.id
      );

      const targetTab = await db.tabs.where("id").equals(TMP_TAB_ID).first();
      console.log(targetTab);

      if (targetTab) {
        targetTab.inputs = numemoInputs;
        targetTab.numemoInputIds = existingStateNumemoInputKeys;
        await db.tabs.put(targetTab);
      }
    }

    updateLocalDb();
  }, [numemoInputs]);

  return (
    <>
      <div style={numemoListMaxHeightStyle} className="overflow-y-auto py-1">
        {numemoInputs.map((inputItem, i) => {
          return (
            <InputAndOutput
              numemoInput={inputItem}
              setNumemoInputs={setNumemoInputs}
              key={inputItem.id}
              ref={refs.get(inputItem.id)}
            />
          );
        })}
      </div>
      <Keyboard setData={setNumemoInputs} />
    </>
  );
}
