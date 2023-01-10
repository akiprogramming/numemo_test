import { Dispatch, memo, SetStateAction, useCallback } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";
import { TbEqual } from "react-icons/tb";
import { NumemoInput } from "components/InputAndOutput";
import produce from "immer";

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
  const handleClickKeyboard = useCallback((pressedString: string) => {
    setData(
      produce((draft) => {
        const editingNumemoInput = draft.find((nInput) => nInput.isEditing);
        if (editingNumemoInput) {
          editingNumemoInput.content += pressedString;
        }
      })
    );
  }, []);

  return (
    <div className="fixed left-1/2 bottom-0 aspect-[6/4] w-full max-w-xl translate-x-[-50%] select-none bg-white p-2 text-sm text-slate-600 sm:text-lg  md:text-xl">
      <div className="grid h-full w-full grid-cols-6 grid-rows-4 items-center gap-2">
        {btnDisplayOrder.map((btn, i) => {
          switch (btn) {
            case "C":
              return (
                <button
                  key={btn}
                  onClick={() => {
                    setData(
                      produce((draft) => {
                        const targetInput = draft.find((v) => v.isEditing);
                        if (targetInput) targetInput.content = "";
                      })
                    );
                  }}
                  className="h-full w-full rounded-xl bg-neutral-100 shadow-md transition-all active:bg-neutral-50 active:shadow-none"
                >
                  {btn}
                </button>
              );
            case "B":
              return (
                <button
                  key={btn}
                  onClick={() => {
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
                  }}
                  className="h-full w-full rounded-xl bg-neutral-100 shadow-md transition-all active:bg-neutral-50 active:shadow-none"
                >
                  <RiDeleteBack2Line className="mx-auto max-h-fit max-w-fit" />
                </button>
              );
            case "=":
              return (
                <button
                  key={btn}
                  onClick={() => {
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
                  }}
                  className="h-full w-full rounded-xl bg-neutral-100 shadow-md transition-all active:bg-neutral-50 active:shadow-none"
                >
                  <TbEqual className="mx-auto max-h-fit max-w-fit" />
                </button>
              );
            case " ":
            case "":
              return (
                <button
                  disabled
                  key={`empty${i}`}
                  className=" mx-auto h-full w-full rounded-xl bg-slate-200 shadow-md transition-all active:shadow-none"
                ></button>
              );
            default:
              return (
                <button
                  key={`btn${btn}`}
                  onClick={() => handleClickKeyboard(btn)}
                  className="mx-auto h-full w-full rounded-xl bg-neutral-100 shadow-md transition-all active:bg-neutral-50 active:shadow-none"
                >
                  {btn}
                </button>
              );
          }
        })}
      </div>
    </div>
  );
});
