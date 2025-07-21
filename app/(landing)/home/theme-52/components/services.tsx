'use client';

import { copy } from '../copy';

export default function Services() {
  return (
    <section className="py-20 relative">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FF41" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF0080" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Neural Connection Lines */}
          <path d="M100,200 Q300,100 500,200 T900,250" stroke="url(#serviceGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M200,400 Q400,300 600,400 T1000,450" stroke="url(#serviceGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <path d="M150,600 Q350,500 550,600 T950,650" stroke="url(#serviceGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '2s'}} />
          
          {/* Neural Nodes */}
          <circle cx="100" cy="200" r="4" fill="#00FF41" className="animate-ping" />
          <circle cx="500" cy="200" r="4" fill="#00FFFF" className="animate-ping" style={{animationDelay: '0.5s'}} />
          <circle cx="900" cy="250" r="4" fill="#FF0080" className="animate-ping" style={{animationDelay: '1s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.services.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {copy.services.items.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-8 border border-cyan-400/30 bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-xl hover:border-green-400/50 transition-all duration-500 hover:scale-105"
            >
              {/* Cyber Frame Corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cyan-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-pink-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-yellow-400 transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>

              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-pink-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Pulse Border */}
              <div className="absolute inset-0 border border-green-400/20 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>

                {/* Cyber Button */}
                <div className="mt-6">
                  <button className="px-6 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group-hover:border-green-400 group-hover:text-green-400">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}