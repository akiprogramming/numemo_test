type Props = {
  handleClickKeyboard: (value: string) => void;
};

export function Keyboard({ handleClickKeyboard }: Props) {
  return (
    <div>
      {[
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "+",
        "-",
        "*",
        "/",
      ].map((v) => {
        return (
          <button
            key={v}
            onClick={() => handleClickKeyboard(v)}
            className="m-1 h-10 w-10 rounded-md bg-teal-300 shadow-md transition-all active:bg-teal-100 active:shadow-none"
          >
            {v}
          </button>
        );
      })}
    </div>
  );
}
