import Image from "next/image";
import IMG from '../../../public/Hero2.png'

export default function WeAreSection() {
    return (
      <div className="bg-white py-16 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
              We Provide Best Recruitment Services For Middle Eastern Companies From Pakistan
            </h2>
            <p className="text-gray-600 text-lg">
              We are a leading Recruitment Agency based in Pakistan that provides top-notch recruitment services to Middle Eastern companies. Our experienced recruiters can help you in recruiting skilled and experienced professionals for various industries smoothly and efficiently.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-3 text-gray-700 text-lg">Knowledge of the Saudi Job Market</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-3 text-gray-700 text-lg">Streamlined recruitment process</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-3 text-gray-700 text-lg">Premium customer experience</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-3 text-gray-700 text-lg">Vast network of candidates</span>
              </li>
            </ul>
            <div>
              <a
                href="/recruitment"
                className="inline-block bg-orange-500 text-white px-6 py-3 text-lg font-medium rounded-md hover:bg-orange-600"
              >
                Explore Opportunities !
              </a>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src={IMG} 
              alt="Recruitment Agency"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  }
  