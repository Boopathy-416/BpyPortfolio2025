import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";


export default function Services() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const services = [
    { id: 1, name: "Front-end", image: "/public/assets/front.jpg" },
    { id: 2, name: "UX/UI", image: "/public/assets/uiux.png" },
    { id: 3, name: "Back-end", image: "/public/assets/backend.jpg" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <section className="relative min-h-screen bg-[#0a0b0d] text-white overflow-hidden">
      {/* Logo */}
      <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-0.5 w-0.5 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            />
          ))}
        </div>
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-radial from-[#ffffff10] to-transparent opacity-20"
          style={{
            transform: `translate(
              calc(-50% + ${(mousePosition.x - 0.5) * 100}px),
              calc(-50% + ${(mousePosition.y - 0.5) * 100}px)
            )`,
          }}
        />

      <div className="absolute top-8 left-8 z-10">
        <h1 className="text-2xl font-bold">
          MY {" "}
          <span className="text-emerald-400">NOCIMIENTOS</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid gap-24 py-24 px-8 md:px-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.name.toLowerCase()}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div
              className={`space-y-4 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 className="text-6xl uppercase md:text-8xl font-bold leading-none tracking-tighter  text-[#d2fb51]"  style={{
              textShadow: '0 0 30px rgba(210, 251, 81, 0.3)',
               fontFamily:"Marvel",
               letterSpacing:"0.03em",

            }}
          >
                {service.name}
              </h2>
            </div>
            <div
              className={`relative aspect-[4/3] ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={service.image}
                alt={`${service.name} service illustration`}
                className="object-cover bg-gradient-radial from-black to-transparent  rounded-lg w-40% h-40%"
            
              />
            </div>
          </div>
        ))}
      </div>
      {/* Portfolio Text */}

      <div className="fixed right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-right">
        <span className="text-sm tracking-widest uppercase">
          BPY _ Creation Portfolio 2025
        </span>
        <style jsx global>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}</style>

      </div>
    </section>
  );
}
