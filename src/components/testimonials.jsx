import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Testimonials() {
  // Project data
  const projects = [
    {
      id: 1,
      title: "TheBitcoin",
      image:
        "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679304/Screenshot_2025-01-12_162450_c9k96p.png",
      description: "Web 3",
      link: "https://www.thebitcoin.com/",
    },
    {
      id: 2,
      title: "$Sunita",
      image:
        "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679376/Screenshot_2025-01-12_162343_bmgxvl.png",
      description: "Web 3 project",
      link: "https://sunitaland.vercel.app/",
    },
    {
      id: 3,
      title: "School Website",
      image:
        "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736678759/school_ath5ys.png",
      description: "Muscular anthropomorphic character model",
      link: "https://subash-matric-version-1.vercel.app/",
    },
    {
      id: 4,
      title: "Token Generator AI",
      image:
        "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679728/Screenshot_2025-01-12_163124_qfce7b.png",
      description: "Muscular anthropomorphic character model",
      link: "https://coin-generator-ai.vercel.app/",
    },
    {
      id: 5,
      title: "Three js Website",
      image:
        "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679559/Screenshot_2025-01-12_162903_p1bxv0.png",
      description: "Muscular anthropomorphic character model",
      link: "https://landingsitebpycreation.vercel.app/",
    },
  ];

  // Duplicate your projects array so it can loop seamlessly
  const repeatedProjects = [...projects, ...projects];

  // -- CARD COMPONENT --
  function ProjectCard({ project }) {
    const cardRef = useRef(null);

    useEffect(() => {
      const card = cardRef.current;

      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.1,
          duration: 0.5,
          zIndex: 10,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 0.9,
          duration: 0.5,
          zIndex: 1,
          ease: "power2.out",
        });
      };

      card?.addEventListener("mouseenter", handleMouseEnter);
      card?.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card?.removeEventListener("mouseenter", handleMouseEnter);
        card?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <div
        ref={cardRef}
        className="relative  flex-shrink-0 w-[250px] h-[300px] bg-black rounded-lg overflow-hidden  cursor-pointer"
        onClick={() => window.open(project.link, "_blank")}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full p-1 border-4 rounded-lg object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent  shadow-[0_0_20px_0_rgba(0,0,0,1)]">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
    );
  }

  // Refs
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Simple fade in for entire section
    gsap.from(containerRef.current, {
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    // If you want an infinite marquee effect
    if (sliderRef.current) {
      // We'll measure half the total width (since we duplicated)
      const totalWidth = sliderRef.current.scrollWidth / 2;

      // Animate from x = 0 to x = -<half-of-content>, repeat forever
      gsap.to(sliderRef.current, {
        x: -totalWidth,
        duration: 20, // Adjust for speed of marquee
        ease: "linear",
        repeat: -1, // Infinite
        onRepeat: () => {
          // Reset position immediately so the loop is seamless
          gsap.set(sliderRef.current, { x: 0 });
        },
      });
    }
  }, []);

  return (
    <section className="md:px-20 px-4 bg-black">
      <div
        ref={containerRef}
        className="min-h-full md:p-20 bg-[#000] relative overflow-hidden"
      >
        <div className="container mx-auto rounded-2xl md:shadow-xl md:shadow-white px-4 py-20 relative">
          <div
            ref={sliderRef}
            className="inline-flex gap-8 px-4 whitespace-nowrap relative"
          >
            {repeatedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
