"use client";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { LazyLoad, CardProfileSkeleton, SkillsSkeleton, WorkExperienceSkeleton, ProjectsSkeleton } from "./components/common";

// Lazy load components with new paths
const CardProfile = lazy(() => import("./components/features/profile/CardProfile"));
const Skills = lazy(() => import("./components/features/skills/Skills"));
const WorkExperience = lazy(() => import("./components/features/experience/WorkExperience"));
const Projects = lazy(() => import("./components/features/projects/Projects"));

const Home = () => {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.main
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col items-center justify-start text-foreground p-4 bg-background"
    >
      <motion.div
        variants={containerVariants}
        className="w-full flex flex-col items-center space-y-10"
      >
        {/* CardProfile - Load immediately since it's above the fold */}
        <motion.div variants={containerVariants}>
          <Suspense fallback={<CardProfileSkeleton />}>
            <CardProfile />
          </Suspense>
        </motion.div>
        
        {/* Skills - Lazy load when in viewport */}
        <motion.div variants={containerVariants}>
          <LazyLoad
            threshold={0.1}
            rootMargin="100px"
            fallback={<SkillsSkeleton />}
          >
            <Suspense fallback={<SkillsSkeleton />}>
              <Skills />
            </Suspense>
          </LazyLoad>
        </motion.div>
        
        {/* WorkExperience - Lazy load when in viewport */}
        <motion.div variants={containerVariants}>
          <LazyLoad
            threshold={0.1}
            rootMargin="100px"
            fallback={<WorkExperienceSkeleton />}
          >
            <Suspense fallback={<WorkExperienceSkeleton />}>
              <WorkExperience />
            </Suspense>
          </LazyLoad>
        </motion.div>
        
        {/* Projects - Lazy load when in viewport */}
        <motion.div variants={containerVariants}>
          <LazyLoad
            threshold={0.1}
            rootMargin="100px"
            fallback={<ProjectsSkeleton />}
          >
            <Suspense fallback={<ProjectsSkeleton />}>
              <Projects />
            </Suspense>
          </LazyLoad>
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Home;
