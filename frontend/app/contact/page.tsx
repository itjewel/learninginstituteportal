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
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50">
    <div className="container mx-auto px-4 py-20 bg-gray-50 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl bg-white shadow-lg p-8 rounded-lg">
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

            {/* Mobile Numbers */}
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">📞</div>
              <div>
                <p className="font-bold">মোবাইল:</p>
                <p>01711791905 / 01711791908</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-4">☎️</div>
              <div>
                <p className="font-bold">ফোন:</p>
                <p>+8802223315145</p>
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
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
               Send Information
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Location:</h2>
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9644425296916!2d90.38425461543257!3d23.75358429443537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf57f2c3e7b1%3A0x9f4e51e2e2c6fcd5!2s27%2F1%20Indira%20Road%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1694699599307!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
