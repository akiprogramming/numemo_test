type Props = {
  setData: (value: string) => void;
  currentValue: string;
};

const btnDisplayOrder = [
  ...[" ", " ", "7", "8", "9", "÷"],
  ...[" ", " ", "4", "5", "6", "×"],
  ...[" ", " ", "1", "2", "3", "-"],
  ...[" ", " ", "0", "C", " ", "+"],
];

export function Keyboard({ setData, currentValue }: Props) {
  const handleClickKeyboard = (value: string) => {
    setData(currentValue + value);
  };
  return (
    <div className="mx-auto grid max-w-fit select-none grid-cols-6 grid-rows-4 items-center gap-0">
      {btnDisplayOrder.map((btn, i) => {
        switch (btn) {
          case "C":
            return (
              <button
                key={btn}
                onClick={() => {
                  setData("");
                }}
                className="m-1 h-10 w-10 rounded-md bg-teal-300 shadow-md transition-all active:bg-teal-100 active:shadow-none"
              >
                {btn}
              </button>
            );
          case " ":
          case "":
            return (
              <span
                key={`empty${i}`}
                className=" mx-auto h-10 w-10 rounded-md bg-slate-300 shadow-md transition-all active:shadow-none"
              ></span>
            );
          default:
            return (
              <button
                key={`btn${btn}`}
                onClick={() => handleClickKeyboard(btn)}
                className=" mx-auto h-10 w-10 rounded-md bg-teal-300 shadow-md transition-all active:bg-teal-100 active:shadow-none"
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
}
