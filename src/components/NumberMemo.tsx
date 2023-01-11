import { useRef, useState } from "react";
import { InputAndOutput, NumemoInput } from "components/InputAndOutput";
import { Keyboard } from "components/Keyboard";
import { NUMEMO_INPUTS } from "mock/numemoData";

function NumberMemo() {
  const [numemoInputs, setNumemoInputs] =
    useState<NumemoInput[]>(NUMEMO_INPUTS);

  return (
    <>
      {numemoInputs.map((inputItem) => {
        return (
          <InputAndOutput
            numemoInput={inputItem}
            setNumemoInputs={setNumemoInputs}
            key={inputItem.id}
          />
        );
      })}
      <Keyboard setData={setNumemoInputs} />
    </>
  );
}

export default NumberMemo;
