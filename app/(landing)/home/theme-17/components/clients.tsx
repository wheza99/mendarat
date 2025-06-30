"use client";

import { useState, useEffect } from "react";
import { clientsSectionCopy } from "../copy";

export default function Clients() {
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
      { threshold: 0.3 }
    );

    const element = document.getElementById('clients-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="clients-section"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-r from-slate-50/50 via-white to-emerald-50/30"
    >
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,theme(colors.emerald.100/30)_50%,transparent_75%)]"></div>
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
              {clientsSectionCopy.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {clientsSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clientsSectionCopy.clients.map((client, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              
              {/* Client Card */}
              <div className="relative bg-white/30 backdrop-blur-xl border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:bg-white/40">
                
                {/* Logo Container */}
                <div className="aspect-video flex items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Client Info - Shown on hover */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="font-bold text-slate-800 text-sm mb-1 text-center">
                    {client.name}
                  </h4>
                  <span className="text-emerald-600 text-xs font-medium">
                    {client.industry}
                  </span>
                </div>

                {/* Glass Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400 rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
} 