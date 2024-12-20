"use client";
import Link from "next/link";

export default function BannerComponent() {
    return (
      <div
      style={{
        backgroundImage: "url('/images/logo_transparent.png')",
        backgroundSize: "auto 80vh", // Sets the height of the background image
        backgroundRepeat: "no-repeat", // Ensures no repeating
        backgroundPosition: "center", // Centers the background image
      }}
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
  
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Innovate, Create, Elevate: Be Limitless!
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn To Communicate With The World Around You.
          </p>
          <Link href='/register' className="bg-green-500 px-8 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition">
            REGISTER NOW
          </Link>
        </div>
      </div>
    );
  }
  