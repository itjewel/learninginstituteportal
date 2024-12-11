'use client'
export default function FreeSeminarSection() {
    return (
      <div className="bg-blue-50 py-10 text-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 gap-6">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Join Our Free Seminars</h2>
              <p className="text-gray-600 mb-6">
                Need guidelines to choose a suitable course? Join our free seminars to consult with our experts. They will guide you to pick the course that matches your interest and discuss career prospects.
              </p>
  
              {/* Seminar Information */}
              <div className="flex items-center bg-blue-100 p-4 rounded-lg gap-4">
                {/* Date Section */}
                <div className="bg-blue-200 text-blue-900 font-bold text-center rounded-lg p-4 w-24">
                  <p className="text-lg">22</p>
                  <p className="text-sm">March,</p>
                  <p className="text-sm">2024</p>
                </div>
  
                {/* Seminar Details */}
                <div className="flex-1">
                  <h3 className="font-semibold">App Development</h3>
                  <p className="text-sm text-gray-500">ONLINE, Time: 12:00 am</p>
                </div>
  
                {/* Action Button */}
                <button className="bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition">
                  Know More
                </button>
              </div>
  
              {/* Call to Action */}
              <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                Free Seminar Schedule
              </button>
            </div>
  
            {/* Image Section */}
            <div className="flex-1">
              <img
                src="/images/home/joining.webp" // Replace with your image path
                alt="Seminar"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  