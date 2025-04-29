import React from "react";
import { FaCode } from "react-icons/fa";

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

const ExperienceItem: React.FC<ExperienceProps> = ({
  title,
  company,
  period,
  responsibilities,
}) => (
  <div className="mb-4 transition-transform transform hover:scale-105 hover:bg-gray-700 rounded-lg p-4">
    <div className="flex items-center mb-2">
      <FaCode className="h-6 w-6 text-white mr-2" />
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-lg">{company}</p>
    <p className="text-gray-400">{period}</p>
    <ul className="list-disc ml-5 mt-2">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

const WorkExperience: React.FC = () => {
  const experiences: ExperienceProps[] = [
    {
      title: "Frontend Developer Intern",
      company: "Gikslab Indonesia",
      period: "July 2023 - September 2023",
      responsibilities: [
        "Developing a company dashboard using ReactJS, including adding notification settings, revamping the Task Detail design, improving Task Detail functionality, making the Kanban board responsive, and implementing the Task popup function.",
        "Developing a company profile website using NextJS, including adding a responsive design to the homepage.",
      ],
    },
    {
      title: "Researcher Intern",
      company: "PT Telkom Indonesia (Persero)",
      period: "Dec 2019 - May 2019",
      responsibilities: [
        "Creating an automated script (bot) using UiPath.",
        "Exploring RPA (Robotic Process Automation) materials.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl w-full text-left mt-4 rounded-lg p-6">
      <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          company={experience.company}
          period={experience.period}
          responsibilities={experience.responsibilities}
        />
      ))}
    </div>
  );
};

export default WorkExperience;
