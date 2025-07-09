import React from 'react';

export default function TreatmentShowcase() {
  const treatments = [
    {
      name: "Deep Tissue Massage",
      duration: "90 minutes",
      price: "$120",
      category: "Massage",
      benefits: ["Pain Relief", "Muscle Tension", "Stress Reduction"],
      image: "💆‍♀️",
      status: "popular"
    },
    {
      name: "Hot Stone Therapy",
      duration: "75 minutes",
      price: "$95",
      category: "Therapy",
      benefits: ["Deep Relaxation", "Improved Circulation", "Toxin Release"],
      image: "🪨",
      status: "premium"
    },
    {
      name: "Aromatherapy Session",
      duration: "60 minutes",
      price: "$80",
      category: "Aromatherapy",
      benefits: ["Mood Enhancement", "Stress Relief", "Better Sleep"],
      image: "🌸",
      status: "available"
    },
    {
      name: "Facial Treatment",
      duration: "45 minutes",
      price: "$65",
      category: "Skincare",
      benefits: ["Skin Rejuvenation", "Anti-aging", "Glow Enhancement"],
      image: "✨",
      status: "new"
    },
    {
      name: "Meditation Workshop",
      duration: "30 minutes",
      price: "$40",
      category: "Wellness",
      benefits: ["Inner Peace", "Mental Clarity", "Emotional Balance"],
      image: "🧘‍♀️",
      status: "available"
    },
    {
      name: "Detox Wrap",
      duration: "120 minutes",
      price: "$150",
      category: "Body Treatment",
      benefits: ["Toxin Removal", "Skin Purification", "Weight Loss"],
      image: "🧖‍♀️",
      status: "exclusive"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600';
      case 'popular': return 'text-rose-600';
      case 'premium': return 'text-purple-600';
      case 'new': return 'text-pink-600';
      case 'exclusive': return 'text-indigo-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 border-green-300';
      case 'popular': return 'bg-rose-100 border-rose-300';
      case 'premium': return 'bg-purple-100 border-purple-300';
      case 'new': return 'bg-pink-100 border-pink-300';
      case 'exclusive': return 'bg-indigo-100 border-indigo-300';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-50/50 to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6">
            SPA TREATMENTS
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Experience our signature treatments designed for ultimate relaxation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 hover:border-rose-300 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm ${getStatusBg(treatment.status)}`}
            >
              {/* Treatment image */}
              <div className="text-4xl mb-4">{treatment.image}</div>
              
              <h3 className="text-xl font-bold text-rose-800 mb-4">
                {treatment.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-rose-600">Duration:</span>
                  <span className="text-rose-800 font-bold">{treatment.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-rose-600">Price:</span>
                  <span className="text-rose-800 font-bold">{treatment.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-rose-600">Category:</span>
                  <span className="text-rose-800 font-bold">{treatment.category}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-rose-700 font-semibold mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {treatment.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="px-2 py-1 bg-rose-200 text-rose-700 text-xs rounded">
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Status badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(treatment.status)}`}>
                {treatment.status.toUpperCase()}
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-rose-500/25 transition-all duration-300">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Treatment stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">6</div>
              <div className="text-rose-700">Signature Treatments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">5★</div>
              <div className="text-rose-700">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-rose-700">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
              <div className="text-rose-700">Wellness Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 