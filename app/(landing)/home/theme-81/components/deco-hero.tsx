import React from 'react';

export default function DecoHero() {
  const heroData = {
    title: {
      main: "FUTURE",
      sub: "DECO",
      description: "Where classic Art Deco elegance meets modern neon gradient innovation. Experience the perfect fusion of timeless design and cutting-edge aesthetics."
    },
    stats: [
      { number: '1925', label: 'DECO ERA', color: 'purple' },
      { number: '2024', label: 'NEON FUTURE', color: 'pink' },
      { number: '∞', label: 'POSSIBILITIES', color: 'orange' }
    ],
    cta: {
      primary: { text: 'EXPLORE DECO', href: '#features' },
      secondary: { text: 'VIEW GALLERY', href: '#showcase' }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Deco Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#a855f7_0%,transparent_50%)] bg-[length:200px_200px] animate-deco-gear"></div>
        
        {/* Neon Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,#ec4899_50%,transparent_100%)] bg-[length:300px_300px] animate-deco-flow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Deco Header */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-800/90 to-pink-800/90 backdrop-blur-xl border border-purple-400 rounded-lg px-6 py-3 shadow-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-deco-pulse"></div>
            <span className="text-purple-300 font-light text-sm tracking-wider">ART DECO NEON</span>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-deco-pulse">
            {heroData.title.main}
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-deco-pulse" style={{ animationDelay: '0.3s' }}>
            {heroData.title.sub}
          </span>
        </h1>

        {/* Deco Subtitle */}
        <p className="text-xl md:text-2xl text-purple-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          {heroData.title.description}
        </p>

        {/* Deco CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a href={heroData.cta.primary.href} className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">{heroData.cta.primary.text}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </a>
          
          <a href={heroData.cta.secondary.href} className="group relative px-8 py-4 bg-transparent border-2 border-purple-400 hover:border-pink-400 text-purple-300 hover:text-pink-300 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">{heroData.cta.secondary.text}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Deco Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {heroData.stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className={`bg-gradient-to-br from-${stat.color}-800/90 to-${stat.color}-900/90 backdrop-blur-xl border border-${stat.color}-400 rounded-lg p-6 shadow-2xl hover:shadow-${stat.color}-500/25 transition-all duration-300 transform hover:scale-105`}>
                <div className={`text-4xl font-bold text-${stat.color}-300 mb-2 animate-deco-pulse`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.number}
                </div>
                <div className={`text-sm text-${stat.color}-400 font-light tracking-wider`}>
                  {stat.label}
                </div>
              </div>
              
              {/* Deco Corner Elements */}
              <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
              <div className={`absolute -top-2 -right-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1}s` }}></div>
              <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1.5}s` }}></div>
              <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-2 border-${stat.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 2}s` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Deco Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-deco-float"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <div className={`w-8 h-8 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-lg animate-deco-spin`}></div>
          </div>
        ))}
      </div>

      {/* Deco Rays */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-1 h-24 bg-gradient-to-t from-purple-400 to-transparent animate-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Deco Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-deco-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#f97316'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 