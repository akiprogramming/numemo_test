import { useState } from "react";
import { NavbarLinks } from "components/NavbarLinks";
import { motion } from "framer-motion";
import { MenuButton } from "components/MenuButton";

export function SmallScreenNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonStyle = {
    marginLeft: "2rem",
  };

  return (
    <div className="">
      <MenuButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        strokeWidth="3"
        color="#ff6666"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        width="17"
        height="17"
        style={menuButtonStyle}
        className="cursor-pointer"
      />
      {isOpen ? (
        <div
          id="sidebar-list"
          className="t-100 absolute top-[40px] left-0 z-10 flex w-screen flex-col bg-white drop-shadow-md transition-all duration-300 ease-in "
        >
          <nav className="flex flex-col items-center justify-center">
            <NavbarLinks
              className="py-3 hover:border-b-2 hover:border-b-slate-200"
              handlerClick={() => {
                setIsOpen(false);
              }}
            />
          </nav>
          {/* <div
            className="h-10 max-h-full w-screen bg-gray-800 opacity-10"
            onClick={() => {
              setIsOpen(false);
            }}
          ></div> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
