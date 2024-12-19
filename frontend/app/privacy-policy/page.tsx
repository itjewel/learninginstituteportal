import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-gray-50 py-10 px-6 sm:px-10 lg:px-20 text-gray-600">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">About Ekush Language</h2>
            <p>
              Thank you for visiting Ekush Language. Our primary goal is to create a safe and interactive platform for language learners. To learn more about us, visit our website at{" "}
              <Link href="https://ekushlanguage.com" className="text-blue-500 underline">
                https://ekushlanguage.com
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">User Comments and Contributions</h2>
            <p>
              When users leave comments on our platform, we collect the information provided in the comment form, including IP addresses and browser details, to ensure compliance with our security policies and to detect potential spam. All comments are moderated for quality and respectfulness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Handling Uploaded Media</h2>
            <p>
              We encourage users to upload media content responsibly. Any image uploaded should not contain embedded location data (such as GPS metadata). Be aware that others may download and access the metadata from uploaded files.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Cookie Usage and Preferences</h2>
            <p>
              Cookies are used on our site to enhance your browsing experience. These tiny files allow us to remember your preferences and streamline your use of the site. You can manage or disable cookies through your browser settings at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">External Content and Data</h2>
            <p>
              Our website may include content such as videos, images, or articles from external platforms. Interacting with such embedded content behaves as though you are visiting the external platform directly. These third-party sites may gather information about you and use cookies as outlined in their respective privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Your Data and Our Sharing Practices</h2>
            <p>
              Your personal data is handled with care. We never sell your information to third parties. If a password reset is requested, the originating IP address will be included for your security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">How Long We Keep Your Information</h2>
            <p>
              We retain your data only for as long as necessary to provide our services. For example, comments remain on the site to preserve discussion context. You can request data deletion at any time, subject to applicable regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Your Privacy Rights and Choices</h2>
            <p>
              You are entitled to access the personal data we collect. If you have an account, you can request an export of your data or its deletion. Certain data may be retained to comply with legal or administrative obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">How and Where Your Data Is Processed</h2>
            <p>
              To protect against misuse, we may use automated tools to review visitor comments and submissions for spam detection. All automated processes are designed to maintain high standards of privacy and security.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}