import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react"; // Import icons
import clickSound from "/assets/audio/navmusic.wav"; // Import sound file


gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (activeSection) {
      const audio = new Audio(clickSound);
      audio.play();
    }
  }, [activeSection]); // Runs when activeSection changes

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "testimonials", label: "Testimonials" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Let Us Talk" },
    { id: "skills", label: "Work" },
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
    <header className="fixed backdrop-blur-sm z-50 w-full bg-transparent px-6 py-4 md:border-b-2 border-gray-700 flex justify-between items-center">
      {/* Left - Year with Border Animation */}
      <div className="text-start">
        <span className="inline-block px-5 py-3 border-[#424242] text-gray-500 text-xs relative overflow-hidden group">
          {currentYear}-{currentYear + 1}
          <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
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
              activeSection === section.id
                ? "text-white font-['robot'] tracking-wider shadow-inner shadow-slate-400"
                : "text-gray-500"
            }`}
          >
            {section.label}

            {/* Camera Shutter Borders */}
            <span
              className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform ${
                activeSection === section.id ? "scale-x-100 " : "scale-x-0  "
              } origin-right transition-transform duration-300`}
            ></span>
            <span
              className={`absolute top-0 right-0 w-[2px] h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform ${
                activeSection === section.id ? "scale-y-100" : "scale-y-0"
              } origin-bottom transition-transform duration-300`}
            ></span>
            <span
              className={`absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform ${
                activeSection === section.id ? "scale-x-100" : "scale-x-0"
              } origin-left transition-transform duration-300`}
            ></span>
            <span
              className={`absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform ${
                activeSection === section.id ? "scale-y-100" : "scale-y-0"
              } origin-top transition-transform duration-300`}
            ></span>
          </a>
        ))}
      </nav>

      {/* Right - Get in Touch Button */}
      <div className="hidden lg:block">
        <a
          href="#contact"
          className="relative text-white text-xs px-6 py-3 border-[#424242] uppercase font-bold transition-all duration-500 ease-in-out overflow-hidden group"
        >
          GET IN TOUCH
          <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex py-10 h-screen justify-center items-center z-40"
          onClick={() => setMenuOpen(false)}
          style={{
          
            fontFamily: "PermanentMarker",
          }}
        >
          <div
            className="w-50 h-60   py-10 px-5   grid grid-cols-2 gap-4 text-white text-center uppercase font-bold relative"
            onClick={(e) => e.stopPropagation()}
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="nav-item text-xs px-2  hover:text-black hover:border-red-800 hover-border-2  border-2 flex justify-center items-center hover:bg-slate-400 transition-all"
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
