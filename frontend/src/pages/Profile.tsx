import { useQuery } from "react-query";
import * as apiClient from "../apiClient";
import { Link } from "react-router-dom";
import MyEvents from "../components/MyEvents";

const Profile = () => {
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center py-10">
          <div>
            <h1 className="text-2xl">
              {currentUser?.firstName} {currentUser?.lastName}
            </h1>
            <p>{currentUser?.email}</p>
          </div>
          <div>
            <Link
              to={`/edit-profile/${currentUser?._id}`}
              className="text-xl bg-[#181917] text-white p-3 hover:bg-[#323530]"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <hr className="h-[2px] border-none"></hr>

        <div className="py-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">My Events</h2>
            <Link
              to={"/create"}
              className="p-3 font-semibold text-lg bg-[#fefae0] hover:bg-[#f6f1d4] w-fit"
            >
              Create Event
            </Link>
          </div>
          <MyEvents />
        </div>
      </div>
    </div>
  );
};

export default Profile;
