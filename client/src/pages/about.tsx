import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const publishedWork = [
    {
      title: "The Healing Power of Broken Stories",
      publication: "Literary Quarterly, Issue 47",
      description: "An exploration of how sharing our failures and setbacks can create unexpected paths to connection and growth."
    },
    {
      title: "Letters to My Younger Self",
      publication: "Modern Essays Online",
      description: "A series of reflective pieces on growth, change, and the wisdom that comes from embracing uncertainty."
    },
    {
      title: "The Art of Listening to Silence",
      publication: "Writer's Digest",
      description: "A guide to finding inspiration in the quiet moments and learning to trust the creative process."
    },
    {
      title: "Small Truths, Big Impact",
      publication: "The Personal Essay Review",
      description: "How the smallest, most specific details in our stories often carry the greatest emotional weight."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative mountain-gradient py-20">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">About Dixon</h1>
          <p className="text-xl text-white/80">
            A writer exploring the messy, beautiful complexity of being human
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Portrait */}
            <div className="lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" 
                alt="Dixon Doblas professional portrait" 
                className="w-full rounded-2xl shadow-2xl" 
              />
            </div>
            
            {/* Bio Content */}
            <div className="lg:order-1">
              <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6">Hello, I'm Dixon</h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  I'm a writer who believes that our most powerful stories come from our most vulnerable moments. For the past decade, I've been exploring the intersection of personal truth and universal experience through essays, short stories, and writing guidance.
                </p>
                <p className="mb-6">
                  My work has appeared in various literary magazines and online publications, but more importantly, it has connected me with readers who find pieces of themselves in my words. That connection—that moment when someone says "I thought I was the only one who felt that way"—is what drives everything I do.
                </p>
                <p className="mb-6">
                  When I'm not writing, you'll find me reading in coffee shops (always with a notebook nearby), taking long walks to untangle my thoughts, or having deep conversations with friends about life's beautiful contradictions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Writing Philosophy */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6 text-center">Why I Write</h3>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                I write because I believe in the power of honest storytelling to heal, connect, and transform. In a world that often feels fragmented and disconnected, words have the ability to remind us of our shared humanity.
              </p>
              <blockquote className="text-xl font-medium text-coral italic">
                "We tell ourselves stories in order to live, but sometimes we need to tell them to others to truly understand what living means."
              </blockquote>
            </div>
          </div>
          
          {/* Published Work */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-8 text-center">Published Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {publishedWork.map((work, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-serif text-lg font-semibold text-gray-800 mb-2">{work.title}</h4>
                  <p className="text-coral font-medium mb-2">{work.publication}</p>
                  <p className="text-gray-600 text-sm">{work.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="text-center">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I love hearing from readers and fellow writers. Whether you want to share your own story, ask about the writing process, or just say hello, I'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-coral hover:bg-coral/90">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
