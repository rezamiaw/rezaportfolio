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
            Frontend Developer Intern
          </h3>
        </div>
        <p className="text-lg">Gikslab Indonesia</p>
        <p className="text-gray-400">July 2023 - September 2023</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            Developing a company dashboard using ReactJS, including adding
            notification settings, revamping the Task Detail design, improving
            Task Detail functionality, making the Kanban board responsive, and
            implementing the Task popup function.
          </li>
          <li>
            Developing a company profile website using NextJS, including adding
            a responsive design to the homepage.
          </li>
        </ul>
      </div>

      {/* Pengalaman Kedua */}
      <div className="mb-0 transition-transform transform hover:scale-105 hover:bg-gray-700 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <FaCode className="h-6 w-6 text-white mr-2" />
          <h3 className="text-2xl font-semibold text-white">
            Researcher Intern
          </h3>
        </div>
        <p className="text-lg">PT Telkom Indonesia (Persero)</p>
        <p className="text-gray-400">Dec 2019 - May 2019</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Creating an automated script (bot) using UiPath.</li>
          <li>Exploring RPA (Robotic Process Automation) materials.</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
