'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroImg from '../../../public/HeroImg1.png';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const HeroSection = () => {
    const { t } = useTranslation(); // Initialize translation
    const [displayedText, setDisplayedText] = useState('');
    const [imageVisible, setImageVisible] = useState(false); // New state for image animation
    const fullText = t('hero.description'); // Get translated description text

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === fullText.length) {
                clearInterval(typingInterval);
            }
        }, 30); // Adjust typing speed here (in milliseconds)

        // Delay the image animation slightly after the text starts appearing
        setTimeout(() => {
            setImageVisible(true);
        }, 50); // Image animation delay (100ms after page load)

        return () => clearInterval(typingInterval);
    }, [fullText]); // Run the effect when fullText changes (to support language switching)

    return (
        <section className="bg-white py-16 sm:py-24 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Left Side: Text */}
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6">
                        AL-AJBAN <br /> 
                        <span className="block mt-2 text-5xl text-gray-900 sm:text-6xl">
                            {t('hero.title')} {/* Translated hero title */}
                        </span>
                    </h1>
                    {/* Reserve space for the text to prevent layout shift */}
                    <div className="min-h-[110px]">
                        <p className="text-base sm:text-lg text-gray-900 mb-6">{displayedText}</p>
                    </div>
                    <Link href="/recruitment" className="bg-orange-500 text-gray-900 font-bold py-2 sm:py-3 px-4 sm:px-6 hover:bg-orange-400 sm:text-base">
                        {t('hero.button')} {/* Translated button text */}
                    </Link>
                </div>

                {/* Right Side: Hero Image with Sliding/Drop Animation */}
                <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                    <div className={`relative group transform transition-transform duration-1000 ease-out 
                        ${imageVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                        <Image 
                            src={HeroImg} 
                            alt="Hero Graphic"
                            width={350} 
                            height={350} 
                            className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 mx-auto rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        {/* Optional shadow/overlay effect */}
                        <div className="absolute inset-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
