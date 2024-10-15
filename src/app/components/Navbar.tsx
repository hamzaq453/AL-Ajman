'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import Image from 'next/image';

const Navbar = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSetActiveLink = (page: string) => {
    setActiveLink(page);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Language switcher
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = i18n.language;

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 shadow-lg">
      <div className="text-2xl font-bold text-orange-400">AL AJBAN</div>

      {/* Desktop Links */}
      <div className="hidden lg:flex flex-grow justify-center space-x-8 text-lg">
        <Link
          href="/"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Home' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('Home')}
        >
          {t('home')}
        </Link>

        <Link
          href="/recruitment"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Recruitment' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('Recruitment')}
        >
          {t('recruitment')}
        </Link>

        <Link
          href="/about"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'About' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('About')}
        >
          {t('about')}
        </Link>

        <Link
          href="/contact"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Contact' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('Contact')}
        >
          {t('contact')}
        </Link>
      </div>

      {/* Language Switcher for Desktop - Aligned Right */}
      <div className="hidden lg:flex items-center justify-end flex-grow">
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-gray-200 rounded-full px-2 py-1 space-x-2 text-gray-900"
        >
          <img
            src={currentLanguage === 'en' ? '/UKFlag.png' : '/ARFlag.png'}
            alt={currentLanguage === 'en' ? 'UK Flag' : 'Arabic Flag'}
            className="w-5 h-5"
          />
          <span>{currentLanguage === 'en' ? 'EN' : 'AR'}</span>
        </button>
      </div>

      {/* Mobile Language Switcher and Menu Icon */}
      <div className="lg:hidden flex items-center space-x-4">
        {/* Language Switcher for Mobile */}
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-gray-200 rounded-full px-2 py-1 space-x-2 text-gray-900"
        >
          <Image
            src={currentLanguage === 'en' ? '/UKFlag.png' : '/ARFlag.png'}
            alt={currentLanguage === 'en' ? 'UK Flag' : 'Arabic Flag'}
            className="w-5 h-5"
          />
          <span>{currentLanguage === 'en' ? 'EN' : 'AR'}</span>
        </button>

        {/* Mobile Menu Icon */}
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
        <Link
          href="/"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Home' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('Home')}
        >
          {t('home')}
        </Link>

        <Link
          href="/recruitment"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Recruitment' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('Recruitment')}
        >
          {t('recruitment')}
        </Link>

        <Link
          href="/about"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'About' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('About')}
        >
          {t('about')}
        </Link>

        <Link
          href="/contact"
          className={`relative block py-2 text-white text-lg hover:text-orange-500 transition-colors duration-300 ${
            activeLink === 'Contact' ? 'text-orange-500' : ''
          }`}
          onClick={() => handleSetActiveLink('Contact')}
        >
          {t('contact')}
        </Link>

        {/* Mobile Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="flex items-center bg-gray-200 rounded-full px-2 py-1 space-x-2 text-gray-900"
        >
          <Image
            src={currentLanguage === 'en' ? '/UKFlag.png' : '/ARFlag.png'}
            alt={currentLanguage === 'en' ? 'UK Flag' : 'Arabic Flag'}
            className="w-5 h-5"
          />
          <span>{currentLanguage === 'en' ? 'EN' : 'AR'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
