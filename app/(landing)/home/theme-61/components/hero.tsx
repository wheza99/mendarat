import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Dream Cloud Formation */}
      <div className="absolute top-10 left-0 right-0 h-64 opacity-20">
        <svg viewBox="0 0 1200 300" className="w-full h-full">
          <defs>
            <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0.6}} />
              <stop offset="50%" style={{stopColor:'#8b5cf6', stopOpacity:0.8}} />
              <stop offset="100%" style={{stopColor:'#ec4899', stopOpacity:0.4}} />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q150,100 300,120 T600,110 T900,130 T1200,115 L1200,300 L0,300 Z"
            fill="url(#cloudGradient)"
            className="animate-dream-cloud"
          />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Digital Dream Badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-full px-6 py-3 mb-8 animate-dream-glow">
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 animate-dream-pulse" />
          <span className="text-cyan-200 text-sm font-medium">DIGITAL DREAMSCAPE ACTIVE</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-dream-flicker">
            ENTER THE
          </span>
          <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-dream-flicker" style={{animationDelay: '0.3s'}}>
            DREAMSCAPE
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-dream-fade-in">
          Where digital consciousness meets infinite imagination. Experience reality redefined through 
          the lens of virtual dreams and conscious algorithms.
        </p>

        {/* Dream Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Dreams Processed', value: '∞', unit: 'Per Second' },
            { label: 'Virtual Realms', value: '127,483', unit: 'Active' },
            { label: 'Consciousness Level', value: '99.7', unit: '%' },
            { label: 'Reality Layers', value: '12', unit: 'Dimensions' }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-dream-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-dream-count">
                  {stat.value}
                </div>
                <div className="text-purple-300 text-sm font-medium">{stat.unit}</div>
                <div className="text-purple-200/70 text-xs uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:from-cyan-500 hover:to-purple-500 animate-dream-glow">
            <div className="relative z-10 flex items-center justify-center">
              <span>Enter Dreamscape</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          
          <button className="group px-8 py-4 border-2 border-purple-500/50 rounded-lg font-semibold text-purple-200 hover:border-cyan-400 hover:bg-purple-500/10 transition-all duration-300 animate-dream-fade-in">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Preview Dreams</span>
            </div>
          </button>
        </div>
      </div>

      {/* Floating Dream Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`dream-element-${i}`}
          className="absolute opacity-30 animate-dream-drift"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${10 + Math.random() * 5}s`
          }}
        >
          <div className="relative">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-60 animate-dream-pulse" />
            <div className="absolute inset-0 w-12 h-12 border border-cyan-400/30 rounded-full -translate-x-2 -translate-y-2 animate-dream-spin" />
          </div>
        </div>
      ))}

      {/* Neural Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neuralLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#06b6d4', stopOpacity:0.8}} />
            <stop offset="100%" style={{stopColor:'#8b5cf6', stopOpacity:0.8}} />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <line
            key={`neural-${i}`}
            x1={i * 20}
            y1="0"
            x2={(i + 1) * 15}
            y2="100"
            stroke="url(#neuralLine)"
            strokeWidth="0.5"
            className="animate-dream-neural"
            style={{animationDelay: `${i * 0.7}s`}}
          />
        ))}
      </svg>
    </section>
  );
} 