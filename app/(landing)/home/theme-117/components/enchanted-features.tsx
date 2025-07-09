import React from 'react';

export default function EnchantedFeatures() {
  const features = [
    {
      icon: "✨",
      title: "Ancient Spells",
      description: "Powerful spells from ancient mystical traditions",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: "🔮",
      title: "Crystal Divination",
      description: "Mystical crystal ball readings and prophecies",
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: "🌟",
      title: "Astral Projection",
      description: "Journey through astral realms and dimensions",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: "💫",
      title: "Spirit Communication",
      description: "Connect with spirits and otherworldly beings",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: "🌙",
      title: "Lunar Magic",
      description: "Harness the power of moon phases and cycles",
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: "⚡",
      title: "Energy Healing",
      description: "Restore balance with mystical energy healing",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 font-serif">
            ENCHANTED FEATURES
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto font-serif">
            Ancient wisdom and mystical powers beyond imagination
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Mystical effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-purple-200 leading-relaxed font-serif">
                  {feature.description}
                </p>
              </div>
              
              {/* Mystical decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 font-serif">
              UNLOCK MYSTICAL POWERS
            </h3>
            <p className="text-purple-200 mb-6 max-w-md mx-auto font-serif">
              Embark on a journey through ancient mystical realms
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 font-serif">
              BEGIN QUEST
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 