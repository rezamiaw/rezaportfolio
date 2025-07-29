"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full py-6 mt-10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 md:mb-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              © {currentYear} Reza. All rights reserved.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex space-x-4"
          >
            {[
              { href: "https://github.com/rezamiaw", label: "GitHub" },
              { href: "https://www.linkedin.com/in/rezada/", label: "LinkedIn" },
              { href: "mailto:rezadwiandrianto@gmail.com", label: "Contact" },
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                  color: "var(--foreground)",
                }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
