'use client';

import { copy } from '../copy';

export default function Pricing() {
  return (
    <section className="py-20 relative">
      {/* Pricing Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px),
              linear-gradient(0deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 120px 120px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {copy.pricing.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {copy.pricing.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative ${index === 1 ? 'md:scale-105' : ''}`}
            >
              {/* Pricing Card */}
              <div className={`relative p-8 border ${index === 1 ? 'border-green-400/50' : 'border-cyan-400/30'} bg-gradient-to-br from-slate-900/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-green-400/50 transition-all duration-500 hover:scale-105`}>
                {/* Popular Badge */}
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-full text-sm">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Cyber Frame Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-green-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-cyan-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pink-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-yellow-400 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>

                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-cyan-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Pulse Border */}
                <div className="absolute inset-0 border border-green-400/20 rounded-2xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  {/* Plan Icon */}
                  <div className="mb-6">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {index === 0 ? '🔰' : '🚀'}
                    </div>
                  </div>
                  
                  {/* Plan Name */}
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-pink-400 transition-all duration-300">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                        /{plan.period}
                      </span>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-3 text-left"
                      >
                        <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400 transition-colors duration-300">
                          <div className="text-black text-xs font-bold">✓</div>
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    index === 1 
                      ? 'bg-gradient-to-r from-green-400 to-cyan-400 text-black hover:from-cyan-400 hover:to-pink-400' 
                      : 'border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 group-hover:border-green-400 group-hover:text-green-400'
                  }`}>
                    {index === 1 ? 'Get Started Now' : 'Choose Plan'}
                  </button>
                  
                  {/* Plan Status */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                      <span className="text-xs text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                        AVAILABLE NOW
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Features Comparison */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              All Plans Include
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group p-4 border border-cyan-400/30 rounded-lg bg-slate-900/50 hover:border-green-400/50 transition-all duration-300">
                <div className="text-2xl mb-2">🔒</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  Advanced Security
                </div>
              </div>
              <div className="group p-4 border border-cyan-400/30 rounded-lg bg-slate-900/50 hover:border-green-400/50 transition-all duration-300">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  Lightning Fast
                </div>
              </div>
              <div className="group p-4 border border-cyan-400/30 rounded-lg bg-slate-900/50 hover:border-green-400/50 transition-all duration-300">
                <div className="text-2xl mb-2">🌐</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  Global Network
                </div>
              </div>
              <div className="group p-4 border border-cyan-400/30 rounded-lg bg-slate-900/50 hover:border-green-400/50 transition-all duration-300">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}