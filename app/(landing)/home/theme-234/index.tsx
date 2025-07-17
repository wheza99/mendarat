"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: "💪", title: "Personal Training", desc: "One-on-one customized workout programs." },
  { icon: "🏃", title: "Group Classes", desc: "High-energy group fitness sessions." },
  { icon: "🧘", title: "Yoga & Pilates", desc: "Mind-body wellness and flexibility." },
  { icon: "🥗", title: "Nutrition Coaching", desc: "Personalized meal plans and guidance." },
];

const workoutTypes = [
  { name: "Strength Training", intensity: "High", duration: "45 min", image: "🏋️" },
  { name: "Cardio Blast", intensity: "Medium", duration: "30 min", image: "🏃" },
  { name: "Flexibility", intensity: "Low", duration: "60 min", image: "🧘" },
];

const testimonials = [
  { name: "Mike Johnson", role: "Personal Trainer", content: "Our clients achieve amazing results with our proven training methods.", rating: 5 },
  { name: "Sarah Chen", role: "Fitness Enthusiast", content: "The best gym I've ever been to. The trainers are incredibly motivating!", rating: 5 },
  { name: "David Rodriguez", role: "Yoga Instructor", content: "Perfect environment for mind-body wellness. Highly recommend.", rating: 5 },
];

const Theme234: React.FC = () => {
  const [currentWorkout, setCurrentWorkout] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [heartRate, setHeartRate] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWorkout((prev) => (prev + 1) % workoutTypes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const heartRateInterval = setInterval(() => {
      setHeartRate((prev) => (prev + 1) % 6);
    }, 1000);
    return () => clearInterval(heartRateInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 text-gray-800 overflow-hidden relative font-sans">
      {/* Fitness Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Fitness Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="fitness-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" stroke="#dc2626" strokeWidth="0.5" />
              <circle cx="10" cy="10" r="3" fill="#dc2626" opacity="0.3" />
              <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#dc2626" strokeWidth="0.3" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fitness-grid)" />
        </svg>
        {/* Floating Fitness Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: `hsl(${Math.random() * 30 + 10}, 80%, 70%)`,
              opacity: 0.3 + Math.random() * 0.4,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 5 + 3}s`,
            }}
          />
        ))}
        {/* Energy Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30" style={{ animationDelay: '1.5s' }} />
        {/* Fitness Equipment */}
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-red-500 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-xl flex items-center justify-center text-2xl font-bold animate-pulse">
              💪
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              FITLIFE
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#workouts" className="hover:text-red-600 transition-colors">Workouts</a>
            <a href="#testimonials" className="hover:text-red-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-6 py-2 rounded-lg">
            Start Training
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              TRANSFORM
              <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent animate-pulse">YOUR BODY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Professional fitness training to help you achieve your health and fitness goals. Start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-red-400 text-red-600 hover:bg-red-50 font-bold px-8 py-4 rounded-lg text-lg">
                View Classes
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-lg animate-pulse border-2 border-red-200/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">💪</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse"></div>
            {/* Floating Fitness Elements */}
            <div className="absolute top-10 left-1/2 text-2xl animate-float">🏃</div>
            <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: '1s' }}>🧘</div>
            <div className="absolute top-1/2 -left-4 text-xl animate-float" style={{ animationDelay: '2s' }}>🏋️</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Fitness <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-red-200/50 hover:border-red-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-200/20"
              >
                <div className="text-4xl mb-4 animate-pulse">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Types Showcase */}
      <section id="workouts" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Workout <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Types</span>
          </h2>
          <div className="relative h-96 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-red-200/30">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{workoutTypes[currentWorkout].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{workoutTypes[currentWorkout].name}</h3>
                <p className="text-red-600 text-lg mb-2 font-bold">{workoutTypes[currentWorkout].intensity}</p>
                <div className="text-gray-500 font-medium text-xl">{workoutTypes[currentWorkout].duration}</div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {workoutTypes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentWorkout(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentWorkout ? 'bg-red-400' : 'bg-red-400/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heart Rate Monitor */}
      <section className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Heart <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Rate</span>
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-red-200/30">
            <div className="text-6xl font-bold text-red-600 mb-4">
              {heartRate % 2 === 0 ? "❤️" : "💓"}
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-orange-400 rounded-full mx-auto mb-4 animate-pulse" style={{ animationDuration: '1s' }}></div>
            <p className="text-gray-600 text-xl">Monitoring your fitness progress</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Success <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-red-200/50 hover:border-red-400 transition-all duration-300">
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
            Start Your <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join our fitness community and transform your life. Book your first session today.
          </p>
          <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Get Started
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-red-200/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-orange-400 rounded-lg flex items-center justify-center text-white font-bold">
              💪
            </div>
            <span className="text-xl font-bold">FITLIFE</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 FITLIFE. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-red-600 transition-colors">YouTube</a>
            <a href="#" className="hover:text-red-600 transition-colors">TikTok</a>
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

export default Theme234; 