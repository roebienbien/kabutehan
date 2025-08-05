import { Link } from 'react-router-dom';
import PrimaryButton from './ui/buttons/PrimaryButton';
import SecondaryButton from './ui/buttons/SecondaryButton';
import { FaXbox, FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import HamburgerMenu from './ui/HamburgerMenu';

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
    <nav className="bg-ghost-white sticky top-0 z-[999] w-full border-b border-gray-300">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 text-xl">
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
          {/* {isOpen ? <FaXTwitter size={24} /> : <RxHamburgerMenu size={24} />} */}
          <HamburgerMenu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`bg-ghost-white absolute right-0 flex min-h-[100dvh] w-full transform justify-center space-y-4 transition-transform duration-1000 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col items-center gap-y-8 py-8">
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
            <div className="flex w-full flex-col gap-3 pt-2">
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
