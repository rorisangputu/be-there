import { useState } from "react";



export type RsvpFormData = {
  name: string;
  email: string;
  guests: number;
  message?: string;
};

const RsvpForm = () => {
  return (
    <form className="w-full max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
      <h3 className="text-xl font-bold mb-4">RSVP</h3>
      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full mt-1 p-2 border rounded-md ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full mt-1 p-2 border rounded-md ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      {/* Guests */}
      <div className="mb-4">
        <label
          htmlFor="guests"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Guests<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className={`w-full mt-1 p-2 border rounded-md ${
            errors.guests ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.guests && (
          <p className="text-red-500 text-sm">{errors.guests}</p>
        )}
      </div>
      {/* Message */}
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full mt-1 p-2 border rounded-md border-gray-300"
        ></textarea>
      </div>
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
