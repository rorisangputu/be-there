import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../apiClient";

const EventDetails = () => {
  const { eventId } = useParams();
  const { data: eventData } = useQuery(
    "getEventById",
    () => apiClient.getEventById(eventId as string),
    {
      enabled: !!eventId, // Don't call API if eventId doesn't exist
    }
  );

  if (!eventData) {
    return <></>;
  }

  // Format date and time
  const dateObj = new Date(eventData.dateTime);

  const date = dateObj.toLocaleDateString("en-GB"); // "23/01/2025" (DD/MM/YYYY)
  const time = dateObj.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }); // "18:00"

  // Scroll-to functionality
  const scrollToRsvp = () => {
    const rsvpSection = document.getElementById("rsvp");
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto flex flex-col">
        <hr className="h-[2px] border-none" />
        <div className="flex flex-col md:flex-row gap-5 my-10">
          {/* Banner Photo */}
          <div className="flex-1">
            <img
              src={eventData.bannerPhoto}
              alt={eventData.name}
              className="w-full h-80 object-cover rounded-md shadow-md"
            />
          </div>
          {/* Event Details */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold">{eventData.name}</h1>
            <p className="my-4 text-gray-700">{eventData.description}</p>
            <span className="text-gray-800">Date: {date}</span>
            <span className="text-gray-800">Time: {time}</span>
            <p className="text-gray-800">Venue: {eventData.location}</p>
            <button
              onClick={scrollToRsvp}
              className="bg-[#181917] text-white uppercase p-3 my-5 w-fit rounded-md shadow-md hover:bg-[#333333] transition-colors"
            >
              RSVP
            </button>
          </div>
        </div>

        <hr className="h-[2px] border-none" />

        {/* RSVP Section */}
        <div className="py-5">
          <h2 className="text-2xl font-bold" id="rsvp">
            RSVP
          </h2>
          <div className="mt-4">{/* Add RSVP form or content here */}</div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
