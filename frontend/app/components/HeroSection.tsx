import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          OUR POPULAR LANGUAGE DESTINATIONS
        </h1>
        <p className="text-lg text-gray-600 mb-12">
         Explore a large variety of Korean, Japanese, English, and German language schools abroad in eight countries around the world.
        </p>
{/* Construction Notice */}
<div className="flex flex-col items-center">
        <h1 className="text-pink-200 text-3xl font-bold mb-4">
          This site is under construction
        </h1>
        <p className="text-gray-400 text-lg">
          We are working hard to launch soon. Stay tuned!
        </p>
      </div>
     
      </div>
    </section>
  );
};

export default HeroSection;
