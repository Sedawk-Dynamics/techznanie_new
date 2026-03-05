"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React, { useState, useEffect } from "react";
import { getPosts } from "../ghost-config";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogsPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Filter posts based on search
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Get featured post (most recent)
  const featuredPost = posts.length > 0 ? posts[0] : null;
  // Get remaining posts
  const remainingPosts = posts.length > 1 ? filteredPosts.slice(1) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744095-70fccefd4b65?q=80&w=2001&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        {/* Black fade gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container-modern relative z-10 pt-32 pb-20">
          <div className="container mx-auto text-center">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-400/30 shadow-lg mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
              </svg>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold drop-shadow-sm">
                Explore Our Blog
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white drop-shadow-lg">Discover</span>
                <br />
                <span className="text-yellow-300 drop-shadow-lg">Our</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                  Insights
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
                Stay updated with the latest insights, tutorials, and news from
                our expert team
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl mx-auto mt-10"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full py-3 px-5 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-yellow-400/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 shadow-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-4 top-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : posts.length > 0 ? (
          <>
            {/* Featured Post */}
            {featuredPost && !searchTerm && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl font-bold mb-6 inline-block pb-2 border-b-2 border-tz-bright-orange"
                >
                  Featured Post
                </motion.h2>
                <Link href={`/blogs/${featuredPost.slug}`}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row"
                  >
                    <div className="relative h-72 md:h-auto md:w-1/2">
                      {featuredPost.feature_image ? (
                        <Image
                          src={featuredPost.feature_image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-4 left-4"
                      >
                        <span className="bg-tz-bright-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </motion.div>
                    </div>
                    <div className="p-8 md:w-1/2 flex flex-col">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Blog
                        </span>
                        <span className="text-gray-500 text-sm ml-2">
                          {formatDate(featuredPost.published_at)}
                        </span>
                        <span className="text-gray-500 text-sm ml-auto">
                          {featuredPost.reading_time} min read
                        </span>
                      </div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold mb-4"
                      >
                        {featuredPost.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 mb-6 line-clamp-3"
                      >
                        {featuredPost.excerpt}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-auto flex items-center"
                      >
                        <span className="text-tz-bright-orange font-medium">
                          Read article
                        </span>
                        <motion.svg
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 text-tz-bright-orange"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </motion.svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )}

            {/* All Posts or Search Results */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-12"
            >
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl font-bold mb-6 inline-block pb-2 border-b-2 border-tz-bright-orange"
              >
                {searchTerm ? "Search Results" : "All Posts"}
              </motion.h2>

              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post: any, index: number) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <Link href={`/blogs/${post.slug}`}>
                        <motion.div
                          whileHover={{
                            y: -8,
                            boxShadow:
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                          className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
                        >
                          <div className="relative h-56 w-full">
                            {post.feature_image ? (
                              <Image
                                src={post.feature_image}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                                <span className="text-gray-400">No image</span>
                              </div>
                            )}
                          </div>
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center mb-4">
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Blog
                              </span>
                              <span className="text-gray-500 text-sm ml-2">
                                {formatDate(post.published_at)}
                              </span>
                              <span className="text-gray-500 text-sm ml-auto">
                                {post.reading_time} min read
                              </span>
                            </div>
                            <h2 className="text-xl font-bold mb-2 line-clamp-2">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                              <span className="text-tz-bright-orange font-medium">
                                Read more
                              </span>
                              <motion.svg
                                animate={{ x: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-tz-bright-orange"
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </motion.svg>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-gray-400 mb-4"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <h3 className="text-xl font-medium text-gray-900">
                    No matching posts found
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Try adjusting your search terms
                  </p>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="mt-4 px-4 py-2 bg-tz-bright-orange text-white rounded-md hover:bg-tz-dark-orange transition-colors"
                    >
                      Clear search
                    </button>
                  )}
                </div>
              )}
            </motion.div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-primary text-white rounded-xl p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Subscribe to our newsletter
                  </h3>
                  <p className="text-white/80">
                    Get the latest posts delivered right to your inbox
                  </p>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
                    />
                    <button className="bg-tz-bright-orange hover:bg-tz-dark-orange px-6 py-3 rounded-r-lg font-medium transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-gray-400 mb-4"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
            <h3 className="text-xl font-medium text-gray-900">
              No posts found
            </h3>
            <p className="mt-2 text-gray-500">
              Check back later for new content!
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogsPage;
