import React from 'react';

export default function CosmicFeatures() {
  const features = [
    {
      icon: '🚀',
      title: 'Rocket Launches',
      description: 'Witness powerful rocket launches and experience the thrill of space travel'
    },
    {
      icon: '👨‍🚀',
      title: 'Astronaut Training',
      description: 'Train like a real astronaut with state-of-the-art simulation facilities'
    },
    {
      icon: '🛸',
      title: 'Spacecraft Tours',
      description: 'Explore actual spacecraft and learn about space technology and engineering'
    },
    {
      icon: '🌌',
      title: 'Galaxy Viewing',
      description: 'Observe distant galaxies and celestial bodies through advanced telescopes'
    },
    {
      icon: '🌟',
      title: 'Space Research',
      description: 'Participate in cutting-edge space research and scientific experiments'
    },
    {
      icon: '🛰️',
      title: 'Satellite Control',
      description: 'Learn about satellite operations and space communication systems'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-indigo-200">Cosmic</span> Experiences
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            From rocket launches to astronaut training, discover the wonders of space exploration and cosmic adventures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-6 text-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-purple-100 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Space decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-white/60">
            <span className="text-2xl">🚀</span>
            <span className="text-lg font-light">COSMIC EXPLORATION</span>
            <span className="text-2xl">🌌</span>
          </div>
        </div>
      </div>
    </section>
  );
} 