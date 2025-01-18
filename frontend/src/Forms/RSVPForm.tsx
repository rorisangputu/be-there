import { useState } from "react";

export type RsvpFormData = {
  name: string;
  email: string;
  guests: number;
  message?: string;
};

const RsvpForm = () => {
  return (
    <div className="w-full mx-auto bg-white p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">RSVP</h3>
      {/* Name */}
      <form className="max-w-[40%] flex flex-col gap-4" action="">
        <label htmlFor="" className="flex flex-col">
          Name:
          <input
            type="text"
            id="name"
            className="p-1 border border-slate-600"
            
          />
        </label>
        {/* Email */}

        {/* Guests */}

        {/* Message */}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#181917] text-white w-fit uppercase px-4 py-2 shadow-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;
