"use client";

import { useState, useEffect, useRef } from "react";
import { brutalistCopy } from "../copy";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(brutalistCopy.stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    brutalistCopy.stats.forEach((stat, index) => {
      const target = parseInt(stat.number);
      const duration = 2000;
      const increment = target / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 50);
    });
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return {
          bg: 'bg-orange-600',
          text: 'text-orange-600',
          border: 'border-orange-600'
        };
      case 'red':
        return {
          bg: 'bg-red-600',
          text: 'text-red-600',
          border: 'border-red-600'
        };
      case 'black':
        return {
          bg: 'bg-black',
          text: 'text-black',
          border: 'border-black'
        };
      case 'gray':
        return {
          bg: 'bg-gray-900',
          text: 'text-gray-900',
          border: 'border-gray-900'
        };
      default:
        return {
          bg: 'bg-black',
          text: 'text-black',
          border: 'border-black'
        };
    }
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gray-100 relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-black transform rotate-45 opacity-10"></div>
        <div className="absolute top-20 right-20 w-32 h-8 bg-orange-600 opacity-10"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-40 bg-red-600 opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gray-900 opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black mb-4">
              BY THE NUMBERS
            </h2>
            <div className="h-2 bg-black w-full"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brutalistCopy.stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
              >
                <div className="relative group">
                  {/* Main Card */}
                  <div className="bg-white border-4 border-black p-8 relative">
                    {/* Color Accent Bar */}
                    <div className={`absolute top-0 left-0 right-0 h-2 ${colors.bg}`}></div>
                    
                    {/* Number */}
                    <div className="mb-6">
                      <span className={`text-6xl md:text-7xl font-black ${colors.text} leading-none block`}>
                        {counters[index].toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Label */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-black uppercase tracking-wider leading-tight">
                        {stat.label}
                      </h3>
                      
                      {/* Decorative Lines */}
                      <div className="space-y-1">
                        <div className={`h-1 ${colors.bg} w-full`}></div>
                        <div className={`h-1 ${colors.bg} w-2/3`}></div>
                        <div className={`h-1 ${colors.bg} w-1/3`}></div>
                      </div>
                    </div>
                    
                    {/* Corner Elements */}
                    <div className={`absolute top-2 right-2 w-4 h-4 ${colors.bg}`}></div>
                    <div className={`absolute bottom-2 left-2 w-4 h-4 ${colors.bg}`}></div>
                  </div>
                  
                  {/* Shadow Effect */}
                  <div className={`absolute inset-0 ${colors.bg} transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-20 flex items-center gap-4">
          <div className="flex-1 h-2 bg-black"></div>
          <div className="w-8 h-8 bg-orange-600 transform rotate-45"></div>
          <div className="flex-1 h-2 bg-black"></div>
        </div>
      </div>
    </section>
  );
} 