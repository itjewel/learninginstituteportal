"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function ClickableSlider() {
  const slides = [
    { title: 'Cyber Security', icon: '🔒', link: '/' },
    { title: 'Networking Technology', icon: '🌐', link: '/' },
    { title: 'Film & Media', icon: '🎥', link: '/' },
    { title: 'English Language', icon: '📝', link: '/' },
    { title: 'Robotics & Automation', icon: '🤖', link: '/' },
    { title: 'Artificial Intelligence', icon: '🧠', link: '/' },
    { title: 'Data Science', icon: '📊', link: '/' },
  ];

  return (
    <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
      <Swiper
        modules={[Navigation]} // Register the Navigation module
        navigation={true} // Enable navigation arrows
        slidesPerView={6} // Default: 6 slides at a time
        spaceBetween={20} // Space between slides
        loop={true} // Enable infinite loop
        breakpoints={{
          0: { slidesPerView: 1 }, // Show 1 slide on very small screens (mobile)
          640: { slidesPerView: 2 }, // Show 2 slides for small screens
          768: { slidesPerView: 3 }, // Show 3 slides for medium screens
          1024: { slidesPerView: 4 }, // Show 4 slides for large screens
          1280: { slidesPerView: 6 }, // Show 6 slides for extra-large screens
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link
              href={slide.link}
              className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{slide.icon}</div>
              <div className="text-lg font-semibold text-gray-600">{slide.title}</div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
