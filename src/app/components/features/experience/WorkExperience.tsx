"use client";

import React from "react";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimatedContainer } from "../../common";

type ExperienceProps = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

const ExperienceItem: React.FC<ExperienceProps & { index: number }> = ({
  title,
  company,
  period,
  responsibilities,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      delay: index * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 12,
    }}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }}
    className="mb-4 transition-transform transform hover:scale-105 hover:bg-muted rounded-lg p-4 border border-border"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 + 0.2 }}
      className="flex items-center mb-2"
    >
      <motion.div
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <FaCode className="h-6 w-6 text-foreground mr-2" />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="text-2xl font-semibold text-foreground"
      >
        {title}
      </motion.h3>
    </motion.div>
    
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 + 0.4 }}
      className="text-lg text-foreground"
    >
      {company}
    </motion.p>
    
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 + 0.5 }}
      className="text-muted-foreground"
    >
      {period}
    </motion.p>
    
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.2 + 0.6 }}
      className="list-disc ml-5 mt-2 text-foreground"
    >
      {responsibilities.map((responsibility, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.2 + 0.7 + idx * 0.1,
            duration: 0.4,
          }}
        >
          {responsibility}
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const WorkExperience: React.FC = () => {
  const experiences: ExperienceProps[] = [
    {
      title: "Staff Data Management",
      company: "Telkom Akses",
      period: "Mei 2025 - Present",
      responsibilities: [
        
      ],
    },
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
    <AnimatedContainer delay={0.4} className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-4xl font-bold mb-4 text-foreground"
      >
        Work Experience
      </motion.h2>
      
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          index={index}
          title={experience.title}
          company={experience.company}
          period={experience.period}
          responsibilities={experience.responsibilities}
        />
      ))}
    </AnimatedContainer>
  );
};

export default WorkExperience;
