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
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <InputAndOutput input={input} handleChange={handleChange} />
      <Keyboard setData={setInput} />
    </>
  );
}

export default NumberMemo;
