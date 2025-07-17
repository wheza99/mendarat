"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const collections = [
  { icon: "👗", title: "Spring Collection", desc: "Elegant designs for the modern woman." },
  { icon: "💎", title: "Luxury Accessories", desc: "Premium jewelry and handbags." },
  { icon: "👠", title: "Footwear", desc: "Stylish shoes for every occasion." },
  { icon: "👜", title: "Bags & Wallets", desc: "Sophisticated leather goods." },
];

const featuredItems = [
  { name: "Evening Gown", price: "$1,299", category: "Dresses", image: "👗" },
  { name: "Diamond Necklace", price: "$2,499", category: "Jewelry", image: "💎" },
  { name: "Leather Handbag", price: "$899", category: "Accessories", image: "👜" },
];

const testimonials = [
  { name: "Isabella Rodriguez", role: "Fashion Blogger", content: "The quality and design are absolutely stunning. I love every piece!", rating: 5 },
  { name: "Sophie Chen", role: "Stylist", content: "Perfect for my clients. The attention to detail is remarkable.", rating: 5 },
  { name: "Emma Thompson", role: "Model", content: "These pieces make me feel confident and beautiful.", rating: 5 },
];

const Theme228: React.FC = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % featuredItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 text-gray-900 overflow-hidden relative font-serif">
      {/* Elegant Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Geometric Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="elegant-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#d97706" />
              <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#d97706" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#elegant-pattern)" />
        </svg>
        {/* Floating Elegant Elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: `hsl(${Math.random() * 20 + 30}, 70%, 60%)`,
              opacity: 0.1 + Math.random() * 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
        {/* Elegant Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-30" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-30" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              E
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              ELEGANCE
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#collections" className="hover:text-amber-600 transition-colors">Collections</a>
            <a href="#featured" className="hover:text-amber-600 transition-colors">Featured</a>
            <a href="#testimonials" className="hover:text-amber-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold px-6 py-2 rounded-lg">
            Shop Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Timeless
              <span className="block bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent animate-pulse">Elegance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover sophisticated fashion that transcends trends. Each piece tells a story of craftsmanship and timeless beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Explore Collection
              </Button>
              <Button variant="outline" className="border-amber-400 text-amber-600 hover:bg-amber-50 font-bold px-8 py-4 rounded-lg text-lg">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-amber-100/50 to-rose-100/50 rounded-full animate-pulse border border-amber-200/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">👗</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full animate-pulse"></div>
            {/* Floating Fashion Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">💎</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>👠</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>👜</div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Collections</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, i) => (
              <div 
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 hover:border-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-200/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{collection.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{collection.title}</h3>
                <p className="text-gray-600">{collection.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Showcase */}
      <section id="featured" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Items</span>
          </h2>
          <div className="relative h-96 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/30">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{featuredItems[currentItem].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{featuredItems[currentItem].name}</h3>
                <p className="text-amber-600 text-lg mb-2 font-bold">{featuredItems[currentItem].price}</p>
                <div className="text-gray-500 font-medium text-xl">{featuredItems[currentItem].category}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {featuredItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentItem(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentItem ? 'bg-amber-400' : 'bg-amber-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Client <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-amber-200/50 hover:border-amber-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-amber-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Elegance</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Book a private consultation and discover your perfect style with our expert stylists.
          </p>
          <Button className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Book Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-amber-200/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-rose-400 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-xl font-bold">ELEGANCE</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 ELEGANCE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Pinterest</a>
            <a href="#" className="hover:text-amber-600 transition-colors">TikTok</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme228; 