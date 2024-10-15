/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'ar'], // 'en' for English, 'ar' for Arabic
        defaultLocale: 'en', // default language
        localeDetection: false, // turn off automatic locale detection
      },
};

export default nextConfig;
