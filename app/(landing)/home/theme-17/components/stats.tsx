"use client";

import { useEffect, useState } from "react";
import { statsSectionCopy } from "../copy";

export default function Stats() {
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

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="stats-section"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50/50 to-white"
    >
      
      {/* Background Organic Shapes */}
      <div className="absolute inset-0 opacity-40">
        <svg className="absolute top-20 left-10 w-24 h-24 text-emerald-200" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="animate-pulse" />
        </svg>
        <svg className="absolute bottom-20 right-16 w-32 h-32 text-sky-200" viewBox="0 0 100 100">
          <path 
            d="M25,50 Q40,25 65,35 Q85,45 75,70 Q55,85 35,75 Q15,65 25,50 Z" 
            fill="currentColor" 
            className="animate-bounce"
            style={{ animationDuration: '4s' }}
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              {statsSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {statsSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statsSectionCopy.stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              
              {/* Glass Card */}
              <div className="relative bg-white/30 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group-hover:bg-white/40">
                
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-sky-400/20 to-amber-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  
                  {/* Number with Counter Animation */}
                  <div className="mb-4">
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent mb-2">
                      {isVisible && (
                        <AnimatedNumber 
                          value={stat.number} 
                          delay={index * 200} 
                        />
                      )}
                    </div>
                    <div className="text-slate-700 font-semibold text-xl mb-2">
                      {stat.label}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 0.3}s`,
                        animation: isVisible ? 'float 3s ease-in-out infinite' : 'none'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Shadow/Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-200/20 rounded-3xl transform translate-y-2 -z-20 opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400 rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}

// Animated Number Component
function AnimatedNumber({ value, delay }: { value: string, delay: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Extract number from string (e.g., "500+" -> 500)
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const suffix = value.replace(/[0-9]/g, '');
      
      if (isNaN(numericValue)) {
        setDisplayValue(value);
        return;
      }

      let current = 0;
      const increment = numericValue / 50; // 50 steps
      const duration = 2000; // 2 seconds
      const stepTime = duration / 50;

      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(current).toString() + suffix);
        }
      }, stepTime);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return <span>{displayValue}</span>;
} 