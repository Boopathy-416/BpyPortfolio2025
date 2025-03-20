import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react"; // Import icons

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Let Us Talk" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full bg-transparent px-6 py-4 border-b-2 border-gray-700 flex justify-between items-center">
      {/* Left - Year with Border Animation */}
      <div className="text-start">
        <span className="inline-block px-5 py-3 border-[#424242] text-gray-500 text-xs relative overflow-hidden group">
          {currentYear}-{currentYear + 1}
          <span className="absolute top-0 left-0 w-full h-[2px] bg-black transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute top-0 right-0 w-[2px] h-full bg-black transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          <span className="absolute bottom-0 right-0 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute bottom-0 left-0 w-[2px] h-full bg-black transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
        </span>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden text-4xl text-gray-500 border-3 focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />} {/* Toggle between Menu & Close icons */}
      </button>

      {/* Desktop Nav Links with Camera Shutter Animation */}
      <nav className="hidden lg:flex space-x-6">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`relative text-sm font-semibold px-4 py-2 transition-colors group ${
              activeSection === section.id ? "text-white" : "text-gray-500"
            }`}
          >
            {section.label}

            {/* Camera Shutter Borders */}
            <span
              className={`absolute top-0 left-0 w-full h-[2px] bg-[#c4c1c6] transform ${
                activeSection === section.id ? "scale-x-100" : "scale-x-0"
              } origin-right transition-transform duration-300`}
            ></span>
            <span
              className={`absolute top-0 right-0 w-[2px] h-full bg-[#c4c1c6] transform ${
                activeSection === section.id ? "scale-y-100" : "scale-y-0"
              } origin-bottom transition-transform duration-300`}
            ></span>
            <span
              className={`absolute bottom-0 right-0 w-full h-[2px] bg-[#c4c1c6] transform ${
                activeSection === section.id ? "scale-x-100" : "scale-x-0"
              } origin-left transition-transform duration-300`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-[2px] h-full bg-[#c4c1c6] transform ${
                activeSection === section.id ? "scale-y-100" : "scale-y-0"
              } origin-top transition-transform duration-300`}
            ></span>
          </a>
        ))}
      </nav>

      {/* Right - Get in Touch Button */}
      <div className="hidden lg:block">
        <a
          href="#footer"
          className="relative text-xs px-6 py-3 border-[#424242] uppercase font-bold transition-all duration-500 ease-in-out overflow-hidden group"
        >
          GET IN TOUCH
          <span className="absolute top-0 left-0 w-full h-[2px] bg-black transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute top-0 right-0 w-[2px] h-full bg-black transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          <span className="absolute bottom-0 right-0 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute bottom-0 left-0 w-[2px] h-full bg-black transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex  justify-center items-center z-40"
          onClick={() => setMenuOpen(false)}
          style={{
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            fontFamily: "Permanent Marker, cursive",
          }}
        >
          <div
            className="w-full mx-5 mt-40  min-h-full py-10 px-5  border-4 border-gray-500 grid grid-cols-2 gap-4 text-white text-center uppercase font-bold relative"
            onClick={(e) => e.stopPropagation()}
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="nav-item text-xs hover:text-gray-400 border flex justify-center items-center hover:bg-slate-400 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
