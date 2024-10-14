'use client';
import React from 'react';
import { FaCheckCircle, FaClock, FaHandsHelping, FaUserShield } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <FaCheckCircle size={40} className="text-white" />,
      title: 'Proven Expertise',
      description: 'Years of experience in delivering quality services across multiple industries.',
    },
    {
      id: 2,
      icon: <FaClock size={40} className="text-white" />,
      title: 'Timely Delivery',
      description: 'We ensure timely delivery of projects, helping you stay ahead of your deadlines.',
    },
    {
      id: 3,
      icon: <FaHandsHelping size={40} className="text-white" />,
      title: 'Customer-Centric Approach',
      description: 'Our solutions are tailored to meet your specific needs, putting your success first.',
    },
    {
      id: 4,
      icon: <FaUserShield size={40} className="text-white" />,
      title: 'Reliability & Trust',
      description: 'We build lasting relationships through trust, reliability, and transparency.',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-500 mb-4">{reason.title}</h3>
              <p className="text-gray-100">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
