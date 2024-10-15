'use client';
import React from 'react';
import { FaCheckCircle, FaClock, FaHandsHelping, FaUserShield } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const WhyChooseUs = () => {
  const { t } = useTranslation(); // Initialize translation

  const reasons = [
    {
      id: 1,
      icon: <FaCheckCircle size={40} className="text-white" />,
      title: t('whyChooseUs.reasons.expertise.title'), // Translated title
      description: t('whyChooseUs.reasons.expertise.description'), // Translated description
    },
    {
      id: 2,
      icon: <FaClock size={40} className="text-white" />,
      title: t('whyChooseUs.reasons.timelyDelivery.title'), // Translated title
      description: t('whyChooseUs.reasons.timelyDelivery.description'), // Translated description
    },
    {
      id: 3,
      icon: <FaHandsHelping size={40} className="text-white" />,
      title: t('whyChooseUs.reasons.customerApproach.title'), // Translated title
      description: t('whyChooseUs.reasons.customerApproach.description'), // Translated description
    },
    {
      id: 4,
      icon: <FaUserShield size={40} className="text-white" />,
      title: t('whyChooseUs.reasons.reliabilityTrust.title'), // Translated title
      description: t('whyChooseUs.reasons.reliabilityTrust.description'), // Translated description
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          {t('whyChooseUs.title')} {/* Translated section title */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                {reason.title} {/* Translated reason title */}
              </h3>
              <p className="text-gray-100">
                {reason.description} {/* Translated reason description */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
