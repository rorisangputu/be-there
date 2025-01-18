import { useState } from "react";

export type RsvpFormData = {
  name: string;
  email: string;
  guests: number;
  message?: string;
};

const RsvpForm = () => {
  return (
    <form className="w-full mx-auto bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-4">RSVP</h3>
      {/* Name */}
        
      {/* Email */}

      {/* Guests */}

      {/* Message */}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white uppercase px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default RsvpForm;
