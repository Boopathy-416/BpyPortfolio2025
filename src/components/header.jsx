import { useState } from "react";
import { Phone } from "lucide-react";

export default function Navba() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50 bg-black w-full">

      {/* 🔝 NAVBAR */}
      <div className="flex items-center justify-between px-6 py-4 text-white">

        {/* 🔹 Left Logo */}
        <h1 className="text-lg font-bold tracking-widest">
          BPY CREATIONS
        </h1>

        {/* 🔹 Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-sm tracking-wider"
        >
          {open ? "✕ MENU" : "+ MENU"}
        </button>

        {/* 🔹 Right Profile + Call */}
        <div className="flex items-center gap-3">
          <img
            src="public/assets/Logo.png"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div className="bg-white text-black rounded-full p-2 cursor-pointer hover:scale-110 transition">
            <Phone size={16} />
          </div>
        </div>
      </div>

      {/* 🔻 DROPDOWN CARD */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[90%] md:w-[400px] 
        bg-black text-white rounded-xl shadow-2xl p-6 transition-all duration-500
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-4 text-center text-lg">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
}