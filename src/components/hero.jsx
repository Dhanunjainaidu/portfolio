import React from "react";
import { motion } from "framer-motion";
import data from "../assets/data.json";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import ScrollIndicator from "../components/ScrollIndicator"; // adjust path if needed

const Hero = () => {
  const { personal_info } = data;
  const { darkMode, setDarkMode } = useTheme();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Theme Toggle */}
      <button
        className="absolute top-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full shadow-lg hover:scale-110 transition"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Character Illustration */}
     {/* Character Illustration */}
<motion.img
  src="/profile.jpg"
  alt="Character Illustration"
  className="w-40 sm:w-48 md:w-60 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 object-cover mb-6"
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
/>

{/* Hero Info */}
<motion.div
  className="text-center max-w-xl z-10"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
    {personal_info.name}
  </h1>

  <p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
    {personal_info.role || "Full Stack Developer"}
  </p>

  <p className="text-md text-gray-500 dark:text-gray-400 mt-1">
    {personal_info.location}
  </p>

  <div className="flex justify-center gap-4 mt-4">
    <a
      href={personal_info.github}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-gray-600 dark:text-white hover:text-blue-500 transition"
    >
      <FaGithub />
    </a>
    <a
      href={personal_info.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl text-gray-600 dark:text-white hover:text-blue-500 transition"
    >
      <FaLinkedin />
    </a>
  </div>

  <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="/resume.pdf"
      download
      className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Download Resume
    </a>
    <a
      href="#projects"
      className="px-5 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-gray-700 transition"
    >
      View Projects
    </a>
  </div>
</motion.div>


  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
  <ScrollIndicator target="#about" />
</div>


    </section>
    
  );
};

export default Hero;
