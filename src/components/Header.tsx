import { Link, NavLink } from "react-router-dom";
import { useWindowWidthAndHeight } from "hooks/CustomHooks";
import { NavbarLinks } from "components/NavbarLinks";
import { SmallScreenNavbar } from "components/SmallScreenNavbar";
import { MenuButton } from "./MenuButton";
import { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import { LinkMenu } from "components/LinkMenu";

const MD_SCREEN_WIDTH = 700;

export const Header = memo(() => {
  const [width, height] = useWindowWidthAndHeight();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonStyle = {
    marginLeft: "2rem",
  };

  useEffect(() => {
    if (width > MD_SCREEN_WIDTH) setIsMenuOpen(false);
  }, [width]);

  return (
    <div className="">
      <header className=" active:none sticky top-0 z-20 select-none border-b-2 border-gray-300 bg-white text-gray-700">
        <div className="container mx-auto flex max-w-4xl flex-row items-center px-3 py-2 sm:py-3 md:py-5">
          <NavLink to="/">
            <span className="font-bold text-gray-700">NUMEMO</span>
          </NavLink>{" "}
          <div className="ml-auto flex items-center">
            <input
              type="text"
              placeholder="Search memo *Can't use"
              className="mr-3 hidden rounded-full py-1 px-2 focus:outline-none"
              disabled
            />
            {width > MD_SCREEN_WIDTH ? (
              <nav className="text-base">
                <NavbarLinks className="mr-5" />
              </nav>
            ) : (
              <MenuButton
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                strokeWidth="3"
                color="#ff6666"
                lineProps={{ strokeLinecap: "round" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                width="17"
                height="17"
                style={menuButtonStyle}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </header>
      {width < MD_SCREEN_WIDTH && isMenuOpen ? (
        <LinkMenu setIsOpen={setIsMenuOpen} />
      ) : null}
    </div>
  );
});
