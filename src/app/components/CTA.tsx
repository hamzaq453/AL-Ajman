'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const CallToAction = () => {
  const { t } = useTranslation(); // Translation hook

  return (
    <div className="py-16 bg-orange-500 text-center ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-6">
          {t('aboutPage.partnerWithUsTitle')} {/* Translated CTA title */}
        </h2>
        <p className="text-lg text-white mb-8">
          {t('aboutPage.partnerWithUsDescription')} {/* Translated CTA description */}
        </p>
        <a
          href="/contact"
          className="bg-white text-orange-500 py-3 px-6 rounded-lg font-bold hover:bg-gray-900 transition-colors duration-300"
        >
          {t('aboutPage.contactButton')} {/* Translated Contact button */}
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
