"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: "📸", title: "Portrait Photography", desc: "Professional portraits that capture your essence." },
  { icon: "🎨", title: "Art Gallery", desc: "Curated exhibitions of contemporary artwork." },
  { icon: "🖼️", title: "Photo Restoration", desc: "Restore and preserve precious memories." },
  { icon: "🎭", title: "Event Photography", desc: "Capture your special moments beautifully." },
];

const artStyles = [
  { name: "Contemporary", medium: "Mixed Media", mood: "Modern", image: "🎨" },
  { name: "Classical", medium: "Oil Painting", mood: "Timeless", image: "🖼️" },
  { name: "Abstract", medium: "Acrylic", mood: "Expressive", image: "🎭" },
];

const testimonials = [
  { name: "Emma Wilson", role: "Art Curator", content: "The gallery showcases exceptional talent. Each piece tells a unique story.", rating: 5 },
  { name: "David Chen", role: "Photographer", content: "Perfect lighting and professional equipment. Great for creative projects.", rating: 5 },
  { name: "Sarah Martinez", role: "Art Collector", content: "The exhibitions are thoughtfully curated. Always inspiring.", rating: 5 },
];

const Theme233: React.FC = () => {
  const [currentStyle, setCurrentStyle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % artStyles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const galleryInterval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(galleryInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-gray-50 to-slate-50 text-gray-800 overflow-hidden relative font-serif">
      {/* Artistic Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Artistic Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="artistic-grid" width="25" height="25" patternUnits="userSpaceOnUse">
              <rect width="25" height="25" fill="none" stroke="#6b7280" strokeWidth="0.5" />
              <circle cx="12.5" cy="12.5" r="2" fill="#6b7280" opacity="0.3" />
              <path d="M 0 12.5 L 25 12.5 M 12.5 0 L 12.5 25" stroke="#6b7280" strokeWidth="0.3" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#artistic-grid)" />
        </svg>
        {/* Floating Artistic Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 30}, 60%, 70%)`,
              opacity: 0.2 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
        {/* Artistic Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-30" style={{ animationDelay: '2s' }} />
        {/* Gallery Frames */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 border-2 border-gray-400 rounded-sm animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 border-2 border-slate-400 rounded-sm animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 border-2 border-gray-300 rounded-sm animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-slate-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              🎨
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
              ARTISTIC
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-gray-600 transition-colors">Gallery</a>
            <a href="#testimonials" className="hover:text-gray-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 text-white font-bold px-6 py-2 rounded-lg">
            Book Session
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Capture
              <span className="block bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent animate-pulse">Beauty</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Professional photography and curated art gallery. Every moment and every piece tells a unique story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                View Gallery
              </Button>
              <Button variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-lg text-lg">
                Book Session
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-gray-100/50 to-slate-100/50 rounded-lg animate-pulse border-2 border-gray-200/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">📸</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-400 to-slate-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full animate-pulse"></div>
            {/* Floating Artistic Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🎨</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>🖼️</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>🎭</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Creative <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-200/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Art Styles Showcase */}
      <section id="gallery" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Art <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">Styles</span>
          </h2>
          <div className="relative h-96 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/30">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{artStyles[currentStyle].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{artStyles[currentStyle].name}</h3>
                <p className="text-gray-600 text-lg mb-2 font-bold">{artStyles[currentStyle].medium}</p>
                <div className="text-gray-500 font-medium text-xl">{artStyles[currentStyle].mood}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {artStyles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStyle(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentStyle ? 'bg-gray-400' : 'bg-gray-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Gallery <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">Preview</span>
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/30">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg border-2 transition-all duration-500 ${
                    i === galleryIndex ? 'border-gray-400 bg-gray-100' : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center text-3xl">
                    {['📸', '🎨', '🖼️', '🎭', '📷', '🎪'][i]}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xl">Rotating gallery showcase</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Artist <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 hover:border-gray-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
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
            Visit Our <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Experience the beauty of art and photography. Book a session or visit our gallery today.
          </p>
          <Button className="bg-gradient-to-r from-gray-500 to-slate-500 hover:from-gray-600 hover:to-slate-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Book Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-gray-200/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-slate-400 rounded-lg flex items-center justify-center text-white font-bold">
              🎨
            </div>
            <span className="text-xl font-bold">ARTISTIC</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 ARTISTIC. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Pinterest</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Behance</a>
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
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme233; 