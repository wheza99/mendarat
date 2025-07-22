'use client';

import { copy } from '../copy';

export default function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Testimonials Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/25 via-blue-800/30 to-teal-700/25"></div>
        
        {/* Testimonial Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="testimonialWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#14B8A6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="testimonialWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#14B8A6" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 180 Q 400 130 800 180 T 1600 200 Q 1800 170 2000 200 L 2000 0 L 0 0 Z"
            fill="url(#testimonialWave1)" 
            className="animate-ocean-wave"
          />
          <path 
            d="M 0 280 Q 500 230 1000 270 T 2000 290 L 2000 0 L 0 0 Z"
            fill="url(#testimonialWave2)" 
            className="animate-ocean-wave"
            style={{ animationDelay: '3s' }}
          />
        </svg>
        
        {/* Floating Voice Bubbles */}
        <div className="absolute top-20 left-24 w-7 h-7 bg-cyan-400/20 rounded-full animate-ocean-float"></div>
        <div className="absolute top-48 right-20 w-5 h-5 bg-blue-400/25 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-32 left-32 w-9 h-9 bg-teal-400/15 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-56 right-28 w-6 h-6 bg-green-400/30 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-300 to-teal-400 bg-clip-text text-transparent">
            {copy.testimonials.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.testimonials.items.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Testimonial Card */}
              <div className="relative bg-gradient-to-br from-blue-900/60 via-teal-800/50 to-cyan-700/60 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Ocean Ripple Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-2 border border-cyan-400/30 rounded-2xl animate-ocean-ripple"></div>
                  <div className="absolute inset-4 border border-teal-400/20 rounded-xl animate-ocean-ripple" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
   {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-4xl text-cyan-400/30 group-hover:text-teal-400/50 transition-colors duration-500">
                  "
                </div>
                
                {/* Star Rating */}
                <div className="flex justify-center mb-6 space-x-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className="text-yellow-400 text-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${starIndex * 0.1}s` }}
                    >
                      ⭐
                    </div>
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-blue-100 leading-relaxed mb-8 text-center italic group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/30 group-hover:border-teal-400/50 transition-all duration-500 group-hover:scale-110">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Avatar Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-teal-500/0 group-hover:from-cyan-500/20 group-hover:via-blue-500/15 group-hover:to-teal-500/20 transition-all duration-500"></div>
                    
                    {/* Floating Element */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400/60 rounded-full group-hover:animate-ocean-float"></div>
                  </div>
                  
                  {/* Client Details */}
                  <div className="flex-1">
                    <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-cyan-400 text-sm group-hover:text-teal-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Ocean Current Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ocean-wave"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-cyan-400/40 rounded-full group-hover:animate-ocean-float"></div>
                <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-teal-400/50 rounded-full group-hover:animate-ocean-drift"></div>
                
                {/* Testimonial Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-teal-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-teal-500/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-blue-900/40 via-cyan-800/30 to-teal-700/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ocean-pulse"></div>
              <span className="text-blue-200 font-medium">Verified Reviews</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-blue-200 font-medium">5-Star Rating</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-blue-200 font-medium">Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}