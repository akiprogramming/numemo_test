import { Dispatch, memo, SetStateAction } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

type Props = {
  setData: Dispatch<SetStateAction<string>>;
};

const btnDisplayOrder = [
  ...[" ", " ", "7", "8", "9", "÷"],
  ...[" ", " ", "4", "5", "6", "×"],
  ...[" ", " ", "1", "2", "3", "-"],
  ...[" ", "C", "0", " ", "B", "+"],
];

export const Keyboard = memo(({ setData }: Props) => {
  const handleClickKeyboard = (value: string) => {
    setData((prevValue) => prevValue + value);
  };

  return (
    <div className="mx-auto mt-2 grid w-screen max-w-fit select-none grid-cols-6 grid-rows-4 items-center gap-2  text-slate-600">
      {btnDisplayOrder.map((btn, i) => {
        switch (btn) {
          case "C":
            return (
              <button
                key={btn}
                onClick={() => {
                  setData("");
                }}
                className="h-full w-full rounded-xl bg-neutral-100 shadow-md transition-all active:bg-neutral-50 active:shadow-none"
              >
                {btn}
              </button>
            );
          case "B":
            return (
              <button
                key={btn}
                onClick={() => {
                  setData((prevValue) => {
                    return prevValue.slice(0, prevValue.length - 1);
                  });
                }}
                className="h-full w-full rounded-xl bg-neutral-100 shadow-md transition-all active:bg-neutral-50 active:shadow-none"
              >
                <RiDeleteBack2Line className="mx-auto max-h-fit max-w-fit" />
              </button>
            );
          case " ":
          case "":
            return (
              <span
                key={`empty${i}`}
                className=" mx-auto h-10 w-10 rounded-xl bg-slate-200 shadow-md transition-all active:shadow-none"
              ></span>
            );
          default:
            return (
              <button
                key={`btn${btn}`}
                onClick={() => handleClickKeyboard(btn)}
                className="mx-auto h-full w-full rounded-xl bg-neutral-100 shadow-md transition-all active:bg-neutral-50 active:shadow-none"
              >
                {btn}
              </button>
            );
        }
      })}
    </div>
  );
});
