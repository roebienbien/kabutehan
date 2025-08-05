import { Link } from 'react-router-dom';
import PrimaryButton from './ui/buttons/PrimaryButton';
import SecondaryButton from './ui/buttons/SecondaryButton';
import { FaXbox, FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

const NavLinks = [
  {
    name: 'Home',
    url: 'home',
  },
  {
    name: 'About',
    url: 'about',
  },
  {
    name: 'Contact',
    url: 'Contact',
  },
  {
    name: 'FAQ',
    url: 'Contact',
  },
  {
    name: 'Contact',
    url: 'Contact',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-ghost-white top-0 z-[999] h-18 w-full border-b border-gray-300">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 text-xl">
        {/* Logo */}
        <span className="text-2xl font-extrabold">Kabutehan</span>

        {/* Desktop Links */}
        <div className="hidden items-center gap-x-14 font-medium lg:flex">
          {NavLinks.map((item, index) => (
            <Link to={item.url} key={index}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden gap-x-6 lg:flex">
          <PrimaryButton text="Log in" />
          <SecondaryButton text="Sign up" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaXTwitter size={24} /> : <FaXbox size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 flex h-screen w-fit justify-end space-y-4 bg-blue-400 px-4 pb-4 lg:hidden">
          <div>
            {NavLinks.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="block text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <PrimaryButton text="Log in" />
              <SecondaryButton text="Sign up" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
