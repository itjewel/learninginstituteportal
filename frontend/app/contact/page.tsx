'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset form data if needed
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-start p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl bg-white shadow-lg p-8 rounded-lg">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Info:</h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">📍</div>
              <div>
                <p className="font-bold">একুশ ল্যাংগুয়েজ একাডেমি</p>
                <p>
                  ঠিকানা: ২৭/১, ইন্দিরা রোড লেগুনা স্ট্যান্ড, ফার্মগেট, ঢাকা। (রুপালী ব্যাংকের পূর্ব পাশের বিল্ডিং)
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">📞</div>
              <div>
                <p className="font-bold">কল করুন:</p>
                <p>01711791905 / 01711791908</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">✉️</div>
              <div>
                <p className="font-bold">ইমেইল:</p>
                <p>infoekush@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Form Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Feedback:</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Comment or Message"
                rows={4} // Correct usage
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
