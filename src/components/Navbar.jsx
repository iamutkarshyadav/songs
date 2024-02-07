import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <h3  className='w-18 h-18 object-contain' > Utkarsh </h3>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Storage
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
