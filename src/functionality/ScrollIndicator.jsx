import React, { useEffect, useState } from "react";

export default function Skills() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "testimonals", label: "Testimonials" },
    { id: "footer", label: "Footer" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-50">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          data-section={section.label}
          className={`relative w-4 h-4 rounded-full transition-transform duration-300 group ${
            activeSection === section.id ? "bg-lime-400 scale-125" : "bg-black"
          }`}
        >
          <div className="absolute w-2.5 h-2.5 rounded-full bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform"></div>
          <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-lime-400 text-black text-xs px-3 py-1 rounded shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {section.label}
          </span>
        </a>
      ))}
    </div>
  );
}
