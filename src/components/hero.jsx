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
    <section id="about">
      <div className="relative min-h-screen w-full overflow-hidden bg-[#000]">
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
        <div className="text-start ml-9 mb-6 mt-5">
          <span className="inline-block px-4 py-1 border border-[#ececec] text-[#ececec] rounded-full text-sm">
            2024-25
          </span>
        </div>

        {/* Portfolio heading with glow effect */}

        {/* Main content */}
        <main className="relative flex min-h-screen flex-col items-center justify-center px-4">
          {/* Bottom badges */}
          <div className="relative  ">
            <h1
              className="text-[clamp(3rem,15vw,8rem)] np bg-no-repeat leading-none font-black text-center"
              style={{
                color: "#ebebeb",
                backgroundColor:
                  "rgba(0, 0, 0, 0.5)" /* Optional: adds a semi-transparent background for text */,
                padding: "11rem" /* Optional: adds spacing inside the text */,
                backgroundImage: "url('https://res.cloudinary.com/dpm3bum4n/image/upload/v1736656258/IMG_4511_scmegg.jpg')",
                fontFamily: "objectsans",
                opacity: "0.7",
              }}
            >
              Portfolio
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

          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["UI/UX Design", "Branding", "Portfolio", "Logo Motion"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="inline-flex items-center gap-2 px-4 py-3 border shadow-[0_10px_50px_rgba(255,255,255,0.5)] transition-all border-[#ececec] rounded-full hover:bg-[#ececec] hover:text-[#000] text-[#ececec] transition-colors" style={{
                    fontFamily:"Akira",
                    transition: " ease-in 0.4s",
                  }}
                >
                  <span className="transform rotate-45">↑</span>
                  {item}
                </a>
              )
            )}
          </div>
          

          <div className="absolute bottom-25 transition-all right-10 hidden md:block  max-w-xs rounded bg-[#ececec] hover:bg-black  hover:text-white shadow-[0_10px_50px_rgba(255,255,255,0.5)] p-4"
          style={{
            transition: " ease-in 1s",
          }}>
            <h2 className="text-xl font-bold">
              Open to work Web Developer, Javascript Developer, Freelance,
              Frontend Developer and Development Specialist roles ..
            </h2>
            <p className="mt-2 text-sm  hover:text-white/80">7.1.2024 last Updated</p>
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
