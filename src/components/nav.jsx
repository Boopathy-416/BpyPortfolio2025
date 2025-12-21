// import React, { useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Menu, X } from "lucide-react"; // Import icons

// gsap.registerPlugin(ScrollTrigger);

// export default function Navbar() {
//   const currentYear = new Date().getFullYear();
//   const [activeSection, setActiveSection] = useState("hero");
//   const [menuOpen, setMenuOpen] = useState(false);

// const sections = [
//   { id: "hero", icon: "/planets/sun.svg", size: 64 },
//   { id: "about", icon: "/planets/mercury.svg", size: 48 },
//   { id: "testimonials", icon: "/planets/venus.svg", size: 56 },
//   { id: "services", icon: "/planets/earth.svg", size: 60 },
//   { id: "contact", icon: "/planets/mars.svg", size: 52 },
//   { id: "skills", icon: "/planets/jupiter.svg", size: 72 },
// ];

//   useEffect(() => {
//     const handleScroll = () => {
//       sections.forEach((section) => {
//         const el = document.getElementById(section.id);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
//             setActiveSection(section.id);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="fixed backdrop-blur-sm z-50 w-full bg-transparent px-6 py-4 border-gray-700 flex justify-between items-center">

//   <div className="logo">
//       <img src="public/assets/BpyCreations.svg" alt="Bpy Creations" width={80} height={80}></img>
//         <span className="flex justify-center border-[#424242] text-gray-100 tracking-widest  text-xs rounded-full relative overflow-hidden group">
//           {currentYear}-{currentYear + 1}
//           <span className=" absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
//           <span className=" absolute top-0 right-0 w-[2px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
//           <span className=" absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
//           <span className=" absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-yellow-800 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
//         </span>

//   </div>

//       {/* Mobile Menu Icon */}
//       <button
//         className="lg:hidden text-4xl text-gray-500 border-3 focus:outline-none z-50"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         {menuOpen ? <X /> : <Menu />} {/* Toggle between Menu & Close icons */}
//       </button>

//       {/* Desktop Nav Links with Camera Shutter Animation */}
//       <nav className="hidden lg:flex space-x-6">
//         {sections.map((section) => (
//           <a
//             key={section.id}
//             href={`#${section.id}`}
//             className={`relative text-sm font-semibold px-4 py-2 transition-colors group ${
//               activeSection === section.id
//                 ? "text-white font-['robot'] tracking-wider shadow-inner shadow-slate-400"
//                 : "text-gray-500"
//             }`}
//           >
//             {section.label}

//             {/* Camera Shutter Borders */}
//             <span
//               className={` absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform ${
//                 activeSection === section.id ? "scale-x-100 " : "scale-x-0  "
//               } origin-right transition-transform duration-300`}
//             ></span>
//             <span
//               className={` absolute top-0 right-0 w-[6px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform ${
//                 activeSection === section.id ? "scale-y-100" : "scale-y-0"
//               } origin-bottom transition-transform duration-300`}
//             ></span>
//             <span
//               className={` absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform ${
//                 activeSection === section.id ? "scale-x-100" : "scale-x-0"
//               } origin-left transition-transform duration-300`}
//             ></span>
//             <span
//               className={` absolute bottom-0 left-0 w-[6px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform ${
//                 activeSection === section.id ? "scale-y-100" : "scale-y-0"
//               } origin-top transition-transform duration-300`}
//             ></span>
//           </a>
//         ))}
//       </nav>

//       {/* Right - Get in Touch Button */}
//       <div className="hidden lg:block">
//         <a
//           href="#contact"
//           className="relative text-white text-xs px-6 py-3 border-[#424242] uppercase font-bold transition-all duration-500 ease-in-out overflow-hidden group"
//         >
//           GET IN TOUCH
//           <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
//           <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
//           <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
//           <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-r from-pink-100 via-yellow-200 to-blue-800 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></span>
//         </a>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex py-10 h-screen justify-center items-center z-40"
//           onClick={() => setMenuOpen(false)}
//           style={{

//             fontFamily: "PermanentMarker",
//           }}
//         >
//           <div
//             className="w-50 h-60   py-10 px-5   grid grid-cols-2 gap-4 text-white text-center uppercase font-bold relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {sections.map((section) => (
//               <a
//                 key={section.id}
//                 href={`#${section.id}`}
//                 className="nav-item text-xs px-2  hover:text-black hover:border-red-800 hover-border-2  border-2 flex justify-center items-center hover:bg-slate-400 transition-all"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {section.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "hero", icon: "public/2025 Assets/Home.svg", size: 90 },
    { id: "about", icon: "public/2025 Assets/About.svg", size: 90 },
    { id: "testimonials", icon: "public/2025 Assets/Product.svg", size: 90 },
    { id: "services", icon: "public/2025 Assets/Solid.svg", size: 90 },
    { id: "contact", icon: "public/2025 Assets/Touch.svg", size: 90 },
    // { id: "skills", icon: "public/2025 Assets/earth.svg", size: 40 },
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
