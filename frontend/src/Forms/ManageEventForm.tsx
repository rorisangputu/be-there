import { useEffect } from "react";
import { EventType } from "../../../backend/src/shared/types";
import { FormProvider, useForm } from "react-hook-form";

export type EventFormData = {
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  bannerPhotoFile: FileList;
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
    watch,
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

    // Get the selected date and time
    const selectedDate = formDataJSON.date;
    const selectedTime = formDataJSON.time;

    // Create a new Date object from the selected date and time
    const combinedDateTime = new Date(`${selectedDate}T${selectedTime}:00`);

    // Adjust the time to the local timezone (GMT+2 in your case)
    const localDateTime = new Date(
      combinedDateTime.getTime() - combinedDateTime.getTimezoneOffset() * 60000
    );

    formData.append("name", formDataJSON.name);
    formData.append("description", formDataJSON.description);
    formData.append("dateTime", localDateTime.toISOString()); // Ensure this is in ISO format for your backend
    formData.append("location", formDataJSON.location);

    const fileInput = watch("bannerPhotoFile");
    if (fileInput && fileInput.length > 0) {
      formData.append("bannerPhotoFile", fileInput[0]); // Extract the first file from FileList
    }

    // Debugging logs
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}:`, value);
    // }
    // console.log("Combined DateTime:", combinedDateTime);
    // console.log("Form Data:", JSON.stringify(Object.fromEntries(formData)));
    onSave(formData);
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
            accept="image/*"
            className="border border-slate-500 w-fit p-2"
            {...register("bannerPhotoFile", {
              required: "This field is required",
              validate: (bannerPhoto) => {
                if (!bannerPhoto) {
                  return "At least one image should be added";
                }
              },
            })}
          />
          {errors.bannerPhoto && (
            <span className="text-red-700">{errors.bannerPhoto.message}</span>
          )}
        </label>
        <span className="flex justify-end my-5">
          <button
            disabled={isLoading}
            type="submit"
            className="p-3 text-lg bg-[#181917] text-white disabled:bg-gray-400"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};

export default ManageEventForm;
