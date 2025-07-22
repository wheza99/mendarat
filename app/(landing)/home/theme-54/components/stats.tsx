'use client';

import { copy } from '../copy';

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Stats Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-teal-800/15 to-cyan-700/20"></div>
        
        {/* Floating Data Bubbles */}
        <div className="absolute top-10 left-16 w-6 h-6 bg-blue-400/30 rounded-full animate-ocean-float"></div>
        <div className="absolute top-32 right-20 w-4 h-4 bg-teal-400/40 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-20 left-32 w-8 h-8 bg-cyan-400/25 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-40 right-24 w-5 h-5 bg-green-400/35 rounded-full animate-ocean-float"></div>
        
        {/* Ocean Current Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="statsFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="statsFlow2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 100 Q 400 80 800 100 T 1600 120" 
            stroke="url(#statsFlow1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-ocean-wave"
          />
          <path 
            d="M 0 200 Q 500 180 1000 200 T 2000 220" 
            stroke="url(#statsFlow2)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-ocean-wave"
            style={{ animationDelay: '3s' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {copy.stats.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.stats.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.stats.items.map((stat, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stat Card Background */}
              <div className="relative bg-gradient-to-br from-blue-900/40 via-teal-800/30 to-cyan-700/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105 hover:border-teal-400/40 hover:shadow-2xl hover:shadow-teal-500/20">
                {/* Ocean Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-2 border border-teal-400/30 rounded-xl animate-ocean-ripple"></div>
                  <div className="absolute inset-4 border border-cyan-400/20 rounded-lg animate-ocean-ripple" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Stat Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                {/* Stat Value */}
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:via-cyan-200 group-hover:to-blue-300 transition-all duration-500">
                  {stat.value}
                </div>
                
                {/* Stat Label */}
                <div className="text-blue-200 font-medium group-hover:text-teal-200 transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-60 group-hover:animate-ocean-float"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 group-hover:animate-ocean-drift"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}