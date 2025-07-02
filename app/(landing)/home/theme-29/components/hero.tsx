"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [leafCount, setLeafCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeafCount(prev => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating Organic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full animate-float opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Organic Title */}
        <div className="mb-8 relative">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Grow Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent relative">
              Digital Ecosystem
              {/* Animated Leaf Icon */}
              <div className="absolute -top-4 -right-8 w-12 h-12 text-green-500 animate-spin-slow">
                🌿
              </div>
            </span>
          </h1>
          
          {/* Growing Vine Animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-1 bg-gradient-to-t from-green-400 to-transparent h-20 animate-grow"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Cultivate sustainable digital solutions that grow naturally with your business. 
          Experience the harmony of technology and nature in perfect symbiosis.
        </p>

        {/* Organic CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
            <span className="relative z-10">Plant Your Seed</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-2xl group-hover:animate-bounce">🌱</div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-green-500 text-green-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-50 hover:scale-105 relative overflow-hidden">
            <span className="relative z-10">Explore Ecosystem</span>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl group-hover:animate-pulse">🌸</div>
          </button>
        </div>

        {/* Organic Growth Indicators */}
        <div className="mt-16 flex justify-center items-center space-x-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center text-2xl">
              🌿
            </div>
            <p className="text-sm text-gray-600">Sustainable</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-full flex items-center justify-center text-2xl">
              🌱
            </div>
            <p className="text-sm text-gray-600">Growing</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center text-2xl">
              🌳
            </div>
            <p className="text-sm text-gray-600">Thriving</p>
          </div>
        </div>
      </div>

      {/* Organic Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-current text-white">
          <path d="M0,120 C150,80 350,40 600,60 C850,80 1050,100 1200,80 L1200,120 Z" />
        </svg>
      </div>
    </section>
  );
} 