import { FaCalendarPlus } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto flex flex-col">
        <div className="flex flex-col justify-center items-center  py-10 gap-5">
          <span className="font-semibold text-center leading-5 text-2xl text-[#fefae0]">
            will you
            <h1 className="text-4xl">b/there?</h1>
          </span>
          <div>
            <div className="border border-slate-800">
              <input
                className="bg-transparent p-2 focus:outline-none"
                type="text"
              />
              <button className="bg-[#fefae0] p-2">Search</button>
            </div>
          </div>
          <div>
            <p>Create An Event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
