import { useQuery } from "react-query";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import * as apiClient from "../apiClient";
import RsvpForm from "../Forms/RSVPForm";
import { useAppContext } from "../contexts/AppContext";

const EventDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAppContext();
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

  const onSignInClick = () => {
    navigate("/sign-in", { state: { from: location } });
  };
  const onSignUpClick = () => {
    navigate("/register", { state: { from: location } });
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
              className="w-full h-80 object-cover shadow-md"
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
              className="bg-[#181917] text-white uppercase p-3 my-5 w-fit shadow-md hover:bg-[#333333] transition-colors"
            >
              RSVP
            </button>
          </div>
        </div>

        <hr className="h-[2px] border-none" />

        {isLoggedIn ? (
          <>
            {/* RSVP Section */}
            <div className="py-5">
              <div className="mt-4">
                <RsvpForm eventId={eventData._id} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full my-10">
              <div className="bg-white flex flex-col justify-center items-center py-10">
                <p className="text-xl">You're not logged in.</p>
                <div className="flex gap-5 my-5">
                  <button
                    className="text-lg cursor-pointer hover:text-slate-500"
                    onClick={() => onSignInClick()}
                  >
                    Sign In
                  </button>
                  <span>|</span>
                  <button
                    className="text-lg cursor-pointer hover:text-slate-500"
                    onClick={() => onSignUpClick()}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
