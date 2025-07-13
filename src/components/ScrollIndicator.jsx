// components/ScrollIndicator.jsx
import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const ScrollIndicator = ({ target }) => {
  const scrollToTarget = () => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTarget}
      className="mt-10 animate-bounce text-blue-600 dark:text-blue-400 text-2xl"
      aria-label="Scroll to next section"
    >
      <FaAngleDoubleDown />

    </button>
  );
};

export default ScrollIndicator;
