'use client';

export default function NatureServices() {
  const ecoServices = [
    {
      name: "Seedling",
      icon: "🌱",
      price: "Free",
      period: "Forever",
      description: "Perfect for exploring biomimetic concepts",
      features: [
        "Basic Nature Patterns",
        "Community Access",
        "3 Bio-Templates",
        "Email Support",
        "Learning Resources"
      ],
      color: "emerald",
      popular: false
    },
    {
      name: "Growing Tree",
      icon: "🌳",
      price: "$297",
      period: "per season",
      description: "Ideal for sustainable design projects",
      features: [
        "Advanced Bio-Patterns",
        "Priority Support",
        "15 Bio-Templates",
        "Research Database",
        "API Access",
        "Custom Organisms"
      ],
      color: "teal",
      popular: true
    },
    {
      name: "Forest Ecosystem",
      icon: "🌲",
      price: "$597",
      period: "per season", 
      description: "Complete biomimetic design system",
      features: [
        "Unlimited Patterns",
        "24/7 Expert Support",
        "50+ Bio-Templates",
        "Full Research Library",
        "Advanced API",
        "Custom Development",
        "White-label Solution"
      ],
      color: "green",
      popular: false
    },
    {
      name: "Nature's Wisdom",
      icon: "🌍",
      price: "Custom",
      period: "enterprise",
      description: "Enterprise biomimetic solutions",
      features: [
        "Everything Included",
        "Dedicated Scientists",
        "Custom Research",
        "On-site Training",
        "Global Support",
        "IP Licensing",
        "Innovation Partnership"
      ],
      color: "cyan",
      popular: false
    }
  ];

  return (
    <section className="py-32 px-6 relative">
      {/* Nature Background */}
      <div className="absolute inset-0">
        {/* Ecosystem Gradient */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 70%)
              `
            }}
          />
        </div>
        
        {/* Floating Nature Elements */}
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `organic-float ${12 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`
            }}
          >
            <div className={`w-6 h-6 rounded-full opacity-30 ${
              i % 4 === 0 ? 'bg-emerald-300' : 
              i % 4 === 1 ? 'bg-teal-300' : 
              i % 4 === 2 ? 'bg-green-300' : 'bg-cyan-300'
            } animate-pulse`} 
            style={{ animationDelay: `${i * 0.2}s` }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600">
            <span className="block">NATURE'S</span>
            <span className="block -mt-2">SERVICES</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-16 h-2 bg-gradient-to-r from-teal-400 to-green-400 rounded-full animate-bounce" />
            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose your path through nature's innovation ecosystem
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {ecoServices.map((service, index) => (
            <div
              key={service.name}
              className={`relative group ${service.popular ? 'lg:-mt-8 lg:mb-8' : ''}`}
              style={{
                animation: `organic-fade-in 0.8s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    🌟 Most Popular
                  </div>
                </div>
              )}
              
              <div className={`h-full p-8 border-2 bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                service.color === 'emerald' ? 'border-emerald-200 hover:border-emerald-300' :
                service.color === 'teal' ? 'border-teal-200 hover:border-teal-300' :
                service.color === 'green' ? 'border-green-200 hover:border-green-300' :
                'border-cyan-200 hover:border-cyan-300'
              } ${service.popular ? 'ring-4 ring-teal-200' : ''}`}>
                
                {/* Organic Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                  <div 
                    className="w-full h-full"
                    style={{
                      background: `radial-gradient(circle, currentColor 0%, transparent 70%)`
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  {/* Service Header */}
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{service.name}</h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className={`text-4xl font-bold mb-1 ${
                      service.color === 'emerald' ? 'text-emerald-600' :
                      service.color === 'teal' ? 'text-teal-600' :
                      service.color === 'green' ? 'text-green-600' :
                      'text-cyan-600'
                    }`}>
                      {service.price}
                    </div>
                    <div className="text-slate-500 text-sm">{service.period}</div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          service.color === 'emerald' ? 'bg-emerald-400' :
                          service.color === 'teal' ? 'bg-teal-400' :
                          service.color === 'green' ? 'bg-green-400' :
                          'bg-cyan-400'
                        }`} />
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                      : service.color === 'emerald' 
                        ? 'border-2 border-emerald-400 text-emerald-600 hover:bg-emerald-50'
                        : service.color === 'teal'
                          ? 'border-2 border-teal-400 text-teal-600 hover:bg-teal-50'
                          : service.color === 'green'
                            ? 'border-2 border-green-400 text-green-600 hover:bg-green-50'
                            : 'border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50'
                  }`}>
                    {service.price === "Free" ? "Start Growing" :
                     service.price === "Custom" ? "Contact Us" : "Choose Plan"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Benefits */}
        <div className="mt-20">
          <div className="border-4 border-emerald-200 bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-emerald-600 mb-4">🌍 Ecosystem Benefits</h3>
              <p className="text-slate-600">All plans include access to nature's 3.8 billion years of R&D</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center border-2 border-emerald-200">
                  <span className="text-2xl">🔬</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Research Access</h4>
                <p className="text-slate-600 text-sm">Latest biomimetic discoveries</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-green-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Sustainability</h4>
                <p className="text-slate-600 text-sm">100% eco-friendly solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-100 to-cyan-100 rounded-full flex items-center justify-center border-2 border-green-200">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Innovation</h4>
                <p className="text-slate-600 text-sm">Cutting-edge bio-inspired tech</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full flex items-center justify-center border-2 border-cyan-200">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Community</h4>
                <p className="text-slate-600 text-sm">Global network of innovators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 