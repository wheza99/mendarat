"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: "🌱", title: "Sustainable Solutions", desc: "Innovative eco-friendly products for a better tomorrow." },
  { icon: "💧", title: "Water Conservation", desc: "Smart systems to save water and protect the environment." },
  { icon: "🌞", title: "Solar Energy", desc: "Harnessing the power of the sun for clean energy." },
  { icon: "♻️", title: "Recycling Programs", desc: "Comprehensive recycling for a circular economy." },
];

const testimonials = [
  { name: "Dewi Lestari", role: "Eco Enthusiast", content: "Produk mereka benar-benar membantu lingkungan!", rating: 5 },
  { name: "Budi Santoso", role: "Startup Founder", content: "Solusi inovatif dan tim yang sangat peduli bumi.", rating: 5 },
  { name: "Sari Wulandari", role: "Green Blogger", content: "Desain dan kualitas produk sangat memuaskan.", rating: 5 },
];

const Theme225: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-yellow-50 text-green-900 overflow-hidden relative font-sans">
      {/* Animated Leaves Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <svg
            key={i}
            className="absolute animate-leaf"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 32 + 24}px`,
              height: `${Math.random() * 32 + 24}px`,
              opacity: 0.08 + Math.random() * 0.12,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
            viewBox="0 0 32 32"
            fill="none"
          >
            <ellipse cx="16" cy="16" rx="14" ry="8" fill="#22c55e" />
            <path d="M16 4 Q18 16 16 28 Q14 16 16 4" stroke="#166534" strokeWidth="1.5" fill="none" />
          </svg>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-yellow-300 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              E
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              EcoStartup
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-green-700 transition-colors">Features</a>
            <a href="#about" className="hover:text-green-700 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-green-700 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-green-700 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-green-400 to-yellow-300 hover:from-green-500 hover:to-yellow-400 text-green-900 font-bold px-6 py-2 rounded-lg">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Go Green,
              <span className="block bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent animate-pulse">Empower the Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 leading-relaxed">
              Bergabunglah bersama kami untuk menciptakan dunia yang lebih hijau dan berkelanjutan melalui inovasi teknologi ramah lingkungan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-green-400 to-yellow-300 hover:from-green-500 hover:to-yellow-400 text-green-900 font-bold px-8 py-4 rounded-lg text-lg">
                Join Us
              </Button>
              <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-100 font-bold px-8 py-4 rounded-lg text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <svg className="w-80 h-80 animate-pulse" viewBox="0 0 120 120" fill="none">
              <ellipse cx="60" cy="60" rx="55" ry="35" fill="#bbf7d0" />
              <ellipse cx="60" cy="60" rx="40" ry="20" fill="#fef9c3" />
              <ellipse cx="60" cy="60" rx="25" ry="10" fill="#facc15" />
            </svg>
            <svg className="absolute top-8 left-8 w-12 h-12 animate-float" viewBox="0 0 32 32" fill="none">
              <ellipse cx="16" cy="16" rx="14" ry="8" fill="#22c55e" />
              <path d="M16 4 Q18 16 16 28 Q14 16 16 4" stroke="#166534" strokeWidth="1.5" fill="none" />
            </svg>
            <svg className="absolute bottom-8 right-8 w-10 h-10 animate-float" style={{animationDelay: '1.5s'}} viewBox="0 0 32 32" fill="none">
              <ellipse cx="16" cy="16" rx="14" ry="8" fill="#bbf7d0" />
              <path d="M16 4 Q18 16 16 28 Q14 16 16 4" stroke="#22c55e" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-200 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-200/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-green-700">{feature.title}</h3>
                <p className="text-green-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-green-200 hover:border-green-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-green-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-green-800">{testimonial.name}</div>
                  <div className="text-green-500 text-sm">{testimonial.role}</div>
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
            Ready to <span className="bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">Go Green?</span>
          </h2>
          <p className="text-xl text-green-700 mb-8">
            Jadilah bagian dari perubahan positif untuk bumi yang lebih baik bersama EcoStartup!
          </p>
          <Button className="bg-gradient-to-r from-green-400 to-yellow-300 hover:from-green-500 hover:to-yellow-400 text-green-900 font-bold px-12 py-4 rounded-lg text-xl">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-green-200/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-yellow-300 rounded-lg flex items-center justify-center text-green-900 font-bold">
              E
            </div>
            <span className="text-xl font-bold">EcoStartup</span>
          </div>
          <div className="text-green-500 text-sm">
            © 2024 EcoStartup. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-700 transition-colors">Instagram</a>
            <a href="#" className="hover:text-green-700 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-green-700 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes leaf {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .animate-leaf {
          animation: leaf 6s ease-in-out infinite;
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme225; 