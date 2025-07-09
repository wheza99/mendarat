import React from 'react';

export default function FleetShowcase() {
  const yachts = [
    {
      name: "Ocean Explorer",
      length: "85 feet",
      capacity: 12,
      price: "$15,000/day",
      features: ["Helipad", "Jacuzzi", "Diving Platform"],
      image: "🛥️",
      status: "available"
    },
    {
      name: "Royal Blue",
      length: "120 feet",
      capacity: 18,
      price: "$25,000/day",
      features: ["Cinema", "Gym", "Beach Club"],
      image: "🚢",
      status: "chartered"
    },
    {
      name: "Sea Serenity",
      length: "95 feet",
      capacity: 14,
      price: "$18,000/day",
      features: ["Sundeck", "Fishing Gear", "Water Toys"],
      image: "⛵",
      status: "available"
    },
    {
      name: "Marine Majesty",
      length: "150 feet",
      capacity: 24,
      price: "$35,000/day",
      features: ["Spa", "Chef", "Butler Service"],
      image: "🛳️",
      status: "maintenance"
    },
    {
      name: "Aqua Adventure",
      length: "75 feet",
      capacity: 10,
      price: "$12,000/day",
      features: ["Snorkeling", "Kayaks", "BBQ"],
      image: "🛥️",
      status: "available"
    },
    {
      name: "Luxury Liner",
      length: "180 feet",
      capacity: 30,
      price: "$45,000/day",
      features: ["Helicopter", "Submarine", "Beach Club"],
      image: "🚢",
      status: "exclusive"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-400';
      case 'chartered': return 'text-yellow-400';
      case 'maintenance': return 'text-red-400';
      case 'exclusive': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500/20 border-green-400/30';
      case 'chartered': return 'bg-yellow-500/20 border-yellow-400/30';
      case 'maintenance': return 'bg-red-500/20 border-red-400/30';
      case 'exclusive': return 'bg-purple-500/20 border-purple-400/30';
      default: return 'bg-gray-500/20 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900/50 to-cyan-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            OUR FLEET
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Explore our prestigious collection of luxury yachts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachts.map((yacht, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm ${getStatusBg(yacht.status)}`}
            >
              {/* Yacht image */}
              <div className="text-4xl mb-4">{yacht.image}</div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {yacht.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Length:</span>
                  <span className="text-cyan-400 font-bold">{yacht.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Capacity:</span>
                  <span className="text-cyan-400 font-bold">{yacht.capacity} guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Price:</span>
                  <span className="text-cyan-400 font-bold">{yacht.price}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-cyan-200 font-semibold mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {yacht.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(yacht.status)}`}>
                {yacht.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                {yacht.status === 'available' && (
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    BOOK NOW
                  </button>
                )}
                {yacht.status === 'chartered' && (
                  <button className="w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                    INQUIRE
                  </button>
                )}
                {yacht.status === 'maintenance' && (
                  <button className="w-full px-6 py-3 border-2 border-red-400 text-red-400 font-bold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300">
                    COMING SOON
                  </button>
                )}
                {yacht.status === 'exclusive' && (
                  <button className="w-full px-6 py-3 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                    VIP ACCESS
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Fleet stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-cyan-100">Luxury Yachts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">108</div>
              <div className="text-cyan-100">Total Guests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">705</div>
              <div className="text-cyan-100">Total Feet</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-cyan-100">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 