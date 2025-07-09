import React from 'react';

export default function MissionSection() {
  const activities = [
    {
      icon: '🚀',
      title: 'Rocket Launch',
      description: 'Experience the thrill of a real rocket launch from mission control',
      duration: '4-6 hours',
      difficulty: 'Moderate'
    },
    {
      icon: '👨‍🚀',
      title: 'Space Walk',
      description: 'Simulate space walks in our advanced zero-gravity training facility',
      duration: '2-3 hours',
      difficulty: 'Advanced'
    },
    {
      icon: '🛰️',
      title: 'Satellite Control',
      description: 'Learn to operate satellites and space communication systems',
      duration: '3-4 hours',
      difficulty: 'Intermediate'
    },
    {
      icon: '🌌',
      title: 'Telescope Observation',
      description: 'Observe distant galaxies and celestial bodies through powerful telescopes',
      duration: '2-4 hours',
      difficulty: 'Easy'
    },
    {
      icon: '🌟',
      title: 'Space Photography',
      description: 'Capture stunning images of space and celestial phenomena',
      duration: '1-2 hours',
      difficulty: 'Easy'
    },
    {
      icon: '🛸',
      title: 'UFO Research',
      description: 'Participate in cutting-edge research on unidentified flying objects',
      duration: '3-5 hours',
      difficulty: 'Advanced'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-purple-200">Mission</span> Activities
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            From rocket launches to space walks, experience the full spectrum of space mission activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{activity.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {activity.title}
                </h3>
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {activity.description}
                </p>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  <div className="text-sm text-indigo-200 font-medium">Duration</div>
                  <div className="text-white font-semibold">{activity.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-indigo-200 font-medium">Difficulty</div>
                  <div className="text-white font-semibold">{activity.difficulty}</div>
                </div>
              </div>
              
              <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-full transition-all duration-300">
                🚀 Book Activity
              </button>
            </div>
          ))}
        </div>
        
        {/* Space decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 text-white/60">
            <span className="text-3xl animate-bounce">🚀</span>
            <span className="text-xl font-light">MISSION ACCOMPLISHED</span>
            <span className="text-3xl animate-pulse">👨‍🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
} 