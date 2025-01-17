import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import * as apiClient from "../apiClient";

export type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({
        message: "Log In Successful",
        type: "SUCCESS",
      });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/profile");
    },
    onError: async (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto py-20">
        <div className="flex flex-col p-10 bg-white justify-center items-center gap-5">
          <h1 className="text-center text-3xl font-bold">Log In</h1>
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <label className="flex flex-col gap-2 text-slate-500">
              Email:
              <input
                className="p-2 bg-gray-100 border-slate-500 border focus:outline-none"
                type="email"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </label>
            <label className="flex flex-col gap-2 text-slate-500">
              Password:
              <input
                className="p-2 bg-gray-100 border-slate-500 border focus:outline-none"
                type="password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-700">{errors.password.message}</span>
              )}
            </label>
            <span className="flex justify-end">
              <button type="submit" className="p-2 text-white bg-[#181917]">
                Log In
              </button>
            </span>
          </form>
          <div className="flex gap-2 my-5">
            <Link to={"/register"}>Create Account</Link>|
            <p className="reset-password">Forgot Password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
