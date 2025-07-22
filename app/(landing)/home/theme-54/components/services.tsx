'use client';

import { copy } from '../copy';

export default function Services() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Services Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/25 via-blue-800/20 to-cyan-700/25"></div>
        
        {/* Service Flow Currents */}
        <svg className="absolute inset-0 w-full h-full opacity-15" style={{ pointerEvents: 'none' }}>
          <defs>
            <radialGradient id="serviceGlow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="serviceGlow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#0EA5E9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="20%" cy="30%" r="150" fill="url(#serviceGlow1)" className="animate-ocean-pulse" />
          <circle cx="80%" cy="70%" r="120" fill="url(#serviceGlow2)" className="animate-ocean-pulse" style={{ animationDelay: '2s' }} />
        </svg>
        
        {/* Floating Service Bubbles */}
        <div className="absolute top-20 left-20 w-8 h-8 bg-blue-400/20 rounded-full animate-ocean-float"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-teal-400/25 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-32 left-40 w-10 h-10 bg-cyan-400/15 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-48 right-28 w-5 h-5 bg-green-400/30 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            {copy.services.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.services.items.map((service, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-blue-900/50 via-teal-800/40 to-cyan-700/50 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/25">
                {/* Ocean Wave Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute -top-2 -left-2 -right-2 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-ocean-wave"></div>
                  <div className="absolute -bottom-2 -left-2 -right-2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-ocean-wave" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Service Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-teal-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-blue-200 mb-6 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Service Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-teal-400 rounded-full group-hover:bg-cyan-300 transition-colors duration-300"></div>
                      <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-3 h-3 bg-teal-400/50 rounded-full group-hover:animate-ocean-float"></div>
                <div className="absolute bottom-8 left-8 w-2 h-2 bg-cyan-400/40 rounded-full group-hover:animate-ocean-drift"></div>
                
                {/* Service Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}