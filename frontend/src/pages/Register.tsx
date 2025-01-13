import { Link } from "react-router-dom";

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto py-20">
        <div className="flex flex-col py-10 bg-white justify-center items-center gap-5">
          <h1 className="text-center text-3xl font-bold">Register</h1>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <span className="flex gap-2 flex-col text-slate-500">
                First Name:
                <input
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="text"
                />
              </span>
              <span className="flex gap-2 flex-col text-slate-500">
                Last Name:
                <input
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="text"
                />
              </span>
            </div>
            <span className="flex gap-2 flex-col text-slate-500">
              Email:
              <input
                className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                type="email"
              />
            </span>
            <div className="flex flex-col md:flex-row gap-5">
              <span className="flex gap-2 flex-col text-slate-500">
                Password:
                <input
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="password"
                />
              </span>
              <span className="flex gap-2 flex-col text-slate-500">
                Confirm Password:
                <input
                  className="bg-gray-100 border-slate-500 border focus:outline-none p-2"
                  type="password"
                />
              </span>
            </div>
            <span className="flex justify-end">
              <button className="p-3 text-white bg-[#181917]">Register</button>
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
