import React from "react";
import data from "../assets/data.json";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const { certifications } = data;

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
  id="certifications"
  className="flex flex-col items-center justify-center px-4 py-4 sm:py-6 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-black transition-colors duration-500"
>
  <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-wide">
  My <span className="text-blue-600 dark:text-blue-400">Certifications</span>
</h2>


  <motion.ul
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {certifications.map((cert, i) => (
      <motion.li
        key={i}
        variants={item}
        className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-3 mb-2">
          <FaCertificate className="text-blue-600 dark:text-blue-400 text-lg" />
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {cert.name}
          </p>
        </div>
        <p className="text-sm italic text-gray-600 dark:text-gray-400">
          {cert.issuer}
        </p>
      </motion.li>
    ))}
  </motion.ul>
</section>

  );
};

export default Certifications;
