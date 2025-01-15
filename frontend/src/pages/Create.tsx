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
              <input type="text" className="border border-slate-500 w-fit" />
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
                      
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
