'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { navigationLinks } from '../data/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`h-16 px-4 flex items-center justify-between fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-200 ${
        isMenuOpen ? 'bg-[#2c2c2c]' : isScrolled ? 'bg-[#2c2c2cbb]' : 'bg-transparent'
      }`}>
        <Link href="/">
          <Image 
            src="/header_logo.png" 
            alt="Header Logo" 
            height={35}
            width={265}
            className="h-[35px] w-auto"
          />
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          onClick={toggleMenu}
          className="xl:hidden text-white p-2"
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden xl:block">
          <ul className="flex gap-6">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`
          xl:hidden fixed inset-0 bg-[#2c2c2c] z-40
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-[65px]' : '-translate-y-full'}
        `}
      >
        <nav className="container mx-auto px-4 py-8">
          <ul className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link 
                  href={link.href}
                  className="text-white hover:text-gray-300 transition-colors block text-xl py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
