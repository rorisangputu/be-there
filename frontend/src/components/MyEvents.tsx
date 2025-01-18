import { useQuery } from "react-query";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/AppContext";

const MyEvents = () => {
  const { showToast } = useAppContext();
  const { data: eventData } = useQuery("getMyEvents", apiClient.getMyEvents, {
    onError: () => {
      showToast({ message: "Couldn't get events", type: "ERROR" });
    },
  });
  return <div>MyEvents</div>;
};

export default MyEvents;
