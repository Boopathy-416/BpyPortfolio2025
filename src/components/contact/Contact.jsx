import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../App.css";
import { submitContactForm } from "../../api";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const formContainerRef = useRef(null);
  const formFieldsRef = useRef([]);
  const servicesRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // ✅ State to store form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    socialLink: "",
  });

// bg ui

    useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  // ✅ State for selected services
  const [selectedServices, setSelectedServices] = useState([]);

  const services = [
    "PORTFOLIO WEBSITE",
    "BRANDING",
    "LINKEDIN PROFILE SETUP",
    "WEB DESIGN",
    "MERN STACK DEVLOPMENT",
    "UI/UX",
    "SOCIAL MEDIA MAINTENANCE",
  ];

  // ✅ Animation on scroll
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

  // ✅ Form value change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Service checkbox change
  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedServices((prev) => [...prev, value]);
    } else {
      setSelectedServices((prev) => prev.filter((s) => s !== value));
    }
  };

  // inside component
  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      services: selectedServices,
    };

    try {
      const result = await submitContactForm(finalData);
      console.log("Server Response:", result);

      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 10000);

      // Optional: reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        socialLink: "",
      });
      setSelectedServices([]);
    } catch (err) {
      console.error("Form submission failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="relative flex z-1 overflow-hidden flex-col md:flex-row w-full min-h-screen bg-black text-white"
    >
            <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white opacity-50 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 1}s`,
            }}
          />
        ))}
      </div>
      <div className="md:w-1/3 p-8 md:py-40 md:absolute md:h-screen  flex flex-col justify-start">
        <h1 className="text-5xl md:text-7xl font-thin  mb-12 md:px-5 font-['robo']  ">
          CONTACT
        </h1>
        <div
          className="space-y-4 border-2  border-green-500 px-3 py-4 tracking-widest  text-sm md:py-4 md:px-8 "
          style={{
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
            fontFamily: "PermanentMarker",
          }}
        >
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
          <div class="  overflow-auto flex  items-center justify-center shadow-lg">
            <p
              class="text-sm sm:text-base px-2 hover:bg-[#222222] tracking-widest font-['PermanentMarker'] md:text-start "
              style={{
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              <h5 className="font-black w-1/2 flex  justify-center mx-20 my-2 items-center border-y-4 text-center">
                Work together
              </h5>
              Whether you're a fresh startup ready to shape your identity or an
              established brand looking for a digital revamp, we'd love to dive
              into your story. With over best years of experience in web design,
              branding, art direction, and illustration, we specialize in
              delivering innovative and creative work. we're eager to bring
              unique and visionary ideas to your project. Let's create something
              extraordinary together!
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 md:ml-[44.333%] p-8 md:p-16">
        <div ref={formContainerRef} className="max-w-3xl">
          <h2 className="text-3xl font-['robot'] md:text-2xl md:py-4 font-bold mb-4">
            LET US KNOW WHAT YOU'RE LOOKING FOR →<br /> AND WE'LL BE IN TOUCH. ☺
          </h2>

          <form onSubmit={handleSubmit} className="space-y-10 font-['robo']">
            <div ref={addToFieldRefs}>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                type="text"
                placeholder="FIRST & LAST NAME"
                className="w-full bg-transparent text-sm border-b text-[#aef45d] capitalize border-white/50 py-2 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            <div ref={addToFieldRefs}>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                placeholder="EMAIL"
                className="w-full bg-transparent text-sm border-b text-[#aef45d] capitalize border-white/50 py-2 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            <div ref={addToFieldRefs}>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="text"
                placeholder="PHONE NUMBER"
                className="w-full bg-transparent text-sm border-b text-[#aef45d] capitalize border-white/50 py-2 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            <div ref={addToFieldRefs}>
              <input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                type="text"
                placeholder="COMPANY NAME"
                className="w-full bg-transparent text-sm border-b text-[#aef45d] capitalize border-white/50 py-2 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            <div ref={addToFieldRefs}>
              <input
                name="socialLink"
                value={formData.socialLink}
                onChange={handleInputChange}
                type="text"
                placeholder="LINK TO YOUR SOCIAL ACCOUNT"
                className="w-full bg-transparent text-sm border-b text-[#aef45d] capitalize border-white/50 py-2 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            {/* ✅ Services Checkboxes */}
            <div ref={servicesRef} className="mt-16 font-['robo']">
              <h3 className="text-2xl font-bold mb-6">SERVICES NEEDED</h3>
              <div className="grid text-xs grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <label
                    key={index}
                    className="service-item text-xs flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      value={service}
                      onChange={handleServiceChange}
                      className="accent-green-400"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* ✅ Submit Button */}
            <div className="pt-8 font-['robo']">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-xs md:text-sm text-black font-semibold hover:bg-gray-200 transition-colors"
              >
                SUBMIT
              </button>
              {showThankYou && (
                <div className="absolute text-xs md:bottom-10 md:left-4 tracking-widest md:px-4 p-1 text-green-500">
                  <b className="text-xl font-light ">M</b>essage sent! We’ve
                  received your details via email.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
