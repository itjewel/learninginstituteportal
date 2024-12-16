
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
  'bangla': {
    title: 'Bangla',
    description: 'Master Bangla with comprehensive language lessons for all skill levels.',
    image: '/images/services/bangla.webp',
    details: `
      This course offers extensive training in Bangla language skills, including reading, writing, speaking, and grammar.
      Designed for beginners and advanced learners alike.
    `,
    material: ['Practice sheets', 'Audio resources', 'Grammar books'],
  },
  'french-language': {
    title: 'French Language',
    description: 'Master the French language with our expert courses.',
    image: '/images/services/french.webp',
    details: `
      Learn to speak and understand French with a focus on grammar, pronunciation, and cultural insights.
    `,
    material: ['Textbooks', 'Pronunciation guides', 'Cultural materials'],
  },
  'ielts-preparation-course': {
    title: 'IELTS Preparation Course',
    description: 'Prepare for IELTS with the best resources.',
    image: '/images/services/ielts.webp',
    details: `
      Ace your IELTS exam with comprehensive preparation materials, practice tests, and personalized coaching.
    `,
    material: ['Mock tests', 'Grammar guides', 'Speaking practice materials'],
  },
  'smart-communicative-english': {
    title: 'Smart Communicative English',
    description: 'Improve your English communication skills.',
    image: '/images/services/english.webp',
    details: `
      This course focuses on improving English speaking, listening, and writing skills for effective communication.
    `,
    material: ['Interactive lessons', 'Pronunciation guides', 'Writing exercises'],
  },
  'italian-language-course': {
    title: 'Italian Language Course',
    description: 'Learn Italian language at your pace.',
    image: '/images/services/italians.webp',
    details: `
      Master Italian through engaging lessons that cover vocabulary, grammar, and cultural insights.
    `,
    material: ['Textbooks', 'Audio resources', 'Cultural materials'],
  },
  'chinese-language-course': {
    title: 'Chinese Language Course',
    description: 'Start learning Chinese with us today.',
    image: '/images/services/chinese.webp',
    details: `
      Dive into the Chinese language with a focus on Mandarin, including tones, vocabulary, and writing characters.
    `,
    material: ['Writing practice sheets', 'Audio guides', 'Grammar books'],
  },
  'german-language-course': {
    title: 'German Language Course',
    description: 'Learn German with structured lessons and cultural insights.',
    image: '/images/services/germany.webp',
    details: `
      Explore German language fundamentals, including vocabulary, grammar, and cultural nuances.
    `,
    material: ['Textbooks', 'Audio resources', 'Practice exercises'],
  },
  'russian-language-course': {
    title: 'Russian Language Course',
    description: 'Dive into the Russian language with comprehensive lessons and practice.',
    image: '/images/services/russian.webp',
    details: `
      Learn Russian from basics to advanced levels, with a focus on reading, writing, and speaking fluently.
    `,
    material: ['Textbooks', 'Pronunciation guides', 'Cultural insights'],
  },
};


export default async function CourseDetails({ params }: { params: { slug: string } }) {
  // Await params to resolve them fully
  const resolvedParams = await params;
  //console.log('Resolved Params:', resolvedParams);

  // Extract and normalize the slug
  const slug = resolvedParams?.slug;
  // console.log('Original Slug:', slug);

  // Normalize the slug by replacing double hyphens with single hyphens
  const normalizedSlug = slug?.replace(/--+/g, '-');
  // console.log('Normalized Slug:', normalizedSlug);

  // Check if the normalized slug matches a key in courseData
  if (normalizedSlug in courseData) {
    const course = courseData[normalizedSlug as keyof typeof courseData];

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

