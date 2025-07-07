import React from 'react';

export default function HolographicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Holographic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#64748b_0%,transparent_50%)] bg-[length:200px_200px] animate-holographic-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:300px_300px] animate-holographic-flow"></div>
      </div>

      {/* Holographic Corner Decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 border-4 border-slate-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-4 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Holographic Header */}
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-6xl md:text-8xl font-bold mb-4 animate-holographic-pulse">
            HOLOGRAPHIC
          </div>
          <div className="text-2xl md:text-4xl font-light text-slate-300 mb-2">
            MINIMALISM
          </div>
          <div className="text-lg md:text-xl text-slate-300 font-light">
            FUTURISTIC SIMPLICITY
          </div>
        </div>

        {/* Holographic Divider */}
        <div className="flex justify-center items-center mb-12">
          <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-blue-400"></div>
          <div className="mx-4 w-4 h-4 border-2 border-indigo-400 rotate-45 animate-holographic-spin"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              HOLOGRAPHIC
            </span>
            <br />
            <span className="text-gray-100">
              MEETS
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-slate-400 bg-clip-text text-transparent">
              MINIMALISM
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Where futuristic holographic technology meets clean minimalist design. 
            Experience the perfect balance of advanced aesthetics and elegant simplicity.
          </p>

          {/* Holographic Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/50">
              <span className="relative z-10">EXPLORE NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-400 hover:text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">LEARN MORE</span>
              <div className="absolute inset-0 bg-indigo-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Holographic Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '∞', label: 'POSSIBILITIES', color: 'slate' },
            { number: '2024', label: 'FUTURE TECH', color: 'blue' },
            { number: '100%', label: 'MINIMALIST', color: 'indigo' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`bg-gradient-to-br from-${stat.color}-100/50 to-${stat.color}-200/50 backdrop-blur-xl border border-${stat.color}-300/50 rounded-lg p-6 hover:border-${stat.color}-400 transition-all duration-300`}>
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-slate-300 font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
              <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Holographic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-holographic-float"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className={`w-8 h-8 border-2 border-${['slate', 'blue', 'indigo'][i % 3]}-400 rounded-lg animate-holographic-spin`}></div>
          </div>
        ))}
      </div>

      {/* Holographic Rays */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-24 bg-gradient-to-t from-slate-400 to-transparent animate-holographic-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 