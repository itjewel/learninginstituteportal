
// Sample News Data
const newsData = [
  {
    slug: "space-exploration",
    title: "Breaking: New Discoveries in Space Exploration",
    description:
      "Scientists have uncovered groundbreaking findings that could change our understanding of the universe.",
    image:
      "https://images.unsplash.com/photo-1581091870683-3ff21bb04c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    category: "Science",
    date: "December 16, 2024",
    content: `
      In a groundbreaking discovery, astronomers have identified a new planet in a nearby solar system that could harbor life.
      Using advanced telescopes, scientists observed unique atmospheric patterns that indicate the presence of water and essential elements.
      This discovery is expected to pave the way for further exploration and understanding of the universe.
    `,
  },
  {
    slug: "ai-dominance",
    title: "Tech Giants Compete for AI Dominance",
    description:
      "A closer look at how major tech companies are investing in the future of artificial intelligence.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    category: "Technology",
    date: "December 15, 2024",
    content: `
      The race to develop cutting-edge AI technology has intensified as tech giants pour billions into research and development.
      Companies like OpenAI, Google, and Microsoft are at the forefront, competing to create AI systems capable of revolutionizing industries from healthcare to transportation.
      Experts predict that the next decade will be marked by unprecedented advancements in AI capabilities.
    `,
  },
];

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

// Dynamic Page Component
export default function NewsDetails() {


  return (
    <div className="container mx-auto px-4 py-8">
      <h2>News Details</h2>
    </div>
  );
}
