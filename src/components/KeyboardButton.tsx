import { MouseEventHandler } from "react";

export type KeyboardButtonProps = {
  name: string;
  label: string | JSX.Element;
  pressFunc: MouseEventHandler;
};

export function KeyboardButton({
  name,
  label,
  pressFunc,
}: KeyboardButtonProps) {
  const isEmptyBtn = name === "" || name === " ";
  return (
    <button
      disabled={isEmptyBtn}
      onClick={pressFunc}
      className={`mx-auto h-full w-full rounded-xl  shadow-md transition-all  active:shadow-none ${
        isEmptyBtn ? "bg-slate-200" : "bg-neutral-100 active:bg-neutral-50"
      }`}
    >
      {label}
    </button>
  );
}
