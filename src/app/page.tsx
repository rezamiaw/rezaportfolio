// src/app/page.tsx atau src/pages/index.tsx

import React from "react";
import CardProfile from "./components/CardProfile"; // Sesuaikan dengan path yang benar
import WorkExperience from "./components/WorkExperience"; // Sesuaikan dengan path yang benar
import Projects from "./components/Projects"; // Sesuaikan dengan path yang benar

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start text-white p-4">
      <CardProfile />
      <WorkExperience />
      <Projects />
    </main>
  );
};

export default Home;
