import Scene from "../functionality/ThreeDModel";
import React, { useEffect, useState } from "react";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="about"
      className="relative min-h-screen bg-black p-5 lg:px-20 md:px-20 overflow-hidden"
    >
      {/* Particle effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white opacity-50 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 md:py-5">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h1
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "robot" }}
            >
              Who I Am
            </h1>
            <div className="space-y-4 text-[#d5d5d5] font-['robo'] ">
              <p className="text-sm first-line:uppercase leading-5 md:leading-7 tracking-normal first-line:tracking-wider
                first-letter:text-7xl first-letter:font-bold first-letter:text-[#d5d5d5]
                first-letter:mr-3 first-letter:float-left">
                I’m a passionate <mark>MERN Stack Developer</mark> and <mark>UI/UX Designer</mark> dedicated to crafting visually stunning and user-centric digital experiences. 
                <br />
                Although I began my journey as a B.E. Mechanical Engineer, my passion for coding and design led me to transition into web development.
              </p>
            </div>

            {/* Camera Shutter Button */}
            <div className="group flex items-center">
              <button className="relative bg-black text-white px-8 py-3 transition-all duration-300 shadow-[0_10px_50px_rgba(255,255,255,0.5)]
                  rounded-md hover:bg-gray-800 hover:text-[#d2fb51] overflow-hidden"
                style={{
                  fontFamily: "robot",
                  textAlign: "center",
                  letterSpacing: "0.02em",
                }}
              >
                Let’s Connect
                {/* Camera Shutter Borders */}
                <span className="absolute top-0 left-0 w-full h-[2px] bg-[#d2fb51] scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                <span className="absolute top-0 right-0 w-[2px] h-full bg-[#d2fb51] scale-y-0 origin-bottom transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
                <span className="absolute bottom-0 right-0 w-full h-[2px] bg-[#d2fb51] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
                <span className="absolute bottom-0 left-0 w-[2px] h-full bg-[#d2fb51] scale-y-0 origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-100"></span>
              </button>
            </div>
          </div>

          {/* Right Column - 3D Model */}
          <div className="relative w-full">
            <Scene />
          </div>
        </div>
      </div>
    </div>
  );
}
