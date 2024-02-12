import Navbar from "../components/Navbar";

const JourneyTracker = () => {
  return (
    <main className="h-screen brightness-90 bg-[url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center">
      <Navbar />
      <section className="max-w-2xl flex flex-col justify-center items-center bg-slate-200 rounded-md mx-6 p-4 text-justify text-lg font-semibold mt-16 md:mx-auto md:mt-36">
        <p>
          Welcome to our cutting-edge journey tracking app, where every step
          counts towards seamless travel experiences. Designed with the modern
          traveler in mind, our app offers unparalleled convenience and
          efficiency in managing your journeys. Whether you're embarking on a
          solo adventure, planning a group trip, or simply commuting to work,
          our intuitive interface makes tracking your itinerary a breeze. With
          real-time updates and customizable alerts, you can stay informed about
          delays, route changes, and important milestones, ensuring that you're
          always one step ahead.
        </p>
        <button className="btn btn-primary my-5">Run the App</button>
      </section>
    </main>
  );
};

export default JourneyTracker;
