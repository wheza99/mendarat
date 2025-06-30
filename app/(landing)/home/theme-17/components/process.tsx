"use client";

import { useState, useEffect } from "react";
import { processSectionCopy } from "../copy";

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('process-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="process-section"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      
      {/* Curved Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-sky-50/40 to-white">
        <svg 
          className="absolute top-0 left-0 w-full h-20" 
          viewBox="0 0 1200 80" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C400,60 800,20 1200,40 L1200,0 Z" 
            fill="white" 
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {processSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {processSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {processSectionCopy.steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-16 last:mb-0 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              
              {/* Step Card */}
              <div 
                className={`w-full lg:w-5/12 transform transition-all duration-1000 ${
                  isVisible 
                    ? 'translate-x-0 opacity-100' 
                    : index % 2 === 0 
                      ? '-translate-x-16 opacity-0' 
                      : 'translate-x-16 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  
                  {/* Step Content */}
                  <div className={`${index % 2 === 0 ? 'text-left' : 'text-right lg:text-left'}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-emerald-100/80 to-sky-100/80 backdrop-blur-sm border border-white/50 text-emerald-700 text-sm font-medium rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>
              </div>

              {/* Center Circle & Connector */}
              <div className="hidden lg:flex w-2/12 justify-center items-center relative">
                
                {/* Connector Line */}
                {index < processSectionCopy.steps.length - 1 && (
                  <div className="absolute top-16 w-px h-32 bg-gradient-to-b from-emerald-400 to-sky-400 opacity-40"></div>
                )}
                
                {/* Circle */}
                <div 
                  className={`w-16 h-16 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-1000 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 0.2 + 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Empty Space (for alignment) */}
              <div className="hidden lg:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Siap memulai proyek Anda? Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda.
            </p>
            
            <button className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500/90 to-sky-500/90 backdrop-blur-lg border border-white/30 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Mulai Konsultasi</span>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 