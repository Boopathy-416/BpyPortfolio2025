import React, { useEffect, useState } from "react";


function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const items = ["UI/UX", "Branding", "Web development", "Logo Motion"];

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
    <section id="hero">
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Particle effect */}
        
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

        {/* Spotlight effect */}
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-radial from-[#ffffff10] to-transparent opacity-20"
          style={{
            transform: `translate(
              calc(-50% + ${(mousePosition.x - 0.5) * 100}px),
              calc(-50% + ${(mousePosition.y - 0.5) * 100}px)
            )`,
          }}
        />

        {/* Portfolio heading with glow effect */}

        {/* Main content */}
        <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
          {/* Bottom badges */}
          <div className="relative  ">
            <h1
              className="text-[clamp(3rem,15vw,8rem)] hidden md:block  drop-shadow-sm shadow-[0_10px_50px_rgba(255,255,255,0.5)] bg-no-repeat leading-none font-black text-center"
              style={{
                padding: "5rem",
                backgroundImage:
                  "url('https://res.cloudinary.com/dpm3bum4n/image/upload/v1736656258/IMG_4511_scmegg.jpg')",
                fontFamily: "objectsans",
                opacity: "0.7",
                color: "transparent", // Make text transparent to show only stroke
                WebkitTextStroke: "0.5px white", // White outline effect
              }}
            >
              Bpy Creation
            </h1>
            {/* Green glow effect */}
            <div
              className="absolute -right-1 top-0 w-24 h-24 bg-[#ececec] blur-[100px] opacity-90"
              style={{
                backgroundImage: "url('/public/assets/div.png')",
              }}
            ></div>

            {/* Creative Designer text */}
            <div className="absolute -right-2 top-0 w-32 h-32">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full rotate-[30deg]"
              >
                <path
                  id="curve"
                  d="M 25,50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
                  fill="none"
                  className="text-[#ececec]"
                />
                <text className="text-[8px]">
                  <textPath href="#curve" startOffset="0%">
                    CREATIVE DESIGNER
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div
            className="absolute bottom-20 md:bottom-20 transition-all right-10   max-w-xs rounded hover:text-black hover:bg-[#ececec] bg-black  text-white shadow-[0_10px_50px_rgba(255,255,255,0.5)] p-4"
            style={{
              transition: " ease-in 1s",
            }}
          >
            <h2 className="text-xs md:text-sm font-bold">
              Open to work | MERN Stack Developer | Frontend & Backend Expertise
              | Passionate about UI/UX | Let's connect!
            </h2>
            <p className="mt-2 text-xs  hover:text-white/80">
              7.1.2025 last Updated
            </p>
          </div>
        </main>

        <style>{`
  @keyframes twinkle {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`}</style>
      </div>
    </section>
  );
}

export default Hero;
