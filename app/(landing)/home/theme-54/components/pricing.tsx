'use client';

import { copy } from '../copy';

export default function Pricing() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Ocean Pricing Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-teal-800/30 to-cyan-700/25"></div>
        
        {/* Pricing Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="pricingWave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#22C55E" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="pricingWave2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
              <stop offset="30%" stopColor="#22C55E" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#14B8A6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 150 Q 400 100 800 150 T 1600 180 Q 1800 160 2000 180 L 2000 0 L 0 0 Z"
            fill="url(#pricingWave1)" 
            className="animate-ocean-wave"
          />
          <path 
            d="M 0 250 Q 500 200 1000 240 T 2000 260 L 2000 0 L 0 0 Z"
            fill="url(#pricingWave2)" 
            className="animate-ocean-wave"
            style={{ animationDelay: '3s' }}
          />
        </svg>
        
        {/* Floating Price Elements */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-blue-400/25 rounded-full animate-ocean-float"></div>
        <div className="absolute top-48 right-24 w-8 h-8 bg-teal-400/20 rounded-full animate-ocean-drift"></div>
        <div className="absolute bottom-32 left-28 w-5 h-5 bg-cyan-400/30 rounded-full animate-ocean-bubble"></div>
        <div className="absolute bottom-56 right-32 w-7 h-7 bg-green-400/15 rounded-full animate-ocean-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {copy.pricing.title}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {copy.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.pricing.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Pricing Card */}
              <div className={`relative bg-gradient-to-br from-blue-900/60 via-teal-800/50 to-cyan-700/60 backdrop-blur-sm border ${plan.popular ? 'border-teal-400/50' : 'border-blue-400/30'} rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:border-teal-400/50 hover:shadow-2xl hover:shadow-teal-500/25`}>
                {/* Ocean Ripple Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-2 border border-teal-400/30 rounded-2xl animate-ocean-ripple"></div>
                  <div className="absolute inset-4 border border-cyan-400/20 rounded-xl animate-ocean-ripple" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-teal-300 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-blue-200 mb-6 group-hover:text-blue-100 transition-colors duration-300">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-teal-200 group-hover:to-blue-300 transition-all duration-500">
                      {plan.price}
                    </span>
                    <span className="text-blue-300 text-lg ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center group-hover:from-cyan-400 group-hover:to-teal-400 transition-all duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <button className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-500 ${plan.popular 
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-400 hover:to-cyan-400 hover:shadow-lg hover:shadow-teal-500/30' 
                    : 'bg-gradient-to-r from-blue-800/50 to-teal-700/50 text-blue-100 border border-blue-400/30 hover:from-teal-800/50 hover:to-cyan-700/50 hover:text-white hover:border-teal-400/50'
                  } group-hover:scale-105`}>
                    Get Started
                  </button>
                </div>
                
                {/* Ocean Current Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ocean-wave"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-teal-400/40 rounded-full group-hover:animate-ocean-float"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-cyan-400/50 rounded-full group-hover:animate-ocean-drift"></div>
                
                {/* Plan Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${plan.popular 
                  ? 'bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-blue-500/10 group-hover:from-teal-500/20 group-hover:via-cyan-500/15 group-hover:to-blue-500/20'
                  : 'bg-gradient-to-br from-teal-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10'
                }`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-blue-900/40 via-teal-800/30 to-cyan-700/40 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-ocean-pulse"></div>
              <span className="text-blue-200 font-medium">30-Day Free Trial</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-blue-200 font-medium">No Setup Fees</span>
            </div>
            <div className="w-px h-6 bg-blue-400/30"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-ocean-pulse" style={{ animationDelay: '2s' }}></div>
              <span className="text-blue-200 font-medium">Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}