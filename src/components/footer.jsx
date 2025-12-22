import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  SmileIcon,
  Github,
  Linkedin,
  Mail,
  Figma,
  Code,
  BookOpen,
  Framer,
} from "lucide-react";
import gsap from "gsap";
import React from "react";

export default function Footer() {
  const buttonRef = useRef(null);
  const liquidRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

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
    button.addEventListener("mouseenter", () => enterAnimation.play());
    button.addEventListener("mouseleave", () => enterAnimation.reverse());
    return () => enterAnimation.kill();
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
  //  style={{ backgroundImage: "url('public/2025 Assets/footer.svg')" }}

  return (
    <> 
    <footer
      // style={{ backgroundImage: "url('public/assets/venus.svg')" }}
      className="relative  bg-[#000000] border-t-4 border-[#dd9716] w-full bg-center  bg-contain bg-no-repeat  px-4 py-2 md:px-8 lg:px-16">
      <div className="mx-auto max-w-8xl py-4   md:items-start md:justify-start   flex justify-center items-center">
        <p className=" text-xs text-center text-white  uppercase font-semibold tracking-wider">
          website by - Boopathy E
        </p>
      </div>
        <div className="flex gap-4 text-center justify-center">
          {[
            { href: "https://github.com/Boopathy-416", icon: Github },
            {
              href: "https://www.linkedin.com/in/boopathy-e",
              icon: Linkedin,
            },
            { href: "https://figma.com/@yourprofile", icon: Figma },
            { href: "https://framer.com/@yourprofile", icon: Framer },
            { href: "https://leetcode.com/yourprofile", icon: Code },
            { href: "https://coursera.org/user/yourprofile", icon: BookOpen },
          ].map(({ href, icon: Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-gray-700 hover:text-[#ffff] duration-300 ease-in-out hover:blur-none border-blur-xs  hover:-translate-y-2"
            >
              <Icon size={24} />
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
          >
            <Mail
              size={24}
              className="cursor-pointer hover:shadow-red-600  text-white hover:scale-110"
            />
            {showEmail && (
              <span className="absolute font-bold -top-8 px-2 py-1 -left-5 md:left-1/2 -translate-x-1/2 bg-white text-black text-xs  rounded-md shadow-xl shadow-black">
                boopathy1865@gmail.com
              </span>
            )}
          </div>
        </div>
      <div className="mt-4 border-t border-white/40 pt-4 text-center font-[PermanentMarker]">
        <p className="text-white text-md">
          © {new Date().getFullYear()} Boopathy-Portfolio. All rights reserved.
        </p>
        <p className="text-white text-md">
          <a href="/privacy-policy" className="hover:text-red-400">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="hover:text-red-400">
            Terms of Service
          </a>
        </p>-+
      </div>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="fixed md:bottom-2 bottom-5  right-4 overflow-hidden hover:border-4 border-4 
         border-black rounded-full bg-white/40 px-3 py-2 hover:text-white hover:border-white hover:bg-transparent  transition-transform  hover:scale-105"
      >
        <span className="relative z-10 flex  items-center transition-transform font-['robot']  text-md p-1  gap-2">
        <a href="#contact" > Contact me <ArrowUpRight className="inline text-[#dd9716]" size={16} /> </a>
        </span>
        <div
          ref={liquidRef}
          className="absolute left-0 top-0 h-32 w-32 border-separate border-4 bg-[#dd9716]"
          style={{ pointerEvents: "none" }}
        />
      </button>

      {showThankYou && (
        <div className="thank-you fixed bottom-20  font-['robot'] right-5 flex items-center gap-2 rounded-full fond-bold 
         shadow-black shadow-inner px-6 py-3 text-white opacity-0 scale-0">
          Thank you! <SmileIcon size={20} />
        </div>
      )}
    </footer>
     </>
  );
}
