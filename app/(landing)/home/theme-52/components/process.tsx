'use client';

import { copy } from '../copy';

export default function Process() {
  return (
    <section className="py-20 relative">
      {/* Process Flow Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00FF41" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF0080" stopOpacity="0.8" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="url(#processGradient)" />
            </marker>
          </defs>
          
          {/* Process Flow Lines */}
          <path d="M200,400 Q400,300 600,400 Q800,500 1000,400" stroke="url(#processGradient)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" className="animate-pulse" />
          
          {/* Process Nodes */}
          <circle cx="200" cy="400" r="8" fill="#00FF41" className="animate-ping" />
          <circle cx="600" cy="400" r="8" fill="#00FFFF" className="animate-ping" style={{animationDelay: '1s'}} />
          <circle cx="1000" cy="400" r="8" fill="#FF0080" className="animate-ping" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.process.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {copy.process.steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Process Step Card */}
              <div className="relative p-8 border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-xl hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                {/* Cyber Frame Corners */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>

                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-pink-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Pulse Border */}
                <div className="absolute inset-0 border border-green-400/20 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="relative mb-6 mx-auto w-16 h-16">
                    {/* Number Frame */}
                    <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-full group-hover:border-green-400/70 transition-all duration-300"></div>
                    <div className="absolute inset-1 border border-pink-400/30 rounded-full group-hover:border-pink-400/50 transition-all duration-300"></div>
                    
                    {/* Number */}
                    <div className="w-full h-full bg-gradient-to-br from-green-900/30 via-cyan-900/30 to-pink-900/30 rounded-full flex items-center justify-center group-hover:from-green-900/50 group-hover:via-cyan-900/50 group-hover:to-pink-900/50 transition-all duration-300">
                      <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Floating Particles around Number */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  
                  {/* Step Title */}
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Process Status */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Floating Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Connection Arrow (except for last item) */}
              {index < copy.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 transform -translate-y-1/2"></div>
              
              {/* Timeline Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="relative bg-slate-900/80 px-4 py-2 rounded-lg border border-cyan-400/30">
                  <div className="text-lg font-bold text-green-400">Phase 1</div>
                  <div className="text-sm text-gray-400">Analysis</div>
                </div>
                <div className="relative bg-slate-900/80 px-4 py-2 rounded-lg border border-cyan-400/30">
                  <div className="text-lg font-bold text-cyan-400">Phase 2</div>
                  <div className="text-sm text-gray-400">Design</div>
                </div>
                <div className="relative bg-slate-900/80 px-4 py-2 rounded-lg border border-cyan-400/30">
                  <div className="text-lg font-bold text-pink-400">Phase 3</div>
                  <div className="text-sm text-gray-400">Deploy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}