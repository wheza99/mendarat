'use client';

import theme33Copy from '../copy';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100" />
      
      {/* Floating Glass Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-200/30 to-purple-200/30 backdrop-blur-sm animate-pulse"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Glass Card Container */}
        <div className="bg-white/20 backdrop-blur-lg rounded-3xl border border-white/30 p-12 shadow-2xl">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-800 mb-6 tracking-tight">
            {theme33Copy.hero.title}
          </h1>
          
          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-purple-600 font-semibold mb-8 tracking-wider">
            {theme33Copy.hero.subtitle}
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            {theme33Copy.hero.description}
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {theme33Copy.hero.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl p-4 hover:bg-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-gray-800 font-semibold text-sm">
                  {feature}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="relative z-10">{theme33Copy.hero.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Decorative Glass Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl rotate-12 animate-bounce border border-white/30" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-200/30 to-purple-200/30 backdrop-blur-sm rounded-full animate-pulse border border-white/30" />
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-white/25 backdrop-blur-sm rounded-xl rotate-45 animate-spin-slow border border-white/40" />
    </section>
  );
} 