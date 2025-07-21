'use client';

import { copy } from '../copy';

export default function Team() {
  return (
    <section className="py-20 relative">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <radialGradient id="teamGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00FF41" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF0080" stopOpacity="0.6" />
            </radialGradient>
          </defs>
          
          {/* Team Connection Network */}
          <circle cx="300" cy="200" r="60" fill="none" stroke="url(#teamGradient)" strokeWidth="2" className="animate-pulse" />
          <circle cx="900" cy="200" r="60" fill="none" stroke="url(#teamGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1s'}} />
          <circle cx="600" cy="400" r="80" fill="none" stroke="url(#teamGradient)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '2s'}} />
          
          {/* Connection Lines */}
          <line x1="300" y1="200" x2="600" y2="400" stroke="url(#teamGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '0.5s'}} />
          <line x1="900" y1="200" x2="600" y2="400" stroke="url(#teamGradient)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1.5s'}} />
          <line x1="300" y1="200" x2="900" y2="200" stroke="url(#teamGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: '2.5s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.team.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {copy.team.members.map((member, index) => (
            <div 
              key={index} 
              className="group relative text-center"
            >
              {/* Cyber Card */}
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
                  {/* Avatar */}
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    {/* Avatar Frame */}
                    <div className="absolute inset-0 border-4 border-cyan-400/50 rounded-full group-hover:border-green-400/70 transition-all duration-300"></div>
                    <div className="absolute inset-2 border-2 border-pink-400/30 rounded-full group-hover:border-pink-400/50 transition-all duration-300"></div>
                    
                    {/* Avatar Image Placeholder */}
                    <div className="w-full h-full bg-gradient-to-br from-green-900/30 via-cyan-900/30 to-pink-900/30 rounded-full flex items-center justify-center group-hover:from-green-900/50 group-hover:via-cyan-900/50 group-hover:to-pink-900/50 transition-all duration-300">
                      <div className="text-4xl">
                        {index === 0 ? '🧠' : '🛡️'}
                      </div>
                    </div>
                    
                    {/* Floating Particles around Avatar */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 -right-4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <div className="text-cyan-400 font-semibold mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {member.role}
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    <button className="w-10 h-10 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group-hover:border-green-400 group-hover:text-green-400">
                      💼
                    </button>
                    <button className="w-10 h-10 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group-hover:border-green-400 group-hover:text-green-400">
                      🔗
                    </button>
                    <button className="w-10 h-10 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 group-hover:border-green-400 group-hover:text-green-400">
                      📧
                    </button>
                  </div>
                </div>

                {/* Additional Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}