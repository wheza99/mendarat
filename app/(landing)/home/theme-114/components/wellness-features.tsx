import React from 'react';

export default function WellnessFeatures() {
  const features = [
    {
      icon: "🧘‍♀️",
      title: "Meditation Sessions",
      description: "Guided meditation and mindfulness practices for inner peace",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: "🌸",
      title: "Aromatherapy",
      description: "Essential oils and natural fragrances for relaxation",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: "🕯️",
      title: "Candle Therapy",
      description: "Therapeutic candle treatments for stress relief",
      color: "from-purple-500 to-rose-500"
    },
    {
      icon: "🌿",
      title: "Herbal Treatments",
      description: "Natural herbal remedies and organic treatments",
      color: "from-rose-500 to-indigo-500"
    },
    {
      icon: "💆‍♀️",
      title: "Massage Therapy",
      description: "Professional massage techniques for deep relaxation",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🧖‍♀️",
      title: "Steam Therapy",
      description: "Detoxifying steam sessions for body purification",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6">
            WELLNESS FEATURES
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Discover our comprehensive range of wellness treatments and therapies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 hover:border-rose-300 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Zen effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-rose-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-rose-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Soft decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-200 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-rose-800 mb-4">
              BEGIN YOUR WELLNESS JOURNEY
            </h3>
            <p className="text-rose-600 mb-6 max-w-md mx-auto">
              Transform your mind, body, and spirit with our expert wellness practitioners
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 