import React, { useEffect, useState, useRef } from "react";
import MarqueeTitle from "./Title";
import { Linkedin } from "lucide-react";
import UpdateCard from "../functionality/UpdatedCard";
import gsap from "gsap";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const items = ["UI/UX", "Branding", "Web development", "Logo Motion"];
  


 const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🔁 Reset animation
          setAnimate(false);

          // small delay to restart animation
          setTimeout(() => {
            setAnimate(true);
          }, 50);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);















  // ---------------------------
  // const ref = useRef(null);
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setVisible(true);
  //       }
  //     },
  //     { threshold: 0.5 },
  //   );

  //   if (ref.current) observer.observe(ref.current);

  //   return () => observer.disconnect();
  // }, []);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX / window.innerWidth,
  //       y: e.clientY / window.innerHeight,
  //     });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);
// --------------------------------------------------

  return (
    <section id="hero">
      <div
        className="relative min-h-screen bg-black/90 w-full overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/69b2406a34c003d51914de9e/69b6469bf78a57a2245e61b7_Shap-1.avif')",
          backgroundPosition: "center",
        }}
      >
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

        <main
          ref={ref}
          className="relative flex min-h-screen  flex-col-2 items-center justify-center  px-4"
        >
          {/* 🔻 Background Marquee (z-0) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 ">
            <MarqueeTitle />
          </div>


      {/* 🔻 Gradient */}
      <div className="absolute inset-0 z-20 pointer-events-none 
      bg-[linear-gradient(180deg,rgba(0,0,0,1)_7%,rgba(0,0,0,0.38)_52%,rgba(0,0,0,1)_98%)]" />

      {/* 🔺 Logo */}
      <img
        src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1765423407/ok_1_coin_fwkwh2.png"
        alt="Bpy Creations"
        className={`md:w-[500px] w-[250px] h-auto z-10 
        ${animate ? "logo-enter" : "opacity-0"}`}
      />









          {/* <div
            className="absolute inset-0 z-20 pointer-events-none 
      bg-[linear-gradient(180deg,rgba(0,0,0,1)_7%,rgba(0,0,0,0.38)_52%,rgba(0,0,0,1)_98%)]"
          />

          <img
            src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1765423407/ok_1_coin_fwkwh2.png"
            alt="Bpy Creations"
            className={`md:w-[500px] w-[250px] h-auto z-10 ${
              visible ? "logo-enter" : "opacity-0"
            }`}        /> */}




        </main>
        <UpdateCard />

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

// bg-gradient-to-r
//           from-[#8f5f1f] via-[#ba8736] to-[#634101]
//           shadow-[0_10px_80px_rgba(186,135,54,0.45)]
//           border-[#503811]

{
  /* <div className="  flex flex-col items-center justify-center mt-10 mr-8 relative">
            <h1
              className="text-[clamp(3rem,15vw,8rem)]   rounded-md drop-shadow-sm bg-gradient-to-r from-[#8f5f1f] via-[#ba8736] to-[#f2c46d]
            shadow-[0_10px_80px_rgba(186,135,54,0.45)] hidden md:block   border-[#503811]  bg-no-repeat leading-none font-black text-center"
              style={{
                padding: "4rem",
                fontFamily: "objectsans",
                color: "transparent",
                WebkitTextStroke: "8px black",
              }}
            >
              Bpy Creations
            </h1>

            <div
              className="absolute -right-1 top-0 w-24 h-44 bg-[#f2c46d] blur-[100px] opacity-90"
              style={{
                filter: "blur(100px)",
              }}
            ></div>


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
          </div> */
}
