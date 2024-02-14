import Navbar from "../components/Navbar";

const Features = () => {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-[200px]">
        <h2 className="font-black text-4xl p-12 md:text-6xl">
          Explore the features
        </h2>
      </div>
    </>
  );
};

export default Features;
