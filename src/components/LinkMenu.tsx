import { Dispatch, SetStateAction, memo } from "react";
import { NavbarLinks } from "components/NavbarLinks";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const LinkMenu = memo(({ setIsOpen }: Props) => {
  console.log("Menu rendered");

  return (
    <>
      <nav className="fixed z-20 flex w-full flex-col items-center justify-center rounded-br-md rounded-bl-md bg-white py-3 shadow-md">
        <NavbarLinks
          className="z-20 mx-auto py-3 hover:border-b-2 hover:border-b-slate-200"
          handlerClick={() => {
            setIsOpen(false);
          }}
        />
      </nav>
      <div
        className="absolute top-0 z-10 h-screen w-screen bg-gray-800 opacity-30"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </>
  );
});
