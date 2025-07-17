"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: "🐕", title: "Pet Wellness", desc: "Comprehensive health checkups and preventive care." },
  { icon: "🏥", title: "Emergency Care", desc: "24/7 emergency veterinary services." },
  { icon: "💉", title: "Vaccinations", desc: "Essential vaccines for your pet's protection." },
  { icon: "🦷", title: "Dental Care", desc: "Professional dental cleaning and oral health." },
];

const petTypes = [
  { name: "Dogs", services: "Vaccinations, Checkups", image: "🐕" },
  { name: "Cats", services: "Grooming, Wellness", image: "🐱" },
  { name: "Birds", services: "Specialized Care", image: "🦜" },
];

const testimonials = [
  { name: "Dr. Sarah Johnson", role: "Veterinarian", content: "Our clinic provides the highest quality care for all pets. We treat every animal like family.", rating: 5 },
  { name: "Mike Chen", role: "Pet Owner", content: "The staff is incredibly caring and professional. My dog loves coming here!", rating: 5 },
  { name: "Lisa Rodriguez", role: "Pet Groomer", content: "The best veterinary care in the area. Highly recommend their services.", rating: 5 },
];

const Theme231: React.FC = () => {
  const [currentPet, setCurrentPet] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [heartbeat, setHeartbeat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPet((prev) => (prev + 1) % petTypes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const heartbeatInterval = setInterval(() => {
      setHeartbeat((prev) => (prev + 1) % 4);
    }, 1000);
    return () => clearInterval(heartbeatInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-800 overflow-hidden relative font-sans">
      {/* Pet-Friendly Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Paw Print Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="paw-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#f97316" />
              <circle cx="6" cy="6" r="1" fill="#f97316" />
              <circle cx="14" cy="6" r="1" fill="#f97316" />
              <circle cx="6" cy="14" r="1" fill="#f97316" />
              <circle cx="14" cy="14" r="1" fill="#f97316" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#paw-pattern)" />
        </svg>
        {/* Floating Pet Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              backgroundColor: `hsl(${Math.random() * 30 + 20}, 80%, 70%)`,
              opacity: 0.3 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
        {/* Warm Light Rays */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30" style={{ animationDelay: '2s' }} />
        {/* Heartbeat Elements */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-red-400 rounded-full animate-pulse" style={{ animationDuration: '1s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '1s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              🐾
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              PETCARE
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-orange-600 transition-colors">Services</a>
            <a href="#pets" className="hover:text-orange-600 transition-colors">Pet Types</a>
            <a href="#testimonials" className="hover:text-orange-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-6 py-2 rounded-lg">
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Caring for
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent animate-pulse">Your Pets</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Professional veterinary care with love and compassion. Your pets deserve the best healthcare and attention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Schedule Visit
              </Button>
              <Button variant="outline" className="border-orange-400 text-orange-600 hover:bg-orange-50 font-bold px-8 py-4 rounded-lg text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-orange-100/50 to-red-100/50 rounded-full animate-pulse border border-orange-200/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">🐕</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full animate-pulse"></div>
            {/* Floating Pet Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🐱</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>🦜</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>🏥</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Veterinary <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-200/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Types Showcase */}
      <section id="pets" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pet <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Types</span>
          </h2>
          <div className="relative h-96 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/30">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{petTypes[currentPet].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{petTypes[currentPet].name}</h3>
                <p className="text-orange-600 text-lg mb-2 font-bold">{petTypes[currentPet].services}</p>
                <div className="text-gray-500 font-medium text-xl">Specialized Care</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {petTypes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPet(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentPet ? 'bg-orange-400' : 'bg-orange-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heartbeat Monitor */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Pet <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Health</span>
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/30">
            <div className="text-6xl font-bold text-red-600 mb-4">
              {heartbeat === 0 || heartbeat === 2 ? "❤️" : "💓"}
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-orange-400 rounded-full mx-auto mb-4 animate-pulse" style={{ animationDuration: '1s' }}></div>
            <p className="text-gray-600 text-xl">Monitoring your pet's health</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Client <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/50 hover:border-orange-400 transition-all duration-300">
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
            Book Your <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Appointment</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Give your pets the care they deserve. Schedule a visit with our experienced veterinary team.
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Schedule Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-orange-200/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center text-white font-bold">
              🐾
            </div>
            <span className="text-xl font-bold">PETCARE</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 PETCARE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Emergency</a>
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

export default Theme231; 