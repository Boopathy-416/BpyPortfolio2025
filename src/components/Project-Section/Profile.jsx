import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Abouts() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

 const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 🔁 Reset animation
          setAnimate(false);

          // small delay to restart animation
          setTimeout(() => {
            setAnimate(true);
          }, 50);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!titleRef.current) return;

      // 🔥 Split text safely
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = text
        .split("")
        .map(
          (letter) =>
            `<span class="letter inline-block">${letter === " " ? "&nbsp;" : letter}</span>`,
        )
        .join("");

      const letters = titleRef.current.querySelectorAll(".letter");

      // 🔥 Title animation
      gsap.fromTo(
        letters,
        { opacity: 0.2, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "center 40%",
            scrub: 1,
          },
        },
      );

      // 🔥 Description
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );

      // 🔥 Image
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert(); // ✅ clean GSAP properly
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <p className="text-orange-500 font-bold text-sm md:text-base tracking-widest mb-8">
          / ABOUT OUR AGENCY
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* ✅ Single Image Ref (Fix) */}
          {/* <div ref={imageRef}>
            <div className="w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <img
                src="public/assets/BpyCreations.svg"
                alt="Creative digital agency"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
          <div ref={ref}>
            <div
              className="absolute inset-0 z-20 pointer-events-none 
      bg-[linear-gradient(180deg,rgba(0,0,0,1)_7%,rgba(0,0,0,0.38)_52%,rgba(0,0,0,1)_98%)]"
            />

            {/* 🔺 Logo */}
            <img
              src="https://res.cloudinary.com/dpm3bum4n/image/upload/v1765423407/ok_1_coin_fwkwh2.png"
              alt="Bpy Creations"
              className={`md:w-[500px] w-[250px] h-auto z-10 
        ${animate ? "logo-enter" : "opacity-0"}`}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <h1
              ref={titleRef}
              className="text-3xl md:text-5xl lg:text-6xl font-black leading-snug"
            >
              WE ARE A CREATIVE DIGITAL AGENCY HELPING BUSINESSES BUILD POWERFUL
              BRANDS, MODERN WEBSITES, AND MEANINGFUL DIGITAL EXPERIENCES.
            </h1>

            <p
              ref={descriptionRef}
              className="text-gray-400 text-base md:text-lg leading-relaxed"
            >
              From startups to established companies, we collaborate closely
              with our clients to understand their goals and transform ideas
              into impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
