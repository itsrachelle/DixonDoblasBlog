import { Link } from "wouter";
import { Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 mountain-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-xl">Dixon Doblas</h3>
                <p className="text-sm text-gray-400 italic">Vulnerable storytelling</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Exploring the messy, beautiful complexity of being human through honest words and vulnerable storytelling.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">All Stories</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Dixon</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/essays" className="hover:text-white transition-colors">Personal Essays</Link></li>
              <li><Link href="/writing-tips" className="hover:text-white transition-colors">Writing Tips</Link></li>
              <li><Link href="/short-stories" className="hover:text-white transition-colors">Short Stories</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Dixon Doblas. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
