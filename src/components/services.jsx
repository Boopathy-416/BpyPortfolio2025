
import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef([]);
  const services = [
    { id: 1, name: "Front-end developer", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1737818152/rb_1155_s5e4cw.png",  textColor: "text-yellow-100"  },
    { id: 2, name: "UX/UI Designer", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1737818150/rb_8193_e1luos.png",  textColor: "text-green-300" },
    { id: 3, name: "video editor", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1737818152/vc_u6klmt.png", textColor: "text-pink-400" },
  ];

  useEffect(() => {
    // Create GSAP ScrollTrigger animations for each service section
    servicesRef.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin:true,
        pinSpacing:false,
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
    <section className="relative min-h-screen bg-[#000000] px-20 -z-10  text-white overflow-hidden">
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
        <div
        className="md:text-center "
        style={{
          fontFamily: "kungfu",
          letterSpacing: "0.6em",
        }}
      >
      
        <h1 className="md:text-[80px] p-5 my-4  text-2xl font-bold text-[#e9e9e9] text-center">
        Code {">"} Design {">"} Transform 
        
        </h1>
        <hr className="  border-[#f0f0f050] border-[1.5px]" />
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
              className={`space-y-2 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <h2 
                className={ `text-4xl backdrop-blur-2xl transition-all  rounded-md text-center uppercase md:text-[86px] font-bold leading-normal tracking-tighter ${service.textColor} `}
                style={{
                  textShadow: '0 0 30px rgba(210, 251, 81, 0.3)',
                  fontFamily: "Marvel",
                  transition: " ease-in 0.9s",
                  letterSpacing: "0.03em",
                }}
              >
                {service.name}
              </h2>
              <hr className="  border-[#f0f0f050] border-[1.5px]" />
            </div>
            <div
              className={`relative aspect-[2/3] ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={service.image}
                alt={`${service.name} service illustration`}
                className="object-cover  rounded-lg w-[350px] h-auto "
              />
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Text */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-80 -rotate-90 origin-right">
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