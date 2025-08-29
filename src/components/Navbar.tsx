import { Link } from 'react-router-dom';
import PrimaryButton from './ui/buttons/PrimaryButton';
import SecondaryButton from './ui/buttons/SecondaryButton';
import { useState } from 'react';
import HamburgerMenu from './ui/HamburgerMenu';

const NavLinks = [
  {
    name: 'Home',
    url: '/',
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
    <nav className="bg-ghost-white sticky top-0 z-[1000] w-full border-b border-gray-300">
      <div className="mx-auto flex h-14 max-w-[90%] items-center justify-between px-4 text-xl">
        <div className="flex items-center gap-x-12">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold">
            Kabutehan
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-x-10 text-lg font-medium lg:flex">
            {NavLinks.map((item, index) => (
              <Link to={item.url} key={index}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden gap-x-6 lg:flex">
          <PrimaryButton className="w-24 text-lg" text="Log in" />
          <SecondaryButton className="w-24 text-lg" text="Sign up" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <HamburgerMenu isOpen={isOpen} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`bg-ghost-white absolute flex min-h-[100dvh] w-full transform items-center justify-center space-y-4 transition-transform duration-1000 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col items-center gap-y-8">
            {NavLinks.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className="block text-base font-medium md:text-2xl"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex w-full flex-col gap-3 pt-2">
              <PrimaryButton text="Log in" className="h-10 w-40" />
              <SecondaryButton text="Sign up" className="h-10 w-40" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
