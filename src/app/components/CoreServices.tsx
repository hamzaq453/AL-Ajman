'use client';
import React from 'react';
import { FaUserTie, FaIndustry, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const CoreServices = () => {
  const { t } = useTranslation(); // Initialize translation

  const services = [
    {
      id: 1,
      icon: <FaUserTie size={40} className="text-orange-500" />,
      title: t('services.manpower.title'), // Translated title
      description: t('services.manpower.description'), // Translated description
    },
    {
      id: 2,
      icon: <FaIndustry size={40} className="text-orange-500" />,
      title: t('services.industry.title'), // Translated title
      description: t('services.industry.description'), // Translated description
    },
    {
      id: 3,
      icon: <FaGlobe size={40} className="text-orange-500" />,
      title: t('services.countries.title'), // Translated title
      description: t('services.countries.description'), // Translated description
    },
  ];

  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div>{service.icon}</div>
              <div className="text-gray-900 text-5xl font-bold opacity-40">
                {`0${service.id}`}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-900 text-lg mb-8">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
