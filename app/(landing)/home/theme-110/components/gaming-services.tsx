import React from 'react';

export default function GamingServices() {
  const services = [
    {
      title: 'Game Hosting',
      description: 'Dedicated servers for optimal gaming performance',
      icon: '🖥️',
      gradient: 'from-green-500 to-blue-500',
      features: ['Low Latency', 'DDoS Protection', '24/7 Uptime']
    },
    {
      title: 'Tournament Management',
      description: 'Automated tournament systems with prize pools',
      icon: '🏆',
      gradient: 'from-blue-500 to-purple-500',
      features: ['Auto Brackets', 'Prize Distribution', 'Live Streaming']
    },
    {
      title: 'Anti-Cheat System',
      description: 'Advanced detection to ensure fair gameplay',
      icon: '🛡️',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Real-time Detection', 'Machine Learning', 'Manual Review']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive player and game statistics',
      icon: '📊',
      gradient: 'from-pink-500 to-red-500',
      features: ['Player Stats', 'Game Analytics', 'Performance Metrics']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 font-mono">
            GAMING SERVICES
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            Professional gaming infrastructure for competitive play
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 p-8"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 font-mono">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 font-mono">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Animated button */}
                <button className="group/btn relative px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 overflow-hidden font-mono">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-green-400/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              READY TO LAUNCH YOUR GAME?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto font-mono">
              Get professional gaming infrastructure and support for your platform
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 font-mono">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 