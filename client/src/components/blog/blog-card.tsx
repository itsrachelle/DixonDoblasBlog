import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import CategoryBadge from "./category-badge";
import type { Post } from "@shared/schema";

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured 
    ? "blog-card bg-white rounded-2xl shadow-lg overflow-hidden md:col-span-2 lg:col-span-1"
    : "blog-card bg-white rounded-2xl shadow-lg overflow-hidden";

  const imageHeight = featured ? "h-56" : "h-48";

  return (
    <article className={cardClasses}>
      <img 
        src={`https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=${featured ? '300' : '250'}`}
        alt={post.title}
        className={`w-full ${imageHeight} object-cover`}
      />
      <div className="p-6">
        <CategoryBadge category={post.category} />
        <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>{post.publishedAt}</span>
          <span className="reading-time">{post.readingTime}</span>
        </div>
        <Link 
          href={`/post/${post.slug}`}
          className="inline-flex items-center text-coral font-medium text-sm hover:text-coral/80 transition-colors"
        >
          Read More 
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </article>
  );
}
