import React from 'react';

export default function GalaxyShowcase() {
  const missions = [
    {
      name: 'Mars Mission',
      destination: 'Red Planet',
      image: '🚀',
      description: 'Explore the surface of Mars and search for signs of life',
      duration: '2 years',
      difficulty: 'Extreme'
    },
    {
      name: 'Moon Base',
      destination: 'Lunar Surface',
      image: '🌙',
      description: 'Establish a permanent human presence on the Moon',
      duration: '6 months',
      difficulty: 'Advanced'
    },
    {
      name: 'ISS Expedition',
      destination: 'Low Earth Orbit',
      image: '🛰️',
      description: 'Live and work aboard the International Space Station',
      duration: '3 months',
      difficulty: 'Intermediate'
    },
    {
      name: 'Deep Space',
      destination: 'Interstellar',
      image: '🌌',
      description: 'Venture beyond our solar system into deep space',
      duration: '10 years',
      difficulty: 'Pioneer'
    },
    {
      name: 'Asteroid Mining',
      destination: 'Near Earth',
      image: '☄️',
      description: 'Extract valuable resources from near-Earth asteroids',
      duration: '1 year',
      difficulty: 'Advanced'
    },
    {
      name: 'Space Tourism',
      destination: 'Orbit',
      image: '👨‍🚀',
      description: 'Experience weightlessness and Earth views from space',
      duration: '1 week',
      difficulty: 'Beginner'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-purple-200">Galaxy</span> Missions
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore the universe with our groundbreaking space missions and cosmic destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                {mission.image}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {mission.name}
                </h3>
                <p className="text-indigo-200 mb-3 font-medium">
                  {mission.destination}
                </p>
                <p className="text-purple-100 mb-4 text-sm leading-relaxed">
                  {mission.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-200">
                    {mission.duration}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-300">⭐</span>
                    <span className="text-white font-semibold">{mission.difficulty}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-full transition-all duration-300">
                  🚀 Join Mission
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Space decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 text-white/60">
            <span className="text-3xl animate-bounce">🚀</span>
            <span className="text-xl font-light">EXPLORE THE UNIVERSE</span>
            <span className="text-3xl animate-pulse">🌌</span>
          </div>
        </div>
      </div>
    </section>
  );
} 