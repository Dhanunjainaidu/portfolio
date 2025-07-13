import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import ScrollIndicator from "./ScrollIndicator";

const AboutMe = () => {
  const { education, personal_info } = data;

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black transition-colors duration-500 relative"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </h2>

      {/* Introduction */}
      <div className="max-w-3xl text-center text-lg text-gray-700 dark:text-gray-300 mb-16 px-4">
       <p>
  Hi, I’m <strong>{personal_info.name}</strong>, a recent graduate from the{" "}
  <span className="text-blue-600 dark:text-blue-400 font-semibold">National Institute of Technology, Agartala</span>, 
  with a Bachelor's degree in <span className="italic">Electronics and Communication Engineering</span>. 
  I'm passionate about <strong>full stack development</strong>, <strong>problem solving</strong>, and building 
  <strong> modern, scalable applications</strong> that make a meaningful impact.
</p>

      </div>

      {/* Education Timeline */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400 dark:bg-blue-600"></div>

        <div className="flex flex-col space-y-12">
          {education.map((edu, i) => (
           <motion.div
  key={i}
  className={`group relative w-full md:w-1/2 px-6 py-4 ${
    i % 2 === 0 ? "md:ml-auto text-left" : "md:mr-auto text-right"
  }`}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.2, duration: 0.5 }}
  viewport={{ once: true }}
>
  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-5 py-4 border-l-4 border-blue-500 dark:border-blue-400 relative">
    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2 mb-1">
      <FaGraduationCap /> {edu.degree}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{edu.duration}</p>
    <p className="text-xs text-green-600 dark:text-green-400 mt-1">GPA: {edu.gpa}</p>

    {/* Hover Popup */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute top-2 -right-4 z-20 hidden group-hover:flex bg-blue-600 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg pointer-events-none"
    >
      Achieved GPA of {edu.gpa}
    </motion.div>
  </div>
</motion.div>

          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator target="#skills"/>
      </div>
    </section>
  );
};

export default AboutMe;
