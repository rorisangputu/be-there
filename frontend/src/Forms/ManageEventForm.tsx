import React, { useEffect } from "react";
import { EventType } from "../../../backend/src/shared/types";
import { FormProvider, useForm } from "react-hook-form";

export type EventFormData = {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  bannerPhoto: string;
};

type Props = {
  onSave: (eventFormData: FormData) => void;
  isLoading: boolean;
  event?: EventType;
};

const ManageEventForm = ({ onSave, isLoading, event }: Props) => {
  const formMethods = useForm<EventFormData>();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = formMethods;

  useEffect(() => {
    if (event) {
      reset(event);
    }
  }, [event, reset]);

  const onSubmit = handleSubmit((formDataJSON: EventFormData) => {
    const formData = new FormData();
    if (event) {
      formData.append("eventId", event._id);
    }

    // Combine date and time into a single Date object
    const combinedDateTime = new Date(
      `${formDataJSON.date.toString().split("T")[0]}T${formDataJSON.time}:00`
    );

    formData.append("name", formDataJSON.name);
    formData.append("description", formDataJSON.description);
    formData.append("dateTime", combinedDateTime.toISOString());
    formData.append("location", formDataJSON.location);
    formData.append("bannerPhoto", formDataJSON.bannerPhoto);

    console.log("Combined DateTime:", combinedDateTime);
    console.log("Form Data:", JSON.stringify(Object.fromEntries(formData)));
  });
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <label htmlFor="" className="flex flex-col text-lg">
          Name:
          <input
            type="text"
            id="name"
            className="border border-slate-500 w-fit p-2"
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && (
            <span className="text-red-700">{errors.name.message}</span>
          )}
        </label>
        <label htmlFor="" className="flex flex-col text-lg">
          Description:
          <textarea
            className="border border-slate-500"
            id="description"
            cols={10}
            rows={7}
            {...register("description", { required: "This field is required" })}
          />
          {errors.description && (
            <span className="text-red-700">{errors.description.message}</span>
          )}
        </label>
        <div className="flex flex-col md:flex-row gap-5">
          <label htmlFor="" className="flex flex-col text-lg">
            Date:
            <input
              type="date"
              className="border border-slate-500 w-fit p-2"
              id="date"
              {...register("date", { required: "This field is required" })}
            />
            {errors.date && (
              <span className="text-red-700">{errors.date.message}</span>
            )}
          </label>
          <label htmlFor="" className="flex flex-col text-lg">
            Time:
            <input
              type="time"
              className="border border-slate-500 w-fit p-2"
              id="time"
              {...register("time", { required: "This field is required" })}
            />
            {errors.time && (
              <span className="text-red-700">{errors.time.message}</span>
            )}
          </label>
        </div>
        <label htmlFor="" className="flex flex-col text-lg">
          Location:
          <input
            type="text"
            className="border border-slate-500 w-fit p-2"
            id="location"
            {...register("location", { required: "This field is required" })}
          />
          {errors.location && (
            <span className="text-red-700">{errors.location.message}</span>
          )}
        </label>
        <label htmlFor="" className="flex flex-col text-lg">
          Event Photo:
          <input
            type="file"
            className="border border-slate-500 w-fit p-2"
            {...register("bannerPhoto", {
              required: "This field is required",
              onChange: (e) => {
                const file = e.target.files?.[0];
                if (file) {
                  formMethods.setValue("bannerPhoto", file.name); // Or use a Blob/File if needed
                }
              },
            })}
          />
          {errors.bannerPhoto && (
            <span className="text-red-700">{errors.bannerPhoto.message}</span>
          )}
        </label>
        <span className="flex justify-end my-5">
          <button type="submit" className="p-3 text-lg bg-[#181917] text-white">
            Submit
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageEventForm;
