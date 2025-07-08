import React from 'react';

export default function NeonPricing() {
  const plans = [
    {
      name: "Neon Starter",
      price: "$99",
      period: "month",
      description: "Perfect for retro-futuristic beginners",
      features: ["Basic neon effects", "Retro templates", "Email support"],
      popular: false
    },
    {
      name: "Synthwave Pro",
      price: "$199",
      period: "month",
      description: "Advanced retro-futuristic features",
      features: ["Premium neon effects", "Custom retro themes", "Priority support", "Synthwave audio"],
      popular: true
    },
    {
      name: "Retro Enterprise",
      price: "$399",
      period: "month",
      description: "Complete retro-futuristic solution",
      features: ["Unlimited neon effects", "Custom development", "24/7 support", "Synthwave branding", "Retro animations"],
      popular: false
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12 font-mono tracking-wider">
          NEON PRICING
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative group ${plan.popular ? 'scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-1 text-sm font-bold font-mono border border-orange-400">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              {/* Plan Card */}
              <div className={`relative p-6 border-2 ${plan.popular ? 'border-pink-400' : 'border-cyan-400'} bg-gradient-to-br from-cyan-900/20 to-transparent hover:scale-105 transition-transform font-mono`}>
                {/* Neon Glow Effect */}
                <div className={`absolute inset-0 ${plan.popular ? 'bg-pink-400/10' : 'bg-cyan-400/10'} blur-xl group-hover:${plan.popular ? 'bg-pink-400/20' : 'bg-cyan-400/20'} transition-colors`}></div>
                
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold ${plan.popular ? 'text-pink-300' : 'text-cyan-300'} mb-2`}>
                    {plan.name}
                  </h3>
                  <p className="text-purple-200 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-pink-400' : 'text-cyan-400'}`}>
                      {plan.price}
                    </span>
                    <span className="text-orange-300 text-sm">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-pink-200 text-sm flex items-center">
                        <span className="text-orange-400 mr-2">⚡</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full px-4 py-2 font-bold border hover:scale-105 transition-transform ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white border-orange-400' 
                      : 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-pink-400'
                  }`}>
                    {plan.popular ? 'GET STARTED' : 'CHOOSE PLAN'}
                  </button>
                </div>
                
                {/* Neon Border Animation */}
                <div className={`absolute inset-0 border-2 ${plan.popular ? 'border-pink-400' : 'border-cyan-400'} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Synthwave Decorative Element */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-4">
            {Array.from({ length: 7 }, (_, i) => (
              <div 
                key={i}
                className={`w-2 h-8 rounded-full animate-pulse ${
                  ['bg-pink-400', 'bg-purple-400', 'bg-cyan-400', 'bg-orange-400', 'bg-pink-400', 'bg-purple-400', 'bg-cyan-400'][i]
                }`}
                style={{animationDelay: `${i * 0.1}s`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 