'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopNav from "./home/TopNav";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoImage = "/images/logo_transparent.png"; // Path relative to the 'public' folder

  return (
    <header>
      <TopNav />

      {/* Main Navbar */}
      <nav
        className="bg-blue-800 text-white"
      >
        <div className="mx-auto flex items-center justify-between h-16 px-6 relative">
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
            className={`absolute md:static left-0 w-full md:w-auto z-40 transition-all duration-300 ease-in-out ${
              menuOpen
                ? "opacity-100 visible top-full"
                : "opacity-0 invisible md:opacity-100 md:visible"
            } md:flex`}
            style={{
              backgroundColor: menuOpen ? "rgba(63, 63, 70, 0.9)" : "transparent",
            }}
          >
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/"
                className="block px-4 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/about"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/services"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/exam"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Exam
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/success"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Success
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/gallery"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/tutorials"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Tutorials
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/news"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                News
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/certificate-verification"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Certificate
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/register"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
              >
                Admission
              </Link>
            </li>
            <li className="border-b border-blue-800 md:border-none">
              <Link
                href="/login"
                className="block px-4 py-2 hover:bg-blue-700"
                onClick={() => setMenuOpen(false)}
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
