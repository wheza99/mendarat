import React from 'react';

export default function HolographicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Holographic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean White Base */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Holographic Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:100px_1px] animate-holographic-scan"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:1px_100px] animate-holographic-scan-reverse"></div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full animate-holographic-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-lg animate-holographic-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/20 via-blue-400/20 to-purple-400/20 rounded-full animate-holographic-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Holographic Badge */}
        <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-full shadow-2xl animate-holographic-glow">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm font-light text-gray-600 tracking-wider">
            HOLOGRAPHIC MINIMALISM
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-8 leading-tight">
          <span className="block">FUTURE</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-holographic-text">
            MINIMALISM
          </span>
          <span className="block">REDEFINED</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Where clean design meets holographic innovation. Experience the perfect balance of 
          <span className="text-blue-400 font-medium"> simplicity </span>
          and 
          <span className="text-purple-400 font-medium"> technology</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          {/* Primary Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-medium rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-holographic-button">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 rounded-xl animate-holographic-reflection"></div>
          </button>

          {/* Secondary Button */}
          <button className="group relative px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200 text-gray-700 font-medium rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '99.9%', label: 'Uptime', color: 'blue' },
            { number: '50K+', label: 'Users', color: 'purple' },
            { number: '24/7', label: 'Support', color: 'pink' }
          ].map((stat, index) => (
            <div key={index} className="group relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2 animate-holographic-glow`}>
                  {stat.number}
                </div>
                <div className="text-sm font-light text-gray-600 tracking-wider">
                  {stat.label}
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-400/5 to-${stat.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Holographic Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {Array.from({ length: 3 }, (_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-holographic-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Holographic Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-holographic-scan"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-holographic-scan" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent animate-holographic-scan" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
} 