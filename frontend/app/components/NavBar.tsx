'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoImage = "/images/logo_transparent.png"; // Path relative to the 'public' folder

  return (
    <header>
      {/* Top Navbar */}
      <div className="bg-red-800 text-white py-2 hidden sm:flex">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-sm">
            Empowering Minds, Bridging Cultures – Learn Languages with EkushLanguage!
          </div>
          <div className="text-sm">
            Mobile: +8801711791905 / +8801711791908 | Phone: +8802223315145
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-blue-800 text-white">
        <div className="mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-4 cursor-pointer">
              <Image src={logoImage} width={80} height={80} alt="Logo" />
              <div className="text-xl font-bold">Ekush Language Academy</div>
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
            className={`absolute md:static bg-blue-800 top-16 left-0 w-full md:w-auto z-50 transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"
            } md:flex`}
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
                href="/services"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Services
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/exam"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Exam
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/success"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Success
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/gallery"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Gallery
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/tutorials"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Tutorials
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/news"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                News
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
                href="/certificate-verification"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Certificate
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/register"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)} // Close menu on link click (mobile only)
              >
                Admission
              </Link>
            </li>
            <li className="border-b border-blue-700 md:border-none">
              <Link
                href="/login"
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
