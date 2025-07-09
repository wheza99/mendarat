import React from 'react';

export default function GameFeatures() {
  const features = [
    {
      icon: "🎮",
      title: "Multiplayer Gaming",
      description: "Connect with players worldwide in real-time multiplayer battles",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: "🏆",
      title: "Tournament System",
      description: "Compete in daily, weekly, and monthly tournaments with prizes",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: "⚡",
      title: "Low Latency",
      description: "Ultra-fast servers ensure smooth gameplay with minimal lag",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: "🎯",
      title: "Skill-Based Matchmaking",
      description: "Get matched with players of similar skill level for fair competition",
      color: "from-pink-500 to-red-600"
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Track your performance with detailed statistics and insights",
      color: "from-red-500 to-orange-600"
    },
    {
      icon: "🔧",
      title: "Customizable Controls",
      description: "Personalize your gaming experience with custom keybindings",
      color: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-6 font-mono">
            GAME FEATURES
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            Experience the ultimate gaming platform with cutting-edge features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 p-8"
            >
              {/* Neon glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-mono">
                  {feature.description}
                </p>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-green-400/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              READY TO LEVEL UP?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto font-mono">
              Join millions of players and start your gaming journey today
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 font-mono">
              START GAMING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 