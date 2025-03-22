// import React, { useLayoutEffect, useRef } from "react";

// export default function Portfolio() {
//   const containerRef = useRef(null);
//   const logoRef = useRef(null);
//   const directorImageRef = useRef(null);
//   const directorNameRef = useRef(null);
//   const creditsRef = useRef(null);
//   const mainCrewRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx;
//     import("gsap").then(({ default: gsap }) => {
//       import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
//         gsap.registerPlugin(ScrollTrigger);

//         ctx = gsap.context(() => {
//           const tl = gsap.timeline();

//           tl.fromTo(
//             logoRef.current,
//             { y: -50, opacity: 0 },
//             { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//           );
//           tl.fromTo(
//             directorImageRef.current,
//             { x: -100, opacity: 0 },
//             { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
//             "-=0.5"
//           );
//           tl.fromTo(
//             directorNameRef.current,
//             { y: 50, opacity: 0 },
//             { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
//             "-=0.8"
//           );
//           tl.fromTo(
//             ".credit-item",
//             { opacity: 0, y: 30 },
//             { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" },
//             "-=0.5"
//           );

//           gsap.utils.toArray(".name-text").forEach((text) => {
//             gsap.fromTo(
//               text,
//               { opacity: 0, y: 20 },
//               {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.6,
//                 ease: "power3.out",
//                 scrollTrigger: { trigger: text, start: "top 80%" },
//               }
//             );
//           });

//           gsap.fromTo(
//             mainCrewRef.current,
//             { opacity: 0, y: 50 },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 1,
//               ease: "power3.out",
//               scrollTrigger: { trigger: mainCrewRef.current, start: "top 80%" },
//             }
//           );
//         }, containerRef);
//       });
//     });

//     return () => ctx && ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="min-h-screen bg-black text-white">
//       <div ref={logoRef} className="p-6 opacity-0">
//         <h1 className="text-4xl font-bold tracking-tighter">SIENA</h1>
//         <p className="text-xs tracking-widest">FILM PRODUCTION</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//         <div ref={directorImageRef} className="md:col-span-4 relative h-[600px] bg-black opacity-0">
//           <img src="/assets/icon.png" alt="Director Yair Qedar" className="object-cover w-full h-full opacity-80" />
//           <div ref={directorNameRef} className="absolute bottom-0 left-0 p-6 text-white opacity-0">
//             <p className="text-sm tracking-widest mb-1">DIRECTOR</p>
//             <h2 className="text-5xl font-bold tracking-tight name-text">YAIR QEDAR</h2>
//           </div>
//         </div>

//         <div ref={creditsRef} className="md:col-span-8">
//           <div className="grid grid-cols-2 border-b border-neutral-300">
//             <div className="credit-item p-6 relative border-r border-neutral-300 opacity-0">
//               <p className="text-xs tracking-widest mb-4">DIRECTOR/PRODUCER</p>
//               <h3 className="text-4xl font-bold tracking-tight name-text">YAIR QEDAR</h3>
//             </div>
//             <div className="credit-item p-6 relative opacity-0">
//               <p className="text-xs tracking-widest mb-4">DOP</p>
//               <h3 className="text-4xl font-bold tracking-tight name-text">URI ACKERMAN</h3>
//             </div>
//           </div>

//           <div ref={mainCrewRef} className="border-b border-neutral-300 opacity-0">
//             <div className="p-4 bg-black text-white">
//               <p className="text-xs tracking-widest text-center">MAIN CREW</p>
//             </div>
//             <div className="grid grid-cols-2 border-b border-neutral-300">
//               <div className="credit-item p-6 relative border-r border-neutral-300 opacity-0">
//                 <p className="text-xs tracking-widest mb-4">EDITOR</p>
//                 <h3 className="text-4xl font-bold tracking-tight name-text">NOIT GEVA</h3>
//               </div>
//               <div className="credit-item p-6 relative opacity-0">
//                 <p className="text-xs tracking-widest mb-4">LEAD ACTOR</p>
//                 <h3 className="text-4xl font-bold tracking-tight name-text">ITAY TIRAN</h3>
//               </div>
//             </div>
//             <div className="credit-item p-6 relative opacity-0">
//               <p className="text-xs tracking-widest mb-4">POST PRODUCER</p>
//               <h3 className="text-4xl font-bold tracking-tight name-text">TAMMY COHEN</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// its ok layout 


import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";


