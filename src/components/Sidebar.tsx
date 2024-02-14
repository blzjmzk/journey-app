import { Link, NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[300px] h-lvh flex flex-col md:p-5 pt-0 px-0 bg-base-content">
      <ul className="m-3 menu menu-horizontal bg-base-200 justify-center h-auto rounded-box">
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
      <div className="p-4">
        <Outlet />
      </div>
      <div className="m-auto">
        <Link to="/">
          <button className="btn btn-neutral">Go to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
