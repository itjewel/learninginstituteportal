'use client'
import { useState } from "react";

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

const Gallery: React.FC = () => {
  const [images] = useState<ImageData[]>([
    { id: 1, src: "/images/gallery/1.jpg", alt: "Image 1" },
    { id: 2, src: "/images/gallery/2.jpg", alt: "Image 2" },
    { id: 3, src: "/images/gallery/3.jpg", alt: "Image 3" },
    { id: 4, src: "/images/gallery/4.jpg", alt: "Image 4" },
    { id: 5, src: "/images/gallery/5.jpg", alt: "Image 5" },
    { id: 6, src: "/images/gallery/6.jpg", alt: "Image 6" },
    { id: 7, src: "/images/gallery/7.jpg", alt: "Image 7" },
    { id: 8, src: "/images/gallery/8.jpg", alt: "Image 8" },
    { id: 9, src: "/images/gallery/9.jpg", alt: "Image 9" },
    { id: 10, src: "/images/gallery/10.jpg", alt: "Image 10" },
    { id: 11, src: "/images/gallery/11.jpg", alt: "Image 11" },
    { id: 12, src: "/images/gallery/12.jpg", alt: "Image 12" },
    { id: 13, src: "/images/gallery/13.jpg", alt: "Image 13" },
    { id: 14, src: "/images/gallery/14.jpg", alt: "Image 14" },
    { id: 15, src: "/images/gallery/15.jpg", alt: "Image 15" },
    { id: 16, src: "/images/gallery/16.jpg", alt: "Image 16" },
    { id: 17, src: "/images/gallery/17.jpg", alt: "Image 17" },
    { id: 18, src: "/images/gallery/18.jpg", alt: "Image 18" },
    { id: 19, src: "/images/gallery/19.jpg", alt: "Image 19" },
    { id: 20, src: "/images/gallery/20.jpg", alt: "Image 20" },
    { id: 21, src: "/images/gallery/21.jpg", alt: "Image 21" },
    { id: 22, src: "/images/gallery/22.jpg", alt: "Image 22" },
    { id: 23, src: "/images/gallery/23.jpg", alt: "Image 23" },
    { id: 24, src: "/images/gallery/24.jpg", alt: "Image 24" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {images.map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
