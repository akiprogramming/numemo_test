import produce from "immer";
import {
  ChangeEventHandler,
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
} from "react";
import { canBeNumber } from "utils/number";
import { IoMdClose } from "react-icons/io";

export type NumemoInput = {
  id: string;
  content: string;
  createdAt: string;
  isEditing: boolean;
};

type Props = {
  numemoInput: NumemoInput;
  setNumemoInputs: Dispatch<SetStateAction<NumemoInput[]>>;
};

function toOutputArray(input: string): string[] {
  let targetInput = input.replaceAll("×", "*");
  targetInput = targetInput.replaceAll("÷", "/");
  targetInput = targetInput.replaceAll(",", "");

  let outputArray = [];
  while (targetInput) {
    // console.count("loop");
    const trimmedInput = targetInput.trim();
    const firstMatchedNumber = trimmedInput.match(/^[0-9]+/);
    const firstMatchedMathOperation = trimmedInput.match(/^[+-/*//]+/);
    const extractTarget =
      firstMatchedNumber?.[0] ?? firstMatchedMathOperation?.[0];
    // console.log("ext:", extractTarget);
    if (!extractTarget) break;
    targetInput = targetInput.replace(extractTarget, "");
    // console.log("rest: ", targetInput);
    outputArray.push(extractTarget);
  }
  //   console.countReset("loop");
  //   console.log(outputArray);
  return outputArray;
}

function toOutput(input: string[]): string {
  let replacedArray = input.map((v) => (v === "*" ? "×" : v));
  replacedArray = replacedArray.map((v) => (v === "/" ? "÷" : v));
  const outputWithComma = replacedArray.map((v) =>
    canBeNumber(v) ? formatCommaNumber(parseFloat(v)) : v
  );
  const output = outputWithComma.join(" ");
  return output;
}

function calculate(input: string[]): number | null {
  if (!input.length) return null;
  const inputStr = input.join("");
  const isCorrectExpression = inputStr.match(
    /^([0-9]+[\+\-\*\/~\(\)\{\}\.])+[0-9]+$/
  );

  // console.log(inputStr);
  // console.log(isCorrectExpression);

  if (!isCorrectExpression) return null;
  const sum = Function("return (" + inputStr + ");")();

  return sum;
}

function formatCommaNumber(num: number) {
  return num.toLocaleString("en-US");
}

export const InputAndOutput = forwardRef<HTMLInputElement, Props>(
  ({ numemoInput, setNumemoInputs = (e) => {} }: Props, ref) => {
    const outputArray = toOutputArray(numemoInput.content);
    const output = toOutput(outputArray);
    const sum = calculate(outputArray);
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
            {sum !== null ? formatCommaNumber(sum) : "　"}
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
