import React from 'react';

export default function MysticShowcase() {
  const artifacts = [
    {
      name: "Crystal of Prophecy",
      power: "Divination",
      price: "$2,500",
      category: "Divination Tools",
      features: ["Future Sight", "Crystal Energy", "Ancient Power"],
      image: "🔮",
      status: "legendary"
    },
    {
      name: "Staff of Elements",
      power: "Elemental Control",
      price: "$5,000",
      category: "Weapons",
      features: ["Fire Magic", "Water Control", "Earth Power"],
      image: "⚡",
      status: "epic"
    },
    {
      name: "Potion of Healing",
      power: "Restoration",
      price: "$800",
      category: "Potions",
      features: ["Health Restore", "Energy Boost", "Natural Magic"],
      image: "🧪",
      status: "common"
    },
    {
      name: "Amulet of Protection",
      power: "Warding",
      price: "$1,200",
      category: "Jewelry",
      features: ["Spirit Shield", "Negative Energy", "Ancient Runes"],
      image: "💎",
      status: "rare"
    },
    {
      name: "Book of Spells",
      power: "Knowledge",
      price: "$3,000",
      category: "Tomes",
      features: ["Ancient Spells", "Mystical Lore", "Power Words"],
      image: "📖",
      status: "legendary"
    },
    {
      name: "Crystal Ball",
      power: "Scrying",
      price: "$1,800",
      category: "Divination",
      features: ["Future Visions", "Past Sight", "Present Truth"],
      image: "🔮",
      status: "rare"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'common': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'common': return 'bg-green-900/20 border-green-400/30';
      case 'rare': return 'bg-blue-900/20 border-blue-400/30';
      case 'epic': return 'bg-purple-900/20 border-purple-400/30';
      case 'legendary': return 'bg-orange-900/20 border-orange-400/30';
      default: return 'bg-gray-900/20 border-gray-400/30';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 font-serif">
            MYSTICAL ARTIFACTS
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto font-serif">
            Ancient artifacts and mystical items of great power
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artifacts.map((artifact, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm ${getStatusBg(artifact.status)}`}
            >
              {/* Artifact image */}
              <div className="text-4xl mb-4">{artifact.image}</div>
              
              <h3 className="text-xl font-bold text-purple-400 mb-4 font-serif">
                {artifact.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Power:</span>
                  <span className="text-purple-400 font-bold font-serif">{artifact.power}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Price:</span>
                  <span className="text-purple-400 font-bold font-serif">{artifact.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Category:</span>
                  <span className="text-purple-400 font-bold font-serif">{artifact.category}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-purple-300 font-semibold mb-3 font-serif">Powers:</h4>
                <div className="flex flex-wrap gap-2">
                  {artifact.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded font-serif">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(artifact.status)} font-serif`}>
                {artifact.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300 font-serif">
                  ACQUIRE ARTIFACT
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Artifact stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-purple-200 font-serif">Mystical Artifacts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">5★</div>
              <div className="text-purple-200 font-serif">Power Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">1000+</div>
              <div className="text-purple-200 font-serif">Years Ancient</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-purple-200 font-serif">Mystical Energy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 