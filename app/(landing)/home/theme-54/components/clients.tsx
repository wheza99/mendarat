'use client';

import { copy } from '../copy';

export default function Clients() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Clients Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-800/25 to-teal-700/20"></div>
        
        {/* Client Trust Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="clientFlow1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="25%" stopColor="#06B6D4" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#22C55E" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="clientFlow2" x1="100%" y1="50%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0" />
              <stop offset="30%" stopColor="#14B8A6" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 120 Q 400 100 800 120 T 1600 140" 
            stroke="url(#clientFlow1)" 
            strokeWidth="3" 
            fill="none"
            className="animate-ocean-wave"
          />
          <path 
            d="M 0 180 Q 500 160 1000 180 T 2000 200" 
            stroke="url(#clientFlow2)" 
            strokeWidth="2" 
            fill="none"
            className="animate-ocean-wave"
            style={{ animationDelay: '2s' }}
          />
        </svg>
        
        {/* Floating Trust Elements */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-blue-400/25 rounded-full animate-ocean-float"></div>
        <div className="absolute top-40 right-28 w-8 h-8 bg-teal-400/20 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-28 left-32 w-5 h-5 bg-cyan-400/30 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-48 right-24 w-7 h-7 bg-green-400/15 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
            {copy.clients.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.clients.subtitle}
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {copy.clients.logos.map((client, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Client Logo Container */}
              <div className="relative bg-gradient-to-br from-blue-900/40 via-teal-800/30 to-cyan-700/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 transition-all duration-500 hover:scale-110 hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-500/20">
                {/* Ocean Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-1 border border-teal-400/30 rounded-xl animate-ocean-ripple"></div>
                  <div className="absolute inset-2 border border-cyan-400/20 rounded-lg animate-ocean-ripple" style={{ animationDelay: '0.3s' }}></div>
                </div>
                
                {/* Client Logo */}
                <div className="relative z-10 flex items-center justify-center h-16">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-teal-400/50 rounded-full group-hover:animate-ocean-float"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-400/40 rounded-full group-hover:animate-ocean-drift"></div>
              </div>
              
              {/* Client Name Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-blue-900/80 backdrop-blur-sm border border-teal-400/30 rounded-lg px-3 py-1 text-sm text-teal-200 whitespace-nowrap">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-blue-900/40 via-teal-800/30 to-cyan-700/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-ocean-pulse"></div>
              <span className="text-blue-200 font-medium">Trusted Partners</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-blue-200 font-medium">Global Reach</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-blue-200 font-medium">Proven Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}