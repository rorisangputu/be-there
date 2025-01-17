import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="w-full my-6">
      <div className="w-[90%] mx-auto flex flex-row justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1 className="font-bold text-2xl text-[#181917]">b/there</h1>
          </Link>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <GiHamburgerMenu className="h-7 w-7 md:hidden" />
          <ul className="hidden md:flex flex-row gap-3">
            {links.map((link) => (
              <li key={link.url} className="text-xl">
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          {isLoggedIn ? (
            <>
              <Link to={"/profile"} className="text-xl">
                Profile
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to={"/sign-in"}
              className="bg-[#fefae0] p-3 font-semibold text-md md:text-xl"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const links = [
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Events",
    url: "/events",
  },
];

export default Header;
