import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/blog/blog-card";
import type { Post } from "@shared/schema";

export default function ShortStories() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts/category", "stories"],
  });

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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Short Stories</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Fictional narratives exploring human nature, relationships, and the unexpected moments that define us
          </p>
        </div>
      </div>
      
      {/* Stories Grid */}
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
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No short stories found</h3>
              <p className="text-gray-600">
                No short stories are available at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
