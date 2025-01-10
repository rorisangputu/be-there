import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full my-6">
      <div className="w-[90%] mx-auto flex flex-row justify-between items-center">
        <div>
          <Link to={"/"}>
            <h1 className="font-bold text-2xl text-[#181917]">b/there</h1>
          </Link>
        </div>
              <div className="flex flex-row gap-3 items-center">
                  
                  
          <ul className="hidden md:flex flex-row gap-3">
            {links.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <Link to={"/sign-in"}>
            <span className="bg-[#fefae0] p-3 font-semibold">Log In</span>
          </Link>
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
  {
    title: "Profile",
    url: "/rsvp",
  },
];

export default Header;
