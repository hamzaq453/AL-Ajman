'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const RecruitmentHub = () => {
  const [activeTab, setActiveTab] = useState('jobSeekers');

  const jobListings = [
    {
      id: 1,
      title: 'Software Developer',
      category: 'IT & Software',
      salary: '$70,000 - $90,000',
      location: 'New York, USA',
    },
    {
      id: 2,
      title: 'Construction Manager',
      category: 'Construction',
      salary: '$80,000 - $100,000',
      location: 'Dubai, UAE',
    },
    {
      id: 3,
      title: 'Nurse',
      category: 'Healthcare',
      salary: '$60,000 - $75,000',
      location: 'Riyadh, Saudi Arabia',
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Recruitment Hub</h2>
        
        {/* Tabs for Job Seekers and Employers */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${
              activeTab === 'jobSeekers' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-orange-500'
            }`}
            onClick={() => setActiveTab('jobSeekers')}
          >
            Job Seekers
          </button>
          <button
            className={`px-6 py-3 text-lg font-semibold ml-4 transition-colors duration-300 ${
              activeTab === 'employers' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-orange-500'
            }`}
            onClick={() => setActiveTab('employers')}
          >
            Employers
          </button>
        </div>

        {/* Content for Job Seekers */}
        {activeTab === 'jobSeekers' && (
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Job Listings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className="bg-gray-900 text-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
                >
                  <h4 className="text-xl font-semibold mb-4 text-orange-500">{job.title}</h4>
                  <p className="mb-2">Category: {job.category}</p>
                  <p className="mb-2">Salary: {job.salary}</p>
                  <p className="mb-2">Location: {job.location}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content for Employers */}
        {activeTab === 'employers' && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Post a Job</h3>
            <p className="text-lg text-gray-600">
              Contact us to post your job listings and find the perfect candidates.
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-transform duration-300 hover:scale-105">
              <Link href={"/contact"}>Contact Us</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecruitmentHub;
