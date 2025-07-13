import React, { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  {id:"about",label:"AboutMe"},
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
];

const ScrollSpyNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollY + window.innerHeight / 3) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/3 z-50 flex flex-col items-start gap-5">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id;

        return (
          <a
            key={id}
            href={`#${id}`}
            className={`group flex items-center overflow-hidden transition-all duration-300
              rounded-full bg-gray-300 dark:bg-gray-700
              ${isActive ? "bg-blue-600 dark:bg-blue-500 scale-110" : ""}
              hover:w-40 w-6 h-6 pl-2 pr-4
              hover:bg-blue-600 dark:hover:bg-blue-500
              hover:shadow-lg`}
          >
            <span
              className={`w-3 h-3 rounded-full ${
                isActive ? "bg-white" : "bg-gray-500"
              } transition`}
            />
            <span
              className="ml-3 whitespace-nowrap text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300"
            >
              {label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default ScrollSpyNav;
