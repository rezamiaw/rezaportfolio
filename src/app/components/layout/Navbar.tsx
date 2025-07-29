"use client";

import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="bg-transparent p-4 w-full top-0 z-10 flex justify-center"
    >
      <motion.div className="w-full text-xl max-w-5xl flex flex-col md:flex-row md:justify-between items-start md:items-center md:px-0 px-4">
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-bold text-foreground mb-4 md:mb-0"
        >
          <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors duration-200">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Reza Dwi Andrianto
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full md:w-auto flex items-center space-x-4"
        >
          <motion.ul className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
            <motion.li
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors duration-200 relative overflow-hidden"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Resume
                </motion.span>
              </motion.a>
            </motion.li>
          </motion.ul>
          
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          >
            <ThemeToggle />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
