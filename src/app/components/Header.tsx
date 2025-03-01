'use client';
import Image from "next/image";
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`h-[65px] px-[15px] flex items-center justify-between fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-200 ${
      isScrolled ? 'bg-[#2c2c2c33]' : 'bg-transparent'
    }`}>
      <Image 
        src="/header_logo.png" 
        alt="Header Logo" 
        height={35}
        width={265}
        className="h-[35px] w-auto"
      />
      <nav>
        <ul className="flex gap-4">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
