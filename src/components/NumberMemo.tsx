import {
  ChangeEvent,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Center,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from "@chakra-ui/react";
import { Input as InputAndOutput } from "components/Input";
import { Keyboard } from "components/Keyboard";

function NumberMemo() {
  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(4);
  const [input1, setInput1] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  return (
    <>
      <InputAndOutput input={input1} handleChange={handleChange} />
      <Keyboard setData={setInput1} />
    </>
  );
}

export default NumberMemo;
