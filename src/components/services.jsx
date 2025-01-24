
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef([]);
  const services = [
    { id: 1, name: "Front-end", image: "https://media.giphy.com/media/j5P0DQIOf4PonLi55G/giphy.gif?cid=ecf05e47tulyd2icdkfqr2w3s7h8nhkp87lmf1rm3tub89g7&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { id: 2, name: "UX/UI", image: "https://media.giphy.com/media/26xBAcAeAQ2PmzQnS/giphy.gif?cid=790b7611xrg5e2am9107ccjymdrrtcwpyeozpm57y56ny1nu&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
    { id: 3, name: "Back-end", image: "https://media.giphy.com/media/xCCqt6qDewWf6zriPX/giphy.gif?cid=790b7611c3uddgxpw8ea1gdkmxsq3sl45ompvkey25g9dfm7&ep=v1_gifs_search&rid=giphy.gif&ct=g" },
  ];

  useEffect(() => {
    // Create GSAP ScrollTrigger animations for each service section
    servicesRef.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin:true,
        pinSpacing: false,
        id: `service-${index + 1}`,
      });
    });

    // Optional: Smooth scrolling
    const smoothScroll = gsap.matchMedia();

    smoothScroll.add("(min-width: 800px)", () => {
      gsap.utils.toArray('.services-section').forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          animation: gsap.to(section, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          }),
          toggleActions: "play none none reverse",
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-[#000000] px-20  text-white overflow-hidden">
      {/* Background stars effect - keep your existing code */}
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

      <div className="absolute  z-10">
        <h1 className="text-2xl font-bold">
          MY {" "}
          <span className="text-emerald-400">NOCIMIENTOS</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid gap-24 py-24 px-8 md:px-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={`service-section-${service.id}`}
            ref={el => servicesRef.current[index] = el}
            className={`services-section grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen`}
          >
            <div
              className={`space-y-4 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 
                className="text-6xl uppercase md:text-8xl font-bold leading-none tracking-tighter text-[#d2fb51]"
                style={{
                  textShadow: '0 0 30px rgba(210, 251, 81, 0.3)',
                  fontFamily: "Marvel",
                  letterSpacing: "0.03em",
                }}
              >
                {service.name}
              </h2>
            </div>
            <div
              className={`relative aspect-[4/3] ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              {/* <img
                src={service.image}
                alt={`${service.name} service illustration`}
                className="object-cover bg-gradient-radial from-black to-transparent rounded-lg w-auto h-100%"
              /> */}
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Text */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 -rotate-90 origin-right">
        <span className="text-sm tracking-widest uppercase">
          BPY _ Creation Portfolio 2025
        </span>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}