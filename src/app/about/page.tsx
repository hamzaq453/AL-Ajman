'use client';
import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const AboutPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, TechCorp',
      quote: 'Al Ajban helped us streamline our recruitment process, delivering top talent for our critical projects. Highly recommend!',
      image: '/testimonials/testimonial1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'HR Manager, BuildWell',
      quote: 'Professional, reliable, and trustworthy. Al Ajban has been a key partner in providing skilled manpower for our construction projects.',
      image: '/testimonials/testimonial2.jpg',
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'COO, HealthCareCo',
      quote: 'Al Ajban understands our industry inside out. They’ve been a fantastic resource for our hospital staffing needs.',
      image: '/testimonials/testimonial3.jpg',
    },
  ];

  const companyLogos = [
    '/logos/company1.png',
    '/logos/company2.png',
    '/logos/company3.png',
    '/logos/company4.png',
    '/logos/company5.png',
  ];

  return (
    <section className="bg-white py-24">
      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          At Al Ajban, we pride ourselves on providing top-tier services across multiple industries. Our team specializes in delivering high-quality manpower solutions, recruitment services, and business support for companies across the Middle East. With years of experience, we are committed to helping our clients achieve success.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Integrity</h3>
          <p className="text-gray-300">
            We uphold the highest standards of integrity in all our actions. Building trust through transparency and reliability.
          </p>
        </div>
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Excellence</h3>
          <p className="text-gray-300">
            We strive for excellence in every aspect of our business. Constantly improving and innovating for the best results.
          </p>
        </div>
        <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-bold text-orange-500 mb-4">Customer Focus</h3>
          <p className="text-gray-300">
            Our customers are at the heart of everything we do. We work closely with you to deliver tailored solutions that fit your needs.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <FaQuoteLeft className="text-orange-500 mb-4" size={24} />
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Trusted by Leading Companies</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companyLogos.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Company Logo ${index + 1}`}
                width={150}
                height={80}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-orange-500 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Partner with Us Today</h2>
          <p className="text-lg text-white mb-8">Let us help you achieve success in your industry. Get in touch with our team today to learn more about how we can assist you.</p>
          <a
            href="/contact"
            className="bg-white text-orange-500 py-3 px-6 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
