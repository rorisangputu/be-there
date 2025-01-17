import { useMutation } from "react-query";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/AppContext";
import ManageEventForm from "../Forms/ManageEventForm";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.addMyEvent, {
    onSuccess: (data) => {
      // Extract the event URL from the response
      const eventUrl = data.eventUrl;

      // Show a success toast
      showToast({ message: "Event created successfully", type: "SUCCESS" });

      // Redirect the user to the event's page or provide a shareable link
      navigate(eventUrl);

      // Optionally log or display the URL for sharing
      console.log("Share this link:", eventUrl);
    },
    onError: () => {
      showToast({ message: "Something went wrong", type: "ERROR" });
    },
  });

  const handleSave = (eventFormData: FormData) => {
    mutate(eventFormData);
  };

  return (
    <div className="w-full bg-white">
      <div className="w-[90%] mx-auto py-10">
        <div className="pb-5">
          <h1 className="text-2xl">Create Event</h1>
        </div>
        <ManageEventForm onSave={handleSave} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Create;
