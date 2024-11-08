// src/components/MySkills.tsx

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaJs,
  FaPhp,
} from "react-icons/fa"; // Mengimpor ikon dari React Icons
import {
  SiFlutter,
  SiDart,
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
} from "react-icons/si"; // Mengimpor ikon lainnya

const MySkills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="h-6 w-6 text-orange-600" />,
    },
    {
      name: "CSS",
      icon: <FaCss3 className="h-6 w-6 text-blue-400" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="h-6 w-6 text-yellow-500" />,
    },
    {
      name: "PHP",
      icon: <FaPhp className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Dart",
      icon: <SiDart className="h-6 w-6 text-light-blue-600" />,
    },
    {
      name: "React",
      icon: <FaReact className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-6 w-6 text-black" />,
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs className="h-6 w-6 text-green-600" />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel className="h-6 w-6 text-red-600" />,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="h-6 w-6 text-blue-400" />,
    },
    {
      name: "React Native",
      icon: <FaReact className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="h-6 w-6 text-green-600" />,
    },
  ];

  return (
    <div className="max-w-4xl w-full text-left mt-10 p-4 rounded-lg">
      <h2 className="text-4xl font-bold mb-4 text-white">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {" "}
        {/* Menggunakan grid responsif */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-700 p-2 rounded-md shadow-md hover:scale-105 transition-transform"
          >
            {skill.icon}
            <span className="mt-1 text-white text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
