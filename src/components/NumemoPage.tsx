import { useState } from "react";
import { InputAndOutput, NumemoInput } from "components/InputAndOutput";
import { Keyboard } from "components/Keyboard";
import { NUMEMO_INPUTS } from "mock/numemoData";
import { useHeaderAndKeyboardResizeObserver } from "hooks/CustomHooks";

export function NumemoPage() {
  const [numemoInputs, setNumemoInputs] =
    useState<NumemoInput[]>(NUMEMO_INPUTS);
  const { keyboardHeight, headerHeight } = useHeaderAndKeyboardResizeObserver();

  const numemoListMaxHeightStyle = {
    maxHeight: `calc(100vh - ${keyboardHeight + headerHeight}px`,
  };

  return (
    <>
      <div style={numemoListMaxHeightStyle} className="overflow-y-auto py-1">
        {numemoInputs.map((inputItem) => {
          return (
            <InputAndOutput
              numemoInput={inputItem}
              setNumemoInputs={setNumemoInputs}
              key={inputItem.id}
            />
          );
        })}
      </div>
      <Keyboard setData={setNumemoInputs} />
    </>
  );
}
