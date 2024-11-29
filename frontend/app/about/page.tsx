import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to <span className="text-blue-500 font-semibold">Ekush Language</span>, your one-stop destination for mastering languages. Our mission is to empower individuals with the skills to communicate effectively across cultures, breaking down barriers and creating global connections.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/images/gallery/17.jpg"
              alt="Teamwork"
              width={256} // Set image width (64 * 4)
              height={256} // Set image height (64 * 4)
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
            <p className="text-gray-600 text-center mt-2">
              At Ekush Language, we aim to build a platform that simplifies language learning, providing resources that cater to everyone’s needs.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/gallery/23.jpg"
              alt="Growth"
              width={256} // Set image width (64 * 4)
              height={256} // Set image height (64 * 4)
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
            <p className="text-gray-600 text-center mt-2">
              We envision a world where language is no longer a barrier, enabling individuals to access opportunities and achieve their dreams.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600">
            For inquiries, collaboration, or support, feel free to{" "}
            <Link
              href="/contact"
              className="text-blue-500 hover:underline font-medium"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
