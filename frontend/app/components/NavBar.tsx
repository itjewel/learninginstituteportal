'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoImage = "/images/logo.jpg"; // Path relative to the 'public' folder

  return (
    <header>
      {/* Top Navbar */}
      <div className="bg-red-800 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-sm">
            Empowering Minds, Bridging Cultures – Learn Languages with EkushLanguage!
          </div>
          <div className="text-sm">+880-17194-34163</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-4 cursor-pointer">
              <Image src={logoImage} width={50} height={50} alt="Logo" />
              <div className="text-xl font-bold">Ekush Language</div>
            </div>
          </Link>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <i className="fas fa-times"></i> // Close icon
            ) : (
              <i className="fas fa-bars"></i> // Hamburger icon
            )}
          </button>

          {/* Menu */}
          <ul
            className={`items-center absolute md:static bg-blue-800 top-16 left-0 w-full md:w-auto z-10 transition-all duration-300 ease-in-out ${
              menuOpen || "md:flex"
            } ${menuOpen ? "opacity-100 visible mt-14" : "opacity-0 invisible md:opacity-100 md:visible"}`}
          >
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Home
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                About
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Contact
              </Link>              
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Tutorial
              </Link>              
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Gallery
              </Link>              
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Login
              </Link>              
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
