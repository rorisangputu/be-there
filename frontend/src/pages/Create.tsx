import { useMutation } from "react-query";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/AppContext";
import ManageEventForm from "../Forms/ManageEventForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const Create = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [eventUrl, setEventUrl] = useState(""); // Store the event URL in state
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyEvent, {
    onSuccess: (data) => {
      const generatedEventUrl = data.eventUrl; // Extract the event URL from the response
      setEventUrl(generatedEventUrl); // Save the URL to state
      setSuccess(true); // Set success to true
      showToast({ message: "Event created successfully", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Something went wrong", type: "ERROR" });
    },
  });

  const handleSave = (eventFormData: FormData) => {
    mutate(eventFormData);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(eventUrl).then(
      () => {
        showToast({ message: "Link copied to clipboard!", type: "SUCCESS" });
      },
      () => {
        showToast({ message: "Failed to copy the link", type: "ERROR" });
      }
    );
  };

  return (
    <div className="w-full bg-white">
      <div className="w-[90%] mx-auto py-10">
        <div className="pb-5">
          <h1 className="text-2xl">Create Event</h1>
        </div>
        {success ? (
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium">Event created successfully!</p>
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-xl">Share this link: </p>
              <div className="flex items-center gap-3 border border-slate-600 p-1">
                <a
                  href={eventUrl}
                  className="text-lg underline text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {eventUrl}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded bg-gray-200 hover:bg-gray-300"
                  title="Copy link"
                >
                  <FaRegCopy />
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <button
                onClick={() => navigate(`/events/${eventUrl.split("/").pop()}`)}
                className="mt-4 bg-[#181917] md:w-fit text-white p-3 rounded"
              >
                View Event
              </button>
              <button
                onClick={() => navigate(`/create`)}
                className="mt-4 bg-[#181917] md:w-fit text-white p-3 rounded"
              >
                Create Event
              </button>
            </div>
          </div>
        ) : (
          <ManageEventForm onSave={handleSave} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

export default Create;
