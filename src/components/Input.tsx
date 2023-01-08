import { ChangeEvent, FormEvent } from "react";
import { canBeNumber } from "utils/number";

type Props = {
  input: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
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

  console.log(inputStr);
  console.log(isCorrectExpression);

  if (!isCorrectExpression) return null;
  const sum = Function("return (" + inputStr + ");")();

  return sum;
}

function formatCommaNumber(num: number) {
  return num.toLocaleString("en-US");
}

export function Input({ input, handleChange = (e) => {} }: Props) {
  const outputArray = toOutputArray(input);
  const output = toOutput(outputArray);
  const sum = calculate(outputArray);

  return (
    <div>
      <input
        type="text"
        className="w-full rounded-full bg-blue-200 px-3 py-2"
        placeholder="ここに計算をメモしてください"
        value={output}
        onChange={handleChange}
      />
      <div className="mt-5 w-full rounded-full bg-blue-400 px-3 py-2 text-gray-700">
        {sum !== null ? formatCommaNumber(sum) : "　"}
      </div>
    </div>
  );
}
