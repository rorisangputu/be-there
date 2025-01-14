import { useQuery } from "react-query";
import * as apiClient from "../apiClient";
import { Link } from "react-router-dom";

const Profile = () => {
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default Profile;
