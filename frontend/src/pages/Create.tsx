import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Create = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[90%] mx-auto py-10">
        <div className="pb-5">
          <h1 className="text-2xl">Create Event</h1>
        </div>
        <div>
          <form action="" className="flex flex-col gap-4">
            <label htmlFor="" className="flex flex-col text-lg">
              Name:
              <input
                type="text"
                className="border border-slate-500 w-fit p-2"
              />
            </label>
            <label htmlFor="" className="flex flex-col text-lg">
              Description:
              <textarea
                name=""
                className="border border-slate-500"
                id=""
                cols={10}
                rows={7}
              ></textarea>
            </label>
            <div className="flex flex-col md:flex-row gap-5">
              <label htmlFor="" className="flex flex-col text-lg">
                Date:
                <input
                  type="date"
                  className="border border-slate-500 w-fit p-2"
                  name=""
                  id=""
                />
              </label>
              <label htmlFor="" className="flex flex-col text-lg">
                Time:
                <input
                  type="time"
                  className="border border-slate-500 w-fit p-2"
                  name=""
                  id=""
                />
              </label>
            </div>
            <label htmlFor="" className="flex flex-col text-lg">
              Location:
              <input
                type="text"
                className="border border-slate-500 w-fit p-2"
              />
            </label>
            <label htmlFor="" className="flex flex-col text-lg">
              Event Photo:
              <input
                type="file"
                className="border border-slate-500 w-fit p-2"
              />
            </label>
            <span className="flex justify-end my-5">
              <button
                type="submit"
                className="p-3 text-lg bg-[#181917] text-white"
              >
                Submit
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
