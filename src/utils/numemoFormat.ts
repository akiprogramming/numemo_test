import { canBeNumber } from "utils/number";

export function splitInputIntoNumemoArray(input: string): string[] {
  let targetInput = formatForCalc(input);

  const regexFirstMatchedNumber = /^(0|[1-9][0-9]*)(\.[0-9]+)?/;
  const regexFirstMatchedMathOperation = /^[+-/*//]/;

  let outputArray = [];
  while (targetInput) {
    // console.count("loop");
    // 余分なスペースを取り除く　うーん保留？
    const trimmedInput = targetInput.trim();

    const firstMatchedNumber = trimmedInput.match(regexFirstMatchedNumber);
    const firstMatchedMathOperation = trimmedInput.match(
      regexFirstMatchedMathOperation
    );
    const extractTarget =
      firstMatchedNumber?.[0] ?? firstMatchedMathOperation?.[0];
    // console.log("ext:", extractTarget);
    if (!extractTarget) break;
    targetInput = targetInput.replace(extractTarget, "");
    // console.log("rest: ", targetInput);

    // 四則演算の記号が連続する場合、最後の記号を優先する
    if (firstMatchedMathOperation) {
      const lastInput = outputArray[outputArray.length - 1];
      const isLastInputMathOperation =
        regexFirstMatchedMathOperation.test(lastInput);
      if (isLastInputMathOperation) {
        outputArray[outputArray.length - 1] = firstMatchedMathOperation?.[0];
        continue;
      }
    }

    outputArray.push(extractTarget);
  }
  //   console.countReset("loop");
  //   console.log(outputArray);
  return outputArray;
}

export function formatForCalc(input: string): string {
  let formattedString = input.replaceAll("×", "*");
  formattedString = formattedString.replaceAll("÷", "/");
  formattedString = formattedString.replaceAll(",", ""); // 桁が多い場合のカンマ
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

export function getValidOutput(input: string): string {
  const outputArray = splitInputIntoNumemoArray(input);
  return toOutput(outputArray);
}
export function getSumWithComma(input: string): string {
  const outputArray = splitInputIntoNumemoArray(input);
  const sum = calculate(outputArray);
  if (sum !== null) return formatCommaNumber(sum);
  return "";
}
