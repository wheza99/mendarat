import React from 'react';

export default function BioharmonyServices() {
  const services = [
    {
      name: "Seedling",
      price: "Growing",
      description: "Perfect for startups ready to plant their first digital roots",
      features: [
        "🌱 Bio-inspired architecture",
        "🌿 Sustainable hosting",
        "💧 Organic growth analytics",
        "🌍 Carbon-neutral operations"
      ],
      color: "from-emerald-400 to-green-500",
      popular: false
    },
    {
      name: "Forest",
      price: "Thriving",
      description: "Ideal for growing businesses that need ecosystem-scale solutions",
      features: [
        "🌳 Advanced bio-algorithms",
        "🌲 Multi-branch architecture",
        "🍃 Photosynthetic optimization",
        "🌿 Symbiotic integrations",
        "♻️ Circular resource management"
      ],
      color: "from-green-500 to-emerald-600",
      popular: true
    },
    {
      name: "Ecosystem",
      price: "Flourishing",
      description: "For enterprises ready to transform their entire digital habitat",
      features: [
        "🌍 Global bio-network",
        "🌊 Deep root infrastructure",
        "🦋 Pollinator partnerships",
        "🌺 Biodiversity enhancement",
        "🌳 Legacy forest management",
        "🔄 Infinite regeneration cycles"
      ],
      color: "from-emerald-600 to-lime-600",
      popular: false
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600" fill="none">
          <defs>
            <radialGradient id="serviceGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          {Array.from({ length: 15 }, (_, i) => (
            <circle
              key={i}
              cx={50 + (i % 5) * 150}
              cy={50 + Math.floor(i / 5) * 150}
              r={20 + (i % 3) * 15}
              fill="url(#serviceGradient)"
              className="animate-organic-pulse"
              style={{animationDelay: `${i * 0.8}s`}}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-2">
            🌿 BIOHARMONY SOLUTIONS
          </span>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 bg-clip-text text-transparent mb-6">
            ORGANIC SERVICES
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Choose the perfect ecosystem for your digital growth journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/60 backdrop-blur-sm border-2 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                service.popular 
                  ? 'border-emerald-400/60 shadow-emerald-500/20 hover:shadow-emerald-500/30' 
                  : 'border-green-200/50 hover:shadow-green-500/10'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                    🌿 MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-emerald-700 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    {service.price}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-organic-pulse flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 font-bold text-lg rounded-2xl transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-green-600 hover:to-emerald-700'
                    : 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white'
                }`}>
                  🌱 START GROWING
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-green-200/50 text-center">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4">🌍 ORGANIC GUARANTEE</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            All our services come with our Bio-Promise: if your digital ecosystem doesn't thrive, 
            we'll replant and nurture it until it flourishes naturally.
          </p>
          <div className="flex justify-center items-center space-x-8">
            {[
              { icon: "🌱", label: "30-Day Growth Guarantee" },
              { icon: "♻️", label: "Carbon Negative Operations" },
              { icon: "🌿", label: "Biodiversity Commitment" }
            ].map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{guarantee.icon}</div>
                <div className="text-xs text-gray-600 font-medium">{guarantee.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute animate-organic-float-service"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          >
            <div className="text-lg opacity-30">
              {['🌱', '🌿', '🍃', '🌾', '🌳'][Math.floor(Math.random() * 5)]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 