const projects = [
    { title: "GAMER STORE ECOMMERCE", image: "public/assets/projects/mobile Application.png" },
    { title: "THE BITCOIN", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679304/Screenshot_2025-01-12_162450_c9k96p.png" },
    { title: "THE SUNITA", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679376/Screenshot_2025-01-12_162343_bmgxvl.png" },
    { title: "SCHOOL WEBSITE", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736678759/school_ath5ys.png" },
    { title: "Token Generator AI", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679728/Screenshot_2025-01-12_163124_qfce7b.png" },
    { title: "Three js Website", image: "https://res.cloudinary.com/dpm3bum4n/image/upload/v1736679559/Screenshot_2025-01-12_162903_p1bxv0.png" },
  
  ];

  
export default function Portfolio() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const projectImageRef = useRef(null);
  const projectTitleRef = useRef(null);
  const projectDetailsRef = useRef(null);
  const mainProjectsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(projectImageRef.current, { opacity: 0, duration: 0.5, ease: "power2.out", onComplete: () => {
      projectImageRef.current.src = projects[currentIndex].image;
      projectTitleRef.current.innerText = projects[currentIndex].title;
      gsap.to(projectImageRef.current, { opacity: 1, duration: 0.5, ease: "power2.in" });
    }});
  }, [currentIndex]);




  useLayoutEffect(() => {
    let ctx;
    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const tl = gsap.timeline();

          tl.fromTo(
            logoRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
          );
          tl.fromTo(
            projectImageRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
            "-=0.5"
          );
          tl.fromTo(
            projectTitleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.8"
          );
          tl.fromTo(
            ".project-item",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" },
            "-=0.5"
          );

          gsap.utils.toArray(".project-name").forEach((text) => {
            gsap.fromTo(
              text,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: { trigger: text, start: "top 80%" },
              }
            );
          });

          gsap.fromTo(
            mainProjectsRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: mainProjectsRef.current, start: "top 80%" },
            }
          );
        }, containerRef);
      });
    });

    return () => ctx && ctx.revert();
  }, []);

  return (
    <div id="testimonials" ref={containerRef} className="min-h-screen  bg-red-800 text-white">
      <div ref={logoRef} className="p-6 opacity-0">
        <h1 className="text-4xl font-bold tracking-tighter">MY PROJECTS</h1>
        <p className="text-xs tracking-widest">PORTFOLIO SHOWCASE</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="md:col-span-4 relative h-[600px] bg-black">
          <img ref={projectImageRef} src={projects[0].image} alt="Project Image" className="object-contain w-full h-full opacity-80 transition-opacity duration-500" />
          <div className="absolute bottom-0 backdrop-blur-2xl bg-slate-800 left-0 p-6 text-white">
            <p className="text-sm tracking-widest mb-1">FEATURED PROJECT</p>
            <h2 ref={projectTitleRef} className="md:text-5xl text-3xl font-bold tracking-tight project-name">{projects[0].title}</h2>
          </div>
        </div>
      </div>

        <div ref={projectDetailsRef} className="md:col-span-8 ">
          <div className="grid grid-cols-2 border-b border-neutral-300">
            <div className="project-item p-6  relative border-r border-neutral-300 opacity-0">
              <p className="text-xs tracking-widest mb-4">TECH STACK</p>
              <h3 className="md:text-4xl text-xl font-bold tracking-tight uppercase project-name">MERN STACK, react-query, TAILWIND</h3>
            </div>
            <div className="project-item p-6 relative opacity-0">
              <p className="text-xs tracking-widest mb-4">ROLE</p>
              <h3 className="md:text-4xl text-2xl font-bold tracking-tight project-name">FULL-STACK DEVELOPER</h3>
            </div>
          </div>

          <div ref={mainProjectsRef} className="border-b border-neutral-300 opacity-0">
            <div className="p-4 bg-black text-white">
              <p className="text-xs tracking-widest text-center">MORE PROJECTS</p>
            </div>
            <div className="grid grid-cols-2 border-b border-neutral-300">
              <div className="project-item p-6 relative border-r border-neutral-300 opacity-0">
                <p className="text-xs tracking-widest mb-4">PROJECT</p>
                <h3 className="md:text-4xl text-2xl font-bold tracking-tight project-name">LOGISTICS PLATFORM</h3>
              </div>
              <div className="project-item p-6 relative opacity-0">
                <p className="text-xs tracking-widest mb-4">PROJECT</p>
                <h3 className="md:text-4xl text-2xl font-bold tracking-tight project-name">Microsoft App Store Ui</h3>
              </div>
            </div>
            
            <div className="project-item p-6 relative opacity-0">
              <p className="text-xs tracking-widest mb-4">PROJECT</p>
              <h3 className="md:text-4xl text-2xl font-bold tracking-tight project-name">REFERRAL PROGRAM UI</h3>
            </div>
            
          </div>
        </div>
      </div>
  );
}
