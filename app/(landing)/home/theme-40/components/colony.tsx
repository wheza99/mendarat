'use client';

import { useState, useEffect } from 'react';

const colonyAreas = [
  {
    name: 'Research Complex',
    description: 'Advanced laboratories for terraforming research and atmospheric studies',
    status: 'Operational',
    population: 324,
    icon: '🔬'
  },
  {
    name: 'Residential Domes',
    description: 'Pressurized living quarters with Earth-like environmental controls',
    status: 'Expanding',
    population: 1247,
    icon: '🏠'
  },
  {
    name: 'Manufacturing Hub',
    description: 'Industrial complex for equipment production and resource processing',
    status: 'Active',
    population: 892,
    icon: '🏭'
  },
  {
    name: 'Agricultural Zones',
    description: 'Hydroponic farms and food production facilities',
    status: 'Growing',
    population: 384,
    icon: '🌱'
  }
];

export default function Colony() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('colony-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="colony-section" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className={'text-center mb-16 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-900/30 border border-orange-500/30 rounded-full mb-8">
            <span className="text-xl">🏗️</span>
            <span className="font-mono text-orange-300 tracking-wider uppercase text-sm">Colony Infrastructure</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-6">
            Mars Settlement
          </h2>
          
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            A thriving human civilization built on the foundations of innovation and survival
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {colonyAreas.map((area, index) => (
            <div key={index} className={'p-8 bg-red-900/20 border border-orange-400/30 rounded-xl mars-glow transition-all duration-700 hover:border-orange-400/50 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{ transitionDelay: index * 200 + 'ms' }}>
              <div className="flex items-start gap-6">
                <div className="text-5xl terraforming">{area.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-orange-300">{area.name}</h3>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full">
                      {area.status}
                    </span>
                  </div>
                  
                  <p className="text-orange-100 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-400">👨‍🚀</span>
                      <span className="text-orange-300 font-mono text-sm">
                        {area.population.toLocaleString()} residents
                      </span>
                    </div>
                    <div className="w-16 h-2 bg-red-900/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full terraforming"
                        style={{ width: Math.min(area.population / 15, 100) + '%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
