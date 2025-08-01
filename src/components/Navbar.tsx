import { Link } from "react-router-dom";
import PrimaryButton from "./ui/buttons/PrimaryButton";
import SecondaryButton from "./ui/buttons/SecondaryButton";

const NavLinks = [
  {
    name: "Home",
    url: "home",
  },
  {
    name: "About",
    url: "about",
  },
  {
    name: "Contact",
    url: "Contact",
  },
  {
    name: "FAQ",
    url: "Contact",
  },
  {
    name: "Contact",
    url: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-ghost-white h-18 border-b border-gray-300 sticky top-0 z-[999] w-full">
      <div className="flex items-center h-full px-40 text-xl justify-between">
        <div className="flex gap-x-14 font-medium items-center ">
        <span className="text-2xl font-extrabold">Kabutehan</span>
          {NavLinks.map((item, index) => (
            <Link to={item.url} key={index}>
              {item.name}
            </Link>
          ))}
        </div>
				<div className="flex gap-x-6">
					<PrimaryButton text={"Log in"}/>
					<SecondaryButton text="Sign up" />
				</div>
      </div>
    </nav>
  );
};

export default Navbar;
