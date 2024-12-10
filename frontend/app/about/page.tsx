import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* About Section */}
      <section className="py-16 px-8 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600">আমাদের পরিচিতি</h2>
        <p className="text-lg leading-relaxed mb-4 max-w-3xl mx-auto">
          একুশ ল্যাংগুয়েজ একাডেমি একটি প্রিমিয়ার শিক্ষা প্রতিষ্ঠান যা ভাষাগত দক্ষতা ও প্রশিক্ষণে বিশেষজ্ঞ। 
          আমরা গর্বের সাথে ভাষা শেখার মাধ্যমে মানুষকে তাদের ব্যক্তিগত এবং পেশাদারী দক্ষতা বৃদ্ধি করতে সহায়তা করি। 
          আমাদের মূল লক্ষ্য হল ভাষাগত দক্ষতার মাধ্যমে পেশাদারিত্ব এবং স্বনির্ভরতা নিশ্চিত করা।
        </p>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          আমাদের প্রশিক্ষণ প্রোগ্রামে অন্তর্ভুক্ত রয়েছে ইংরেজি, জাপানি, কোরিয়ান, জার্মান, আরবি, এবং আরও অনেক ভাষার উপর দক্ষতা অর্জনের সুযোগ।
          পাশাপাশি, আমরা আধুনিক প্রযুক্তি এবং পেশাদার প্রশিক্ষণের মাধ্যমে শিক্ষার্থীদের কর্মজীবনের জন্য প্রস্তুত করি।
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-8 lg:px-20 bg-blue-50">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">আমাদের সেবা</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">ভাষাগত প্রশিক্ষণ</h3>
            <p>ইংরেজি, জাপানি, কোরিয়ান, আরবি এবং অন্যান্য ভাষার উপর দক্ষতা অর্জনের সুযোগ।</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">কম্প্রিহেনসিভ ট্রেনিং</h3>
            <p>ভিডিও এডিটিং, ওয়েব ডেভেলপমেন্ট, এবং আইটি সম্পর্কিত কোর্স।</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">বিশেষ সাপোর্ট</h3>
            <p>২৪/৭ শিক্ষক সাপোর্ট, ভিসা প্রসেসিং সহায়তা এবং রেগুলার ক্লাস অ্যাসেসমেন্ট।</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-8 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600">কেন আমাদের বেছে নিবেন?</h2>
        <ul className="list-none space-y-6 text-lg leading-relaxed max-w-4xl mx-auto">
          <li>বিশেষ কোর্স এবং পেশাদারী ট্রেনিং প্রদান।</li>
          <li>অভিজ্ঞ ও দক্ষ শিক্ষক দ্বারা পরিচালিত ক্লাস।</li>
          <li>বিশ্বমানের প্রযুক্তি এবং প্রয়োজনীয় সুবিধা।</li>
          <li>ভিসা প্রসেসিং সহায়তা এবং লাইব্রেরি সুবিধা।</li>
          <li>সহজতর পরিবেশ এবং আকর্ষণীয় প্যাকেজ।</li>
        </ul>
      </section>

      {/* Managing Director's Message */}
      <section className="py-16 px-8 lg:px-20 bg-blue-50">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">ব্যবস্থাপনা পরিচালকের বার্তা</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <Image
            src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/459323012_386263607851938_8215166850069571157_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeELWAwl0hwN91jmI6Aoxh1PI26BXtuJ3_kjboFe24nf-VyHYLpPmmbl2oX7E3pZmyNmHAfFzxYyD5bFBdo08Qop&_nc_ohc=FOtCZqzg360Q7kNvgEfk2F-&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=ARCoaxMXGQ2uLpSCAcwhJfr&oh=00_AYBNnE6UcY7BurzXf1C6gyZRC71ak8GXxF6uB5szc3Edsw&oe=675D7DC6"
            alt="Managing Director"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg"
          />
          <div>
            <p className="text-lg leading-relaxed">
              আমি, একুশ ল্যাংগুয়েজ একাডেমির ব্যবস্থাপনা পরিচালক, আমাদের শিক্ষার্থীদের ভবিষ্যৎ উন্নত করার জন্য প্রতিশ্রুতিবদ্ধ। 
              আমরা একটি সহায়ক এবং উন্নত শিক্ষার পরিবেশ তৈরি করেছি যেখানে প্রত্যেকে তাদের দক্ষতা এবং স্বপ্নের লক্ষ্য অর্জন করতে পারে।
            </p>
            <p className="font-bold mt-6 text-xl text-blue-500">জহির একুশ</p>
            <p>ব্যবস্থাপনা পরিচালক, একুশ ল্যাংগুয়েজ একাডেমি।</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-8 lg:px-20">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-600 text-center">আমাদের লক্ষ্য ও ভিশন</h2>
        <p className="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
          <strong>লক্ষ্য:</strong> শিক্ষার্থীদের জন্য একটি উন্নত এবং আকর্ষণীয় পরিবেশ তৈরি করা যেখানে তারা নিজ নিজ দক্ষতার শীর্ষ পর্যায়ে পৌঁছাতে পারে।
        </p>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          <strong>ভিশন:</strong> বিশ্বমানের শিক্ষা এবং প্রযুক্তিগত দক্ষতা প্রদানের মাধ্যমে শিক্ষার্থীদের জীবনে ইতিবাচক পরিবর্তন আনায়ন করা।
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
