import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <p className="text-gray-400 leading-6">
            একুশ ল্যাংগুয়েজ একাডেমি ভাষা শিক্ষার সুযোগ প্রদান করে, যেখানে রয়েছে জাপানি, কোরিয়ান, চাইনিজ, জার্মান সহ আরও অনেক ভাষা। আমাদের কমিউনিটিতে যোগ দিন, যেখানে শিখার মাধ্যমে স্বপ্ন পূরণ সম্ভব।
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
            {[
              { name: "News", link: "/news" },
              { name: "Student Registration", link: "/register" },
              { name: "Privacy Policy", link: "/privacy-policy" },
              { name: "Refund and Returns Policy", link: "/refund-policy" },
            ].map((page, index) => (
              <li key={index}>
                <Link
                  href={page.link}
                  className="text-gray-400 hover:underline hover:text-gray-300 transition"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                **ঠিকানা:** ২৭/১, ইন্দিরা রোড, লেগুনা স্ট্যান্ড, ফার্মগেট, ঢাকা।  
                (রুপালী ব্যাংকের পূর্ব পাশের বিল্ডিং)
              </li>
              <li>
                **ইমেইল:**{" "}
                <Link
                  href="mailto:infoekush@gmail.com"
                  className="hover:text-blue-500"
                >
                  infoekush@gmail.com
                </Link>
              </li>
              <li>
                **মোবাইল:**{" "}
                <Link href="tel:+8801711791905" className="hover:text-blue-500">
                  +8801711791905
                </Link>{" "}
                /{" "}
                <Link href="tel:+8801711791908" className="hover:text-blue-500">
                  +8801711791908
                </Link>
              </li>
              <li>
                **ফোন:**{" "}
                <Link href="tel:+8802223315145" className="hover:text-blue-500">
                  +8802223315145
                </Link>
              </li>
              <li>
                **ওয়েবসাইট:**{" "}
                <Link
                  href="https://ekushlanguage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  ekushlanguage.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-gray-500">
          <p>© 2024 Ekush Language Academy </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link target="_blank" href="https://www.facebook.com/JahirEkush21" className="hover:text-blue-500">
              <i className="fab fa-facebook"></i>
            </Link>
          
            <Link target="_blank" href="https://www.youtube.com/@EkushLanguage" className="hover:text-blue-500">
              <i className="fab fa-youtube"></i>
            </Link>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
