import { Dispatch, memo, SetStateAction, useCallback, useMemo } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { TbEqual } from "react-icons/tb";
import { NumemoInput } from "components/InputAndOutput";
import produce from "immer";
import { KeyboardButton, KeyboardButtonProps } from "./KeyboardButton";

type Props = {
  setData: Dispatch<SetStateAction<NumemoInput[]>>;
};

const btnDisplayOrder = [
  ...[" ", " ", "7", "8", "9", "÷"],
  ...[" ", " ", "4", "5", "6", "×"],
  ...[" ", " ", "1", "2", "3", "-"],
  ...[" ", "C", "0", "B", "=", "+"],
];

export const Keyboard = memo(({ setData }: Props) => {
  const handleClickAddString = useCallback((pressedString: string) => {
    setData(
      produce((draft) => {
        const editingNumemoInput = draft.find((nInput) => nInput.isEditing);
        if (editingNumemoInput) {
          editingNumemoInput.content += pressedString;
        }
      })
    );
  }, []);

  const handleClickReset = useCallback(() => {
    setData(
      produce((draft) => {
        const targetInput = draft.find((v) => v.isEditing);
        if (targetInput) targetInput.content = "";
      })
    );
  }, []);

  const handleClickBackSpace = useCallback(() => {
    setData(
      produce((draft) => {
        const targetInput = draft.find((v) => v.isEditing);
        if (targetInput)
          targetInput.content = targetInput.content.slice(
            0,
            targetInput.content.length - 1
          );
      })
    );
  }, []);

  const handleClickEqual = useCallback(() => {
    setData(
      produce((draft) => {
        const targetInput = draft.find((v) => v.isEditing);
        if (targetInput) targetInput.isEditing = false;
        const newInput: NumemoInput = {
          id: crypto.randomUUID(),
          content: "",
          isEditing: true,
          createdAt: Date(),
        };
        draft.push(newInput);
      })
    );
  }, []);

  const KeyboardButtonArgs: KeyboardButtonProps[] = useMemo(() => {
    return btnDisplayOrder.map((btn, i) => {
      let pressFunc;
      let label: string | JSX.Element = btn;
      switch (btn) {
        case "C":
          pressFunc = handleClickReset;
          break;
        case "B":
          pressFunc = handleClickBackSpace;
          label = <RiDeleteBack2Line className="mx-auto max-h-fit max-w-fit" />;
          break;
        case "=":
          pressFunc = handleClickEqual;
          label = <TbEqual className="mx-auto max-h-fit max-w-fit" />;
          break;
        case " ":
        case "":
          pressFunc = () => {};
          break;
        default:
          pressFunc = () => handleClickAddString(btn);
          break;
      }
      return {
        name: btn,
        label,
        pressFunc,
      };
    });
  }, [btnDisplayOrder]);

  return (
    <div
      id="keyboard-container"
      className="fixed left-1/2 bottom-0 aspect-[6/4] w-full max-w-xl translate-x-[-50%] select-none bg-white p-2 text-sm text-slate-600 sm:text-lg  md:text-xl"
    >
      <div className="grid h-full w-full grid-cols-6 grid-rows-4 items-center gap-2">
        {KeyboardButtonArgs.map((btnArg, i) => {
          return <KeyboardButton key={i} {...btnArg} />;
        })}
      </div>
    </div>
  );
});
