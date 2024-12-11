'use client'
export default function CourseCards() {
  const courses = [
    {
      title: "Freelancing and Outsourcing",
      category: "Digital Marketing",
      level: "Expart",
      image: '/images/home/freelancing_outsourcing.jpg',
    },
    {
      title: "Video Editing",
      category: "Film & Media",
      level: "Intermediate",
      image: '/images/home/video_edition.jpg',
    },
    {
      title: "Digital Marketing",
      category: "Digital Marketing",
      level: "Intermediate",
      image: '/images/home/online-marketing.jpg',
    },
  ];

  return (
    <div className="py-10 bg-gray-50 text-gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Language & IT Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border"
            >
              {/* Top Section with Background Image */}
              <div
                className="h-40 flex items-center justify-center relative bg-cover bg-center"
                style={{
                    backgroundImage: `url(${course.image})`, // Replace with the correct image path
                }}
              >
                <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="absolute top-2 right-2 bg-gray-200 w-6 h-6 rounded-full"></span>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600">
                  In <span className="font-semibold">{course.category}</span>
                </p>
              </div>

              {/* Bottom Section */}
              <div className="p-4 border-t text-center">
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                  Enroll Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
