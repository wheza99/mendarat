'use client';

import { copy } from '../copy';

export default function Process() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Process Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/25 via-blue-800/30 to-cyan-700/25"></div>
        
        {/* Process Flow Currents */}
        <svg className="absolute inset-0 w-full h-full opacity-15" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="processFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#06B6D4" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="75%" stopColor="#22C55E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="processFlow2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Connecting Flow Lines */}
          <path 
            d="M 200 200 Q 400 150 600 200 Q 800 250 1000 200 Q 1200 150 1400 200" 
            stroke="url(#processFlow1)" 
            strokeWidth="3" 
            fill="none"
            className="animate-ocean-wave"
          />
          <path 
            d="M 200 300 Q 500 250 800 300 Q 1100 350 1400 300" 
            stroke="url(#processFlow2)" 
            strokeWidth="2" 
            fill="none"
            className="animate-ocean-wave"
            style={{ animationDelay: '2s' }}
          />
        </svg>
        
        {/* Floating Process Elements */}
        <div className="absolute top-24 left-20 w-6 h-6 bg-teal-400/25 rounded-full animate-ocean-float"></div>
        <div className="absolute top-48 right-32 w-8 h-8 bg-blue-400/20 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-32 left-28 w-5 h-5 bg-cyan-400/30 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-56 right-24 w-7 h-7 bg-green-400/15 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            {copy.process.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.process.steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Process Step Card */}
              <div className="relative bg-gradient-to-br from-blue-900/50 via-teal-800/40 to-cyan-700/50 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/25">
                {/* Ocean Ripple Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-2 border border-teal-400/30 rounded-2xl animate-ocean-ripple"></div>
                  <div className="absolute inset-4 border border-cyan-400/20 rounded-xl animate-ocean-ripple" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-teal-500/20 via-blue-500/30 to-cyan-500/20 rounded-full flex items-center justify-center border-2 border-teal-400/30 group-hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-110">
                    <span className="text-2xl font-bold bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-teal-200 group-hover:to-blue-300 transition-all duration-500">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Step Glow */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-teal-500/20 group-hover:via-blue-500/15 group-hover:to-cyan-500/20 transition-all duration-500 animate-ocean-pulse"></div>
                  
                  {/* Floating Elements around Step */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400/60 rounded-full group-hover:animate-ocean-float"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:animate-ocean-drift"></div>
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-blue-200 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {step.description}
                </p>
                
                {/* Ocean Current Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ocean-wave"></div>
                
                {/* Process Flow Indicator */}
                {index < copy.process.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-teal-400/50 to-cyan-400/30 group-hover:from-teal-400/80 group-hover:to-cyan-400/60 transition-all duration-500">
                      <div className="w-2 h-2 bg-teal-400 rounded-full absolute -right-1 -top-0.75 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                    </div>
                  </div>
                )}
                
                {/* Floating Particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-teal-400/40 rounded-full group-hover:animate-ocean-float"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:animate-ocean-drift"></div>
                
                {/* Step Card Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Flow Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-900/40 via-teal-800/30 to-cyan-700/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-4">
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-ocean-pulse"></div>
            <span className="text-blue-200 font-medium">Seamless Navigation</span>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="text-blue-200 font-medium">Guided Journey</span>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '2s' }}></div>
            <span className="text-blue-200 font-medium">Safe Harbor</span>
          </div>
        </div>
      </div>
    </section>
  );
}