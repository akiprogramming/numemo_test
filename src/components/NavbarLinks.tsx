import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  navClass: string;
  linkClassName: string;
};

const LINKS = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "settings", path: "/settings" },
];

// export const Navbar: FC<{ navClass: string; linkClassName: string }> = ({
//   navClass,
//   linkClassName,
// }) => {
//   return <NavComponent navClass={navClass} linkClassName={linkClassName} />;
// };

export const NavbarLinks: FC<{
  className?: string;
  handlerClick?: () => void;
}> = ({ className = "", handlerClick }) => {
  return (
    <>
      {LINKS.map((v) => {
        return (
          <NavLink
            to={v.path}
            className={`capitalize duration-300 ease-in-out hover:text-blue-400 ${className}`}
            key={v.path}
            // style={({ isActive }) =>
            //   isActive ? activeStyle : undefined
            // }
            onClick={handlerClick}
          >
            {v.label}
          </NavLink>
        );
      })}
    </>
  );
};
