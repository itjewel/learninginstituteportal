'use client'
import Image from 'next/image';

export default function ITExpertSection() {
  return (
    <div className="bg-gray-50 py-10 text-gray-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              World-Renowned IT Expert <br /> Making Organization
            </h2>
            <p className="text-gray-600 mb-6">
              We believe in skills gained through practical projects. A great number of people struggle to start their career in the tech field for only having conceptual knowledge. Creative IT makes sure to provide hands-on training to prepare you for job markets. Our course module contains projects that are designed to track your progress. During the course, you will be able to make a portfolio yourself to showcase your practical skills to potential employers.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                Browse Course
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src="/images/home/itexpart.webp" // Replace with the correct image path
              alt="IT Experts"
              width={600} // Adjust width as per your design
              height={400} // Adjust height as per your design
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
          <div className="text-center">
            <p className="text-2xl font-bold">63,700+</p>
            <p className="text-gray-500">Successful Students</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">30,000+</p>
            <p className="text-gray-500">Expert Freelancers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">20,000+</p>
            <p className="text-gray-500">Skilled Job Holders</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">419+</p>
            <p className="text-gray-500">Industry Experts</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">91%</p>
            <p className="text-gray-500">Success Ratio</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">700+</p>
            <p className="text-gray-500">Companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
