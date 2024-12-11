'use client'
import  { useState } from "react";
import Certificate from "../components/Certificate"; // Import the Certificate component

type CertificateData = {
    title: string;
    certificateNumber: string;
    name: string;
    issueDate: string;
    organization: string;
  };
const CertificateSearch = () => {
    const [certificateData, setCertificateData] = useState<CertificateData | null>(null); // State to hold certificate data

  const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Simulate fetching certificate data (replace this with an API call if needed)
    const data = {
     title: 'Under Construction',
      certificateNumber: "12345",
      name: "John Doe",
      issueDate: "2024-12-10",
      organization: "Ekush Language Academy",
    };
    setCertificateData(data); // Set the certificate data
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-4xl border-4 border-blue-400 p-6 mt-20 mb-20 rounded-lg relative bg-white shadow-lg">
        {/* Decorative border */}
        <div className="absolute inset-0 border-2 border-blue-200 pointer-events-none"></div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">
            Certificate Number
          </h1>
        </div>
        <form className="flex items-center mb-10" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Certificate Number"
            className="flex-grow px-6 py-4 text-lg border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-black text-white px-10 py-4 text-lg rounded-r-md hover:bg-gray-800"
          >
            Search
          </button>
        </form>

        {/* Render Certificate Component */}
        <Certificate data={certificateData} />
      </div>
    </div>
  );
};

export default CertificateSearch;
