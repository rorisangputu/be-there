import React, { useEffect } from "react";
import { EventType } from "../../../backend/src/shared/types";
import { FormProvider, useForm } from "react-hook-form";

export type EventFormData = {
  name: string;
  description: string;
  date: Date;
  time: Date;
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
  const { register, handleSubmit, reset } = formMethods;
  

  useEffect(() => {
    reset(event);
  }, [event, reset]);

  

  const onSubmit = handleSubmit((formDataJSON: EventFormData) => {
    const formData = new FormData();
    if (event) {
      formData.append("eventId", event._id);
    }

    formData.append("name", formDataJSON.name);
    formData.append("description", formDataJSON.description);
    formData.append("date", formDataJSON.date.toString());
    formData.append("time", formDataJSON.time.toString());
    formData.append("location", formDataJSON.location);
    formData.append("bannerPhoto", formDataJSON.bannerPhoto);

    console.log(JSON.stringify(formData));
  });
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <label htmlFor="" className="flex flex-col text-lg">
          Name:
          <input type="text" className="border border-slate-500 w-fit p-2" />
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
          <input type="text" className="border border-slate-500 w-fit p-2" />
        </label>
        <label htmlFor="" className="flex flex-col text-lg">
          Event Photo:
          <input type="file" className="border border-slate-500 w-fit p-2" />
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
