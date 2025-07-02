"use client";

import { useState, useEffect } from "react";
import { brutalistCopy } from "../copy";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Raw Geometric Background */}
      <div className="absolute inset-0">
        {/* Large Rectangle Blocks */}
        <div className="absolute top-20 left-0 w-32 h-64 bg-black transform -rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-48 bg-orange-600"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-20 bg-red-600"></div>
        <div className="absolute bottom-20 right-0 w-28 h-56 bg-gray-900 transform rotate-6"></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-black"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}>
                
                {/* Subtitle */}
                <div className="mb-4">
                  <span className="inline-block bg-black text-white px-6 py-2 text-sm font-bold tracking-[0.3em] uppercase">
                    {brutalistCopy.hero.subtitle}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none mb-8">
                  <span className="block text-black">{brutalistCopy.hero.title.split(' ')[0]}</span>
                  <span className="block text-orange-600 transform translate-x-8">
                    {brutalistCopy.hero.title.split(' ')[1]}
                  </span>
                  <span className="block text-red-600 transform translate-x-16">
                    {brutalistCopy.hero.title.split(' ')[2]}
                  </span>
                </h1>

                {/* Description */}
                <div className="max-w-2xl mb-12">
                  <p className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                    {brutalistCopy.hero.description}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative bg-black text-white px-12 py-6 text-lg font-bold uppercase tracking-wider hover:bg-orange-600 transition-all duration-300">
                    <span className="relative z-10">{brutalistCopy.hero.cta}</span>
                    <div className="absolute inset-0 bg-orange-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  
                  <button className="group relative border-4 border-black text-black px-12 py-6 text-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300">
                    <span className="relative z-10">{brutalistCopy.hero.secondaryCta}</span>
                    <div className="absolute inset-0 bg-red-600 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Geometric Elements */}
            <div className="lg:col-span-4">
              <div className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}>
                <div className="relative">
                  {/* Large Square */}
                  <div className="w-64 h-64 bg-black mb-8"></div>
                  
                  {/* Stacked Rectangles */}
                  <div className="space-y-4">
                    <div className="w-48 h-12 bg-orange-600"></div>
                    <div className="w-32 h-12 bg-red-600 ml-16"></div>
                    <div className="w-56 h-12 bg-gray-900"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-orange-600 transform rotate-45"></div>
                  <div className="absolute top-32 -left-4 w-8 h-32 bg-red-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-black"></div>
    </section>
  );
} 