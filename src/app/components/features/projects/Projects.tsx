"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedContainer, LazyImage } from "../../common";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectProps & { index: number }> = ({
  title,
  description,
  link,
  image,
  skills,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{
      delay: index * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 12,
    }}
    whileHover={{
      scale: 1.03,
      y: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }}
    className="mb-4 transition-transform transform hover:scale-105 hover:bg-muted rounded-lg p-4 border border-border"
  >
    <div className="flex flex-col md:flex-row items-start">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.3 }}
        className="w-full h-32 md:w-24 md:h-24 mb-4 md:mr-4 overflow-hidden rounded-md"
      >
        <LazyImage
          src={image}
          alt={title}
          className="w-full h-full object-cover cursor-pointer"
          width={96}
          height={96}
        />
      </motion.div>
      
      <div className="flex-1">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.2 }}
          className="text-2xl font-semibold text-foreground"
        >
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "var(--muted-foreground)" }}
            transition={{ duration: 0.2 }}
            className="hover:text-muted-foreground transition-colors"
          >
            {title}
          </motion.a>
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.4 }}
          className="text-muted-foreground"
        >
          {description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
          className="mt-2 flex flex-wrap"
        >
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.2 + 0.6 + skillIndex * 0.1,
                type: "spring",
                stiffness: 150,
                damping: 10,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "var(--muted)",
                transition: { duration: 0.2 }
              }}
              className="bg-accent text-accent-foreground text-sm px-2 py-1 rounded-md mr-2 mb-2 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const MyProjects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Learning App Aksun",
      description:
        "Aksun is an innovative learning platform designed to make it easier for users to learn reading the Sundanese script.",
      link: "https://github.com/rezamiaw/aplikasi_aksun",
      image: "/images/aksun.png",
      skills: ["Dart", "C++", "Swift", "HTML"],
    },
    // Add more projects here as needed
  ];

  return (
    <AnimatedContainer delay={0.6} className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-4xl font-bold mb-4 text-foreground"
      >
        My Projects
      </motion.h2>
      
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </AnimatedContainer>
  );
};

export default MyProjects;
