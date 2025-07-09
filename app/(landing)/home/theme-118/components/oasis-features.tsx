import React from 'react';

export default function OasisFeatures() {
  const features = [
    {
      icon: "🌵",
      title: "Desert Tours",
      description: "Guided tours through ancient desert landscapes",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "🐪",
      title: "Camel Caravans",
      description: "Traditional camel caravan experiences",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: "🏺",
      title: "Ancient Artifacts",
      description: "Discover ancient artifacts and treasures",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: "🌴",
      title: "Oasis Retreats",
      description: "Peaceful oasis retreats and relaxation",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "🏜️",
      title: "Desert Camping",
      description: "Authentic desert camping experiences",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: "🌟",
      title: "Arabian Nights",
      description: "Magical Arabian nights experiences",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            OASIS FEATURES
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Ancient wonders and desert adventures beyond imagination
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Desert effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-amber-400 mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-amber-200 leading-relaxed font-serif">
                  {feature.description}
                </p>
              </div>
              
              {/* Desert decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">
              DISCOVER DESERT MAGIC
            </h3>
            <p className="text-amber-200 mb-6 max-w-md mx-auto font-serif">
              Embark on a journey through ancient desert landscapes
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 font-serif">
              BEGIN ADVENTURE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 