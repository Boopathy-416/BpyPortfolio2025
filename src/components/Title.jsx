import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MarqueeTitle() {
  const marqueeRef = useRef(null);
  const blinkSound = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

 
    gsap.fromTo(
      el,
      { xPercent: 100 },
      {
        xPercent: -100,
        duration: 20,
        ease: "sine.inOut",
        repeat: -1,
        force3D: true,
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden w-full mt-10 mr-9">
      {/* Marquee Wrapper */}
      <div className="whitespace-nowrap will-change-transform">
        <h1
          ref={marqueeRef}
          className="inline-block text-[clamp(3rem,15vw,8rem)]
          rounded-md drop-shadow-sm bg-gradient-to-r
          from-[#8f5f1f] via-[#ba8736] to-[#634101]
          shadow-[0_10px_80px_rgba(186,135,54,0.45)]
          border-[#503811] bg-no-repeat leading-none
          font-black text-center"
          style={{
            padding: "4rem",
            fontFamily: "objectsans",
            color: "transparent",
            WebkitTextStroke: "8px black",
          }}
        >
          BPY CREATIONS &nbsp; BPY CREATIONS &nbsp; BPY CREATIONS BPY CREATIONS
          &nbsp; BPY CREATIONS &nbsp;
        </h1>
      </div>

      {/* Glow */}
      <div className="absolute -right-1 top-0 w-24 h-44 bg-[#f2c46d] blur-[100px] " />

      {/* Circular Text */}
      <div className="absolute -right-2 top-0 w-32 h-32">
        {" "}
        <svg viewBox="0 0 100 100" className="w-full h-full rotate-[30deg]">
          {" "}
          <path
            id="curve"
            d="M 25,50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
            fill="none"
            className="text-[#ececec]"
          />{" "}
          <text className="text-[8px]">
            {" "}
            <textPath href="#curve" startOffset="0%">
              {" "}
              CREATIVE DESIGNER{" "}
            </textPath>{" "}
          </text>{" "}
        </svg>{" "}
      </div>
    </div>
  );
}
