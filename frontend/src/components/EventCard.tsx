import { useNavigate } from "react-router-dom";
import { EventType } from "../../../backend/src/shared/types";

type EventCardProps = {
  EventData: EventType;
  onEdit: (eventId: string) => void; // Function for editing the event
};

const EventCard = ({ EventData }: EventCardProps) => {
  const navigate = useNavigate();
  const shareableLink = `${window.location.origin}/events/${EventData._id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableLink);
    alert("Link copied to clipboard!"); // Replace this with a toast if preferred
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      {/* Banner Photo */}
      <div className="mb-4">
        <img
          src={EventData.bannerPhoto}
          alt={EventData.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Event Details */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">{EventData.name}</h2>
        <p className="text-sm text-gray-600">
          {new Date(EventData.dateTime).toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">{EventData.location}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(`/edit/${EventData._id}`)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Edit Event
        </button>
        <button
          onClick={handleCopyLink}
          className="bg-gray-100 text-gray-600 py-2 px-4 rounded hover:bg-gray-200"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default EventCard;
