'use client'
import { useState } from "react";
import Certificate from "../components/Certificate"; // Import the Certificate component

type CertificateData = {
  title: string;
  certificateNumber: string;
  name: string;
  issueDate: string;
  organization: string;
};

const CertificateSearch = () => {
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate fetching certificate data (replace this with an API call if needed)
    const data = {
      title: "Under Construction",
      certificateNumber: "12345",
      name: "John Doe",
      issueDate: "2024-12-10",
      organization: "Ekush Language Academy",
    };
    setCertificateData(data);
  };

  return (
    <div className="flex justify-center items-center px-4 text-gray-600 bg-gray-50">
      <div className="w-full max-w-4xl border-4 border-blue-400 p-6 mt-10 mb-10 rounded-lg bg-white shadow-lg relative">
        {/* Decorative border */}
        <div className="absolute inset-0 border-2 border-blue-200 pointer-events-none"></div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-700">
            Certificate Number
          </h1>
        </div>

        {/* Form Section */}
        <form className="flex flex-col sm:flex-row items-stretch gap-4 mb-10" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Certificate Number"
            className="flex-grow px-4 py-3 text-base md:text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 text-base md:text-lg rounded-md hover:bg-gray-800 transition"
          >
            Search
          </button>
        </form>

        {/* Certificate Component */}
        <Certificate data={certificateData} />
      </div>
    </div>
  );
};

export default CertificateSearch;
