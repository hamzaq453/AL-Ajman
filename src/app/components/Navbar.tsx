'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Icons for mobile menu

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For toggling the Services submenu

  const handleSetActiveLink = (page: React.SetStateAction<string>) => {
    setActiveLink(page);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 shadow-lg">
      {/* Company Name on the Left */}
      <div className="text-2xl font-bold text-orange-400">AL AJBAN</div>

      {/* Navigation Links */}
      <div className={`hidden lg:flex flex-grow justify-center space-x-8 text-lg`}>
        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Home' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('Home')}
        >
          Home
        </a>

        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'About' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('About')}
        >
          About Us
        </a>

        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Team' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('Team')}
        >
          Our Team
        </a>
        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Contact' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('Contact')}
        >
          Contact Us
        </a>
      </div>

      {/* Inquiry Button - Only visible on large screens */}
      <button className="hidden lg:block ml-auto px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 transform transition-transform duration-300 hover:scale-105">
        Inquiry
      </button>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden z-30">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-900 p-8 z-20 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Home' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('Home')}
        >
          Home
        </a>

        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'About' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('About')}
        >
          About Us
        </a>

        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Team' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('Team')}
        >
          Our Team
        </a>
        <a
          href="#"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Contact' ? 'text-orange-500 after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-orange-500 after:rounded' : ''
          }`}
          onClick={() => handleSetActiveLink('Contact')}
        >
          Contact Us
        </a>

        {/* Inquiry Button - Already part of the mobile nav */}
        <button className="mt-4 px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 transform transition-transform duration-300 hover:scale-105">
          Inquiry
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
