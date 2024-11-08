// src/components/CardProfile.tsx

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Mengimpor ikon dari React Icons
import { CiMapPin } from "react-icons/ci"; // Mengimpor ikon dari React Icons

const CardProfile = () => {
  return (
    <div className="max-w-4xl w-full text-left mt-10 border border-white rounded-lg p-6">
      <h1 className="text-4xl font-bold mb-2">Reza Dwi Andrianto</h1>
      <p className="text-xl mb-2 flex items-center">
        <CiMapPin className="h-5 w-5 mr-2 text-white" />
        Bandung, West Java
      </p>
      <p className="text-lg">
        Recent graduate with a Bachelor's degree in Informatics, with 4 months
        of experience as a front-end developer. Experienced in mobile and web
        application development, using programming languages such as HTML5, CSS,
        ReactJS, NextJS, and Flutter. My education has provided me with a strong
        understanding of technology.
      </p>

      {/* Ikon Sosial Media di dalam border */}
      <div className="flex justify-end space-x-4 mt-4">
        <a
          href="https://github.com/rezamiaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6 w-6 text-white hover:text-gray-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/rezada"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6 text-white hover:text-gray-400" />
        </a>
        <a
          href="https://www.instagram.com/rezamiaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-6 w-6 text-white hover:text-gray-400" />
        </a>
      </div>
    </div>
  );
};

export default CardProfile;
