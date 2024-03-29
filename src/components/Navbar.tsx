import { NavLink } from "react-router-dom";
import { Signpost } from "@phosphor-icons/react"; //Licence: MIT

const Navbar = () => {
  return (
    <>
      <div className="navbar mx-auto rounded-md px-10 xl:px-40">
        <div className="navbar-start">
          <NavLink to="/">
            <div className="flex items-center gap-2">
              <Signpost size={50} weight="fill" />
              <h2 className="font-black text-xl">Journey App</h2>
            </div>
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="hidden sm:flex">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/app">App</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-left">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/app">App</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
