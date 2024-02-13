import Navbar from "../components/Navbar";

const Features = () => {
  return (
    <>
      <div className="h-screen flex-col brightness-90 bg-[url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center">
        <Navbar />
        <div className="flex mt-[100px] justify-center h-screen text-5xl font-bold">
          <p className="p-5 h-fit rounded-sm bg-base-100">Features Page</p>
        </div>
      </div>
    </>
  );
};

export default Features;
