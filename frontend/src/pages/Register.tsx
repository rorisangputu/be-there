import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/AppContext";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/sign-in");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto py-20">
        <div className="flex flex-col py-10 bg-white justify-center items-center gap-5">
          <h1 className="text-center text-3xl font-bold">Register</h1>
          <form className="flex flex-col gap-5 " onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-5">
              <label className="flex gap-2 flex-col text-slate-500">
                First Name:
                <input
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="text"
                  id="firstName"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                />
                {errors.firstName && (
                  <span className="text-red-700">
                    {errors.firstName.message}
                  </span>
                )}
              </label>
              <label className="flex gap-2 flex-col text-slate-500">
                Last Name:
                <input
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="text"
                  id="lastName"
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                />
                {errors.lastName && (
                  <span className="text-red-700">
                    {errors.lastName.message}
                  </span>
                )}
              </label>
            </div>
            <label className="flex gap-2 flex-col text-slate-500">
              Email:
              <input
                className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                type="email"
                id="email"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </label>
            <div className="flex flex-col md:flex-row gap-5">
              <label className="flex gap-2 flex-col text-slate-500">
                Password:
                <input
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-700">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="flex gap-2 flex-col text-slate-500">
                Confirm Password:
                <input
                  id="confirm password"
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="password"
                  {...register("confirmPassword", {
                    validate: (val) => {
                      if (!val) {
                        return "This field is required";
                      } else if (watch("password") !== val) {
                        return "Your passwords do not match ";
                      }
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-700">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
            </div>
            <span className="flex justify-end">
              <button type="submit" className="p-3 text-white bg-[#181917]">
                Register
              </button>
            </span>
          </form>
          <div className="flex gap-2 my-5">
            <Link className="cursor-pointer" to={"/sign-in"}>
              Have an account? Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
