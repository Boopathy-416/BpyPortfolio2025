import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const formContainerRef = useRef(null);
  const formFieldsRef = useRef([]);
  const servicesRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      formFieldsRef.current.forEach((field, index) => {
        gsap.fromTo(
          field,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: field,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      });

      if (servicesRef.current) {
        const serviceItems =
          servicesRef.current.querySelectorAll(".service-item");

        gsap.fromTo(
          serviceItems,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const addToFieldRefs = (el) => {
    if (el && !formFieldsRef.current.includes(el)) {
      formFieldsRef.current.push(el);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <div id="contact" className="relative flex z-1 overflow-hidden flex-col md:flex-row w-full min-h-screen bg-black text-white">

      <div className="md:w-1/3 p-8 md:py-40 md:absolute md:h-screen  flex flex-col justify-start">
        <h1 className="text-6xl md:text-7xl font-thin  mb-12 md:px-5  ">
          CONTACT
        </h1>
        <div className="space-y-4 tracking-widest  text-sm md:py-4 md:px-8 "  style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
          fontFamily: "Permanent Marker, cursive"
         }}>
          <a
            href="mailto:boopathy1865@gmail.com"
            className="block text-green-500 hover:underline"
          >
            boopathy1865@gmail.com
          </a>
          <p className="text-green-500">+(91) -7094 429166</p>
          <div className="text-green-500 ">
            <p>Tirupur-641 687</p>
            <p>Coimbatore</p>
            <p>Tamil Nadu, India</p>
          </div>
        </div>
      </div>




      <div className="md:w-2/3 md:ml-[44.333%] p-8 md:p-16">
        <div ref={formContainerRef} className="max-w-3xl ">
          <h2 className="text-3xl md:text-2xl md:py-4  font-bold mb-4">
            LET US KNOW WHAT YOU'RE LOOKING FOR →<br /> AND WE'LL BE IN TOUCH. ☺
          </h2>
          <form onSubmit={handleSubmit} className="space-y-10">
            {[
              "FIRST & LAST NAME",
              "EMAIL",
              "PHONE NUMBER",
              "COMPANY NAME",
              "LINK TO YOUR SOCIAL ACCOUNT",
            ].map((placeholder, index) => (
              <div key={index} ref={addToFieldRefs} className="form-field">
                <input
                  type="text"
                  className="w-full bg-transparent border-b text-[#dedede] capitalize border-white/50 py-2 focus:outline-none focus:border-green-400 transition-colors"
                  placeholder={placeholder}
                />
              </div>
            ))}
            <div ref={servicesRef} className="mt-16"  style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
          fontFamily: "Permanent Marker, cursive"
         }}>
              <h3 className="text-2xl font-bold mb-6">SERVICES NEEDED</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "BRANDING",
                  "WEB DESIGN",
                  "SOCIAL MEDIA MANAGEMENT",
                  "MARKETING",
                  "CREATIVE DIRECTION",
                  "UIUX",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="service-item flex items-center gap-3"
                  >
                    <div className="w-5 h-5 border border-white flex items-center justify-center">
                      <input type="checkbox" id={service} />
                    </div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8"  style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
          fontFamily: "Permanent Marker, cursive"
         }}>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-xs md:text-sm text-black font-semibold  hover:bg-gray-200 transition-colors"
              >
                SUBMIT
              </button>
              {showThankYou && (
                <div className="absolute md:bottom-10 md:left-4 tracking-widest md:px-4 py-1 text-green-500 ">
                  Thanks! We'll be in touch! ☺
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
