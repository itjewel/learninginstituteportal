import React, { useState, useEffect } from "react";

function TopNav() {
  const text ="মানসিক বিকাশ ও সংস্কৃতির সংযোগ – একুশ ল্যাঙ্গুয়েজ একাডেমির সাথে ভাষা শিক্ষার নতুন দিগন্ত উন্মোচন করুন!";

  const [displayedText, setDisplayedText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let animationTimeout: string | number | NodeJS.Timeout | undefined;
    let animationIndex = 0;

    const startAnimation = () => {
      // Clear displayed text for new animation
      setDisplayedText("");
      animationIndex = 0;

      const interval = setInterval(() => {
        // Append one character at a time
        if (animationIndex < text.length) {
          setDisplayedText((prev) => prev + text.charAt(animationIndex));
          animationIndex++;
        } else {
          clearInterval(interval); // Stop the animation
          animationTimeout = setTimeout(() => {
            setIsAnimating(false); // Allow animation to restart after a delay
          }, Math.random() * 3000 + 2000); // Random delay before restarting
        }
      }, 100); // Adjust speed as needed
    };

    if (!isAnimating) {
      setIsAnimating(true);
      startAnimation();
    }

    // Cleanup intervals and timeouts
    return () => {
      clearTimeout(animationTimeout);
    };
  }, [isAnimating, text]);

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-gray-800 text-white py-2 hidden sm:flex">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-sm animate-typing">{displayedText}</div>
          <div className="text-sm">
          Phone: +8802223315145 | Mobile: +8801711791905 | 01711791908
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
