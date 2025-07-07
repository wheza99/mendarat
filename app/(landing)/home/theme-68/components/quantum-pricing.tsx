import React from 'react';

export default function QuantumPricing() {
  const plans = [
    {
      id: 'BASIC',
      name: 'NEURAL_NODE',
      description: 'Entry-level access to the matrix with basic neural processing capabilities.',
      price: '99',
      period: '/month',
      features: [
        'Basic Neural Processing',
        '10GB Data Storage',
        'Standard Encryption',
        'Email Support',
        'Basic Analytics'
      ],
      color: 'green',
      popular: false
    },
    {
      id: 'PRO',
      name: 'CYBER_CORE',
      description: 'Advanced cybernetic systems with enhanced processing power and security.',
      price: '299',
      period: '/month',
      features: [
        'Advanced AI Processing',
        '100GB Data Storage',
        'Quantum Encryption',
        '24/7 Priority Support',
        'Advanced Analytics',
        'Neural Network Access',
        'Real-time Monitoring'
      ],
      color: 'cyan',
      popular: true
    },
    {
      id: 'ENTERPRISE',
      name: 'MATRIX_MASTER',
      description: 'Full matrix access with unlimited processing power and quantum capabilities.',
      price: '999',
      period: '/month',
      features: [
        'Unlimited Processing',
        'Unlimited Storage',
        'Military-grade Security',
        'Dedicated Support Team',
        'Custom Analytics',
        'Full Matrix Access',
        'Quantum Computing',
        'Holographic Interface',
        'Neural Direct Link'
      ],
      color: 'magenta',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-black border-2 border-blue-500 rounded-lg p-6 max-w-2xl mx-auto font-mono">
            <div className="text-blue-500 text-sm mb-2">
              <span className="text-green-500">root@matrix:~$</span> display_pricing_matrix --quantum
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 animate-matrix-neon-glow">
              QUANTUM_PRICING
            </h2>
            <p className="text-white/80 leading-relaxed">
              Choose your access level to the matrix. Each tier provides different capabilities and processing power.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative border-2 rounded-lg p-8 bg-black/80 transition-all duration-300 hover:scale-105 animate-matrix-fade-in ${
                plan.popular ? 'border-cyan-500 bg-cyan-500/5 scale-105' :
                plan.color === 'green' ? 'border-green-500 bg-green-500/5' :
                plan.color === 'magenta' ? 'border-magenta-500 bg-magenta-500/5' :
                'border-blue-500 bg-blue-500/5'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold animate-matrix-pulse">
                    MOST_POPULAR
                  </div>
                </div>
              )}

              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6 font-mono text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className={`w-3 h-3 rounded-full ${
                    plan.color === 'green' ? 'bg-green-500' :
                    plan.color === 'cyan' ? 'bg-cyan-500' :
                    plan.color === 'magenta' ? 'bg-magenta-500' :
                    'bg-blue-500'
                  }`}></div>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${
                  plan.color === 'green' ? 'bg-green-500/20 text-green-500' :
                  plan.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-500' :
                  plan.color === 'magenta' ? 'bg-magenta-500/20 text-magenta-500' :
                  'bg-blue-500/20 text-blue-500'
                }`}>
                  {plan.id}
                </div>
              </div>

              {/* Plan Details */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold font-mono mb-3 ${
                  plan.color === 'green' ? 'text-green-500' :
                  plan.color === 'cyan' ? 'text-cyan-500' :
                  plan.color === 'magenta' ? 'text-magenta-500' :
                  'text-blue-500'
                }`}>
                  {plan.name}
                </h3>
                
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className={`text-4xl font-bold font-mono ${
                    plan.color === 'green' ? 'text-green-500' :
                    plan.color === 'cyan' ? 'text-cyan-500' :
                    plan.color === 'magenta' ? 'text-magenta-500' :
                    'text-blue-500'
                  } animate-matrix-neon-glow`}>
                    ${plan.price}
                  </div>
                  <div className="text-white/60 text-sm font-mono">{plan.period}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center font-mono text-sm">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      plan.color === 'green' ? 'bg-green-500' :
                      plan.color === 'cyan' ? 'bg-cyan-500' :
                      plan.color === 'magenta' ? 'bg-magenta-500' :
                      'bg-blue-500'
                    } animate-matrix-pulse`}></div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className={`w-full py-4 border-2 font-mono font-bold rounded-lg transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'bg-cyan-500 text-black border-cyan-500 hover:bg-cyan-400'
                  : plan.color === 'green' 
                    ? 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black'
                    : plan.color === 'magenta'
                      ? 'border-magenta-500 text-magenta-500 hover:bg-magenta-500 hover:text-black'
                      : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black'
              }`}>
                {plan.popular ? 'ACTIVATE_NOW' : 'INITIALIZE_PLAN'}
              </button>

              {/* Glitch Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="mt-16 text-center">
          <div className="bg-black border-2 border-purple-500 rounded-lg p-8 max-w-2xl mx-auto font-mono">
            <div className="text-purple-500 text-sm mb-4">
              <span className="text-green-500">root@matrix:~$</span> enterprise_contact --custom
            </div>
            <h3 className="text-2xl font-bold text-purple-500 mb-4 animate-matrix-neon-glow">
              CUSTOM_MATRIX_SOLUTIONS
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Need a custom configuration? Our quantum engineers can design a bespoke matrix solution tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 border-2 border-purple-500 text-purple-500 font-bold rounded-lg hover:bg-purple-500 hover:text-black transition-all duration-300 transform hover:scale-105">
                CONTACT_ENGINEERS
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white/70 font-bold rounded-lg hover:border-white/50 hover:text-white transition-all duration-300">
                REQUEST_DEMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 