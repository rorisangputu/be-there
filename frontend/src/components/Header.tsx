import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full p-3 border">
      <div className="w-[90%] mx-auto border flex flex-row justify-between">
        <div>
          <Link to={"/"}>
            <h1 className="font-bold text-lg text-[#181917]">b/there</h1>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row gap-3">
            {links.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
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
