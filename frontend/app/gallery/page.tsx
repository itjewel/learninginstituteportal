'use client';

import { useState } from "react";
import Image from "next/image";

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
  ]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md aspect-w-1 aspect-h-1"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
