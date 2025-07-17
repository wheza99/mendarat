"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: "🎨", title: "Brand Identity", desc: "Menciptakan identitas brand yang unik dan memorable." },
  { icon: "💻", title: "Web Development", desc: "Website modern dengan teknologi terkini." },
  { icon: "📱", title: "Mobile Apps", desc: "Aplikasi mobile yang user-friendly." },
  { icon: "📊", title: "Digital Marketing", desc: "Strategi marketing digital yang efektif." },
];

const projects = [
  { name: "E-Commerce Platform", category: "Web Development", image: "🛒" },
  { name: "Brand Redesign", category: "Brand Identity", image: "✨" },
  { name: "Mobile Banking App", category: "Mobile Apps", image: "🏦" },
];

const testimonials = [
  { name: "Sarah Wijaya", role: "CEO, TechStart", content: "Tim kreatif yang luar biasa! Hasilnya melebihi ekspektasi kami.", rating: 5 },
  { name: "Ahmad Rahman", role: "Founder, FoodCorp", content: "Proses kerja yang profesional dan hasil yang memuaskan.", rating: 5 },
  { name: "Maya Sari", role: "Marketing Director", content: "Strategi marketing mereka sangat efektif untuk bisnis kami.", rating: 5 },
];

const Theme223: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-purple-700 text-white overflow-hidden">
      {/* Header */}
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl font-bold">
              C
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              CreativeStudio
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-6 py-2 rounded-lg">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-8 py-20">
        <div className="max-w-2xl text-center md:text-left md:mr-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> 
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              We Create
              <span className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Digital Magic</span>
            </h1>
            <p className="text-xl md:text-2xl text-pink-200 mb-8 leading-relaxed">
              Transformasi ide kreatif menjadi pengalaman digital yang memukau. Kami menghubungkan teknologi dengan kreativitas untuk hasil yang luar biasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg">
                Start Project
              </Button>
              <Button variant="outline" className="border-pink-300 text-pink-300 hover:bg-pink-500/20 font-bold px-8 py-4 rounded-lg text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        {/* Animated Hero Visual */}
        <div className="w-full max-w-md mt-12 md:mt-0">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl animate-bounce">✨</div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20 hover:border-pink-300/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-pink-200">{service.title}</h3>
                <p className="text-pink-100">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">{projects[currentProject].image}</div>
                <h3 className="text-3xl font-bold mb-2 text-pink-200">{projects[currentProject].name}</h3>
                <p className="text-pink-100 text-lg">{projects[currentProject].category}</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentProject(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === currentProject ? 'bg-pink-400' : 'bg-pink-400/30'}`}
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
            Client <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-300/20">
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
            Ready to Create Something <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">Amazing?</span>
          </h2>
          <p className="text-xl text-pink-200 mb-8">
            Mari wujudkan visi kreatif Anda menjadi kenyataan digital yang memukau!
          </p>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-12 py-4 rounded-lg text-xl">
            Let's Talk
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-8 border-t border-pink-300/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="text-xl font-bold">CreativeStudio</span>
          </div>
          <div className="text-pink-200 text-sm">
            © 2024 CreativeStudio. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Theme223; 