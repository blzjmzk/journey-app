import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <main className="h-screen flex-col brightness-90 bg-[url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <div className="flex justify-center items-center mt-[200px]">
        <Link to="app">
          <button className="btn btn-primary my-5 w-72 shadow-md">
            Run the App
          </button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
