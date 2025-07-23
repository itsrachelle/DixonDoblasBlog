import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import type { Post } from "@shared/schema";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "essays", label: "Personal Essays" },
    { id: "tips", label: "Writing Tips" },
    { id: "stories", label: "Short Stories" },
  ];

  const filteredPosts = posts?.filter(post => 
    activeCategory === "all" || post.category === activeCategory
  ) || [];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative mountain-gradient py-20">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">All Stories</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A collection of personal essays, writing tips, and short stories exploring the human experience
          </p>
        </div>
      </div>
      
      {/* Category Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`${
                  activeCategory === category.id 
                    ? "bg-gray-800 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="w-full h-48 bg-gray-200 animate-pulse" />
                  <div className="p-6 space-y-4">
                    <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
                    <div className="w-full h-6 bg-gray-200 rounded animate-pulse" />
                    <div className="w-full h-16 bg-gray-200 rounded animate-pulse" />
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  featured={index === 0 && activeCategory === "all"}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No posts found</h3>
              <p className="text-gray-600">
                {activeCategory === "all" 
                  ? "No posts are available at the moment."
                  : `No posts found in the ${categories.find(c => c.id === activeCategory)?.label.toLowerCase()} category.`
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
