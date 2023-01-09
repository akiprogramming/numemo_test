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
    <div className="fixed left-1/2 bottom-0 aspect-[6/4] w-full max-w-xl translate-x-[-50%] select-none p-2 text-sm text-slate-600 sm:text-lg  md:text-xl">
      <div className="grid h-full w-full grid-cols-6 grid-rows-4 items-center gap-2">
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
                <button
                  disabled
                  key={`empty${i}`}
                  className=" mx-auto h-full w-full rounded-xl bg-slate-200 shadow-md transition-all active:shadow-none"
                ></button>
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
    </div>
  );
});
