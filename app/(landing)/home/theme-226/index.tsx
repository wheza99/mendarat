"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: "🚀", title: "Space Travel", desc: "Experience zero gravity and breathtaking views of Earth." },
  { icon: "🌌", title: "Galaxy Tours", desc: "Explore distant galaxies and cosmic phenomena." },
  { icon: "🛸", title: "Space Station", desc: "Visit the International Space Station in orbit." },
  { icon: "⭐", title: "Stellar Views", desc: "Witness the beauty of stars and nebulae up close." },
];

const destinations = [
  { name: "Moon Base Alpha", distance: "384,400 km", duration: "3 days", image: "🌙" },
  { name: "Mars Colony", distance: "225M km", duration: "7 months", image: "🔴" },
  { name: "Saturn Rings", distance: "1.2B km", duration: "2 years", image: "🪐" },
];

const testimonials = [
  { name: "Captain Sarah Chen", role: "Astronaut", content: "The most incredible experience of my life. Words can't describe the beauty of space.", rating: 5 },
  { name: "Dr. Alex Rodriguez", role: "Space Scientist", content: "Professional, safe, and absolutely mind-blowing. Highly recommended!", rating: 5 },
  { name: "Maria Santos", role: "Space Tourist", content: "A dream come true. The crew was amazing and the views were spectacular.", rating: 5 },
];

const Theme226: React.FC = () => {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white overflow-hidden relative font-sans">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: `white`,
              opacity: 0.2 + Math.random() * 0.5,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
        {/* Nebula Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-14 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              S
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              SPACETOUR
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">Destinations</a>
            <a href="#testimonials" className="hover:text-purple-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-6 py-2 rounded-lg">
            Book Flight
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              EXPLORE THE
              <span className="block bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent animate-pulse">COSMOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed">
              Embark on the ultimate adventure beyond Earth's atmosphere. Experience the wonders of space travel with our cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Launch Now
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/20 font-bold px-8 py-4 rounded-lg text-lg">
                View Missions
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full animate-pulse border border-purple-400/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">🚀</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            {/* Floating Space Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🌌</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>🛸</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-200">{feature.title}</h3>
                <p className="text-purple-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section id="about" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Popular <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Destinations</span>
          </h2>
          <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{destinations[currentDestination].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-purple-200">{destinations[currentDestination].name}</h3>
                <p className="text-purple-100 text-lg mb-2">{destinations[currentDestination].distance}</p>
                <div className="text-purple-400 font-bold text-xl">{destinations[currentDestination].duration}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {destinations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentDestination(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentDestination ? 'bg-purple-400' : 'bg-purple-400/30'}`}
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
            Astronaut <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-purple-200">{testimonial.name}</div>
                  <div className="text-purple-300 text-sm">{testimonial.role}</div>
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
            Ready to <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">Launch?</span>
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Join the elite group of space travelers and experience the adventure of a lifetime!
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Book Your Flight
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-purple-400/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="text-xl font-bold">SPACETOUR</span>
          </div>
          <div className="text-purple-300 text-sm">
            © 2024 SPACETOUR. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme226; 