import React from 'react';

export default function RenaissanceHero() {
  const artStats = [
    { label: "Masterpieces Created", value: "1,503", unit: "AI Arts" },
    { label: "Renaissance Artists", value: "247", unit: "Masters" },
    { label: "Digital Galleries", value: "89", unit: "Spaces" },
    { label: "Years of Tradition", value: "500+", unit: "Legacy" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Renaissance Pattern Background */}
      <div className="absolute inset-0">
        {/* Golden Ratio Spirals */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <path
                d={`M${50 + Math.cos(i * 0.618) * 40},${50 + Math.sin(i * 0.618) * 40} 
                    Q${50 + Math.cos((i + 1) * 0.618) * 30},${50 + Math.sin((i + 1) * 0.618) * 30} 
                    ${50 + Math.cos((i + 2) * 0.618) * 40},${50 + Math.sin((i + 2) * 0.618) * 40}`}
                stroke="#d97706"
                strokeWidth="0.3"
                fill="none"
                className="animate-renaissance-float"
                style={{animationDelay: `${i * 0.8}s`}}
              />
            </g>
          ))}
        </svg>

        {/* Floating Art Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-600/20 animate-renaissance-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 20 + 25}s`
            }}
          >
            {['🎨', '🖼️', '⚱️', '🏛️', '📜', '🖌️', '👑', '💎'][Math.floor(Math.random() * 8)]}
          </div>
        ))}

        {/* Classical Architecture Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(90deg, #d97706 1px, transparent 1px),
                   linear-gradient(0deg, #d97706 1px, transparent 1px)
                 `,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Ornate Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm border-2 border-amber-300/30 rounded-full shadow-lg">
            <span className="text-amber-700 text-lg font-semibold tracking-wide">🎨 Digital Renaissance</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent animate-renaissance-text">
              Where Art Meets
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent animate-renaissance-text">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-2xl text-amber-800/80 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the fusion of classical Renaissance masterpieces with cutting-edge AI technology. 
            Create, curate, and celebrate the timeless beauty of digital artistry.
          </p>
        </div>

        {/* Renaissance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {artStats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-sm border-2 border-amber-200/40 rounded-xl p-6 hover:border-amber-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl font-bold text-amber-700 mb-2 animate-renaissance-count">
                {stat.value}
              </div>
              <div className="text-amber-600 font-medium mb-1">
                {stat.unit}
              </div>
              <div className="text-amber-800/70 text-sm leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Digital Palette */}
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="text-amber-700 font-semibold text-lg">Digital Palette:</div>
            <div className="flex space-x-2">
              {[
                'bg-gradient-to-br from-red-400 to-red-600',
                'bg-gradient-to-br from-orange-400 to-orange-600', 
                'bg-gradient-to-br from-amber-400 to-amber-600',
                'bg-gradient-to-br from-yellow-400 to-yellow-600',
                'bg-gradient-to-br from-amber-700 to-amber-900',
                'bg-gradient-to-br from-orange-800 to-red-800'
              ].map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 ${color} rounded-full border-2 border-white shadow-lg animate-renaissance-pulse`}
                  style={{animationDelay: `${index * 0.2}s`}}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Ornate Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full border-2 border-amber-700 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <span className="flex items-center space-x-3">
              <span>🎨</span>
              <span>Create Masterpiece</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
          
          <button className="group px-10 py-4 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 font-bold rounded-full border-2 border-amber-300 hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span className="flex items-center space-x-3">
              <span>🖼️</span>
              <span>Explore Gallery</span>
            </span>
          </button>
        </div>

        {/* Artistic Visualization */}
        <div className="mt-16 relative">
          <div className="flex justify-center space-x-4">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-amber-600 to-orange-400 rounded-full opacity-70 animate-renaissance-wave"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 40 + 20}px`,
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Renaissance Ornaments */}
      <div className="absolute top-8 left-8 text-6xl text-amber-600/30 animate-renaissance-float">
        ⚜️
      </div>
      <div className="absolute top-8 right-8 text-6xl text-amber-600/30 animate-renaissance-float" style={{animationDelay: '2s'}}>
        🏛️
      </div>
      <div className="absolute bottom-8 left-8 text-6xl text-amber-600/30 animate-renaissance-float" style={{animationDelay: '4s'}}>
        👑
      </div>
      <div className="absolute bottom-8 right-8 text-6xl text-amber-600/30 animate-renaissance-float" style={{animationDelay: '6s'}}>
        📜
      </div>
    </section>
  );
} 