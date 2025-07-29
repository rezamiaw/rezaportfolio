import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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
import type { PersonalInfo, SocialLink, Skill, Experience, Project } from '../types';

// Personal Information
export const PERSONAL_INFO: PersonalInfo = {
  name: "Reza Dwi Andrianto",
  title: "Frontend Developer",
  description: "Recent graduate with a Bachelors degree in Informatics and 4 months of experience as a front-end developer. Seeking a challenging role to leverage my skills in mobile and web application development while contributing to innovative projects.",
  location: "Purwokerto, Central Java",
  email: "rezadwiandrianto@gmail.com",
  resume: "/Resume.pdf",
};

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/rezamiaw",
    icon: FaGithub,
    ariaLabel: "GitHub Profile",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rezada",
    icon: FaLinkedin,
    ariaLabel: "LinkedIn Profile", 
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/rezamiaw",
    icon: FaInstagram,
    ariaLabel: "Instagram Profile",
    label: "Instagram",
  },
];

// Skills Data
export const SKILLS: Skill[] = [
  {
    name: "HTML",
    icon: FaHtml5,
    category: "frontend",
    level: "advanced",
  },
  {
    name: "CSS",
    icon: FaCss3,
    category: "frontend",
    level: "advanced",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    category: "frontend",
    level: "intermediate",
  },
  {
    name: "PHP",
    icon: FaPhp,
    category: "backend",
    level: "intermediate",
  },
  {
    name: "Dart",
    icon: SiDart,
    category: "mobile",
    level: "intermediate",
  },
  {
    name: "React",
    icon: FaReact,
    category: "frontend",
    level: "intermediate",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
    level: "intermediate",
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
    category: "frontend",
    level: "beginner",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    category: "backend",
    level: "intermediate",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    category: "mobile",
    level: "intermediate",
  },
  {
    name: "React Native",
    icon: FaReact,
    category: "mobile",
    level: "beginner",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "backend",
    level: "beginner",
  },
];

// Work Experience
export const WORK_EXPERIENCE: Experience[] = [
  {
    title: "Staff Data Management",
    company: "Telkom Akses",
    period: "Mei 2025 - Present",
    location: "Jakarta, Indonesia",
    responsibilities: [
      "Developing a company dashboard using ReactJS, including adding notification settings, revamping the Task Detail design, improving Task Detail functionality, making the Kanban board responsive, and implementing the Task popup function.",
      "Developing a company profile website using NextJS, including adding a responsive design to the homepage.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Gikslab Indonesia",
    period: "July 2023 - September 2023",
    location: "Remote",
    responsibilities: [
      "Developing a company dashboard using ReactJS, including adding notification settings, revamping the Task Detail design, improving Task Detail functionality, making the Kanban board responsive, and implementing the Task popup function.",
      "Developing a company profile website using NextJS, including adding a responsive design to the homepage.",
    ],
    technologies: ["React", "Next.js", "JavaScript", "CSS"],
  },
  {
    title: "Researcher Intern",
    company: "PT Telkom Indonesia (Persero)",
    period: "Dec 2019 - May 2019",
    location: "Bandung, Indonesia",
    responsibilities: [
      "Creating an automated script (bot) using UiPath.",
      "Exploring RPA (Robotic Process Automation) materials.",
    ],
    technologies: ["UiPath", "RPA"],
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    id: "aksun-app",
    title: "Learning App Aksun",
    description: "Aksun is an innovative learning platform designed to make it easier for users to learn reading the Sundanese script.",
    link: "https://github.com/rezamiaw/aplikasi_aksun",
    github: "https://github.com/rezamiaw/aplikasi_aksun",
    image: "/images/aksun.png",
    skills: ["Dart", "C++", "Swift", "HTML"],
    status: "completed",
  },
];

// Navigation Items
export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// Theme Configuration
export const THEME_CONFIG = {
  defaultTheme: 'system' as const,
  enableSystemTheme: true,
  themes: ['light', 'dark', 'system'] as const,
};

// Animation Configuration
export const ANIMATION_CONFIG = {
  defaultDuration: 0.6,
  defaultDelay: 0,
  defaultEasing: "easeOut",
  staggerDelay: 0.1,
  lazyLoadThreshold: 0.1,
  lazyLoadRootMargin: "100px",
};

// SEO Configuration
export const SEO_CONFIG = {
  siteName: "Reza Dwi Andrianto - Portfolio",
  siteDescription: "Frontend Developer portfolio showcasing skills in React, Next.js, and modern web development.",
  siteUrl: "https://your-domain.com", // Update with actual domain
  defaultImage: "/images/og-image.png", // Add OG image
  twitterHandle: "@yourusername", // Update with actual Twitter handle
}; 