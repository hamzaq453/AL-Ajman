'use client';
import React from 'react';
import { FaUserTie, FaIndustry, FaGlobe } from 'react-icons/fa'; 

const CoreServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaUserTie size={40} className="text-orange-500" />,
      title: 'Manpower',
      description: 'Project, Design, Material and Commissioning.',
    },
    {
      id: 2,
      icon: <FaIndustry size={40} className="text-orange-500" />,
      title: 'Industry We Serve',
      description: 'Construction, Hospital, Oil, IT and Other Industries.',
    },
    {
      id: 3,
      icon: <FaGlobe size={40} className="text-orange-500" />,
      title: 'Countries',
      description: 'Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain.',
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
            <h3 className="text-2xl font-bold text-orange-500 mb-4">{service.title}</h3>
            <p className="text-gray-900 text-lg mb-8">{service.description}</p>
            {/* <div className="mt-6 flex justify-end">
              <span className="text-white bg-gray-900 p-3 rounded-full transition-colors hover:bg-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreServices;
