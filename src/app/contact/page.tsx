"use client"
import { FaFacebook, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center justify-items-center text-center min-h-screen px-6 py-10">
      <div className="max-w-2xl w-full p-8 bg-white shadow-sm rounded-3xl dark:bg-gray-800 ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Contact Us
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
          Stay connected with the Tri-Chandra Research Group through our social platforms.
        </p>
        
        <div className="grid gap-6">
          <a 
            href="https://www.facebook.com/TriChandraResearchGroup" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center p-4 rounded-xl transition-all hover:bg-blue-50 dark:hover:bg-blue-900/30"
          >
            <FaFacebook className="w-6 h-6 text-blue-600" />
            <span className="ml-4 text-lg font-medium text-gray-700 dark:text-gray-200">Facebook</span>
          </a>
          
          <a 
            href="https://www.youtube.com/@Tri-ChandraResearchGroup" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center p-4 rounded-xl transition-all hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <FaYoutube className="w-6 h-6 text-red-600" />
            <span className="ml-4 text-lg font-medium text-gray-700 dark:text-gray-200">YouTube</span>
          </a>
          
          <a 
            href="mailto:trichandraresearchgroup@gmail.com" 
            className="flex items-center p-4 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-gray-700/30"
          >
            <FaEnvelope className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <span className="ml-4 text-lg font-medium text-gray-700 dark:text-gray-200">Gmail</span>
          </a>
          
          <a 
            href="https://whatsapp.com/channel/0029VafGv4e5K3zbbFNfl42s" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center p-4 rounded-xl transition-all hover:bg-green-50 dark:hover:bg-green-900/30"
          >
            <FaWhatsapp className="w-6 h-6 text-green-600" />
            <span className="ml-4 text-lg font-medium text-gray-700 dark:text-gray-200">WhatsApp Channel</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;