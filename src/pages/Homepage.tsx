import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <Navbar />
      <div className="flex flex-col justify-center items-center mt-[200px]">
        <h2 className="font-black text-4xl p-12 md:text-6xl">
          Start Your Journey
        </h2>
        <Link to="app">
          <button className="btn btn-primary my-5 w-72 shadow-md">
            Run the App
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
