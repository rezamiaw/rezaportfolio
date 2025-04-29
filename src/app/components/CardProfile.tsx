import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

const CardProfile: React.FC = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      href: "https://github.com/rezamiaw",
      icon: <FaGithub className="h-6 w-6 text-white hover:text-gray-400" />,
      ariaLabel: "GitHub Profile",
    },
    {
      href: "https://www.linkedin.com/in/rezada",
      icon: <FaLinkedin className="h-6 w-6 text-white hover:text-gray-400" />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      href: "https://www.instagram.com/rezamiaw",
      icon: <FaInstagram className="h-6 w-6 text-white hover:text-gray-400" />,
      ariaLabel: "Instagram Profile",
    },
  ];

  return (
    <div className="max-w-4xl w-full text-left mt-10 border border-white rounded-lg p-6">
      <h1 className="text-4xl font-bold mb-2">Reza Dwi Andrianto</h1>
      <p className="text-xl mb-2 flex items-center">
        <CiMapPin className="h-5 w-5 mr-2 text-white" />
        Purwokerto, Central Java
      </p>
      <p className="text-lg">
        Recent graduate with a Bachelors degree in Informatics and 4 months of
        experience as a front-end developer. Seeking a challenging role to
        leverage my skills in mobile and web application development while
        contributing to innovative projects.
      </p>

      <div className="flex justify-end space-x-4 mt-4">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            href={link.href}
            icon={link.icon}
            ariaLabel={link.ariaLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default CardProfile;
