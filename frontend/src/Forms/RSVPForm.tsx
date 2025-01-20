import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import * as apiClient from "../apiClient";
import { FaCheckCircle } from "react-icons/fa";
import { UserType } from "../../../backend/src/shared/types";

type RsvpProps = {
  eventId: string;
  currentUser: UserType | undefined;
};

export type RsvpFormData = {
  guestName: string;
  guestEmail: string;
  eventId: string;
};

const RsvpForm = ({ eventId, currentUser }: RsvpProps) => {
  const { showToast } = useAppContext();
  const [success, setSuccess] = useState(false);

  const { data: rsvpExists } = useQuery(
    ["checkRsvp", eventId],
    () => apiClient.checkRsvp(eventId as string),
    {
      enabled: !!eventId, // Don't call API if eventId doesn't exist
    }
  );

  //console.log(rsvpExists);

  const { handleSubmit } = useForm<RsvpFormData>({
    defaultValues: {
      guestName: currentUser?.firstName,
      guestEmail: currentUser?.email,
      eventId: eventId,
    },
  });

  const mutation = useMutation(apiClient.createRsvp, {
    onSuccess: async () => {
      showToast({
        message: "RSVP Sent!",
        type: "SUCCESS",
      });
      setSuccess(true);
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
      {success || rsvpExists ? (
        <>
          <div className="flex flex-col justify-center items-center gap-4">
            <span className="flex flex-col justify-center items-center gap-3 text-xl">
              <FaCheckCircle className="text-green-500 w-6 h-6" />
              You have RSVP'd!
            </span>
            <Link to={"/"} className="underline">
              Go Home
            </Link>
          </div>
        </>
      ) : (
        <form
          onSubmit={onSubmit}
          className="max-w-[40%] flex flex-col gap-4"
          action=""
        >
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#181917] text-white w-fit uppercase px-4 py-2 shadow-md transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default RsvpForm;
