"use client";

import { useState, useEffect } from "react";
import { teamSectionCopy } from "../copy";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('team-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="team-section"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-emerald-50/30 to-white"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-emerald-200/40 to-sky-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-sky-200/40 to-amber-200/40 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {teamSectionCopy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {teamSectionCopy.subtitle}
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamSectionCopy.members.map((member, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              
              {/* Member Card */}
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-white/50">
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/50 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 translate-y-2 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full shadow-lg"></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <div className="text-emerald-600 font-semibold mb-4">
                    {member.role}
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url], socialIndex) => (
                      <a
                        key={socialIndex}
                        href={url}
                        className="w-10 h-10 bg-gradient-to-r from-emerald-100/80 to-sky-100/80 backdrop-blur-sm border border-white/50 rounded-full flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:scale-110 transition-all duration-300"
                      >
                        <span className="text-sm font-medium capitalize">
                          {platform.charAt(0)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 