import { createRef, RefObject, useEffect, useMemo, useState } from "react";
import { InputAndOutput, NumemoInput } from "components/InputAndOutput";
import { Keyboard } from "components/Keyboard";
import { NUMEMO_INPUTS } from "mock/numemoData";
import { useHeaderAndKeyboardResizeObserver } from "hooks/CustomHooks";

export function NumemoPage() {
  const [numemoInputs, setNumemoInputs] =
    useState<NumemoInput[]>(NUMEMO_INPUTS);
  const { keyboardHeight, headerHeight } = useHeaderAndKeyboardResizeObserver();

  const numemoListMaxHeightStyle = {
    maxHeight: `calc(100vh - ${keyboardHeight + headerHeight}px`,
  };

  const refs = useMemo(() => {
    const refs = new Map<string, RefObject<HTMLInputElement>>();
    numemoInputs.forEach((v) => refs.set(v.id, createRef<HTMLInputElement>()));
    return refs;
  }, [numemoInputs]);

  useEffect(() => {
    console.log("inputs changed side effect", numemoInputs);

    const editingInput = numemoInputs.find((nInput) => nInput.isEditing);
    if (editingInput) {
      const editingInputRef = refs.get(editingInput.id);
      editingInputRef?.current?.focus();
      editingInputRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
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
