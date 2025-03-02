import { AcademicCapIcon, LightBulbIcon, UsersIcon, StarIcon } from '@heroicons/react/24/solid';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 text-center ">
      <div className="max-w-4xl p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <p className="mt-3 text-base text-gray-700 leading-relaxed">
          The Tri-Chandra Research Group advances scientific knowledge and fosters innovation through collaborative research efforts. Our interdisciplinary team addresses complex challenges, contributing to the global scientific community.
        </p>
        
        <div className="mt-8 space-y-6 text-left">
          <div className="p-5 bg-gray-50 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
            <p className="mt-1.5 text-gray-600 leading-relaxed text-sm">
              We conduct high-quality research to drive significant advancements in science and technology, providing a platform for collaboration and knowledge sharing.
            </p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
            <p className="mt-1.5 text-gray-600 leading-relaxed text-sm">
              We envision a world where scientific research and innovation lead societal progress. Our goal is to be a recognized leader in scientific contributions.
            </p>
          </div>
          
          <div className="p-5 bg-gray-50 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">Our Values</h2>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center space-x-2.5">
                <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 text-sm font-medium">Integrity: Upholding the highest standards in research.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <UsersIcon className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 text-sm font-medium">Collaboration: Leveraging teamwork to achieve goals.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <LightBulbIcon className="w-6 h-6 text-yellow-500" />
                <span className="text-gray-700 text-sm font-medium">Innovation: Encouraging creativity and new ideas.</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <StarIcon className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700 text-sm font-medium">Excellence: Striving for the highest research standards.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
