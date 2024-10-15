'use client';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; 

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <footer className="bg-gray-950 text-gray-100">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            {t('footer.aboutUs')} {/* Translated title */}
          </h3>
          <p className="text-gray-300">
            {t('footer.aboutUsDescription')} {/* Translated description */}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            {t('footer.quickLinks')} {/* Translated title */}
          </h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500 transition-colors duration-300">{t('footer.home')}</a></li>
            <li><a href="/about" className="hover:text-orange-500 transition-colors duration-300">{t('about')}</a></li>
            <li><a href="/services" className="hover:text-orange-500 transition-colors duration-300">{t('footer.services')}</a></li>
            <li><a href="/contact" className="hover:text-orange-500 transition-colors duration-300">{t('footer.contact')}</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            {t('footer.contactInfo')} {/* Translated title */}
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-300">{t('footer.email')}</li>
            <li className="text-gray-300">{t('footer.phone')}</li>
            <li className="text-gray-300">{t('footer.address')}</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold text-orange-500 mb-4">
            {t('footer.followUs')} {/* Translated title */}
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 font-bold text-lg text-center text-black">
          <p>&copy; {new Date().getFullYear()} Al Ajban. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
