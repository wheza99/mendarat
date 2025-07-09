import React from 'react';

export default function MarineFeatures() {
  const features = [
    {
      icon: "🛥️",
      title: "Luxury Fleet",
      description: "Premium yachts equipped with state-of-the-art amenities and comfort",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: "🌊",
      title: "Ocean Adventures",
      description: "Explore pristine waters and discover hidden coves and beaches",
      color: "from-blue-500 to-teal-500"
    },
    {
      icon: "👨‍✈️",
      title: "Expert Crew",
      description: "Professional captains and crew ensuring safe and memorable journeys",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: "🍽️",
      title: "Gourmet Dining",
      description: "Fine dining experiences with world-class chefs and fresh local cuisine",
      color: "from-cyan-500 to-indigo-500"
    },
    {
      icon: "🎣",
      title: "Water Sports",
      description: "Fishing, diving, snorkeling, and other exciting marine activities",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🌅",
      title: "Sunset Cruises",
      description: "Romantic evening cruises with breathtaking sunset views",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            MARINE EXCELLENCE
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Discover the perfect blend of luxury, adventure, and maritime expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Ocean wave effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-cyan-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Marine wave decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              READY TO SET SAIL?
            </h3>
            <p className="text-cyan-100 mb-6 max-w-md mx-auto">
              Contact our marine specialists to plan your perfect yacht experience
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 