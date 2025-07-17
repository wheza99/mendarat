"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: "🧘", title: "Meditation Classes", desc: "Find inner peace through guided meditation sessions." },
  { icon: "🌿", title: "Wellness Coaching", desc: "Personalized wellness plans for mind and body." },
  { icon: "💆", title: "Stress Relief", desc: "Techniques to manage stress and anxiety." },
  { icon: "🌅", title: "Mindfulness", desc: "Learn to live in the present moment." },
];

const meditationTypes = [
  { name: "Mindfulness", duration: "10 min", difficulty: "Beginner", image: "🧘" },
  { name: "Loving Kindness", duration: "15 min", difficulty: "Intermediate", image: "💝" },
  { name: "Body Scan", duration: "20 min", difficulty: "Advanced", image: "🌟" },
];

const testimonials = [
  { name: "Emma Wilson", role: "Yoga Instructor", content: "This platform has transformed my daily routine. The guided sessions are incredibly calming.", rating: 5 },
  { name: "David Chen", role: "Stress Management Coach", content: "Perfect for my clients. The mindfulness techniques are easy to follow.", rating: 5 },
  { name: "Sarah Martinez", role: "Wellness Blogger", content: "The meditation sessions help me stay centered throughout the day.", rating: 5 },
];

const Theme230: React.FC = () => {
  const [currentMeditation, setCurrentMeditation] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [breathCount, setBreathCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMeditation((prev) => (prev + 1) % meditationTypes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const breathInterval = setInterval(() => {
      setBreathCount((prev) => (prev + 1) % 8);
    }, 2000);
    return () => clearInterval(breathInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lavender-50 via-blue-50 to-teal-50 text-gray-800 overflow-hidden relative font-sans">
      {/* Calming Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Zen Circles */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="zen-circles" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="8" fill="none" stroke="#8b5cf6" strokeWidth="0.5" />
              <circle cx="15" cy="15" r="4" fill="none" stroke="#14b8a6" strokeWidth="0.3" />
              <circle cx="15" cy="15" r="1" fill="#8b5cf6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zen-circles)" />
        </svg>
        {/* Floating Zen Elements */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              backgroundColor: `hsl(${Math.random() * 60 + 250}, 70%, 80%)`,
              opacity: 0.2 + Math.random() * 0.3,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 8 + 6}s`,
            }}
          />
        ))}
        {/* Calming Waves */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-lavender-400 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-30" style={{ animationDelay: '2s' }} />
        {/* Breathing Circles */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-lavender-400 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-lavender-400 to-teal-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              Z
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-lavender-600 to-teal-600 bg-clip-text text-transparent">
              ZENWELL
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-lavender-600 transition-colors">Services</a>
            <a href="#meditation" className="hover:text-lavender-600 transition-colors">Meditation</a>
            <a href="#testimonials" className="hover:text-lavender-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-lavender-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-lavender-500 to-teal-500 hover:from-lavender-600 hover:to-teal-600 text-white font-bold px-6 py-2 rounded-lg">
            Start Journey
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-lavender-600 to-teal-600 bg-clip-text text-transparent animate-pulse">Inner Peace</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Discover the path to mindfulness and wellness. Transform your life through meditation, stress relief, and holistic wellness practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-lavender-500 to-teal-500 hover:from-lavender-600 hover:to-teal-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Begin Meditation
              </Button>
              <Button variant="outline" className="border-lavender-400 text-lavender-600 hover:bg-lavender-50 font-bold px-8 py-4 rounded-lg text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-lavender-100/50 to-teal-100/50 rounded-full animate-pulse border border-lavender-200/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">🧘</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-lavender-400 to-teal-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-lavender-500 rounded-full animate-pulse"></div>
            {/* Floating Zen Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🌿</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>💆</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>🌅</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Wellness <span className="bg-gradient-to-r from-lavender-600 to-teal-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200/50 hover:border-lavender-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-lavender-200/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meditation Types Showcase */}
      <section id="meditation" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meditation <span className="bg-gradient-to-r from-lavender-600 to-teal-600 bg-clip-text text-transparent">Types</span>
          </h2>
          <div className="relative h-96 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200/30">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{meditationTypes[currentMeditation].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{meditationTypes[currentMeditation].name}</h3>
                <p className="text-lavender-600 text-lg mb-2 font-bold">{meditationTypes[currentMeditation].duration}</p>
                <div className="text-gray-500 font-medium text-xl">{meditationTypes[currentMeditation].difficulty}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {meditationTypes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentMeditation(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentMeditation ? 'bg-lavender-400' : 'bg-lavender-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breathing Exercise */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Breathing <span className="bg-gradient-to-r from-lavender-600 to-teal-600 bg-clip-text text-transparent">Exercise</span>
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200/30">
            <div className="text-6xl font-bold text-lavender-600 mb-4">
              {breathCount < 4 ? "Inhale" : "Exhale"}
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-lavender-400 to-teal-400 rounded-full mx-auto mb-4 animate-pulse" style={{ animationDuration: '4s' }}></div>
            <p className="text-gray-600 text-xl">Follow the rhythm</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Wellness <span className="bg-gradient-to-r from-lavender-600 to-teal-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-lavender-200/50 hover:border-lavender-400 transition-all duration-300">
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
            Begin Your <span className="bg-gradient-to-r from-lavender-600 to-teal-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Start your path to inner peace and wellness today with our guided meditation sessions.
          </p>
          <Button className="bg-gradient-to-r from-lavender-500 to-teal-500 hover:from-lavender-600 hover:to-teal-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-lavender-200/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-lavender-400 to-teal-400 rounded-lg flex items-center justify-center text-white font-bold">
              Z
            </div>
            <span className="text-xl font-bold">ZENWELL</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 ZENWELL. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lavender-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-lavender-600 transition-colors">YouTube</a>
            <a href="#" className="hover:text-lavender-600 transition-colors">Podcast</a>
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

export default Theme230; 