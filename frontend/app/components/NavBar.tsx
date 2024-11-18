import React from "react";

const NavBar = () => {
  return (
    <header>
      {/* Top Navbar */}
      <div className="bg-red-800 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-sm">Empowering Minds, Bridging Cultures – Learn Languages with EkushLanguage!
          </div>
          <div className="text-sm">+880-17194-34163</div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-blue-800 text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-2xl font-bold">EKUSH-LANGUAGE</div>
          <ul className="flex space-x-6">
            <li className="group relative">
              <a href="#" className="hover:underline">
                HIGHER EDUCATION
              </a>
              <div className="absolute top-10 left-0 hidden w-64 bg-white text-black shadow-lg group-hover:block">
                <ul className="p-4">
                  <li className="hover:bg-gray-200 p-2">
                    <a href="#">University Placement Service</a>
                  </li>
                  <li className="hover:bg-gray-200 p-2">
                    <a href="#">University Pathway Programs</a>
                  </li>
                  <li className="hover:bg-gray-200 p-2">
                    <a href="#">University Pathway in Germany</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="hover:underline">
                COURSES
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                DESTINATIONS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ABOUT EKUSH-LANGUAGE
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
