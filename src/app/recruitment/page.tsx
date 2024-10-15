'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'yl9k055k',
  dataset: 'production',
  apiVersion: 'v2022-03-07',
  useCdn: true,
});

interface JobListing {
  _id: string;
  title: string;
  category: string; // This will now store the category key (e.g., 'it_software')
  salary: string;
  location: string;
}

const RecruitmentHub: React.FC = () => {
  const { t } = useTranslation(); // Initialize i18n for translation
  const [activeTab, setActiveTab] = useState<'jobSeekers' | 'employers'>('jobSeekers');
  const [jobListings, setJobListings] = useState<JobListing[]>([]);

  useEffect(() => {
    client
      .fetch<JobListing[]>(
        `*[_type == "job"]{
          _id,
          title,
          category,
          salary,
          location
        }`
      )
      .then((data) => {
        console.log('Fetched job listings:', data); // Debugging output
        setJobListings(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          {t('recruitmentHub.title')}
        </h2>

        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${
              activeTab === 'jobSeekers' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-orange-500'
            }`}
            onClick={() => setActiveTab('jobSeekers')}
          >
            {t('recruitmentHub.jobSeekersTab')}
          </button>
          <button
            className={`px-6 py-3 text-lg font-semibold ml-4 transition-colors duration-300 ${
              activeTab === 'employers' ? 'bg-orange-500 text-white' : 'bg-gray-900 text-white hover:bg-orange-500'
            }`}
            onClick={() => setActiveTab('employers')}
          >
            {t('recruitmentHub.employersTab')}
          </button>
        </div>

        {activeTab === 'jobSeekers' && (
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
              {t('recruitmentHub.jobListingsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {jobListings.length > 0 ? (
                jobListings.map((job) => (
                  <div
                    key={job._id}
                    className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
                  >
                    <h4 className="text-xl font-semibold mb-4 text-gray-900">{job.title}</h4>

                    {/* Category Section */}
                    <div className="mb-2">
                      <span className="text-gray-700">
                        <span className="text-gray-700 font-bold">{t('recruitmentHub.job.category')}: </span>
                        {/* Fetch category translation using i18next */}
                        {t(`categories.${job.category}`)}
                      </span>
                    </div>

                    {/* Salary Section */}
                    <div className="mb-2">
                      <span className="text-gray-700">
                        <span className="text-gray-700 font-bold">{t('recruitmentHub.job.salary')}: </span>{job.salary}
                      </span>
                    </div>

                    {/* Location Section */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        <span className="text-gray-700 font-bold">{t('recruitmentHub.job.location')}: </span>{job.location}
                      </span>
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
                        <Link href={'/contact'}>{t('recruitmentHub.contactButton')}</Link>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No job listings available.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'employers' && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('recruitmentHub.postJobTitle')}
            </h3>
            <p className="text-lg text-gray-600">{t('recruitmentHub.postJobDescription')}</p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-transform duration-300 hover:scale-105">
              {t('recruitmentHub.contactButton')}
              <Link href="/contact"></Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecruitmentHub;
