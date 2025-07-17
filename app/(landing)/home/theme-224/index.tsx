"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: "🎮", title: "Gaming Experience", desc: "Immersive gameplay with cutting-edge technology." },
  { icon: "⚡", title: "High Performance", desc: "Lightning-fast speed and smooth graphics." },
  { icon: "🎯", title: "Precision Control", desc: "Ultra-responsive controls for competitive play." },
  { icon: "🌟", title: "Premium Quality", desc: "Top-tier components and build quality." },
];

const games = [
  { name: "Cyberpunk 2077", genre: "RPG", rating: 9.2, image: "🌆" },
  { name: "Valorant", genre: "FPS", rating: 8.8, image: "🎯" },
  { name: "League of Legends", genre: "MOBA", rating: 9.0, image: "⚔️" },
];

const testimonials = [
  { name: "Alex Chen", role: "Pro Gamer", content: "The performance is absolutely insane! Best gaming setup I've ever used.", rating: 5 },
  { name: "Sarah Kim", role: "Streamer", content: "Perfect for streaming. No lag, no issues, just pure gaming bliss.", rating: 5 },
  { name: "Mike Rodriguez", role: "Esports Player", content: "This setup gives me the competitive edge I need in tournaments.", rating: 5 },
];

const Theme224: React.FC = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % games.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00ffcc" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Neon Dots */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              backgroundColor: `#00ffc3`,
              opacity: 0.18 + Math.random() * 0.2,
              filter: 'blur(1px)',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-green-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              G
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              GAMERZONE
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#games" className="hover:text-cyan-400 transition-colors">Games</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold px-6 py-2 rounded-lg">
            Get Setup
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              LEVEL UP
              <span className="block bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent animate-pulse">YOUR GAME</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 leading-relaxed">
              Experience gaming like never before with our cutting-edge setup. Dominate every match with precision, speed, and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold px-8 py-4 rounded-lg text-lg">
                Start Gaming
              </Button>
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-500/20 font-bold px-8 py-4 rounded-lg text-lg">
                View Specs
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-green-400/20 rounded-full animate-pulse border border-cyan-400/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">🎮</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-green-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full animate-pulse"></div>
            {/* Floating Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">⚡</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{animationDelay: '1s'}}>🎯</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{animationDelay: '2s'}}>🌟</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Gaming <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i}
                className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-200">{feature.title}</h3>
                <p className="text-cyan-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Showcase */}
      <section id="games" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">Games</span>
          </h2>
          <div className="relative h-96 bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{games[currentGame].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-cyan-200">{games[currentGame].name}</h3>
                <p className="text-cyan-100 text-lg mb-2">{games[currentGame].genre}</p>
                <div className="text-cyan-400 font-bold text-xl">{games[currentGame].rating}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {games.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentGame(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentGame ? 'bg-cyan-400' : 'bg-cyan-400/30'}`}
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
            Player <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-cyan-100 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-cyan-200">{testimonial.name}</div>
                  <div className="text-cyan-300 text-sm">{testimonial.role}</div>
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
            Ready to <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">Dominate?</span>
          </h2>
          <p className="text-xl text-cyan-200 mb-8">
            Join the elite gamers and experience the future of gaming!
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black font-bold px-12 py-4 rounded-lg text-xl">
            Get Your Setup
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-green-400 rounded-lg flex items-center justify-center text-black font-bold">
              G
            </div>
            <span className="text-xl font-bold">GAMERZONE</span>
          </div>
          <div className="text-cyan-200 text-sm">
            © 2024 GAMERZONE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Discord</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Twitch</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
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

export default Theme224; 