import React from 'react';

export default function BeachSection() {
  const activities = [
    {
      icon: '🏊‍♂️',
      title: 'Swimming',
      description: 'Crystal-clear waters perfect for swimming and water activities',
      duration: '2-4 hours',
      difficulty: 'Easy'
    },
    {
      icon: '🤿',
      title: 'Snorkeling',
      description: 'Explore vibrant coral reefs and tropical fish in shallow waters',
      duration: '3-5 hours',
      difficulty: 'Easy'
    },
    {
      icon: '🏄‍♂️',
      title: 'Surfing',
      description: 'Catch the perfect wave with professional surfing instructors',
      duration: '4-6 hours',
      difficulty: 'Intermediate'
    },
    {
      icon: '🚣‍♂️',
      title: 'Kayaking',
      description: 'Paddle through calm waters and explore hidden coves',
      duration: '2-3 hours',
      difficulty: 'Easy'
    },
    {
      icon: '🐠',
      title: 'Marine Life',
      description: 'Discover tropical fish, sea turtles, and colorful coral reefs',
      duration: '3-4 hours',
      difficulty: 'Easy'
    },
    {
      icon: '🌅',
      title: 'Sunset Views',
      description: 'Breathtaking sunset views from pristine beach locations',
      duration: '1-2 hours',
      difficulty: 'Easy'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cyan-600 to-blue-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-teal-200">Beach</span> Activities
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From relaxing beach walks to thrilling water sports, discover endless activities on our pristine beaches
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
                <p className="text-blue-100 mb-4 leading-relaxed">
                  {activity.description}
                </p>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  <div className="text-sm text-cyan-200 font-medium">Duration</div>
                  <div className="text-white font-semibold">{activity.duration}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-cyan-200 font-medium">Difficulty</div>
                  <div className="text-white font-semibold">{activity.difficulty}</div>
                </div>
              </div>
              
              <button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-full transition-all duration-300">
                🌊 Book Activity
              </button>
            </div>
          ))}
        </div>
        
        {/* Beach decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 text-white/60">
            <span className="text-3xl animate-bounce">🏖️</span>
            <span className="text-xl font-light">ENDLESS BEACH ADVENTURES</span>
            <span className="text-3xl animate-pulse">🌊</span>
          </div>
        </div>
      </div>
    </section>
  );
} 