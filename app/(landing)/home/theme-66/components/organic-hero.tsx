import React from 'react';

export default function OrganicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Organic Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-100 to-amber-100">
        {/* Organic Growth Pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-30" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="organicHeroGradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="70%" stopColor="#059669" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#047857" stopOpacity="0.05" />
              </radialGradient>
            </defs>
            
            {/* Organic Blob Shapes */}
            <path d="M200,500 Q300,200 500,300 Q700,400 800,200 Q900,300 700,500 Q600,700 400,600 Q200,700 200,500 Z" 
                  fill="url(#organicHeroGradient)" 
                  className="animate-organic-morph" />
            <path d="M100,300 Q250,100 400,250 Q550,400 350,550 Q200,450 100,300 Z" 
                  fill="url(#organicHeroGradient)" 
                  className="animate-organic-morph-reverse" />
          </svg>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Organic Title */}
        <div className="relative mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-amber-600 bg-clip-text text-transparent animate-organic-grow leading-tight">
            ORGANIC TECH
          </h1>
          <div className="absolute -top-4 -left-4 text-6xl sm:text-7xl lg:text-8xl font-bold text-emerald-200/40 animate-organic-shadow blur-sm leading-tight">
            ORGANIC TECH
          </div>
        </div>

        {/* Nature Tagline */}
        <div className="relative mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-green-700 mb-4 animate-organic-fade-in" style={{animationDelay: '0.5s'}}>
            WHERE NATURE MEETS INNOVATION
          </h2>
          <div className="flex justify-center items-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <div className="w-3 h-3 bg-amber-500 rotate-45 animate-organic-pulse"></div>
            <div className="h-px w-32 bg-gradient-to-r from-emerald-400 to-green-500"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-organic-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-400"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed animate-organic-fade-in" style={{animationDelay: '1s'}}>
          Harmonizing sustainable technology with natural wisdom. We create solutions that grow with your business 
          while nurturing our planet's future through bio-inspired innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-organic-fade-in" style={{animationDelay: '1.5s'}}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25">
            <span className="relative z-10 flex items-center">
              🌱 GROW WITH US
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-emerald-500 text-emerald-600 font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:bg-emerald-500 hover:text-white hover:scale-105">
            <span className="relative z-10 flex items-center">
              🌿 EXPLORE NATURE TECH
            </span>
          </button>
        </div>

        {/* Bio Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-organic-fade-in" style={{animationDelay: '2s'}}>
          {[
            { number: "99%", label: "SUSTAINABLE", icon: "♻️" },
            { number: "100+", label: "ECO SOLUTIONS", icon: "🌱" },
            { number: "24/7", label: "NATURAL GROWTH", icon: "🌿" },
            { number: "∞", label: "RENEWABLE POWER", icon: "🌍" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-2">
                <div className="text-2xl mb-2 group-hover:animate-organic-bounce">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600 group-hover:text-green-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="absolute inset-0 text-3xl sm:text-4xl font-bold text-emerald-200/50 blur-sm animate-organic-glow">
                  {stat.number}
                </div>
              </div>
              <div className="text-sm text-gray-600 font-semibold tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Bio Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-organic-float-bio"
            style={{
              left: `${15 + i * 8}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + i * 0.5}s`
            }}
          >
            {/* Organic Nature Icons */}
            <div className="text-2xl opacity-60">
              {['🌱', '🌿', '🍃', '🌾', '🌳', '🌲'][i % 6]}
            </div>
          </div>
        ))}
      </div>

      {/* Growing Vine Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="vineDecorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="33%" stopColor="#059669" stopOpacity="0.4" />
              <stop offset="66%" stopColor="#047857" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#065f46" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q200,150 400,180 Q600,120 800,160 Q1000,100 1200,140 L1200,200 Z" 
                fill="url(#vineDecorGradient)" 
                className="animate-organic-wave" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-organic-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-12 border-2 border-emerald-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-emerald-500 rounded-full animate-organic-scroll"></div>
          </div>
          <div className="text-xs text-emerald-600 font-semibold">SCROLL TO GROW</div>
        </div>
      </div>
    </section>
  );
} 