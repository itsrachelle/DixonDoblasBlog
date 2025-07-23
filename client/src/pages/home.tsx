import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/blog-card";
import type { Post } from "@shared/schema";

export default function Home() {
  const { data: featuredPost, isLoading: featuredLoading } = useQuery<Post>({
    queryKey: ["/api/posts/featured"],
  });

  const { data: recentPosts, isLoading: recentLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  const recentPostsDisplay = recentPosts?.slice(0, 3) || [];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative min-h-screen sunset-gradient overflow-hidden">
        {/* Mountain landscape background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mt-20 mb-16">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Words that move,<br />
              <span className="italic text-white/90">stories that stay</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to my corner of the internet where vulnerability meets storytelling. 
              I'm Dixon Doblas, and I believe in the power of honest words to connect us all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
                <Link href="/blog">
                  Explore My Writing
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-gray-800">
                <Link href="/about">
                  About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
      
      {/* Featured Blog Post Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Story</h2>
            <div className="w-20 h-1 mountain-gradient mx-auto rounded-full"></div>
          </div>
          
          {featuredLoading ? (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-full h-96 bg-gray-200 rounded-2xl animate-pulse" />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse" />
                <div className="w-full h-8 bg-gray-200 rounded animate-pulse" />
                <div className="w-full h-24 bg-gray-200 rounded animate-pulse" />
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ) : featuredPost ? (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Writer at vintage typewriter" 
                  className="rounded-2xl shadow-2xl w-full" 
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-block bg-coral/10 text-coral px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Personal Essay
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center mb-6 text-sm text-gray-500">
                  <span>{featuredPost.publishedAt}</span>
                  <span className="mx-2">•</span>
                  <span className="reading-time">{featuredPost.readingTime}</span>
                </div>
                <Button asChild className="bg-coral hover:bg-coral/90">
                  <Link href={`/post/${featuredPost.slug}`}>
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      
      {/* Recent Posts Preview */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Recent Stories</h2>
            <p className="text-gray-600 text-lg">Exploring life through the lens of honest storytelling</p>
          </div>
          
          {recentLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((i) => (
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
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {recentPostsDisplay.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
          
          <div className="text-center">
            <Button asChild variant="default" size="lg" className="bg-gray-800 hover:bg-gray-700">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
