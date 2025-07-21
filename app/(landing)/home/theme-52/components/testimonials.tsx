'use client';

import { copy } from '../copy';

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      {/* Testimonial Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="testimonialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FF41" stopOpacity="0.6" />
              <stop offset="33%" stopColor="#00FFFF" stopOpacity="0.8" />
              <stop offset="66%" stopColor="#FF0080" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFF00" stopOpacity="0.7" />
            </linearGradient>
          </defs>
          
          {/* Testimonial Flow Lines */}
          <path d="M0,400 Q300,200 600,400 Q900,600 1200,400" stroke="url(#testimonialGradient)" strokeWidth="3" fill="none" className="animate-pulse" />
          <path d="M0,300 Q400,100 800,300 Q1000,500 1200,300" stroke="url(#testimonialGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <path d="M0,500 Q200,300 400,500 Q800,700 1200,500" stroke="url(#testimonialGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.testimonials.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {copy.testimonials.items.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Testimonial Card */}
              <div className="relative p-8 border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-green-400/50 transition-all duration-500 hover:scale-105">
                {/* Cyber Frame Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pink-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>

                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Pulse Border */}
                <div className="absolute inset-0 border border-green-400/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="text-4xl text-cyan-400 group-hover:text-green-400 transition-colors duration-300">
                      💬
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <blockquote className="text-lg text-gray-300 leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative w-16 h-16">
                      {/* Avatar Frame */}
                      <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-full group-hover:border-green-400/70 transition-all duration-300"></div>
                      <div className="absolute inset-1 border border-pink-400/30 rounded-full group-hover:border-pink-400/50 transition-all duration-300"></div>
                      
                      {/* Avatar Image Placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-green-900/30 via-cyan-900/30 to-pink-900/30 rounded-full flex items-center justify-center group-hover:from-green-900/50 group-hover:via-cyan-900/50 group-hover:to-pink-900/50 transition-all duration-300">
                        <div className="text-2xl">
                          {index === 0 ? '👨‍💼' : '👩‍💼'}
                        </div>
                      </div>
                      
                      {/* Status Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Author Details */}
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-cyan-400 group-hover:text-green-400 transition-colors duration-300">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="mt-6 flex gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <div 
                        key={starIndex}
                        className="text-yellow-400 group-hover:text-green-400 transition-colors duration-300"
                        style={{transitionDelay: `${starIndex * 100}ms`}}
                      >
                        ⭐
                      </div>
                    ))}
                  </div>
                  
                  {/* Verification Badge */}
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 border border-green-400/30 rounded-full bg-green-400/10 group-hover:border-green-400/50 group-hover:bg-green-400/20 transition-all duration-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-xs text-green-400 font-medium">
                      VERIFIED CLIENT
                    </span>
                  </div>
                </div>

                {/* Floating Quote Particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                98%
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Satisfaction Rate
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-cyan-400 transition-all duration-300">
                500+
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Happy Clients
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300">
                4.9
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Average Rating
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                100%
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Verified Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}