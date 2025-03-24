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

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div
      id="services"
      className="skills-container  bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
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
        "Future-Ready Development & Project Execution",
        "Advanced Technologies & UI/UX Expertise",
        "Time Management & Client Collaboration",
      ].map((title, i) => (
        <div
          key={i}
          ref={(el) => (sectionRefs.current[i] = el)}
          className="section py-16 border-t border-gray-800"
        >
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row">
            <div className="md:w-1/2  pr-0 md:pr-12">
              <h2 className="text-3xl font-['objectsans'] md:px-5 text-gray-300 md:text-5xl font-light mb-6">{title}</h2>
              <p className="text-lg text-gray-400 md:px-5 opacity-80">
                {i === 0
                  ? "I specialize in designing and developing scalable web applications with a strong focus on both frontend and backend technologies. My expertise includes Java, JavaScript, React.js, Node.js, and MongoDB, ensuring performance-driven solutions."
                  : i === 1
                  ? "With a deep understanding of UI/UX principles, I integrate advanced libraries and frameworks such as React Query, Zustand, and GSAP to create seamless and interactive user experiences. My frontend development approach prioritizes flexibility and performance."
                  : "Effective project planning, feature development, and client collaboration define my workflow. I excel in managing tasks efficiently, ensuring timely delivery while maintaining high-quality coding standards and best practices."}
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex font-['robo'] flex-col">
              <div className="phase text-xl md:text-2xl md:px-5 uppercase text-gray-100 mb-6 opacity-70">
                {i === 0
                  ? "Full-Stack Engineering"
                  : i === 1
                  ? "UI/UX & Libraries"
                  : "Agile Development"}
              </div>
              <ul className="space-y-4 font-['objectsans'] md:px-5 text-xl text-gray-600 md:text-2xl font-light md:font-['PermanentMarker'] ">
                {[
                  [
                    "React.js & Tailwind CSS",
                    "Node.js & Express",
                    "MongoDB & Firebase",
                    "API Design & Integration",
                    "Java & Spring Boot",
                  ],
                  [
                    "State Management (Zustand, Redux)",
                    "Performance Optimization",
                    "GSAP & Animations",
                    "Scalability & Maintainability",
                  ],
                  [
                    "Agile & SCRUM Methodologies",
                    "Client Understanding & Feature Planning",
                    "Version Control (Git, GitHub)",
                    "Time Management & Collaboration",
                  ],
                ][i].map((item, j) => (
                  <li key={j} ref={(el) => (listItemRefs.current[i * 8 + j] = el)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-80 -rotate-90 origin-right">
        <span className="text-sm opacity-20 tracking-widest uppercase">
          BPY _ Development Portfolio 2025
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
