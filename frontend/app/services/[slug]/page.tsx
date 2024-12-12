import Image from 'next/image';

const courseData = {
  'japanese-language-course-n5-n4-n3-levels': {
    title: 'Japanese Language Course (N5 / N4 / N3 Levels)',
    description: 'Learn Japanese for JLPT N5, N4, and N3 levels with structured content.',
    image: '/images/services/japanese.webp',
    details: `
      This course is designed to help students master the Japanese language at different levels.
      Topics include speaking, reading, writing, and cultural insights.
    `,
    material: ['Textbooks', 'Audio resources', 'Grammar books'],
  },
  'korean-language-course': {
    title: 'Korean Language Course',
    description: 'Dive into the Korean language and culture through this beginner-friendly course.',
    image: '/images/services/korean.webp',
    details: `
      Learn Hangul, vocabulary, and practical phrases to communicate effectively in Korean.
    `,
    material: ['Textbooks', 'Pronunciation guides', 'Cultural insights'],
  },
  // Add more courses as needed
};

// Dynamic route handler
export default async function CourseDetails({ params }: { params: { slug: string } }) {
  // Extract slug from params
  const slug = await params.slug;

  // Check if the slug is a valid key
  if (slug in courseData) {
    const course = courseData[slug as keyof typeof courseData];

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-700 mb-4">{course.description}</p>
            <h2 className="text-2xl font-semibold mb-2">Details</h2>
            <p className="text-gray-600 mb-4">{course.details}</p>
            <h2 className="text-2xl font-semibold mb-2">Materials Included</h2>
            <ul className="list-disc ml-6">
              {course.material.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <p className="text-center">Course not found.</p>;
  }
}
