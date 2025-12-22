// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ProjectCard from "./ProjectCard";
// import { GitBranchIcon } from "lucide-react";

// export default function ProjectSection({ project, index }) {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const cardsContainerRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (!sectionRef.current || !titleRef.current || !cardsContainerRef.current) return;

//     // Animate pinning title
//     const titleTimeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom top",
//         pin: titleRef.current,
//         pinSpacing: true,
//         scrub: 1,
//       },
//     });

//     // Animate cards container
//     const cardsAnimation = gsap.fromTo(
//       cardsContainerRef.current.children,
//       {
//         y: index === 0 ? 100 : 200,
//         opacity: 0.5,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.1,
//         scrollTrigger: {
//           trigger: cardsContainerRef.current,
//           start: "top bottom",
//           end: "bottom center",
//           scrub: 1,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, [index]);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen py-40 relative bg-transparent text-white"
//       id={`project-${project.id}`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//           {/* Left side - static title */}
//           <div ref={titleRef} className="md:col-span-3 sticky top-20 h-fit">
//             <div className="mb-10">
//               <span className="text-6xl text-[#f4dc00] font-bold opacity-40">0{project.id}</span>
//             </div>
//             <h2
//               className="text-3xl md:text-4xl tracking-widest  mb-4"
//               style={{ fontFamily: "Marvel" }}
//             >
//               {project.title}
//             </h2>
//             <div className="w-16 h-1 bg-white mb-6"></div>
//             <p className="text-gray-400 text-[14px]">
//               Follow me on GitHub{" "}
//               <GitBranchIcon className="inline text-green-500" /> {project.items.length} projects in
//               this section
//             </p>
//           </div>

//           {/* Right side - scrolling project cards */}
//           <div className="md:col-span-9  ">
//             <div
//               ref={cardsContainerRef}
//               className="grid grid-cols-1 md:grid-cols-2 gap-8"
//             >
//               {project.items.map((item) => (
//                 <ProjectCard key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { GitBranchIcon } from "lucide-react";

export default function ProjectSection({ project, index }) {
  const cardsContainerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(false);

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCards(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(cardsContainerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="min-h-screen py-40 relative bg-transparent text-white"
      id={`project-${project.id}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* LEFT – Sticky Title (CSS only) */}
          <div className="md:col-span-3 sticky top-20 h-fit">
            <div className="mb-10">
              <span className="text-6xl text-[#f4dc00] font-bold opacity-40">
                0{project.id}
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl tracking-widest mb-4"
              style={{ fontFamily: "Marvel" }}
            >
              {project.title}
            </h2>

            <div className="w-16 h-1 bg-white mb-6"></div>

            <p className="text-gray-400 text-[14px]">
              Follow me on GitHub{" "}
              <GitBranchIcon className="inline text-green-500" />{" "}
              {project.items.length} projects in this section
            </p>
          </div>

          {/* RIGHT – Scroll Cards */}
          <div className="md:col-span-9">
            <div
              ref={cardsContainerRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {project.items.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    transform: visibleCards
                      ? "translateY(0)"
                      : index === 0
                      ? "translateY(100px)"
                      : "translateY(200px)",
                    opacity: visibleCards ? 1 : 0,
                    transition: "all 0.6s ease",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <ProjectCard item={item} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
