import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  const sectionRefs = useRef([]);
  const listItemRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRefs.current.forEach((section) => {
      if (!section) return;

      const heading = section.querySelector("h2");
      const paragraph = section.querySelector("p");
      const phase = section.querySelector(".phase");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          heading,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        )
        .fromTo(
          paragraph,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          phase,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
    });

    listItemRefs.current.forEach((item, index) => {
      if (!item) return;

      gsap.fromTo(
        item,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        }
      );
    });

    // style={{
    //     fontFamily: "kungfu",
    //     letterSpacing: "0.6em",
    //   }}
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div
      id="services"
      className="skills-container bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-[#ffff]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
            }}
          />
        ))}
      </div>
      {[
        "Briefing, Research and Conceptualization",
        "Shooting and Creativity",
        "Editing and Realization",
      ].map((title, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="section py-16 border-t border-gray-800"
        >
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-0 md:pr-12">
              <h2 className="text-4xl md:text-5xl font-light mb-6">{title}</h2>
              <p className="text-lg opacity-80">
                {i === 0
                  ? "Communication - my Client is my partner. I start by thoroughly researching your project, its goals, and target audience. Based on the gathered insights, I develop a unique concept and script that reflects your vision."
                  : i === 1
                  ? "I meticulously prepare for shoots, ensuring high-quality video footage. I work on capturing compelling shots that engage viewers and convey your message effectively."
                  : "At this stage, I creatively piece together all elements to craft captivating videos. Special effects, editing, sound design — I do everything possible to make your video stand out."}
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col">
              <div className="phase text-xl md:text-2xl mb-6 opacity-70">
                {i === 0
                  ? "Pre—idea"
                  : i === 1
                  ? "Production—creation"
                  : "Post—realization"}
              </div>
              <ul className="space-y-4 text-2xl md:text-3xl font-light italic">
                {[
                  [
                    "Project Goals",
                    "Target Audience",
                    "Budget",
                    "Content Requirements",
                    "Trends",
                    "Visual concept — treatment",
                    "Script",
                    "Shooting plan",
                  ],
                  ["Filming"],
                  [
                    "Video and sound editing",
                    "Color correction and visual effects",
                    "Adding titles and graphics",
                  ],
                ][i].map((item, j) => (
                  <li
                    key={j}
                    ref={(el) => (listItemRefs.current[i * 8 + j] = el)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute  right-8 top-1/2 -translate-y-1/2 z-80 -rotate-90 origin-right">
        <span className="text-sm opacity-20 tracking-widest uppercase">
          BPY _ Creation Portfolio 2025
        </span>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
