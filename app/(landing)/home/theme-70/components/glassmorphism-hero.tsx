import React from 'react';
import Link from 'next/link';

export default function GlassmorphismHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Hero Background Effects */}
      <div className="absolute inset-0">
        {/* Central Glassmorphism Orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
          <div className="w-full h-full backdrop-blur-2xl bg-white/5 border border-white/20 rounded-full shadow-2xl animate-glassmorphism-pulse"></div>
          <div className="absolute inset-4 backdrop-blur-xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-pink-400/10 rounded-full border border-white/30 animate-glassmorphism-orb"></div>
        </div>

        {/* Floating Glass Elements */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg animate-glassmorphism-float"
            style={{
              left: `${20 + (i % 3) * 25}%`,
              top: `${30 + Math.floor(i / 3) * 20}%`,
              width: `${60 + Math.random() * 40}px`,
              height: `${40 + Math.random() * 30}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Glassmorphism Container */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-12 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-full text-sm font-medium text-white/90 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2 animate-glassmorphism-pulse"></div>
            QUANTUM GLASSMORPHISM
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
            <br />
            <span className="text-white">is Glass</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of digital interfaces with our revolutionary glassmorphism design system. 
            Where transparency meets innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="#features"
              className="group relative px-8 py-4 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Explore Features</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            </Link>

            <Link 
              href="#demo"
              className="group relative px-8 py-4 backdrop-blur-md bg-white/5 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Watch Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '99.9%', label: 'Transparency' },
              { number: '∞', label: 'Possibilities' },
              { number: '24/7', label: 'Innovation' }
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-glassmorphism-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 