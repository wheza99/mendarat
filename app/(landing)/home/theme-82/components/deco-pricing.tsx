import React from 'react';

export default function DecoPricing() {
  const pricingData = {
    title: {
      main: "DECO PRICING",
      description: "Choose the perfect Art Deco neon gradient package for your project"
    },
    plans: [
      {
        name: "DECO BASIC",
        price: "$99",
        period: "month",
        description: "Perfect for small Art Deco projects with basic neon gradients",
        features: [
          "Art Deco Design Templates",
          "Basic Neon Gradients",
          "5 Projects",
          "Email Support",
          "Basic Animations"
        ],
        color: "purple",
        popular: false
      },
      {
        name: "NEON PRO",
        price: "$199",
        period: "month",
        description: "Advanced Art Deco designs with premium neon gradient effects",
        features: [
          "Custom Art Deco Designs",
          "Premium Neon Gradients",
          "Unlimited Projects",
          "Priority Support",
          "Advanced Animations",
          "Custom Components"
        ],
        color: "pink",
        popular: true
      },
      {
        name: "GRADIENT ELITE",
        price: "$299",
        period: "month",
        description: "Complete Art Deco solution with cutting-edge neon gradient technology",
        features: [
          "Full Custom Design",
          "Advanced Neon Effects",
          "Unlimited Everything",
          "24/7 Support",
          "Premium Animations",
          "Custom Development",
          "Brand Integration"
        ],
        color: "orange",
        popular: false
      }
    ],
    features: [
      { title: "Art Deco Design", description: "Classic Art Deco elements", color: "purple" },
      { title: "Neon Gradients", description: "Modern gradient effects", color: "pink" },
      { title: "Responsive Design", description: "Works on all devices", color: "orange" },
      { title: "Custom Animations", description: "Smooth transitions", color: "purple" }
    ]
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deco Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-transparent to-pink-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#a855f7_0%,transparent_50%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-800/90 to-pink-800/90 backdrop-blur-xl border border-purple-400 rounded-lg px-6 py-3 shadow-2xl mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-deco-pulse"></div>
            <span className="text-purple-300 font-light text-sm tracking-wider">PRICING</span>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              {pricingData.title.main}
            </span>
          </h2>
          
          <p className="text-xl text-purple-300 max-w-3xl mx-auto font-light">
            {pricingData.title.description}
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingData.plans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'lg:scale-110' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink-400 to-orange-400 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-2xl">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`bg-gradient-to-br from-${plan.color}-800/90 to-${plan.color}-900/90 backdrop-blur-xl border border-${plan.color}-400 rounded-lg p-8 shadow-2xl hover:shadow-${plan.color}-500/25 transition-all duration-500 transform hover:scale-105 h-full`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold text-${plan.color}-200 mb-4`}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className={`text-4xl font-bold text-${plan.color}-300`}>
                      {plan.price}
                    </span>
                    <span className={`text-${plan.color}-400 font-light`}>
                      /{plan.period}
                    </span>
                  </div>
                  
                  <p className={`text-${plan.color}-300 font-light`}>
                    {plan.description}
                  </p>
                </div>
                
                {/* Plan Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-${plan.color}-300 font-light`}>
                      <div className={`w-2 h-2 bg-${plan.color}-400 rounded-full mr-3 animate-deco-pulse`} style={{ animationDelay: `${featureIndex * 0.1}s` }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r from-${plan.color}-600 to-${plan.color}-700 hover:from-${plan.color}-500 hover:to-${plan.color}-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-${plan.color}-500/25`}>
                  CHOOSE {plan.name}
                </button>
                
                {/* Deco Corner Elements */}
                <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-${plan.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2}s` }}></div>
                <div className={`absolute -top-2 -right-2 w-4 h-4 border-2 border-${plan.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-${plan.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1}s` }}></div>
                <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-2 border-${plan.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1.5}s` }}></div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${plan.color}-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              INCLUDED FEATURES
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingData.features.map((feature, index) => (
              <div key={index} className={`bg-gradient-to-br from-${feature.color}-800/90 to-${feature.color}-900/90 backdrop-blur-xl border border-${feature.color}-400 rounded-lg p-6 shadow-2xl hover:shadow-${feature.color}-500/25 transition-all duration-300 transform hover:scale-105`}>
                <div className={`text-3xl text-${feature.color}-300 mb-4 animate-deco-pulse`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {['◆', '◇', '◆', '◇'][index]}
                </div>
                <h4 className={`text-lg font-semibold text-${feature.color}-200 mb-2`}>
                  {feature.title}
                </h4>
                <p className={`text-sm text-${feature.color}-300 font-light`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deco Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-deco-float"
            style={{
              left: `${5 + (i % 6) * 15}%`,
              top: `${15 + Math.floor(i / 6) * 35}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          >
            <div className={`w-3 h-3 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-lg animate-deco-spin`}></div>
          </div>
        ))}
      </div>

      {/* Deco Rays */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-1 h-16 bg-gradient-to-t from-purple-400 to-transparent animate-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Deco Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-deco-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#f97316'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${7 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 