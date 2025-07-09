import React from 'react';

export default function IndustrialFeatures() {
  const features = [
    {
      icon: "⚙️",
      title: "Steam Engines",
      description: "Powerful steam engines for industrial applications",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "🔧",
      title: "Mechanical Systems",
      description: "Precision mechanical systems and gear assemblies",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: "🚂",
      title: "Locomotive Power",
      description: "Steam locomotives and railway systems",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: "🔩",
      title: "Brass Fittings",
      description: "High-quality brass and copper fittings",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: "⚡",
      title: "Steam Power",
      description: "Efficient steam power generation systems",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: "🏭",
      title: "Industrial Design",
      description: "Vintage industrial design and engineering",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            INDUSTRIAL FEATURES
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Masterful engineering and steam-powered innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Steam effect */}
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
              
              {/* Brass decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">
              BUILD STEAM POWER
            </h3>
            <p className="text-amber-200 mb-6 max-w-md mx-auto font-serif">
              Harness the power of steam and mechanical engineering
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 font-serif">
              START BUILDING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 