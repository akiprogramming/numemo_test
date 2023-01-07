import { ChangeEvent, FormEvent, useState } from "react";
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
  const [input1, setInput1] = useState("");

  let input = "";
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  const handleClickKeyboard = (value: string) => {
    setInput1(input1 + value);
  };

  return (
    <>
      {/* <p>NUMEMOこれからがんばります＾＾</p>
      <Center>
        <NumberInput
          placeholder="(^^)"
          defaultValue={num1}
          step={1}
          keepWithinRange={false}
          clampValueOnBlur={false}
          onChange={(e) => setNum1(parseInt(e))}
          value={num1}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        +
        <NumberInput
          placeholder="v(^^)v"
          defaultValue={num2}
          step={1}
          keepWithinRange={false}
          clampValueOnBlur={false}
          onChange={(e) => setNum2(parseInt(e))}
          value={num2}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        =
        <Text
          fontSize="5xl"
          bgClip="text"
          bgGradient="linear(to-r, green.200, pink.500)"
          fontWeight="extrabold"
        >
          {num1 + num2}
        </Text>
      </Center> */}
      <InputAndOutput input={input1} handleChange={handleChange} />
      <Keyboard handleClickKeyboard={handleClickKeyboard} />
    </>
  );
}

export default NumberMemo;
