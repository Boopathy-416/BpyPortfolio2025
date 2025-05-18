import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ProjectCard({ item }) {
  const cardRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !titleRef.current) return;

    const card = cardRef.current;
    const title = titleRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(card, {
      scale: 1.05,
      duration: 0.5,
      ease: "power2.out",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    });

    tl.to(
      title,
      {
        scale: 1.2,
        y: -10,
        duration: 0.5,
        ease: "power2.out",
      },
      0
    );

    const play = () => tl.play();
    const reverse = () => tl.reverse();

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", reverse);

    return () => {
      card.removeEventListener("mouseenter", play);
      card.removeEventListener("mouseleave", reverse);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm border border-white/10"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Prism effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-30"></div>

      <div className="relative p-6 z-10 h-full flex flex-col">
        <div className="mb-auto">
          <h3
            ref={titleRef}
            className="text-xl md:text-2xl font-bold mb-2 origin-left"
          >
            {item.title}
          </h3>
          <p className="text-gray-400 mb-4">{item.description}</p>
        </div>

        <div className="mt-4">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">
            {item.timeline}
          </div>
        </div>
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="object-cover w-full h-full"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Clickable Link Overlay */}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit ${item.title}`}
          className="absolute inset-0 z-20"
        >
          <span className="sr-only">Visit {item.title}</span>
        </a>
      )}
    </div>
  );
}
