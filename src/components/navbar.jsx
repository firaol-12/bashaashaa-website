import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo/Bashaashaa Logo colored-01.png"

export default function Navbar() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu on click
  };

  return (
    <nav className="w-full shadow-lg h-16 text-white fixed top-0 left-0 right-0 flex items-center z-20 bg-black">
      <div className="w-full flex justify-between items-center px-6 md:px-32">
        {/* Logo */}
        <div className="">
          <img src={logoImg} className="h-50 w-50"/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg mr-5">
          {isLandingPage ? (
            <>
              <button className="cursor-pointer hover:text-[rgb(11,59,91)] text-bold" onClick={() => scrollToSection("home")}>Home</button>
              <button className="cursor-pointer hover:text-[rgb(11,59,91)] text-bold" onClick={() => scrollToSection("team")}>About</button>
              <button className="cursor-pointer hover:text-[rgb(11,59,91)] text-bold" onClick={() => scrollToSection("services")}>Services</button>
              <button className="cursor-pointer hover:text-[rgb(11,59,91)] text-bold" onClick={() => scrollToSection("gallery")}>Gallery</button>
              <button className="cursor-pointer hover:text-[rgb(11,59,91)] text-bold" onClick={() => scrollToSection("contact")}>Contact</button>
            </>
          ) : (
            <Link className="cursor-pointer hover:text-[rgb(11,59,91)]" to="/">Home</Link>
          )}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {/* Hamburger Icon */}
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black w-full text-center py-4 absolute top-16 left-0 z-10">
          {isLandingPage ? (
            <div className="flex flex-col gap-4 text-lg">
              <button onClick={() => scrollToSection("home")}>Home</button>
              <button onClick={() => scrollToSection("team")}>About</button>
              <button onClick={() => scrollToSection("services")}>Services</button>
              <button onClick={() => scrollToSection("gallery")}>Gallery</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </div>
          ) : (
            <Link to="/">Home</Link>
          )}
        </div>
      )}
    </nav>
  );
}
