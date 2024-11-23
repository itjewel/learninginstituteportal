import React from "react";
import Link from "next/link";

const NavBar = () => {
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
      <nav className="bg-blue-800 text-white h-16 flex items-center">
  <div className="container mx-auto flex items-center px-6">
    {/* Logo */}
    <div className="text-2xl font-bold">EKUSH-LANGUAGE</div>
    
    {/* Menu */}
    <ul className="flex space-x-4 ml-20">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

    </header>
  );
};

export default NavBar;
