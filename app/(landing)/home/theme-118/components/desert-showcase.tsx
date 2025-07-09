import React from 'react';

export default function DesertShowcase() {
  const experiences = [
    {
      name: "Desert Safari Adventure",
      duration: "Full Day",
      price: "$150",
      category: "Adventure",
      features: ["4x4 Safari", "Camel Ride", "Sunset View"],
      image: "🏜️",
      status: "popular"
    },
    {
      name: "Oasis Retreat Package",
      duration: "3 Days",
      price: "$500",
      category: "Luxury",
      features: ["Private Oasis", "Spa Treatment", "Desert Views"],
      image: "🌴",
      status: "premium"
    },
    {
      name: "Camel Caravan Tour",
      duration: "2 Days",
      price: "$300",
      category: "Cultural",
      features: ["Traditional Caravan", "Desert Camping", "Local Guide"],
      image: "🐪",
      status: "exclusive"
    },
    {
      name: "Ancient Artifact Hunt",
      duration: "Half Day",
      price: "$80",
      category: "Archaeology",
      features: ["Guided Hunt", "Historical Sites", "Expert Guide"],
      image: "🏺",
      status: "available"
    },
    {
      name: "Desert Photography",
      duration: "Full Day",
      price: "$120",
      category: "Photography",
      features: ["Professional Guide", "Equipment Provided", "Best Locations"],
      image: "📸",
      status: "available"
    },
    {
      name: "Arabian Nights Experience",
      duration: "Evening",
      price: "$200",
      category: "Cultural",
      features: ["Traditional Music", "Desert Dinner", "Stargazing"],
      image: "🌟",
      status: "new"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-400';
      case 'popular': return 'text-amber-400';
      case 'premium': return 'text-orange-400';
      case 'new': return 'text-yellow-400';
      case 'exclusive': return 'text-amber-500';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-900/20 border-green-400/30';
      case 'popular': return 'bg-amber-900/20 border-amber-400/30';
      case 'premium': return 'bg-orange-900/20 border-orange-400/30';
      case 'new': return 'bg-yellow-900/20 border-yellow-400/30';
      case 'exclusive': return 'bg-amber-900/20 border-amber-500/30';
      default: return 'bg-gray-900/20 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-900/50 to-orange-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            DESERT EXPERIENCES
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Unforgettable desert adventures and cultural experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm ${getStatusBg(experience.status)}`}
            >
              {/* Experience image */}
              <div className="text-4xl mb-4">{experience.image}</div>
              
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-serif">
                {experience.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Duration:</span>
                  <span className="text-amber-400 font-bold font-serif">{experience.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Price:</span>
                  <span className="text-amber-400 font-bold font-serif">{experience.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Category:</span>
                  <span className="text-amber-400 font-bold font-serif">{experience.category}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-amber-300 font-semibold mb-3 font-serif">Includes:</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-amber-900/50 text-amber-200 text-xs rounded font-serif">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(experience.status)} font-serif`}>
                {experience.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                  BOOK EXPERIENCE
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Experience stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">6</div>
              <div className="text-amber-200 font-serif">Desert Experiences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">5★</div>
              <div className="text-amber-200 font-serif">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000+</div>
              <div className="text-amber-200 font-serif">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-amber-200 font-serif">Desert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 