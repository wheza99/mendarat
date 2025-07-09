import React from 'react';

export default function GreenFeatures() {
  const features = [
    {
      icon: "🌱",
      title: "Plant-Based Products",
      description: "All our products are made from sustainable, plant-based materials",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "♻️",
      title: "Zero Waste Packaging",
      description: "100% plastic-free packaging that's compostable and biodegradable",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: "🌿",
      title: "Organic Materials",
      description: "Certified organic materials sourced from sustainable farms",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: "🌍",
      title: "Carbon Neutral",
      description: "Carbon-neutral shipping and manufacturing processes",
      color: "from-green-500 to-indigo-500"
    },
    {
      icon: "🌱",
      title: "Biodegradable",
      description: "Products that break down naturally without harming the environment",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🌿",
      title: "Fair Trade",
      description: "Supporting fair trade practices and ethical manufacturing",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
            ECO-FRIENDLY FEATURES
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Every product is designed with sustainability and environmental impact in mind
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Nature effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-green-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Green decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              JOIN THE GREEN REVOLUTION
            </h3>
            <p className="text-green-600 mb-6 max-w-md mx-auto">
              Make a positive impact on the planet with every purchase
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 