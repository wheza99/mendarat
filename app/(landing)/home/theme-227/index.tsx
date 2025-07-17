"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const games = [
  { icon: "🎮", title: "Classic Arcade", desc: "Experience the golden age of gaming with authentic arcade cabinets." },
  { icon: "🕹️", title: "Retro Consoles", desc: "Play on vintage consoles with original controllers and cartridges." },
  { icon: "🎯", title: "High Scores", desc: "Compete for the highest scores on classic arcade games." },
  { icon: "🏆", title: "Tournaments", desc: "Join weekly tournaments and win retro gaming prizes." },
];

const arcadeGames = [
  { name: "Pac-Man", year: 1980, difficulty: "Medium", image: "👻" },
  { name: "Space Invaders", year: 1978, difficulty: "Hard", image: "👾" },
  { name: "Donkey Kong", year: 1981, difficulty: "Expert", image: "🦍" },
];

const testimonials = [
  { name: "Arcade Master", role: "Gaming Legend", content: "This place brings back all the memories! The arcade cabinets are in perfect condition.", rating: 5 },
  { name: "Retro Gamer", role: "Collector", content: "Amazing selection of classic games. The atmosphere is exactly like the 80s!", rating: 5 },
  { name: "Pixel Artist", role: "Game Developer", content: "Inspiring to see these classics preserved. The high scores are still being set!", rating: 5 },
];

const Theme227: React.FC = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState(123456);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % arcadeGames.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      setScore((prev) => prev + Math.floor(Math.random() * 10 + 50));
    }, 2000);
    return () => clearInterval(scoreInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-mono">
      {/* Animated Arcade Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Pixel Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="arcade-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#ff00ff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arcade-grid)" />
        </svg>
        {/* Floating Pixels */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-sm animate-pixel"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 300}, 100%, 60%)`,
              opacity: 0.3 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
        {/* Neon Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              A
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              ARCADEX
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#games" className="hover:text-pink-400 transition-colors">Games</a>
            <a href="#about" className="hover:text-pink-400 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-pink-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-6 py-2 rounded-lg">
            Play Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              RETRO
              <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse">ARCADE</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-200 mb-8 leading-relaxed">
              Step back in time to the golden age of gaming. Experience classic arcade games in their original glory with authentic cabinets and controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Start Playing
              </Button>
              <Button variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-500/20 font-bold px-8 py-4 rounded-lg text-lg">
                View Games
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-lg animate-pulse border-2 border-pink-400/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">🎮</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
            {/* Floating Arcade Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🕹️</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>🏆</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>🎯</div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Arcade <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Games</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{game.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-pink-200">{game.title}</h3>
                <p className="text-pink-100">{game.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arcade Showcase */}
      <section id="about" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Classic <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Games</span>
          </h2>
          <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{arcadeGames[currentGame].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-pink-200">{arcadeGames[currentGame].name}</h3>
                <p className="text-pink-100 text-lg mb-2">{arcadeGames[currentGame].year}</p>
                <div className="text-pink-400 font-bold text-xl">{arcadeGames[currentGame].difficulty}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {arcadeGames.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentGame(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentGame ? 'bg-pink-400' : 'bg-pink-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High Score Display */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            High <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Score</span>
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
            <div className="text-6xl font-bold text-pink-400 mb-4">
              {score.toLocaleString()}
            </div>
            <p className="text-pink-200 text-xl">Current Score</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Player <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:border-pink-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-pink-100 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-pink-200">{testimonial.name}</div>
                  <div className="text-pink-300 text-sm">{testimonial.role}</div>
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
            Ready to <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Play?</span>
          </h2>
          <p className="text-xl text-pink-200 mb-8">
            Join the arcade revolution and experience gaming history in person!
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Visit Arcade
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-pink-400/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="text-xl font-bold">ARCADEX</span>
          </div>
          <div className="text-pink-300 text-sm">
            © 2024 ARCADEX. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pink-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-pink-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-pink-400 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pixel {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-pixel {
          animation: pixel 3s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Theme227; 