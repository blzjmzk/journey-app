import { Link, NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[200px] md:w-[400px] h-lvh flex flex-col md:p-5 pt-0 px-0 bg-base-content">
      <ul className="menu menu-vertical md:menu-horizontal bg-base-200 justify-center h-auto md:rounded-box">
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
      <Outlet />
      <Link to="/">
        <button className="btn btn-neutral">Homepage</button>
      </Link>
    </div>
  );
};

export default Sidebar;
