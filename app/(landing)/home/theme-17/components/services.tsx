"use client";

import { useState, useEffect } from "react";
import { servicesSectionCopy } from "../copy";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services-section"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      
      {/* Curved Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/80">
        <svg 
          className="absolute top-0 left-0 w-full h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C300,80 600,40 1200,60 L1200,0 Z" 
            fill="white" 
            opacity="0.8"
          />
        </svg>
        <svg 
          className="absolute bottom-0 left-0 w-full h-24" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,120 C300,40 600,80 1200,60 L1200,120 Z" 
            fill="white" 
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Floating Organic Shapes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-200 to-sky-200 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-sky-200 to-amber-200 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        <svg className="absolute top-1/3 left-10 w-16 h-16 text-emerald-300" viewBox="0 0 100 100">
          <path 
            d="M30,20 Q50,5 70,25 Q85,45 65,65 Q45,85 25,65 Q5,45 25,25 Q25,20 30,20 Z" 
            fill="currentColor" 
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {servicesSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {servicesSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {servicesSectionCopy.services.map((service, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              
              {/* Main Service Card */}
              <div className="relative h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-white/50">
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-amber-400/20 blur-sm' 
                    : 'bg-transparent'
                } -z-10`}></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100/80 to-sky-100/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/50">
                    <span className="text-4xl filter drop-shadow-lg">
                      {service.icon}
                    </span>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className={`flex items-center space-x-3 transform transition-all duration-300 ${
                          hoveredIndex === index 
                            ? 'translate-x-2 opacity-100' 
                            : 'translate-x-0 opacity-80'
                        }`}
                        style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full shadow-lg shadow-emerald-400/30"></div>
                        <span className="text-slate-700 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-emerald-400/20 to-sky-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              </div>

              {/* Service Card Shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-200/30 rounded-3xl transform translate-y-4 -z-20 opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Butuh solusi khusus untuk bisnis Anda? Mari diskusikan kebutuhan spesifik Anda dengan tim ahli kami.
            </p>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500/90 to-sky-500/90 backdrop-blur-lg border border-white/30 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Konsultasi Gratis</span>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 