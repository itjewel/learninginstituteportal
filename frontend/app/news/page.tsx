"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const newsData = [
  {
    title: 'Breaking: New Discoveries in Space Exploration',
    description: 'Scientists have uncovered groundbreaking findings that could change our understanding of the universe.',
    image: 'https://images.unsplash.com/photo-1581091870683-3ff21bb04c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    category: 'Science',
    date: 'December 16, 2024',
    link: '/news/space-exploration',
  },
  {
    title: 'Tech Giants Compete for AI Dominance',
    description: 'A closer look at how major tech companies are investing in the future of artificial intelligence.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    category: 'Technology',
    date: 'December 15, 2024',
    link: '/news/ai-dominance',
  },
  {
    title: 'Global Markets React to Policy Changes',
    description: 'How recent economic policies are influencing markets across the world.',
    image: 'https://images.unsplash.com/photo-1565517883853-d77c60143a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    category: 'Business',
    date: 'December 14, 2024',
    link: '/news/market-reactions',
  },
  {
    title: 'Sports World: The Rise of Young Athletes',
    description: 'An inspiring story of young athletes making waves in the sports world.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    category: 'Sports',
    date: 'December 13, 2024',
    link: '/news/young-athletes',
  },
  {
    title: 'A Breakthrough in Cancer Treatment',
    description: 'Medical experts reveal new advancements in cancer treatment and research.',
    image: 'https://images.unsplash.com/photo-1559521786-f9ea11c2a9f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    category: 'Science',
    date: 'December 12, 2024',
    link: '/news/cancer-breakthrough',
  },
];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter news based on the active category
  const filteredNews =
    activeCategory === 'All'
      ? newsData
      : newsData.filter((news) => news.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Headline Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Latest News</h1>
        <p className="text-gray-600 text-center">
          Stay updated with the latest developments in science, technology, business, and sports.
        </p>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-4 mb-8">
        {['All', 'Science', 'Technology', 'Business', 'Sports'].map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredNews.map((news, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image
              src={news.image}
              alt={news.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{news.date} | {news.category}</p>
              <p className="text-gray-700 mb-4">{news.description}</p>
              <Link
                href={news.link}
                className="text-blue-500 hover:underline font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No News Found */}
      {filteredNews.length === 0 && (
        <div className="text-center text-gray-600 mt-8">
          <p>No news articles found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
