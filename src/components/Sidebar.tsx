import { Link, NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[500px] h-lvh flex flex-col pt-0 px-4 bg-base-content">
      <ul className="m-3 menu menu-horizontal bg-base-100 justify-center h-auto rounded-box">
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
      <div className="absolute bottom-3 left-20">
        <Link to="/">
          <button className="btn btn-neutral">Go to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
