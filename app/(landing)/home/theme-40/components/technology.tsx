'use client';

import { useState, useEffect } from 'react';

const technologies = [
  {
    name: 'Life Support Systems',
    description: 'Advanced atmospheric processors and water recycling systems',
    icon: '🫁',
    status: 'Active',
    efficiency: '98%'
  },
  {
    name: 'Solar Arrays',
    description: 'High-efficiency photovoltaic panels adapted for Mars atmosphere',
    icon: '☀️',
    status: 'Operational',
    efficiency: '87%'
  },
  {
    name: 'Habitat Modules',
    description: 'Pressurized living spaces with radiation shielding',
    icon: '🏠',
    status: 'Expanding',
    efficiency: '94%'
  },
  {
    name: 'Resource Extraction',
    description: 'Mining equipment for water, minerals, and atmospheric gases',
    icon: '⛏️',
    status: 'Active',
    efficiency: '76%'
  }
];

export default function Technology() {
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

    const element = document.getElementById('technology-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology-section" className="py-20 px-4 relative bg-gradient-to-b from-transparent to-red-950/30">
      <div className="max-w-7xl mx-auto">
        <div className={'text-center mb-16 transition-all duration-1000 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-6">
            Mars Technology
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto">
            Cutting-edge systems enabling human survival on the Red Planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className={'p-6 bg-red-900/20 border border-orange-400/30 rounded-xl mars-glow transition-all duration-700 ' + (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')} style={{ transitionDelay: index * 200 + 'ms' }}>
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">{tech.name}</h3>
              <p className="text-orange-100 text-sm mb-4">{tech.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">{tech.status}</span>
                <span className="text-orange-400 font-mono text-sm">{tech.efficiency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 