import React from "react";
import "../App.css";

export default function Navbar() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <header className="fixed z-50 w-full bg-[transparent] py-2 md:py-1 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-1">
        {/* Left section with current year */}
        <div className="text-start">
          <span className="inline-block px-4 py-1 border border-[#ececec] text-[#ececec] rounded-full text-sm">
            {currentYear}-{currentYear + 1} {/* Display current year and next year */}
          </span>
        </div>

        {/* Right section with 'GET IN TOUCH' button */}
        <div className="flex items-center justify-end">
          <a
            href="#footer"
            className="hidden text-xs golden-btn relative overflow lg:block"
          >
            GET IN TOUCH
            <div className="spark"></div>
          </a>
        </div>
      </div>
    </header>
  );
}
