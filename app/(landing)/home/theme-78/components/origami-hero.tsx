import React from 'react';

export default function OrigamiHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Origami Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#3b82f6_0%,transparent_50%)] bg-[length:200px_200px] animate-origami-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:300px_300px] animate-origami-flow"></div>
      </div>

      {/* Origami Corner Decorations */}
      <div className="absolute top-8 left-8 w-24 h-24 border-4 border-blue-400 rounded-lg animate-origami-pulse"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-4 border-purple-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-indigo-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-blue-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Origami Header */}
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-6xl md:text-8xl font-bold mb-4 animate-origami-pulse">
            ORIGAMI
          </div>
          <div className="text-2xl md:text-4xl font-light text-blue-600 mb-2">
            FUTURISTIC
          </div>
          <div className="text-lg md:text-xl text-blue-500 font-light">
            DIGITAL PAPER ART
          </div>
        </div>

        {/* Origami Divider */}
        <div className="flex justify-center items-center mb-12">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <div className="mx-4 w-4 h-4 border-2 border-indigo-400 rotate-45 animate-origami-spin"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              DIGITAL
            </span>
            <br />
            <span className="text-gray-800">
              ORIGAMI
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 mb-8 leading-relaxed">
            Where traditional paper folding meets cutting-edge digital design. 
            Experience the perfect fusion of geometric precision and modern aesthetics.
          </p>

          {/* Origami Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <span className="relative z-10">EXPLORE NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-indigo-400 text-indigo-600 hover:bg-indigo-400 hover:text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">LEARN MORE</span>
              <div className="absolute inset-0 bg-indigo-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Origami Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '1000+', label: 'DIGITAL FOLDS', color: 'blue' },
            { number: '2024', label: 'MODERN TECH', color: 'purple' },
            { number: '∞', label: 'POSSIBILITIES', color: 'indigo' }
          ].map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`bg-gradient-to-br from-${stat.color}-100/50 to-${stat.color}-200/50 backdrop-blur-xl border border-${stat.color}-300/50 rounded-lg p-6 hover:border-${stat.color}-400 transition-all duration-300`}>
                <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-blue-600 font-light uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
              <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Origami Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-origami-float"
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${20 + Math.floor(i / 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className={`w-8 h-8 border-2 border-${['blue', 'purple', 'indigo'][i % 3]}-400 rounded-lg animate-origami-spin`}></div>
          </div>
        ))}
      </div>

      {/* Origami Rays */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-24 bg-gradient-to-t from-blue-400 to-transparent animate-origami-ray"
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