import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto py-20">
        <div className="flex flex-col p-10 bg-white justify-center items-center gap-5">
          <h1 className="text-center text-2xl">Log In</h1>
          <form className="flex flex-col gap-5">
            <span className="flex gap-2">
              email:
              <input
                className="bg-gray-100 border-slate-500 border focus:outline-none"
                type="email"
              />
            </span>
            <span className="flex gap-2">
              Password:
              <input
                className="bg-gray-100 border-slate-500 border focus:outline-none"
                type="password"
              />
            </span>
            <span className="flex justify-end">
              <button className="p-2 text-white bg-[#181917]">Log In</button>
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
