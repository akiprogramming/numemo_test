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
import Keyboard from "./Keyboard";
import { Input } from "components/Input";

function NumberMemo() {
  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(4);
  const [input1, setInput1] = useState("");

  let input = "";
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.dir(e.target);
    console.dir(e.target.value);
    setInput1(e.target.value);
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
      <Input input={input1} handleChange={handleChange} />
      {/* <Keyboard /> */}
    </>
  );
}

export default NumberMemo;
