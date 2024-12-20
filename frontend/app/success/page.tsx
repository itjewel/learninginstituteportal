'use client';

import Image from 'next/image';

const CareerSuccessPage = () => {

  return (
    <div className="min-h-screen bg-gray-50 px-4 flex flex-col justify-center items-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-4">
          ক্যারিয়ার সাফল্য <br />
          <span className="text-gray-600 text-2xl">ভাষাগত দক্ষতার মাধ্যমে পেশাদার সফলতা</span>
        </h1>

        {/* Success Image */}
        <div className="flex justify-center my-6">
          <Image
            src="/images/gallery/4.jpg" // Make sure the image exists in public/images/gallery
            alt="Career Success"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="text-gray-700 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">আমাদের ক্যারিয়ার সাফল্যের পথচলা</h2>
          <p>
            একুশ ল্যাংগুয়েজ একাডেমি শিক্ষার্থীদের সফল ক্যারিয়ার গঠনে গুরুত্বপূর্ণ ভূমিকা পালন করছে। 
            আমরা আধুনিক শিক্ষা পদ্ধতি এবং ভাষাগত প্রশিক্ষণের মাধ্যমে পেশাদারদের জন্য নতুন দিগন্তের দ্বার 
            খুলে দিয়েছি। আমাদের প্রশিক্ষণ পোগ্রামগুলো তাদেরকে প্রতিযোগিতামূলক কর্মজীবনের জন্য প্রস্তুত করে।
          </p>
        </div>

      
      </div>
    </div>
  );
};

export default CareerSuccessPage;
