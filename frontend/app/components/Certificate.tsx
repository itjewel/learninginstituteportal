'use client'
import React from "react";

// Define the type for the props
type CertificateProps = {
  data: {
    title: string;
    certificateNumber: string;
    name: string;
    issueDate: string;
    organization: string;
  } | null; // Allow the `data` prop to be null
};

const Certificate: React.FC<CertificateProps> = ({ data }) => {
  if (!data) return null; // Do not render anything if no data is passed

  return (
    <div className="mt-10 border-2 border-dashed border-blue-400 p-6 rounded-lg bg-blue-50 text-gray-600">
      <h1 className="text-3xl text-red-700 text-center font-bold">{data.title}</h1>
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-4">
        Certificate of Achievement
      </h2>
      <p className="text-center text-lg text-gray-600">This certifies that</p>
      <p className="text-center text-3xl font-semibold text-gray-800 mt-2">
        {data.name}
      </p>
      <p className="text-center text-lg text-gray-600 mt-4">
        has successfully completed the requirements for
      </p>
      <p className="text-center text-xl text-gray-800 mt-2">
        Certificate Number: {data.certificateNumber}
      </p>
      <p className="text-center text-lg text-gray-600 mt-4">
        Issued on: {data.issueDate}
      </p>
      <p className="text-center text-lg text-gray-600 mt-2">
        Authorized by: {data.organization}
      </p>
    </div>
  );
};

export default Certificate;
