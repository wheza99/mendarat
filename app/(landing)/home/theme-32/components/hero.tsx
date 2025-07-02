'use client';

import theme32Copy from '../copy';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mb-6 tracking-tight">
          {theme32Copy.hero.title}
        </h1>
        
        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-blue-300 font-mono mb-8 tracking-wider">
          {theme32Copy.hero.subtitle}
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          {theme32Copy.hero.description}
        </p>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {theme32Copy.hero.features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/60 transition-all duration-300 hover:scale-105"
            >
              <div className="text-blue-300 font-mono text-sm font-bold">
                {feature}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
          <span className="relative z-10">{theme32Copy.hero.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400/30 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-purple-400/30 rotate-12 animate-pulse" />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-bounce" />
    </section>
  );
} 