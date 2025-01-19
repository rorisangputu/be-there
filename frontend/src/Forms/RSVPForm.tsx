import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../contexts/AppContext";
import { useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import * as apiClient from "../apiClient";

type RsvpProps = {
  eventId: string;
};

export type RsvpFormData = {
  name: string;
  email: string;
  guests: number;
  message?: string;
  eventId: string;
};

const RsvpForm = ({ eventId }: RsvpProps) => {
  const { showToast } = useAppContext();

  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RsvpFormData>();

  const mutation = useMutation(apiClient.createRsvp, {
    onSuccess: async () => {
      showToast({
        message: "RSVP Sent!",
        type: "SUCCESS",
      });
    },
    onError: async (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="w-full mx-auto bg-white p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">RSVP</h3>
      {/* Name */}
      <form
        onSubmit={onSubmit}
        className="max-w-[40%] flex flex-col gap-4"
        action=""
      >
        <label htmlFor="" className="flex flex-col text-lg">
          Name:
          <input
            type="text"
            id="name"
            className="p-1 border bg-gray-100 border-slate-600 focus:outline-none"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <span className="text-red-700">{errors.name.message}</span>
          )}
        </label>
        {/* Email */}
        <label htmlFor="" className="flex flex-col text-lg">
          Email:
          <input
            type="text"
            id="email"
            className="p-1 border bg-gray-100 border-slate-600 focus:outline-none"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-700">{errors.email.message}</span>
          )}
        </label>
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
