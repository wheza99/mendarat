'use client';

import { copy } from '../copy';

export default function Clients() {
  return (
    <section className="py-20 relative">
      {/* Digital Circuit Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(255, 0, 128, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.clients.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.clients.subtitle}
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {copy.clients.logos.map((client, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Client Card */}
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
                  {/* Logo Placeholder */}
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {index === 0 ? '🏢' : index === 1 ? '💻' : '🧠'}
                    </div>
                  </div>
                  
                  {/* Client Name */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    {client.name}
                  </h3>
                  
                  {/* Cyber Status Indicator */}
                  <div className="mt-4 flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                        CONNECTED
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                50+
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Active Partners
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-cyan-400 transition-all duration-300">
                99.9%
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Uptime Rate
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-green-400 transition-all duration-300">
                24/7
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Support
              </div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                5+
              </div>
              <div className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}