import { NumemoInput } from "db";
import produce from "immer";
import { Dispatch, forwardRef, SetStateAction, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import { getValidOutput, getSumWithComma } from "utils/numemoFormat";

type Props = {
  numemoInput: NumemoInput;
  setNumemoInputs: Dispatch<SetStateAction<NumemoInput[]>>;
};

export const InputAndOutput = forwardRef<HTMLInputElement, Props>(
  ({ numemoInput, setNumemoInputs = (e) => {} }: Props, ref) => {
    const output = getValidOutput(numemoInput.content);
    const sumWithComma = getSumWithComma(numemoInput.content);
    const { isEditing } = numemoInput;

    const handleClick = useCallback(() => {
      setNumemoInputs(
        produce((draft) => {
          draft.forEach((nInput) => (nInput.isEditing = false));
          const thisNumemoInput = draft.find(
            (nInput) => nInput.id === numemoInput.id
          );
          if (thisNumemoInput) thisNumemoInput.isEditing = true;
        })
      );
    }, []);

    const handleDeleteInput = useCallback(() => {
      setNumemoInputs(
        produce((draft) => {
          const isOnlyOneMemoLeft = draft.length === 1;
          if (isOnlyOneMemoLeft) {
            draft[0].content = "";
            return;
          }

          const targetIndex = draft.findIndex(
            (nInput) => nInput.id === numemoInput.id
          );
          draft.splice(targetIndex, 1);
          const lastInput = draft[draft.length - 1];
          lastInput.isEditing = true;
        })
      );
    }, []);

    const handleType = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setNumemoInputs(
        produce((draft) => {
          const typedInput = e.target.value;
          const targetInput = draft.find((nInput) => nInput.isEditing);
          if (targetInput) targetInput.content = typedInput;
        })
      );
    }, []);

    return (
      <div className={"container mx-auto flex max-w-xl flex-row "}>
        <div className="w-full" onClick={handleClick}>
          <input
            ref={ref}
            type="text"
            className={`mb-1 w-full rounded-full bg-blue-200 px-3 py-2 ${
              isEditing ? " bg-orange-200" : ""
            } `}
            placeholder="ここに計算をメモしてください"
            value={output}
            onChange={handleType}
          />
          <div
            className={`mb-3 w-full rounded-full bg-blue-400 px-3 py-2 text-gray-700 ${
              isEditing ? " bg-orange-400" : ""
            } `}
          >
            {sumWithComma === "" ? "　" : sumWithComma}
          </div>
        </div>
        <div className="max-w-fit">
          <button className="" onClick={handleDeleteInput}>
            <IoMdClose />
          </button>
        </div>
      </div>
    );
  }
);
