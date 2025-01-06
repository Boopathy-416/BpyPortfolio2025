import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Array of images as in your original code
const images = [
  "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736053742/TJAR6336_mml2fk.jpg",
  "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736069181/works_hyhek0.jpg",
  "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736069181/wpalce_i8ykg8.jpg",
  "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736053728/work_5_zweihq.jpg",
  "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736053729/work_6_esbgwo.jpg",
];

export default function Gallery() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Get references to your items
    const items = itemsRef.current;

    // 2. Capture each item’s initial position
    const positions = items.map((item) => {
      const rect = item.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    });

    // 3. Create a timeline with ScrollTrigger
    const tl = gsap.timeline({
      // Animation defaults
      defaults: { duration: 2.5, ease: "power2.inOut" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",       // when the top of container hits 80% of viewport
        end: "bottom top",      // when the bottom of container hits top of viewport
        toggleActions: "play none none reverse",
        // You can use these callbacks for finer control, if desired:
        // onEnter: () => { /* ... */ },
        // onLeave: () => { /* ... */ },
        // onEnterBack: () => { /* ... */ },
        // onLeaveBack: () => { /* ... */ },
      },
    });

    // 4. Build the “puzzle-like” animation sequence
    items.forEach((item, i) => {
      const nextPos = positions[(i + 1) % positions.length];
      tl.to(
        item,
        {
          x: nextPos.x - positions[i].x,
          y: nextPos.y - positions[i].y,
          rotation: gsap.utils.random(-10, 10),
          scale: gsap.utils.random(0.55, 1),
        },
        i * 0.1
      );
    });

    // 5. Cleanup on unmount
    return () => {
      tl.kill();
    
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, []);

  return (
    <div
      className="min-h-screen overflow-hidden bg-black md:px-40 md:py-10 p-10"
      ref={containerRef}
    >
      <div
        className="md:text-center text-start"
        style={{
          fontFamily: "kungfu",
          letterSpacing: "0.6em",
        }}
      >
        <h1 className="md:text-[200px] p-5 border-3 md:mt-10 text-2xl font-bold text-[#e9e9e9] text-center">
          GALLERY{" "}
          <span className="text-sm text-gray-700 tracking-wide">
            Work Experience
          </span>
        </h1>
        <h2
          className="md:text-xl text-center border-1 border text-sm hover:bg-[#e9e9e9] hover:text-[#000] transition-all shadow-[0_10px_50px_rgba(255,255,255,0.5)] text-gray-400"
          style={{
            opacity: "0.8",
            letterSpacing: "0.1em",
            transition: " ease-in 1s",
          }}
        >
          Memories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 md:py-10 md:px-40 relative">
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className="relative overflow-hidden transition-transform border-1 duration-300 hover:z-10 hover:scale-105"
          >
            <div className="aspect-[4/3] relative border-4 rounded-md border-zinc-300 hover:border-[#fefefe] shadow-[0_10px_50px_rgba(255,255,255,0.5)]">
              <img
                src={src}
                alt={`Gallery item ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover filter grayscale hover:backdrop-grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/0 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
