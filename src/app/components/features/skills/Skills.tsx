"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
} from "react-icons/si";
import { motion } from "framer-motion";
import { AnimatedContainer } from "../../common";

type SkillType = {
  name: string;
  icon: React.ReactNode;
};

const SkillItem: React.FC<SkillType & { index: number }> = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotateY: 180 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{
      delay: index * 0.1,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 12,
    }}
    whileHover={{
      scale: 1.1,
      rotateY: 180,
      transition: { duration: 0.3 }
    }}
    className="flex flex-col items-center bg-muted p-2 rounded-md shadow-md hover:scale-105 transition-transform border border-border cursor-pointer"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      {icon}
    </motion.div>
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="mt-1 text-foreground text-sm"
    >
      {name}
    </motion.span>
  </motion.div>
);

const Skills: React.FC = () => {
  const skills: SkillType[] = [
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
      icon: <SiDart className="h-6 w-6 text-blue-400" />,
    },
    {
      name: "React",
      icon: <FaReact className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-6 w-6 text-foreground" />,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatedContainer delay={0.2} className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl font-bold mb-4 text-foreground"
      >
        My Skills
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} index={index} />
        ))}
      </motion.div>
    </AnimatedContainer>
  );
};

export default Skills;
