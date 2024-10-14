'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setErrorMessage('');
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send email');
      }
    } catch (error) {
      setErrorMessage('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Contact Us</h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-12 space-y-12 md:space-y-0">
          {/* Contact Form on the Left */}
          <div className="w-full md:w-1/2 bg-gray-900 p-10 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>

            {isSubmitted ? (
              <p className="text-lg text-green-500">Your message has been sent successfully!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                <button
                  type="submit"
                  className={`w-full bg-orange-500 text-white py-3 px-4 rounded-lg transition-transform duration-300 hover:scale-105 ${
                    isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-orange-600'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Content Section on the Right */}
          <div className="w-full md:w-1/2">
            {/* Content Card */}
            <div className="bg-white text-black p-10 border rounded-lg shadow-lg text-left">
              <h3 className="text-3xl font-bold mb-4">Let’s Work Together</h3>
              <p className="text-lg text-black mb-4">
                Whether you have a question or just want to talk about how we can collaborate, we're here to listen.
              </p>
              <p className="text-lg text-black mb-8">
                Our team is ready to provide you with the best solutions tailored to your needs. Get in touch with us today!
              </p>
              
              {/* Horizontal Buttons */}
              <div className="flex justify-center md:justify-start space-x-4">
                {/* WhatsApp Button */}
                <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center text-white bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition-transform duration-300 hover:scale-105">
                    <FaWhatsapp size={24} className="mr-2" />
                    <span>WhatsApp Us</span>
                  </div>
                </Link>

                {/* Email Button */}
                <Link href="mailto:info@alajban.com" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center text-white bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition-transform duration-300 hover:scale-105">
                    <FaEnvelope size={24} className="mr-2" />
                    <span>Email Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
