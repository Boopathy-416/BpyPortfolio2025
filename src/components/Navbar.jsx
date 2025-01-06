import React, { useState} from "react";
import { Link } from "react-router-dom";
import NotificationDropdown from '../functionality/notification'
import '../App.css' 


const navigationItems = [
  { title: "ABOUT ME", to: "/#about" },
  { title: "PORTFOLIO", to: "/#portfolio" },
  { title: "SKILLS", to: "/#skills" },
  { title: "SERVICES", to: "/#services" },
  { title: "TESTIMONIALS", to: "/#testimonials" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState(4); // Example notification count
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility

  // const notificationRef = useRef(null); // Ref to the notification dropdown container

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };



  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full left-0 z-40 w-full flex-col bg-white lg:relative lg:top-auto lg:left-auto lg:w-auto lg:flex lg:flex-row lg:gap-6 lg:bg-transparent lg:items-center`}
        >
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 text-sm font-medium tracking-widest text-gray-700 transition hover:text-gray-500 lg:py-0 lg:px-0"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Notification Icon */}
        <div className="relative flex items-end justify-center" >
          <button
            className="text-gray-700 hover:text-black"
            onClick={toggleDropdown} 
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11c0-3.042-1.65-5.623-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.65 5.377 6 7.958 6 11v3c0 .417-.162.83-.405 1.125L4 17h11zM8.5 20a2.5 2.5 0 005 0h-5z"
              />
            </svg>
          </button>

          {/* Notification Badge */}
          {notifications > 0 && (
            <span className="absolute top-0 right-0  pointer-events-none inline-flex items-center justify-center w-4 h-3 text-xs font-semibold text-white bg-red-600 rounded-full">
              {notifications}
            </span>
          )}

          {/* Notification Dropdown */}
          {dropdownVisible && <NotificationDropdown />}
        </div>

        <Link
          to="/#contact"
          
          className=" hidden golden-btn relative overflow lg:block "
        >
          
          GET IN TOUCH
          <div className="spark"></div>
        </Link>
      </div>
    </header>
  );
}
