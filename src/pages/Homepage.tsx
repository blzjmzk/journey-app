import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const JourneyTracker = () => {
  return (
    <main className="h-screen flex-col brightness-90 bg-[url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <section className="max-w-2xl flex flex-col justify-center items-center bg-base-100 rounded-md mx-6 p-5 text-justify text-lg font-semibold mt-16 md:mx-auto md:mt-36">
        <p className="text-center">
          Welcome to our cutting-edge journey tracking app, where every step
          counts towards seamless travel experiences. Designed with the modern
          traveler in mind, our app offers unparalleled convenience and
          efficiency in managing your journeys. Whether you're embarking on a
          solo adventure, planning a group trip, or simply commuting to work,
          our intuitive interface makes tracking your itinerary a breeze.
        </p>
      </section>
      <div className="flex justify-center">
        <Link to="app">
          <button className="btn btn-primary my-5 w-72 shadow-md">
            Run the App
          </button>
        </Link>
      </div>
    </main>
  );
};

export default JourneyTracker;
