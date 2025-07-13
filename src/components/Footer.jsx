import React from "react";
import data from "../assets/data.json";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { personal_info } = data;

  return (
    <footer className="w-full px-6 py-6 text-center bg-gradient-to-r from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm mb-3">
        &copy; {new Date().getFullYear()} <span className="font-semibold">{personal_info.name}</span>. All rights reserved.
      </p>

      <div className="flex justify-center items-center gap-6 text-lg">
        <a
          href={`mailto:${personal_info.email}`}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href={personal_info.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={personal_info.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
