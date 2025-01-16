import { useMutation } from "react-query";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/AppContext";
import CreateForm from "../Forms/CreateForm";

const Create = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[90%] mx-auto py-10">
        <div className="pb-5">
          <h1 className="text-2xl">Create Event</h1>
        </div>
        <CreateForm />
      </div>
    </div>
  );
};

export default Create;
