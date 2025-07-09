import React from 'react';

export default function ImpactSection() {
  const impacts = [
    {
      metric: "10,000+",
      description: "Trees Planted",
      icon: "🌳",
      color: "from-green-500 to-emerald-500"
    },
    {
      metric: "50,000+",
      description: "Plastic Bottles Saved",
      icon: "♻️",
      color: "from-emerald-500 to-teal-500"
    },
    {
      metric: "100,000+",
      description: "CO2 Tons Offset",
      icon: "🌍",
      color: "from-teal-500 to-green-500"
    },
    {
      metric: "1M+",
      description: "Single-Use Items Prevented",
      icon: "🌱",
      color: "from-green-500 to-indigo-500"
    }
  ];

  const initiatives = [
    {
      title: "Reforestation Program",
      description: "Planting trees in deforested areas to restore ecosystems",
      progress: 85,
      icon: "🌳"
    },
    {
      title: "Ocean Cleanup",
      description: "Removing plastic waste from marine environments",
      progress: 72,
      icon: "🌊"
    },
    {
      title: "Carbon Neutral Shipping",
      description: "Offsetting carbon emissions from all deliveries",
      progress: 100,
      icon: "🚚"
    },
    {
      title: "Community Education",
      description: "Teaching sustainable practices in local communities",
      progress: 68,
      icon: "📚"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50/50 to-emerald-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
            ENVIRONMENTAL IMPACT
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            See the positive change we're making together for our planet
          </p>
        </div>
        
        {/* Impact metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="group text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 p-8"
            >
              <div className="text-4xl mb-4">{impact.icon}</div>
              <div className="text-3xl font-bold text-green-800 mb-2">
                {impact.metric}
              </div>
              <div className="text-green-600">
                {impact.description}
              </div>
              <div className={`w-16 h-1 bg-gradient-to-r ${impact.color} mx-auto mt-4 group-hover:scale-x-110 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>
        
        {/* Initiatives */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-800 text-center mb-12">
            OUR INITIATIVES
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{initiative.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      {initiative.title}
                    </h4>
                    <p className="text-green-600 mb-4">
                      {initiative.description}
                    </p>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-green-200 rounded-full h-3 mb-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-300 group-hover:scale-x-105"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-green-600">
                      {initiative.progress}% Complete
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              JOIN OUR MISSION
            </h3>
            <p className="text-green-600 mb-6 max-w-md mx-auto">
              Every purchase helps fund environmental initiatives and conservation projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
                SHOP SUSTAINABLE
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-600 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300">
                DONATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 