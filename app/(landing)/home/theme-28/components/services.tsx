"use client";

import { useState, useEffect, useRef } from "react";
import { cosmicCopy } from "../copy";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getConstellationPattern = (constellation: string) => {
    const patterns = {
      'ursa-major': 'M 20 40 L 60 30 L 100 45 L 140 35 L 180 50 L 160 80 L 120 70',
      'orion': 'M 40 20 L 80 40 L 120 30 L 100 70 L 60 80 L 80 60 L 100 50',
      'cassiopeia': 'M 30 60 L 70 30 L 110 50 L 150 20 L 190 40',
      'andromeda': 'M 20 50 L 60 30 L 100 60 L 140 40 L 180 70 L 160 90'
    };
    return patterns[constellation as keyof typeof patterns] || patterns['ursa-major'];
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-purple-950/30 via-indigo-950 to-black relative overflow-hidden">
              <div className="absolute inset-0">
          <div className="absolute top-32 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="absolute top-20 right-20 text-2xl animate-bounce">🌟</div>
          <div className="absolute top-64 left-32 text-xl animate-bounce">🪐</div>
          <div className="absolute bottom-40 right-1/3 text-lg animate-bounce">🚀</div>
          <div className="absolute bottom-20 left-20 text-xl animate-bounce">🔬</div>
        </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
              COSMIC SERVICES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced space exploration technologies and services designed to unlock the mysteries of the universe and push the boundaries of human knowledge.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cosmicCopy.services.map((service, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
              <div 
                className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700 hover:border-cyan-400 p-8 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Constellation Background */}
                <svg 
                  className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
                  viewBox="0 0 200 100"
                >
                  <path
                    d={getConstellationPattern(service.constellation)}
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="3,6"
                    className="text-cyan-400 animate-pulse"
                  />
                  {/* Constellation Stars */}
                  <circle cx="20" cy="40" r="2" fill="currentColor" className="text-cyan-400 animate-ping" />
                  <circle cx="60" cy="30" r="1.5" fill="currentColor" className="text-purple-400 animate-ping" />
                  <circle cx="100" cy="45" r="2.5" fill="currentColor" className="text-pink-400 animate-ping" />
                  <circle cx="140" cy="35" r="1" fill="currentColor" className="text-blue-400 animate-ping" />
                  <circle cx="180" cy="50" r="2" fill="currentColor" className="text-cyan-400 animate-ping" />
                </svg>

                {/* Service Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-4">
                      CAPABILITIES:
                    </h4>
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Active Service Indicator */}
                {activeService === index && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                )}

                {/* Corner Brackets */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border border-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border border-purple-400 rounded-full animate-ping"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white uppercase mb-6">
                READY TO EXPLORE THE UNIVERSE?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our mission to unlock the secrets of the cosmos. Our advanced technologies await your command.
              </p>
              
              <button className="group relative px-12 py-6 text-lg font-bold uppercase tracking-wider overflow-hidden">
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                  INITIATE CONTACT
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 