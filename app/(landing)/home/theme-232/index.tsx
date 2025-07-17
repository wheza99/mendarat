"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: "🎵", title: "Music Production", desc: "Professional recording and mixing services." },
  { icon: "🎤", title: "Voice Recording", desc: "High-quality vocal recording and editing." },
  { icon: "🎧", title: "Audio Mastering", desc: "Final polish for your music tracks." },
  { icon: "🎹", title: "Instrument Recording", desc: "Capture the perfect sound for any instrument." },
];

const musicGenres = [
  { name: "Electronic", bpm: "128 BPM", mood: "Energetic", image: "🎧" },
  { name: "Rock", bpm: "140 BPM", mood: "Powerful", image: "🎸" },
  { name: "Jazz", bpm: "120 BPM", mood: "Smooth", image: "🎷" },
];

const testimonials = [
  { name: "Alex Martinez", role: "Music Producer", content: "The studio quality is incredible. Perfect for professional recordings.", rating: 5 },
  { name: "Sarah Kim", role: "Singer", content: "Amazing vocal recording experience. The engineers are very professional.", rating: 5 },
  { name: "Mike Johnson", role: "Band Leader", content: "Best studio we've worked with. Great equipment and atmosphere.", rating: 5 },
];

const Theme232: React.FC = () => {
  const [currentGenre, setCurrentGenre] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentGenre((prev) => (prev + 1) % musicGenres.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const audioInterval = setInterval(() => {
      setAudioLevel((prev) => (prev + 1) % 8);
    }, 200);
    return () => clearInterval(audioInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden relative font-mono">
      {/* Audio Wave Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Audio Wave Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="audio-waves" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 Q 5 5 10 10 T 20 10" stroke="#8b5cf6" strokeWidth="0.5" fill="none" />
              <path d="M 0 15 Q 5 10 10 15 T 20 15" stroke="#ec4899" strokeWidth="0.3" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#audio-waves)" />
        </svg>
        {/* Floating Music Elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 270}, 80%, 70%)`,
              opacity: 0.4 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
        {/* Audio Level Bars */}
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30" style={{ animationDelay: '1s' }} />
        {/* Music Notes */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              🎵
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              STUDIOBEAT
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#genres" className="hover:text-purple-400 transition-colors">Genres</a>
            <a href="#testimonials" className="hover:text-purple-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-6 py-2 rounded-lg">
            Book Session
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              CREATE
              <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">MUSIC</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional music production studio with state-of-the-art equipment. Turn your musical vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Start Recording
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-500/20 font-bold px-8 py-4 rounded-lg text-lg">
                View Equipment
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg animate-pulse border-2 border-purple-400/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">🎧</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
            {/* Floating Music Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🎤</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>🎹</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>🎸</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Studio <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-200">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Genres Showcase */}
      <section id="genres" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Music <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Genres</span>
          </h2>
          <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{musicGenres[currentGenre].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-purple-200">{musicGenres[currentGenre].name}</h3>
                <p className="text-pink-400 text-lg mb-2 font-bold">{musicGenres[currentGenre].bpm}</p>
                <div className="text-gray-300 font-medium text-xl">{musicGenres[currentGenre].mood}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {musicGenres.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentGenre(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentGenre ? 'bg-purple-400' : 'bg-purple-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audio Level Monitor */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Audio <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Levels</span>
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-6xl font-bold text-purple-400 mb-4">
              🔊
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-${Math.max(4, audioLevel + 1)} bg-gradient-to-t from-purple-400 to-pink-400 rounded-sm transition-all duration-200 ${
                    i <= audioLevel ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{ height: `${Math.max(16, (audioLevel + 1) * 8)}px` }}
                />
              ))}
            </div>
            <p className="text-gray-300 text-xl">Live audio monitoring</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Artist <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
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
            Book Your <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Session</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to create your next hit? Book a session with our professional audio engineers.
          </p>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Book Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-purple-400/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold">
              🎵
            </div>
            <span className="text-xl font-bold">STUDIOBEAT</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 STUDIOBEAT. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-purple-400 transition-colors">SoundCloud</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-purple-400 transition-colors">YouTube</a>
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

export default Theme232; 