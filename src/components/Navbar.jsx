import { NavLink } from "react-router-dom";

import logo from "../assets/icons/nz.jpg";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className={"text-3xl"}>
        <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
