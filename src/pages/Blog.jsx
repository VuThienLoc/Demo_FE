import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

// Sample blog post data
const blogPosts = [
  {
    id: "1",
    title: "Understanding Your Body: Expert Answers",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    excerpt:
      "Get reliable, science-backed answers to your questions about body changes, puberty, and sexual health.",
    link: "/blog/understanding-your-body",
    category: "Sexual Health",
    date: "May 25, 2025",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Healthy Relationships: Building Respect and Consent",
    image:
      "https://images.unsplash.com/photo-1520975910012-3ab4c6a5d2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    excerpt:
      "Learn how to build healthy, respectful relationships and understand the importance of consent in all interactions.",
    link: "/blog/healthy-relationships",
    category: "Relationships",
    date: "May 24, 2025",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Navigating Puberty: A Guide for Teens",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    excerpt:
      "A comprehensive guide to the physical and emotional changes that occur during puberty, and how to navigate them.",
    link: "/blog/navigating-puberty",
    category: "Puberty",
    date: "May 23, 2025",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Mental Wellness in Adolescence",
    image:
      "https://images.unsplash.com/photo-1551844543-3173cb1b84c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    excerpt:
      "Tips and resources for maintaining mental well-being during the often turbulent teenage years.",
    link: "/blog/mental-wellness-adolescence",
    category: "Mental Health",
    date: "May 22, 2025",
    readTime: "4 min read",
  },
  {
    id: "5",
    title: "Safe Online Interactions: A Digital Citizenship Guide",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    excerpt:
      "Understanding the importance of digital citizenship and how to engage safely and respectfully online.",
    link: "/blog/safe-online-interactions",
    category: "Digital Safety",
    date: "May 21, 2025",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "Contraception Methods Explained",
    image:
      "https://images.unsplash.com/photo-1580281658628-3d5a5f1a1b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    excerpt:
      "An overview of different contraception methods, their effectiveness, and how to choose what's right for you.",
    link: "/blog/contraception-methods",
    category: "Sexual Health",
    date: "May 20, 2025",
    readTime: "8 min read",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Sexual Health",
    "Relationships",
    "Puberty",
    "Mental Health",
    "Digital Safety",
  ];

  // Filtered blog posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesTitle = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesTitle && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      {/* Header Section */}
      <Card
        style={{ maxWidth: "100%", margin: "0 auto 48px", textAlign: "center" }}
        variant={false}
      >
        <Title level={1} style={{ color: "#1677ff" }}>
          Welcome to Our Blog
        </Title>
        <Paragraph type="secondary" style={{ fontSize: 18 }}>
          Explore expert insights, tips, and resources to help you navigate your
          journey toward health, wellness, and personal growth. Stay informed
          and inspired with our curated articles.
        </Paragraph>
      </Card>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Content with Sidebar */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Filter Posts</h2>
            {/* Search by Title */}
            <div className="mb-6">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Search by Title
              </label>
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter title..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Filter by Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Filter by Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                to={post.link}
                key={post.id}
                className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                    src={post.image}
                    alt={post.title}
                  />
                  <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed h-20 overflow-hidden">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                    Read More &rarr;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
