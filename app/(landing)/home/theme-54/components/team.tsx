'use client';

import { copy } from '../copy';

export default function Team() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Team Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/25 via-blue-800/30 to-cyan-700/25"></div>
        
        {/* Team Formation Currents */}
        <svg className="absolute inset-0 w-full h-full opacity-15" style={{ pointerEvents: 'none' }}>
          <defs>
            <radialGradient id="teamGlow1" cx="30%" cy="40%" r="40%">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#06B6D4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="teamGlow2" cx="70%" cy="60%" r="35%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
              <stop offset="65%" stopColor="#22C55E" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="30%" cy="40%" r="200" fill="url(#teamGlow1)" className="animate-ocean-pulse" />
          <circle cx="70%" cy="60%" r="150" fill="url(#teamGlow2)" className="animate-ocean-pulse" style={{ animationDelay: '2.5s' }} />
        </svg>
        
        {/* Floating Team Bubbles */}
        <div className="absolute top-24 left-16 w-7 h-7 bg-teal-400/20 rounded-full animate-ocean-float"></div>
        <div className="absolute top-56 right-24 w-5 h-5 bg-blue-400/25 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-32 left-28 w-9 h-9 bg-cyan-400/15 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-48 right-32 w-6 h-6 bg-green-400/30 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {copy.team.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.team.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.team.members.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Team Member Card */}
              <div className="relative bg-gradient-to-br from-blue-900/50 via-teal-800/40 to-cyan-700/50 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 text-center transition-all duration-500 hover:scale-105 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/25">
                {/* Ocean Ripple Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-2 border border-teal-400/30 rounded-2xl animate-ocean-ripple"></div>
                  <div className="absolute inset-4 border border-cyan-400/20 rounded-xl animate-ocean-ripple" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute inset-6 border border-blue-400/15 rounded-lg animate-ocean-ripple" style={{ animationDelay: '1s' }}></div>
                </div>
                
                {/* Member Avatar */}
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/20 via-blue-400/15 to-cyan-400/20 group-hover:from-teal-400/40 group-hover:via-blue-400/30 group-hover:to-cyan-400/40 transition-all duration-500 animate-ocean-pulse"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative z-10 w-full h-full object-cover rounded-full border-2 border-teal-400/30 group-hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Avatar Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-teal-500/20 group-hover:via-blue-500/15 group-hover:to-cyan-500/20 transition-all duration-500"></div>
                  
                  {/* Floating Elements around Avatar */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-teal-400/60 rounded-full group-hover:animate-ocean-float"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-cyan-400/50 rounded-full group-hover:animate-ocean-drift"></div>
                </div>
                
                {/* Member Name */}
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-teal-300 transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* Member Role */}
                <div className="text-teal-400 font-medium mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                  {member.role}
                </div>
                
                {/* Member Bio */}
                <p className="text-blue-200 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {member.bio}
                </p>
                
                {/* Ocean Current Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ocean-wave"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-teal-400/40 rounded-full group-hover:animate-ocean-float"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:animate-ocean-drift"></div>
                
                {/* Member Card Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}