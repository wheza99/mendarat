import React from 'react';

export default function DarkPricing() {
  const plans = [
    {
      name: "SHADOW STARTER",
      price: "$99",
      period: "/month",
      description: "Perfect for those who want to dip their toes into the darkness.",
      features: [
        "Basic Noir Interface",
        "Neon Accent Colors",
        "Shadow Analytics",
        "24/7 Support",
        "Dark Mode Only"
      ],
      color: "red",
      popular: false
    },
    {
      name: "NEON PRO",
      price: "$299",
      period: "/month",
      description: "The sweet spot for serious players in the digital underworld.",
      features: [
        "Advanced Noir Features",
        "Custom Neon Themes",
        "Shadow Network Access",
        "Priority Support",
        "Dark Analytics Suite",
        "Neon Customization"
      ],
      color: "blue",
      popular: true
    },
    {
      name: "DARK MASTER",
      price: "$599",
      period: "/month",
      description: "For those who want to rule the shadows completely.",
      features: [
        "Full Noir Experience",
        "Unlimited Neon Options",
        "Shadow Fortress Security",
        "Dedicated Support",
        "Dark Matrix Analytics",
        "Custom Development",
        "API Access"
      ],
      color: "red",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Noir Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/10 to-black"></div>
        
        {/* Neon Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent animate-noir-pulse"
              style={{
                top: `${10 + i * 8}%`,
                left: `-5%`,
                right: `-5%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-noir-fade-in">
            <span className="text-white">DARK</span>
            <span className="text-red-500 animate-noir-flicker"> PRICING</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto animate-noir-fade-in-delayed">
            Choose your path into the shadows. Every plan comes with the promise of darkness and neon.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-black/60 border rounded-lg p-8 transition-all duration-500 animate-noir-fade-in ${
                plan.popular 
                  ? 'border-blue-500/50 bg-black/80' 
                  : 'border-gray-800 hover:border-red-500/50'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-black font-bold text-sm rounded-full animate-noir-pulse">
                  MOST POPULAR
                </div>
              )}
              
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${plan.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  plan.color === 'red' ? 'text-red-500' : 'text-blue-500'
                } animate-noir-flicker`}>
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {plan.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className={`w-2 h-2 rounded-full mr-3 animate-noir-pulse ${
                        plan.color === 'red' ? 'bg-red-500' : 'bg-blue-500'
                      }`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full px-6 py-4 border-2 border-${plan.color}-500 text-${plan.color}-500 hover:bg-${plan.color}-500 hover:text-black font-bold rounded-lg transition-all duration-300 animate-noir-pulse`}>
                  {plan.popular ? 'GET STARTED' : 'CHOOSE PLAN'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center animate-noir-fade-in-delayed">
          <div className="inline-flex items-center space-x-4 text-gray-500 font-mono text-sm mb-8 animate-noir-flicker">
            <span>ALL PLANS INCLUDE SHADOW PROTECTION</span>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-noir-pulse"></span>
            <span>NEON SUPPORT 24/7</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Need a custom solution? Contact us for a personalized quote that fits your dark ambitions.
          </p>
        </div>
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-noir-float ${
              i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-blue-500' : 'bg-white'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 