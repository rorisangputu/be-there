import { useQuery } from "react-query";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/AppContext";
import EventCard from "./EventCard";

const MyEvents = () => {
  const { showToast } = useAppContext();
  const { data: eventData } = useQuery("getMyEvents", apiClient.getMyEvents, {
    onError: () => {
      showToast({ message: "Couldn't get events", type: "ERROR" });
    },
  });

  if (!eventData) {
    return <span>No Events founds</span>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {eventData?.map((EventData, i) => (
        <EventCard key={i} EventData={EventData} />
      ))}
    </div>
  );
};

export default MyEvents;
