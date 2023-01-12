import { canBeNumber } from "utils/number";

export function splitInputIntoNumemoArray(input: string): string[] {
  let targetInput = formatForCalc(input);

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

export function formatForCalc(input: string): string {
  let formattedString = input.replaceAll("×", "*");
  formattedString = formattedString.replaceAll("÷", "/");
  formattedString = formattedString.replaceAll(",", "");
  return formattedString;
}

export function toOutput(input: string[]): string {
  let replacedArray = input.map((v) => (v === "*" ? "×" : v));
  replacedArray = replacedArray.map((v) => (v === "/" ? "÷" : v));
  const outputWithComma = replacedArray.map((v) =>
    canBeNumber(v) ? formatCommaNumber(parseFloat(v)) : v
  );
  const output = outputWithComma.join(" ");
  return output;
}

export function calculate(input: string[]): number | null {
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

export function formatCommaNumber(num: number) {
  return num.toLocaleString("en-US");
}

export function getOutput(input: string): string {
  const outputArray = splitInputIntoNumemoArray(input);
  return toOutput(outputArray);
}
export function getSumWithComma(input: string): string {
  const outputArray = splitInputIntoNumemoArray(input);
  const sum = calculate(outputArray);
  if (sum !== null) return formatCommaNumber(sum);
  return "";
}
