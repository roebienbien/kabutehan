import { useState } from 'react';

export default function HamburgerMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] lg:hidden">
      <span
        className={`bg-primary block h-0.5 w-full transform transition duration-300 ease-in-out ${
          isOpen ? 'translate-y-[8px] rotate-45' : ''
        }`}
      />
      <span
        className={`bg-primary block h-0.5 w-full transition duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`bg-primary block h-0.5 w-full transform transition duration-300 ease-in-out ${
          isOpen ? '-translate-y-[8px] -rotate-45' : ''
        }`}
      />
    </div>
  );
}
