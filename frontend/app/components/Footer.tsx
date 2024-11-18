import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Courses Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              {[
                "Spanish",
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Russian",
                "Danish",
                "Dutch",
                "Indonesian",
                "Norwegian",
                "Polish",
                "Swedish",
                "Turkish",
              ].map((course, index) => (
                <li key={index} className="text-gray-700 hover:underline">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* More Babbel Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">More EkushLanguage</h3>
            <ul className="space-y-2">
              {[
                "Magazine",
                "Podcasts",
                "Tech Blog",
                "For Business",
                "Affiliate Program (USA)",
                "Affiliate Program (Europe)",
                "As a Gift",
                "Refer a Friend",
                "Student Discount",
                "Military Discount",
                "Healthcare Workers Discount",
                "Educators Discount",
              ].map((item, index) => (
                <li key={index} className="text-gray-700 hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Meet the Exec",
                "The App",
                "Live",
                "Prices",
                "Press",
                "Careers",
                "Help / FAQ",
                "Customer Service",
                "Accessibility Compliance",
                "Mobile Terms",
              ].map((item, index) => (
                <li key={index} className="text-gray-700 hover:underline">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-200 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-sm text-gray-600">
          <p>© 2024 EkushLanguage GmbH ・ Imprint ・ Terms & Conditions ・ Privacy Statement</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-600">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
