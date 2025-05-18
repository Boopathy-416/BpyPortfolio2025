import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { GitBranchIcon } from "lucide-react";

export default function ProjectSection({ project, index }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !titleRef.current || !cardsContainerRef.current) return;

    // Create a timeline for this section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        pin: titleRef.current,
        pinSpacing: true,
        scrub: 1,
      },
    });

    // Animate the cards container
    gsap.fromTo(
      cardsContainerRef.current.children,
      {
        y: index === 0 ? 100 : 200,
        opacity: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative" id={`project-${project.id}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left side - static title */}
          <div ref={titleRef} className="md:col-span-3 static top-20 h-fit">
            <div className="mb-10">
              <span className="text-6xl font-bold opacity-20 " 
               >0{project.id}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <p className="text-gray-400 text-[10px]">Follow me on github <GitBranchIcon className=" inline text-green-500 " /> {project.items.length} projects in this section</p>
          </div>

          {/* Right side - scrolling project cards */}
          <div className="md:col-span-9">
            <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.items.map((item) => (
                <ProjectCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
