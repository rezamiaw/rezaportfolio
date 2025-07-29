"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    if (theme === "system") {
      return resolvedTheme === "dark" ? "🌙" : "☀️";
    }
    return theme === "dark" ? "🌙" : "☀️";
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200 text-foreground"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} mode`}
    >
      <span className="text-lg">{getIcon()}</span>
    </button>
  );
};

export default ThemeToggle; 