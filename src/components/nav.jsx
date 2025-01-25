import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#00000037]  text-white shadow-md">
      <div className="container mx-auto flex items-center justify-end px-4 py-3">
        <a
         
          href="#footer"
          className=" hidden golden-btn relative overflow lg:block "
        >
          GET IN TOUCH
          <div className="spark"></div>
        </a>
      </div>
    </header>
  );
}
