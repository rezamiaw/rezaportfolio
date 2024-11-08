// src/components/MyProjects.tsx

import React from "react";

const MyProjects = () => {
  const projects = [
    {
      title: "Build a Spotify Connected App",
      description:
        "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      link: "https://example.com/project-one",
      image: "/images/aksun.png",
      skills: ["React", "Node", "Express", "Styled Components"],
    },
    {
      title: "Spotify Profile",
      description:
        "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      link: "https://example.com/project-two",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar yang sesuai
      skills: ["React", "Node", "Express", "Styled Components"],
    },
  ];

  return (
    <div className="max-w-4xl w-full text-left mt-2 p-6">
      <h2 className="text-4xl font-bold mb-4 text-white">My Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-4 transition-transform transform hover:scale-105 hover:bg-gray-700 rounded-lg p-4"
        >
          <div className="flex items-start">
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-24 rounded-md mr-4 object-cover"
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="mt-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md mr-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
