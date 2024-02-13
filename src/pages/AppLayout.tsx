import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Map />
      </div>
    </>
  );
};

export default AppLayout;
