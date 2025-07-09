import React from 'react';

export default function CharterSection() {
  const charters = [
    {
      name: "Mediterranean Cruise",
      duration: "7 days",
      price: "$50,000",
      guests: 12,
      destination: "French Riviera",
      icon: "🌊",
      status: "available"
    },
    {
      name: "Caribbean Adventure",
      duration: "10 days",
      price: "$75,000",
      guests: 18,
      destination: "Bahamas",
      icon: "🏝️",
      status: "popular"
    },
    {
      name: "Alaska Expedition",
      duration: "14 days",
      price: "$120,000",
      guests: 8,
      destination: "Inside Passage",
      icon: "🏔️",
      status: "exclusive"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-400';
      case 'popular': return 'text-yellow-400';
      case 'exclusive': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500/20 border-green-400/30';
      case 'popular': return 'bg-yellow-500/20 border-yellow-400/30';
      case 'exclusive': return 'bg-purple-500/20 border-purple-400/30';
      default: return 'bg-gray-500/20 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900/50 to-cyan-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
            CHARTER PACKAGES
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Pre-designed luxury yacht experiences for unforgettable adventures
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {charters.map((charter, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm ${getStatusBg(charter.status)}`}
            >
              {/* Charter icon */}
              <div className="text-4xl mb-4">{charter.icon}</div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {charter.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Duration:</span>
                  <span className="text-cyan-400 font-bold">{charter.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Price:</span>
                  <span className="text-cyan-400 font-bold">{charter.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Guests:</span>
                  <span className="text-cyan-400 font-bold">{charter.guests}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-200">Destination:</span>
                  <span className="text-cyan-400 font-bold">{charter.destination}</span>
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(charter.status)}`}>
                {charter.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                {charter.status === 'available' && (
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    BOOK NOW
                  </button>
                )}
                {charter.status === 'popular' && (
                  <button className="w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                    INQUIRE
                  </button>
                )}
                {charter.status === 'exclusive' && (
                  <button className="w-full px-6 py-3 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                    VIP ACCESS
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Charter stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">31</div>
              <div className="text-cyan-100">Days Average</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$245K</div>
              <div className="text-cyan-100">Total Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">38</div>
              <div className="text-cyan-100">Total Guests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-cyan-100">Destinations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 