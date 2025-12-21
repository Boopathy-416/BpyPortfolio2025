import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "hero", icon: "public/assets/Home.svg", size: 90 },
    { id: "about", icon: "public/assets/About.svg", size: 90 },
    { id: "testimonials", icon: "public/assets/Product.svg", size: 90 },
    { id: "services", icon: "public/assets/Solid.svg", size: 90 },
    { id: "contact", icon: "public/assets/Touch.svg", size: 90 },

  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-2 backdrop-blur-sm flex justify-between items-center">
      {/* Logo */}
      <div className="logo">
        <img
          src="public/assets/BpyCreations.svg"
          alt="Bpy Creations"
          width={80}
          height={80}
        ></img>
        <span className="flex justify-center border-[#424242] text-gray-100 tracking-widest  text-xs rounded-full relative overflow-hidden group">
          {currentYear}-{currentYear + 1}
          <span className=" absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className=" absolute top-0 right-0 w-[2px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          <span className=" absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className=" absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
        </span>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden text-[#dd9716] opacity-70 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={38} /> : <Menu size={42} />}
      </button>

      {/* Desktop Planet Navigation */}
      <nav className="hidden lg:flex gap-3 items-center">
        {sections.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                width: item.size + 18,
                height: item.size + 18,
              }}
              className="flex items-center justify-center "
            >
              <div
                className="flex items-center transition-all-2s ease-in-out justify-center  
               duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.id}
                  style={{
                    width: item.size,
                    height: item.size,
                  }}
                  className={` transition-none
    ${
      activeSection === item.id
        ? "grayscale-0"
        : "grayscale brightness-75 contrast-125"
    }
  `}
                />
              </div>
            </a>
          );
        })}
      </nav>

{/* Mobile view Nav Menu */}
{menuOpen && (
  <div
    className="fixed inset-0    z-40"
    onClick={() => setMenuOpen(false)}
  >
    <div
      className="grid grid-cols-1 bg-black/70 backdrop-blur-md  p-20 h-screen justify-center items-center "
      onClick={(e) => e.stopPropagation()}
    >
      {sections.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setMenuOpen(false)}
          className="flex items-center justify-center"
        >
          <img
            src={item.icon}
            alt={item.id}
            style={{
              width: item.size,
              height: item.size,
            }}
            className={`transition-none ${
              activeSection === item.id
                ? "grayscale-0"
                : "grayscale brightness-75 contrast-125"
            }`}
          />
        </a>
      ))}
    </div>
  </div>
)}

    </header>
  );
}
