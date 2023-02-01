import { NumemoInput } from "db";
import produce from "immer";
import { Dispatch, SetStateAction } from "react";
import { getSumWithComma } from "./numemoFormat";

export const pressEqual = (
  setNumemoInputs: Dispatch<SetStateAction<NumemoInput[]>>
) => {
  return () => {
    setNumemoInputs(
      produce((draft) => {
        const targetInput = draft.find((v) => v.isEditing);
        const lastInputContent = targetInput?.content ?? "";
        if (lastInputContent === "") return;

        if (targetInput) targetInput.isEditing = false;

        const newInput: NumemoInput = {
          id: crypto.randomUUID(),
          content: getSumWithComma(lastInputContent),
          isEditing: true,
          createdAt: Date(),
          sortNum: draft.length,
        };
        draft.push(newInput);
      })
    );
  };
};
