import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "wouter";
import { ArrowLeft, Twitter, Bookmark, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryBadge from "@/components/blog/category-badge";
import type { Post } from "@shared/schema";

export default function SinglePost() {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<Post>({
    queryKey: ["/api/posts", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="w-32 h-6 bg-gray-200 rounded mb-6" />
            <div className="w-full h-8 bg-gray-200 rounded mb-4" />
            <div className="w-3/4 h-8 bg-gray-200 rounded mb-8" />
            <div className="w-full h-64 bg-gray-200 rounded mb-12" />
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-full h-4 bg-gray-200 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The post you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Post Header */}
        <header className="mb-12 text-center">
          <CategoryBadge category={post.category} />
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 mountain-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">D</span>
              </div>
              <span>Dixon Doblas</span>
            </div>
            <span>•</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="reading-time">{post.readingTime}</span>
          </div>
          
          {/* Social Share Buttons */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button variant="outline" size="sm">
              <Twitter className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </header>
        
        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
            alt={post.title}
            className="w-full rounded-2xl shadow-2xl" 
          />
        </div>
        
        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>
          
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br />').replace(/^/, '<p>').replace(/$/, '</p>').replace(/## (.*?)<\/p>/g, '<h2>$1</h2>').replace(/<p><\/p>/g, '')
            }}
          />
        </div>
        
        {/* Author Bio */}
        <div className="border-t border-gray-200 pt-12 mt-16">
          <div className="flex items-start space-x-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
              alt="Dixon Doblas" 
              className="w-20 h-20 rounded-full object-cover flex-shrink-0" 
            />
            <div>
              <h4 className="font-serif text-xl font-bold text-gray-800 mb-2">Dixon Doblas</h4>
              <p className="text-gray-600 mb-4">
                Dixon is a writer who believes in the power of honest storytelling. When not crafting essays or short stories, you can find him reading in coffee shops or taking long walks to think through his next piece.
              </p>
              <Button variant="link" asChild className="p-0 text-coral hover:text-coral/80">
                <Link href="/about">
                  More about Dixon →
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
