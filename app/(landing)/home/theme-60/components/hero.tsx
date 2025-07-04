import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Volcanic Mountain Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-96 opacity-40">
        <svg viewBox="0 0 1200 400" className="w-full h-full">
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor:'#7c2d12', stopOpacity:0.9}} />
              <stop offset="100%" style={{stopColor:'#1c1917', stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path
            d="M0,400 L200,280 L400,320 L600,200 L800,250 L1000,180 L1200,220 L1200,400 Z"
            fill="url(#mountainGradient)"
            className="animate-volcanic-pulse"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Cosmic Energy Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3 mb-8 animate-volcanic-glow">
          <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mr-3 animate-volcanic-pulse" />
          <span className="text-orange-200 text-sm font-medium">VOLCANIC COSMOS ACTIVATED</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent animate-volcanic-flicker">
            FORGE THE
          </span>
          <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-volcanic-flicker" style={{animationDelay: '0.3s'}}>
            UNIVERSE
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-volcanic-fade-in">
          Harness the primordial forces of volcanic creation and cosmic energy. 
          Where molten earth meets infinite space, innovation is born from the fusion of destruction and creation.
        </p>

        {/* Volcanic Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Eruptions', value: '2,847', unit: 'Active' },
            { label: 'Cosmic Energy', value: '99.7', unit: '%' },
            { label: 'Lava Flow', value: '1,200', unit: '°C' },
            { label: 'Star Systems', value: '∞', unit: 'Reached' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-volcanic-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-orange-500/20 rounded-lg p-4 hover:border-orange-400/40 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-volcanic-count">
                  {stat.value}
                </div>
                <div className="text-orange-300 text-sm font-medium">{stat.unit}</div>
                <div className="text-orange-200/70 text-xs uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:from-red-500 hover:to-orange-500 animate-volcanic-glow">
            <div className="relative z-10 flex items-center justify-center">
              <span>Ignite Creation</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          
          <button className="group px-8 py-4 border-2 border-orange-500/50 rounded-lg font-semibold text-orange-200 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 animate-volcanic-fade-in">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Explore Cosmos</span>
            </div>
          </button>
        </div>
      </div>

      {/* Floating Volcanic Crystals */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`crystal-${i}`}
          className="absolute bg-gradient-to-br from-red-400 to-orange-400 opacity-20 animate-volcanic-drift"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + Math.random() * 60}%`,
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        />
      ))}
    </section>
  );
} 