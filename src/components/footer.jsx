import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, GitBranch, Mail, SmileIcon, Github,  LinkedinIcon, X ,TwitterIcon } from "lucide-react";
import gsap from "gsap";
import React from "react";

export default function Footer() {
  const buttonRef = useRef(null);
  const liquidRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (!buttonRef.current || !liquidRef.current) return;

    const button = buttonRef.current;
    const liquid = liquidRef.current;

    gsap.set(liquid, {
      scale: 0,
      xPercent: -50,
      yPercent: -50,
      borderRadius: "50%",
    });

    const enterAnimation = gsap.to(liquid, {
      scale: 1.5,
      duration: 0.8,
      ease: "power2.out",
      paused: true,
    });

    const moveAnimation = gsap.to(liquid, {
      x: "+=0",
      paused: true,
      onUpdate: () => {
        const bounds = button.getBoundingClientRect();
        const x = gsap.getProperty(button, "mouseX") || bounds.width / 2;
        const y = gsap.getProperty(button, "mouseY") || bounds.height / 2;
        gsap.set(liquid, { x, y });
      },
    });

    button.addEventListener("mouseenter", () => {
      enterAnimation.play();
      moveAnimation.play();
    });

    button.addEventListener("mouseleave", () => {
      enterAnimation.reverse();
      moveAnimation.pause();
    });

    button.addEventListener("mousemove", (e) => {
      const bounds = button.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      gsap.set(button, { mouseX: x, mouseY: y });
    });

    return () => {
      enterAnimation.kill();
      moveAnimation.kill();
    };
  }, []);

  const handleClick = () => {
    setShowThankYou(true);
    gsap.to(".thank-you", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
      onComplete: () => {
        setTimeout(() => {
          gsap.to(".thank-you", {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            onComplete: () => setShowThankYou(false),
          });
        }, 2000);
      },
    });
  };

  return (
    <footer className="relative w-full bg-black  text-white transition-all px-4 py-12 md:px-8 lg:px-16"
    style={{
      transition:"ease-out 5s"
    }}
    >
      <div className="mx-auto max-w-8xl pt-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold camelcase "  style={{ textShadow: "2px 2px 5px rgba(255, 255, 255, 0.8)" }}>E.Boopathy <br />FrontEnd Developer</h3>
            <address className="not-italic text-md tracking-wider uppercase">
              <p>Coimbatore district</p>
              <p>Tamil Nadu-641 004</p>
              <p>india</p>
            </address>
            <p className="md:text-sm uppercase font-semibold  tracking-wider"><Mail className="mb-2" /> boopathy1865@gmail.com</p>
          </div>

          <nav className="space-y-4 transition-all tracking-wider">
          <div className="block hover:tracking-widest hover:text-[#B7FA00]">About</div>
            <div className="block hover:tracking-widest hover:text-[#B7FA00]">Work</div>
            <div className="block hover:tracking-widest hover:text-[#B7FA00]">Contact</div>
          </nav>

          <div className="space-y-4 transition-all tracking-wider "
          style={{
            transition:"ease-out 2s"
          }}>
            <a href="https://github.com/Ramya-rem" className="group hover:text-[#B7FA00] flex items-center justify-between hover:tracking-widest ">
            <Github />GitHub
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://www.linkedin.com/in/ramya-s-580817210/" className="group hover:text-[#B7FA00] flex items-center justify-between hover:tracking-widest ">
           <LinkedinIcon />   Linkedin
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#" className="group flex hover:text-[#B7FA00] items-center justify-between hover:tracking-widest ">
            <TwitterIcon /> Twitter
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className=" mt-2 border-t border-black pt-4 text-center"  style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)" }}>
        <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Boopathy-Portfolio. All rights reserved.
      </p>
      <p className="text-gray-500 text-sm">
        <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a> |{" "}
        <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
      </p>

        </div>

        <button
          ref={buttonRef}
          onClick={handleClick}
          className="fixed md:bottom-4 bottom-8 right-8 overflow-hidden rounded-full bg-black px-6 py-3 text-white transition-transform hover:text-black hover:scale-105"
        >
          <span className="relative z-10 flex items-center tracking-wide gap-2">
            Contact me <ArrowUpRight size={20} />
          </span>
          <div
            ref={liquidRef}
            className="absolute left-0 top-0 h-32 w-32 bg-[#d1ff1a]"
            style={{ pointerEvents: "none" }}
          />
        </button>

        {showThankYou && (
          <div className="thank-you fixed bottom-24 right-8 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white opacity-0 scale-0">
            Thank you! <SmileIcon size={20} />
          </div>
        )}
      </div>
    </footer>
  );
}