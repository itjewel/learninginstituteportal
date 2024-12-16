'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const newsData = [
  {
    slug: 'space-exploration',
    title: 'Breaking: New Discoveries in Space Exploration',
    description: 'Scientists have uncovered groundbreaking findings that could change our understanding of the universe.',
    image: 'https://images.unsplash.com/photo-1581091870683-3ff21bb04c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    category: 'Science',
    date: 'December 16, 2024',
    content: `
      In a groundbreaking discovery, astronomers have identified a new planet in a nearby solar system that could harbor life.
      Using advanced telescopes, scientists observed unique atmospheric patterns that indicate the presence of water and essential elements.
      This discovery is expected to pave the way for further exploration and understanding of the universe.
    `,
  },
  {
    slug: 'ai-dominance',
    title: 'Tech Giants Compete for AI Dominance',
    description: 'A closer look at how major tech companies are investing in the future of artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    category: 'Technology',
    date: 'December 15, 2024',
    content: `
      The race to develop cutting-edge AI technology has intensified as tech giants pour billions into research and development.
      Companies like OpenAI, Google, and Microsoft are at the forefront, competing to create AI systems capable of revolutionizing industries from healthcare to transportation.
      Experts predict that the next decade will be marked by unprecedented advancements in AI capabilities.
    `,
  },
];

export default function NewsDetails({ params }: { params: { slug: string } }) {
  const router = useRouter();

  // Extract slug and normalize it
  const slug = params?.slug;
  const normalizedSlug = slug?.replace(/--+/g, '-');

  // Find the news article by slug
  const article = newsData.find((news) => news.slug === normalizedSlug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Article Not Found</h1>
        <p className="text-center text-gray-600 mt-4">
          The news article you are looking for does not exist.
        </p>
        <div className="text-center mt-6">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Article Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-600">
          {article.date} | <span className="font-semibold">{article.category}</span>
        </p>
      </div>

      {/* Article Image */}
      <div className="mb-8">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none mb-8">
        <p>{article.content}</p>
      </div>

      {/* Go Back Button */}
      <div className="text-center">
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
