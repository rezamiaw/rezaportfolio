// src/components/WorkExperience.tsx

import React from "react";
import { FaCode } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <div className="max-w-4xl w-full text-left mt-4 rounded-lg p-6">
      <h2 className="text-4xl font-bold mb-4">Work Experience</h2>

      {/* Pengalaman Pertama */}
      <div className="mb-4 transition-transform transform hover:scale-105 hover:bg-gray-700 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <FaCode className="h-6 w-6 text-white mr-2" />
          <h3 className="text-2xl font-semibold text-white">
            Front-End Developer
          </h3>
        </div>
        <p className="text-lg">Company Name</p>
        <p className="text-gray-400">January 2023 - Present</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Developed user-friendly web applications using ReactJS.</li>
          <li>
            Collaborated with designers and backend developers to implement
            features.
          </li>
          <li>Conducted code reviews to maintain code quality.</li>
        </ul>
      </div>

      {/* Pengalaman Kedua */}
      <div className="mb-0 transition-transform transform hover:scale-105 hover:bg-gray-700 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <FaCode className="h-6 w-6 text-white mr-2" />
          <h3 className="text-2xl font-semibold text-white">
            Front-End Developer
          </h3>
        </div>
        <p className="text-lg">Company Name</p>
        <p className="text-gray-400">June 2022 - December 2022</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            Assisted in developing web applications using HTML, CSS, and
            JavaScript.
          </li>
          <li>
            Participated in team meetings to discuss project requirements.
          </li>
          <li>Learned best practices in coding and web development.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
