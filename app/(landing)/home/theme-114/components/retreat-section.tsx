import React from 'react';

export default function RetreatSection() {
  const retreats = [
    {
      name: "Weekend Wellness",
      duration: "2 Days",
      price: "$599",
      location: "Mountain Retreat",
      description: "Complete mind-body wellness experience in nature",
      highlights: ["Meditation Sessions", "Nature Walks", "Organic Meals", "Spa Treatments"],
      image: "🏔️"
    },
    {
      name: "Mindfulness Intensive",
      duration: "5 Days",
      price: "$1,299",
      location: "Beach Resort",
      description: "Deep meditation and mindfulness training program",
      highlights: ["Daily Meditation", "Yoga Classes", "Mindfulness Workshops", "Beach Therapy"],
      image: "🏖️"
    },
    {
      name: "Luxury Spa Retreat",
      duration: "3 Days",
      price: "$899",
      location: "Forest Lodge",
      description: "Premium spa treatments in a serene forest setting",
      highlights: ["Luxury Spa", "Forest Bathing", "Gourmet Dining", "Private Suites"],
      image: "🌲"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-50/50 to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6">
            WELLNESS RETREATS
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Immerse yourself in transformative wellness experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {retreats.map((retreat, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 hover:border-rose-300 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden backdrop-blur-sm"
            >
              {/* Retreat image */}
              <div className="text-6xl text-center py-8">{retreat.image}</div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-rose-800 mb-4">
                  {retreat.name}
                </h3>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-rose-600">Duration:</span>
                  <span className="text-rose-800 font-bold">{retreat.duration}</span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-rose-600">Price:</span>
                  <span className="text-rose-800 font-bold">{retreat.price}</span>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-rose-600">Location:</span>
                  <span className="text-rose-800 font-bold">{retreat.location}</span>
                </div>
                
                <p className="text-rose-600 leading-relaxed mb-6">
                  {retreat.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-rose-700 font-semibold mb-3">Highlights:</h4>
                  <div className="space-y-2">
                    {retreat.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-rose-600">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-rose-500/25 transition-all duration-300">
                  BOOK RETREAT
                </button>
              </div>
              
              {/* Soft decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Retreat benefits */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">Inner Peace</h3>
              <p className="text-rose-600">Find tranquility and mental clarity</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">Natural Healing</h3>
              <p className="text-rose-600">Connect with nature's healing power</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4">💆‍♀️</div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">Deep Relaxation</h3>
              <p className="text-rose-600">Release stress and tension</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-rose-800 mb-2">Transformation</h3>
              <p className="text-rose-600">Transform your mind and body</p>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-200 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-rose-800 mb-4">
              READY FOR TRANSFORMATION?
            </h3>
            <p className="text-rose-600 mb-6 max-w-md mx-auto">
              Join our next wellness retreat and begin your journey to inner peace
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105">
              EXPLORE RETREATS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 