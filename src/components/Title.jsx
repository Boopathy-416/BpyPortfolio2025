import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MarqueeTitle() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

    gsap.set(el, { xPercent: 0 });

    gsap.to(el, {
      xPercent: -50,
      duration: 35, // 🔥 slower = premium
      ease: "none",
      repeat: -1,
      force3D: true,
    });
  }, []);

  return (
    <div className="relative overflow-hidden w-full mt-10">

      {/* 🔥 Left Gradient Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 
      bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* 🔥 Right Gradient Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 
      bg-gradient-to-l from-black via-black/80 to-transparent" />

      {/* 🔻 Marquee Track */}
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {/* 🔹 First Copy */}
        <div className="flex">
          <h1 className="marquee-text">BPY CREATIONS &nbsp;</h1>
          <h1 className="marquee-text">BPY CREATIONS &nbsp;</h1>
          <h1 className="marquee-text">BPY CREATIONS &nbsp;</h1>
        </div>

        {/* 🔹 Duplicate Copy (IMPORTANT) */}
        <div className="flex">
          <h1 className="marquee-text">BPY CREATIONS &nbsp;</h1>
          <h1 className="marquee-text">BPY CREATIONS &nbsp;</h1>
          <h1 className="marquee-text">BPY CREATIONS &nbsp;</h1>
        </div>
      </div>
    </div>
  );
}






 {/* Glow */}
      {/* <div className="absolute -right-1 top-0 w-24 h-44 bg-[#f2c36d] blur-[100px] " /> */}

      {/* Circular Text */}
      {/* <div className="absolute -right-2 top-0 w-32 h-32">
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
      </div> */}