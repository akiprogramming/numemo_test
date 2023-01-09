import { Link, NavLink } from "react-router-dom";
import { useWindowWidthAndHeight } from "hooks/CustomHooks";
import { NavbarLinks } from "components/NavbarLinks";
import { SmallScreenNavbar } from "components/SmallScreenNavbar";

export function Header() {
  const [width, height] = useWindowWidthAndHeight();

  let activeStyle = {
    textDecoration: "underline",
    backgroundColor: "lightgrey",
  };

  return (
    <header className="select-none border-b-2 border-gray-300 text-gray-700">
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
          {width > 700 ? (
            <nav className="text-base">
              <NavbarLinks />
            </nav>
          ) : (
            <SmallScreenNavbar />
          )}
        </div>
      </div>
      {/* <div className="h-screen w-screen bg-slate-400/25 opacity-20"></div> */}
    </header>
  );
}
