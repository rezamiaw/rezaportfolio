"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import { motion } from "framer-motion";
import { AnimatedContainer } from "../../common";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, ariaLabel }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {icon}
  </motion.a>
);

const CardProfile: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      href: "https://github.com/rezamiaw",
      icon: <FaGithub className="h-6 w-6 text-foreground hover:text-muted-foreground transition-colors" />,
      ariaLabel: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/rezada",
      icon: <FaLinkedin className="h-6 w-6 text-foreground hover:text-muted-foreground transition-colors" />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      href: "https://www.instagram.com/rezamiaw",
      icon: <FaInstagram className="h-6 w-6 text-foreground hover:text-muted-foreground transition-colors" />,
      ariaLabel: "Instagram Profile",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatedContainer delay={0} className="max-w-4xl w-full text-left p-6 rounded-lg bg-card border border-border">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold mb-2 text-card-foreground"
        >
          Reza Dwi Andrianto
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl mb-2 flex items-center text-card-foreground"
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <CiMapPin className="h-5 w-5 mr-2 text-foreground" />
          </motion.span>
          Purwokerto, Central Java
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg text-card-foreground"
        >
          Recent graduate with a Bachelors degree in Informatics and 4 months of
          experience as a front-end developer. Seeking a challenging role to
          leverage my skills in mobile and web application development while
          contributing to innovative projects.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex justify-end space-x-4 mt-4"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <SocialLink
                href={link.href}
                icon={link.icon}
                ariaLabel={link.ariaLabel}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatedContainer>
  );
};

export default CardProfile;
