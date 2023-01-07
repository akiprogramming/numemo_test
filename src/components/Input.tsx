import { ChangeEvent, FormEvent } from "react";

type Props = {
  input: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function toOutputArray(input: string): string[] {
  let targetInput = input;
  let outputArray = [];
  while (targetInput) {
    const trimmedInput = targetInput.trim();
    const matchedNumber = trimmedInput.match(/^[0-9]+/);
    const matchedMathOperation = trimmedInput.match(/^[+-/*//]+/);
    const extractTarget = matchedNumber?.[0] ?? matchedMathOperation?.[0];
    console.count("loop");
    console.log("ext:", extractTarget);
    if (!extractTarget) break;
    targetInput = targetInput.replace(extractTarget, "");
    console.log("rest: ", targetInput);
    outputArray.push(extractTarget);
  }
  console.countReset("loop");
  console.log(outputArray);
  return outputArray;
}

function toOutput(input: string[]): string {
  const output = input.join(" ");
  return output;
}

function calculate(input: string[]): string {
  if (!input.length) return "";
  const inputStr = input.join("");
  const isCorrectExpression = inputStr.match(
    /^([0-9]+[\+\-\*\/~\(\)\{\}\.])+[0-9]+$/
  );

  if (!isCorrectExpression) return "";
  const result = Function("return (" + inputStr + ");")();

  return result;
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
        {sum || "　"}
      </div>
    </div>
  );
}
