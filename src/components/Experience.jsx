import React, { useState } from "react";
import data from "../assets/data.json";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ScrollIndicator from "../components/ScrollIndicator"; // adjust path if needed

const Experience = () => {
  const { experience } = data;
  const [openIndex, setOpenIndex] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
        My <span className="text-blue-600 dark:text-blue-400">Experience</span>
      </h2>




      <div className="space-y-6 w-full max-w-5xl">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            {/* Header */}
            <div
              className="flex justify-between items-center px-6 py-4 cursor-pointer md:cursor-default"
              onClick={() => toggleAccordion(i)}
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 tracking-wide">
                  {job.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {job.company}
                </p>
              </div>
              <div className="md:hidden text-gray-600 dark:text-gray-300">
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              <span className="hidden md:block text-sm text-gray-500 dark:text-gray-400">
                {job.duration}
              </span>
            </div>

            <AnimatePresence>
              {(openIndex === i || typeof window !== "undefined" && window.innerWidth >= 768) && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-5"
                >
                  <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3 md:hidden">
                    {job.duration}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc list-inside text-sm text-gray-800 dark:text-gray-200 space-y-1">
                    {job.responsibilities.map((task, j) => (
                      <li key={j}>{task}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <ScrollIndicator target="#projects" />

    </section>
  );
};

export default Experience;
