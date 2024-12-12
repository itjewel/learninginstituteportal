'use client'
import Image from 'next/image';
import Link from 'next/link';

const features = [   
    {
        title: 'Japanese Language Course (N5 / N4 / N3 Levels)',
        description: 'Learn Japanese for JLPT N5, N4, and N3 levels with structured content.',
        image: '/images/services/japanese.webp',
        link: `/services/${'Japanese Language Course (N5 / N4 / N3 Levels)'.toLocaleLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'Korean Language Course',
        description: 'Dive into the Korean language and culture through this beginner-friendly course.',
        image: '/images/services/korean.webp',
        link: `/services/${'Korean Language Course'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'Bangla',
        description: 'Master Bangla with comprehensive language lessons for all skill levels.',
        image: '/images/services/bangla.webp',
        link: `/services/${'Bangla'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'French Language',
        description: 'Master the French language with our expert courses.',
        image: '/images/services/french.webp',
        link: `/services/${'French Language'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'IELTS Preparation Course',
        description: 'Prepare for IELTS with the best resources.',
        image: '/images/services/ielts.webp',
        link: `/services/${'IELTS Preparation Course'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'Smart Communicative English',
        description: 'Improve your English communication skills.',
        image: '/images/services/english.webp',
        link: `/services/${'Smart Communicative English'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'Italian Language Course',
        description: 'Learn Italian language at your pace.',
        image: '/images/services/italians.webp',
        link: `/services/${'Italian Language Course'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'Chinese Language Course',
        description: 'Start learning Chinese with us today.',
        image: '/images/services/chinese.webp',
        link: `/services/${'Chinese Language Course'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'German Language Course',
        description: 'Learn German with structured lessons and cultural insights.',
        image: '/images/services/germany.webp',
        link: `/services/${'German Language Course'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
    {
        title: 'Russian Language Course',
        description: 'Dive into the Russian language with comprehensive lessons and practice.',
        image: '/images/services/russian.webp',
        link: `/services/${'Russian Language Course'.toLocaleLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')}`,
    },
];

  

export default function FeaturesSection() {
    return (
      <section className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-teal-900 mb-8">
            Our Features & Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={200}
                  height={200}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-teal-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 my-4">{feature.description}</p>
                <Link 
                    href={feature.link}
                    className="inline-block bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
                    >
                    Learn More
                    </Link>

              </div>
            ))}
          </div>
        </div>
      </section>
    );
}