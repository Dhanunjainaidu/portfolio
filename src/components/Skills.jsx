import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import {
  FaCode,
  FaToolbox,
  FaBrain,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";
import ScrollIndicator from "../components/ScrollIndicator"; // adjust path if needed

const Skills = () => {
  const { skills } = data;

  const categories = [
    { key: "languages", label: "Languages", icon: <FaCode /> },
    { key: "developer_tools", label: "Developer Tools", icon: <FaToolbox /> },
    { key: "cs_fundamentals", label: "CS Fundamentals", icon: <FaBrain /> },
    { key: "web_development", label: "Web Development", icon: <FaLaptopCode /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
        My <span className="text-blue-600 dark:text-blue-400">Skills</span>
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ key, label, icon }, idx) => (
          <motion.div
            key={key}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="text-3xl text-blue-600 dark:text-blue-400 mb-3">
              {icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              {label}
            </h3>

            <ul className="space-y-3 w-full">
              {skills[key]?.map((skill, i) => (
                <li key={i} className="flex items-center justify-between text-sm md:text-base px-2">
                  <div className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
                    <FaCheckCircle className="text-green-500 text-sm" />
                    {skill.name}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                    {skill.level}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}


      </div>
        <ScrollIndicator target="#experience" />
    </section>
  );
};

export default Skills;
