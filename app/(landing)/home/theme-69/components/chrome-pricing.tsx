import React from 'react';

export default function ChromePricing() {
  const plans = [
    {
      id: 'BASIC_80',
      name: 'RETRO_STARTER',
      description: 'Perfect for beginners entering the synthwave dimension',
      price: '80',
      period: '/month',
      features: [
        'Basic Neon Effects',
        '8-bit Audio Support',
        'Retro UI Components',
        'Standard Support',
        '1GB Storage',
        'Community Access'
      ],
      color: 'cyan',
      popular: false
    },
    {
      id: 'PRO_1980',
      name: 'NEON_PROFESSIONAL',
      description: 'Advanced features for serious retro enthusiasts',
      price: '1980',
      period: '/month',
      features: [
        'Advanced Neon Effects',
        'Synthwave Audio Suite',
        'Premium UI Library',
        'Priority Support',
        '100GB Storage',
        'Exclusive Content',
        'Custom Themes',
        'API Access'
      ],
      color: 'pink',
      popular: true
    },
    {
      id: 'ULTRA_2049',
      name: 'CYBER_ULTIMATE',
      description: 'Ultimate package for retro-futuristic professionals',
      price: '2049',
      period: '/month',
      features: [
        'Ultra Neon Effects',
        'Full Synthwave Studio',
        'Complete UI Framework',
        'VIP Support',
        'Unlimited Storage',
        'Beta Access',
        'Custom Development',
        'White-label Solutions',
        'Team Collaboration',
        'Advanced Analytics'
      ],
      color: 'purple',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black/80 border-2 border-orange-500 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-orange-500 text-sm font-mono mb-2 animate-synthwave-glow">
              {'> LOADING PRICING_MATRIX.EXE'}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-synthwave-chrome-text">
              CHROME PRICING
            </h2>
            <p className="text-white/80 leading-relaxed font-mono">
              Choose your retro adventure package. All plans include our signature synthwave experience and vintage charm.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative border-2 rounded-lg p-8 bg-black/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-synthwave-fade-in ${
                plan.popular ? 'scale-110 border-pink-500 bg-pink-500/10' :
                plan.color === 'cyan' ? 'border-cyan-400 bg-cyan-400/10' :
                plan.color === 'purple' ? 'border-purple-500 bg-purple-500/10' :
                'border-pink-500 bg-pink-500/10'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-mono font-bold animate-synthwave-pulse">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="flex items-center justify-between mb-6 font-mono text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-synthwave-pulse"></div>
                  <span className="text-white/60">ACTIVE</span>
                </div>
                <div className={`text-xs px-3 py-1 rounded bg-black/50 ${
                  plan.color === 'cyan' ? 'text-cyan-400' :
                  plan.color === 'pink' ? 'text-pink-500' :
                  'text-purple-500'
                }`}>
                  {plan.id}
                </div>
              </div>

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold font-mono mb-3 ${
                plan.color === 'cyan' ? 'text-cyan-400' :
                plan.color === 'pink' ? 'text-pink-500' :
                'text-purple-500'
              } animate-synthwave-glow`}>
                {plan.name}
              </h3>

              {/* Plan Description */}
              <p className="text-white/70 mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Pricing Display */}
              <div className="text-center mb-8">
                <div className="bg-black/60 border-2 border-white/20 rounded-lg p-6">
                  <div className="text-white/60 text-sm font-mono mb-2">MONTHLY RATE:</div>
                  <div className={`text-4xl font-bold font-mono mb-2 ${
                    plan.color === 'cyan' ? 'text-cyan-400' :
                    plan.color === 'pink' ? 'text-pink-500' :
                    'text-purple-500'
                  } animate-synthwave-glow`}>
                    ${plan.price}
                  </div>
                  <div className="text-white/60 text-sm font-mono">{plan.period}</div>
                  
                  {/* Retro Price Conversion */}
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-xs text-white/60 font-mono mb-1">RETRO_FORMAT:</div>
                    <div className={`text-lg font-mono font-bold ${
                      plan.color === 'cyan' ? 'text-cyan-400' :
                      plan.color === 'pink' ? 'text-pink-500' :
                      'text-purple-500'
                    }`}>
                      0x{parseInt(plan.price).toString(16).toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="text-white/60 text-sm font-mono mb-4">FEATURES_INCLUDED:</div>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center font-mono text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 animate-synthwave-pulse ${
                      plan.color === 'cyan' ? 'bg-cyan-400' :
                      plan.color === 'pink' ? 'bg-pink-500' :
                      'bg-purple-500'
                    }`}></div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className={`w-full py-4 border-2 font-mono font-bold rounded-lg transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent hover:from-pink-400 hover:to-purple-400'
                  : plan.color === 'cyan'
                  ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  : plan.color === 'purple'
                  ? 'border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black'
                  : 'border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black'
              }`}>
                {plan.popular ? 'UPGRADE NOW' : 'SELECT PLAN'}
              </button>

              {/* Retro Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Neon Glow Effect */}
              {plan.popular && (
                <div className="absolute inset-0 border-2 border-pink-500 rounded-lg animate-synthwave-neon-pulse pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 text-center">
          <div className="bg-black/80 border-2 border-cyan-400 rounded-lg p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="text-cyan-400 text-sm font-mono mb-4 animate-synthwave-glow">
              {'> ENTERPRISE_SOLUTIONS.EXE'}
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-synthwave-chrome-text">
              ENTERPRISE RETRO SOLUTIONS
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed font-mono max-w-2xl mx-auto">
              Need custom synthwave solutions for your organization? Our enterprise packages include dedicated support, custom development, and unlimited retro power.
            </p>
            
            {/* Enterprise Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-black/40 border border-cyan-400/50 rounded-lg p-6">
                <div className="text-cyan-400 text-lg font-mono font-bold mb-2">CUSTOM DEVELOPMENT</div>
                <div className="text-white/70 text-sm">Tailored retro solutions built for your specific needs</div>
              </div>
              <div className="bg-black/40 border border-pink-500/50 rounded-lg p-6">
                <div className="text-pink-500 text-lg font-mono font-bold mb-2">DEDICATED SUPPORT</div>
                <div className="text-white/70 text-sm">24/7 premium support from our retro specialists</div>
              </div>
              <div className="bg-black/40 border border-purple-500/50 rounded-lg p-6">
                <div className="text-purple-500 text-lg font-mono font-bold mb-2">UNLIMITED SCALE</div>
                <div className="text-white/70 text-sm">No limits on users, storage, or synthwave power</div>
              </div>
            </div>

            {/* Enterprise CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-mono font-bold rounded-lg hover:from-cyan-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105">
                CONTACT SALES
              </button>
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-500 font-mono font-bold rounded-lg hover:bg-purple-500 hover:text-black transition-all duration-300">
                SCHEDULE DEMO
              </button>
            </div>
          </div>
        </div>

        {/* Retro Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-black/60 border-2 border-green-500 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="text-green-500 text-sm font-mono mb-2">
              {'> RETRO_GUARANTEE.EXE'}
            </div>
            <div className="text-white font-mono">
              <span className="text-green-500">30-DAY</span> money-back guarantee. If you're not completely satisfied with your retro experience, we'll refund your investment.
            </div>
            <div className="text-green-500 text-xs mt-2 font-mono">
              {'[SATISFACTION_GUARANTEED]'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 