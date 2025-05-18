import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectSection from "./ProjectSection";

// Project data
const projects = [
  {
    id: 1,
    title: "Freelance Works",
    items: [
      {
        id: 1,
        title: "Vierafin Financial Advisory Services",
        description: "Vierafin Financial Advisory Services is designed to help clients secure their financial future with expert guidance. When clients submit their details through the platform, they receive an instant success message confirming their submission. The client information is then sent directly to the admin, who can promptly follow up via email or phone to provide personalized financial advice and support.",
        timeline: "May 2025 - Live",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://www.vierafin.in/",
      },
      {
        id: 2,
        title: "Collect to Fin – Daily Financial Collection Tracker",
        description: "Collect to Fin is an easy-to-use app that helps track daily financial collections in real time. It supports two user roles—Admin and Employee—allowing admins to manage data and employees to update daily collections. The app includes online payment options and automatically tallies collections at the end of each day, ensuring accurate and efficient financial management.",
        timeline: "April 2025 - Updating.. ",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://ctf-front-end.vercel.app/",
      },
      {
        id: 3,
        title: "Bio - Portfolio",
        description: "This portfolio serves as a comprehensive introduction for hiring teams and visitors to learn about my skills, experience, and projects. It provides all the essential information needed to evaluate my professional profile and includes direct contact options, making it easy to invite me for interviews or collaboration.",
        timeline: "Feb 2025 - Live",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://ramya-portfolio-chi.vercel.app/",
      },
      {
        id: 4,
        title: "Bank Document Editor",
        description: "Developed a robust software solution that enables users to edit bank documents efficiently. This project includes both frontend and backend development to deliver a smooth and seamless user experience, allowing for easy modification and management of financial documents.",
        timeline: "Jan 2025 - Update",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://bank-statement-editor.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    title: "UpComing Plans",
    items: [
      {
        id: 1,
        title: "Subash Matric Hr Sec School – Official Website",
        description: "Welcome to the official website of Subash Matric Higher Secondary School! This platform highlights our commitment to delivering quality education and promoting holistic development for students. The website showcases information about our academics, facilities, events, and various activities, serving as a comprehensive resource for students, parents, and the community.",
        timeline: "March 2025 - Live",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://subash-matric-hr-sec-school.vercel.app/",
      },
      {
        id: 2,
        title: "Gamers Store – Microsoft-Style Application UI Samples",
        description: "Gamers Store is a sleek UI project inspired by Microsoft application designs. It features clean, modern interfaces tailored for a gaming e-commerce platform, focusing on user-friendly navigation, product browsing, and an immersive shopping experience.",
        timeline: "Dec 2024 - Update",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://superlative-gumdrop-335004.netlify.app/",
      },
      {
        id: 3,
        title: "Three.js Website Modeling",
        description: "An engaging 3D website template built with Three.js, featuring interactive scrolling animations and visually attractive 3D models. This project showcases how modern web design can blend smooth animations with immersive 3D experiences to create stunning, dynamic interfaces.",
        timeline: "Nov 2024 - Live",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://landingsitebpycreation.vercel.app/",
      },
      {
        id: 4,
        title: "Bpy Creation – Startup Plan",
        description: "Bpy Creation is the initial concept and template for my future website focused on solar energy solutions. This project lays the foundation for a clean, modern platform designed to showcase innovative solar system products and services, reflecting the vision and branding of the upcoming startup.",
        timeline: "Aug 2024 - Updating..",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",

        link: "https://coming-soon-five-sepia.vercel.app/",
      },
      {
        id: 5,
        title: "The Coin Exchanger WEB-3",
        description: "The Coin Exchanger is a modern crypto exchange template that features live coin tracking and real-time ranking updates. It includes a user-friendly dashboard, referral bonus system, and essential tools for monitoring market performance—making it ideal for building a dynamic cryptocurrency trading platform.",
        timeline: "Sep 2024 - Oct 2024",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",

        link: "https://coin-generator-ai.vercel.app/",
      },
    ],
  },

  {
    id: 3,
    title: "Company-Based Contributions",
    items: [
      {
        id: 1,
        title: "Sunita Web3 Portfolio Website",
        description: "This Web3-based portfolio and exchange platform was developed by me during my time at Marma Fintech. The website integrates blockchain technology to showcase coin portfolios and supports crypto exchange functionality. It reflects modern Web3 design principles, focusing on security, transparency, and user-friendly interactions within the decentralized finance (DeFi) space.",
        timeline: "Nov 2024 - Dec 2024",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://sunitaland.vercel.app/",
      },
      {
        id: 2,
        title: "TheBitcoin Web3 – Crypto Exchange Story Platform",
        description: "TheBitcoin Web3 is a storytelling-based crypto exchange website inspired by real-world experiences in the cryptocurrency space. It features Golden Exchange Stories that engage users while introducing them to the concept of crypto trading through a fictional yet realistic narrative. The platform includes a welcome coin feature, user registration, and subscription options for accessing exclusive Bitcoin content. Built with Web3 technologies, it combines creative storytelling with secure blockchain integration",
        timeline: "oct 2024 - Nov 2024",
        image:
          "https://res.cloudinary.com/dpm3bum4n/image/upload/v1747556056/bpy1_ltkisx.jpg",
        link: "https://the-bitcoin-com-rdr1.vercel.app/",
      },
    ],
  },
];

export default function Home() {
  const mainRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clear existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className="min-h-screen bg-black  text-white overflow-hidden"
    >

        
      <div className="fixed top-0 left-0 p-8 z-10">
        <h1
          className="text-4xl md:text-[96px] tracking-wider "
          style={{
            fontFamily: "Marlboro",
          }}
        >
        
        </h1>
      </div>

      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </main>
  );
}
