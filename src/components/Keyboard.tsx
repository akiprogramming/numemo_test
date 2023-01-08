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
    <div className="mx-auto grid max-w-fit select-none grid-cols-6 grid-rows-4 items-center gap-0  text-slate-600">
      {btnDisplayOrder.map((btn, i) => {
        switch (btn) {
          case "C":
            return (
              <button
                key={btn}
                onClick={() => {
                  setData("");
                }}
                className="m-1 h-10 w-10 rounded-xl bg-teal-300 shadow-md transition-all active:bg-teal-100 active:shadow-none"
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
                className="m-1 h-10 w-10 rounded-xl bg-teal-300 shadow-md transition-all active:bg-teal-100 active:shadow-none"
              >
                <RiDeleteBack2Line className="mx-auto" />
              </button>
            );
          case " ":
          case "":
            return (
              <span
                key={`empty${i}`}
                className=" mx-auto h-10 w-10 rounded-xl bg-slate-300 shadow-md transition-all active:shadow-none"
              ></span>
            );
          default:
            return (
              <button
                key={`btn${btn}`}
                onClick={() => handleClickKeyboard(btn)}
                className="mx-auto h-10 w-10 rounded-xl bg-teal-300 shadow-md transition-all active:bg-teal-100 active:shadow-none"
              >
                {btn}
              </button>
            );
        }
      })}

      {/* {[
          {
            label: "C",
            pressFunc: () => {
              setData("");
            },
          },
        ].map((btn) => {
          return (
            <button
              key={btn.label}
              onClick={btn.pressFunc}
              className="m-1 h-10 w-10 rounded-md bg-teal-300 shadow-md transition-all active:bg-teal-100 active:shadow-none"
            >
              {btn.label}
            </button>
          );
        })} */}
    </div>
  );
});
