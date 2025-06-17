import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="py-10">
      <Hero />
      <div className="w-full bg-white z-50 rounded-2xl py-5 min-h-screen">
        <div className="w-[90%] mx-auto flex flex-col">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
