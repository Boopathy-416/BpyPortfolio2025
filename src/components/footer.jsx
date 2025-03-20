import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, GitBranch, Mail, SmileIcon, Github,  LinkedinIcon, X ,TwitterIcon } from "lucide-react";
import gsap from "gsap";
import React from "react";

export default function Footer() {
  const buttonRef = useRef(null);
  const liquidRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const moonRef = useRef(null);
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



  useEffect(() => {
    gsap.to(moonRef.current, {
      y: "+=20", // Moves up and down
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(moonRef.current, {
      filter: "drop-shadow(0 0 20px #00f)",
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <footer className="relative opacity-90  shadow-outer w-full bg-[#1eff1a] shadow-white border-x-8 border-black text-black   px-4 py-12 md:px-8 lg:px-16"

    >
      <div className="mx-auto max-w-8xl pt-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-6">
            <img  ref={moonRef} src="/assets/hii.png" width="100px" height="auto" alt="action" className="hidden md:block  " />
            <p className="md:text-sm uppercase font-semibold  tracking-wider"> <span className=" text-xs" >website by -</span>Boopathy E</p>
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
            <a href="https://github.com/Boopathy-416" className="group hover:text-[#B7FA00] flex items-center justify-between hover:tracking-widest ">
            <Github />GitHub
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="https://www.linkedin.com/in/boopathy-e-666549282" className="group hover:text-[#B7FA00] flex items-center justify-between hover:tracking-widest ">
           <LinkedinIcon />   Linkedin
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href="#" className="group flex hover:text-[#B7FA00] items-center justify-between hover:tracking-widest ">
            <TwitterIcon /> Twitter
              <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div className=" mt-2 border-t border-black pt-4 text-center"  style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
          fontFamily: "Permanent Marker, cursive"
         }}>
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
          className="fixed md:bottom-4 bottom-8 right-8 overflow-hidden hover:border-2 border-2  border-black rounded-full bg-black px-6 py-3 text-white transition-transform hover:text-black hover:scale-105"
        >
          <span className="relative z-10 flex items-center  text-xs tracking-wide gap-2">
            Contact me <ArrowUpRight size={20} />
          </span>
          <div
            ref={liquidRef}
            className="absolute left-0 top-0 h-32 w-32 bg-[#d1ff1a]"
            style={{ pointerEvents: "none" }}
          />
        </button>

        {showThankYou && (
          <div className="thank-you fixed bottom-20 right-8 flex items-center gap-2 rounded-full fond-bold  shadow-black shadow-inner px-6 py-3 text-white opacity-0 scale-0">
            Thank you! <SmileIcon size={20} />
          </div>
        )}
      </div>
    </footer>
  );
}