import React from 'react';

export default function NeonServices() {
  const services = [
    {
      title: "Cyber Security",
      description: "Advanced threat detection and prevention with AI-powered response systems",
      price: "$299",
      features: ["Real-time monitoring", "AI threat detection", "24/7 support", "Incident response"],
      color: "pink"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      price: "$599",
      features: ["Quantum algorithms", "Superior performance", "Scalable solutions", "Expert consultation"],
      color: "purple",
      popular: true
    },
    {
      title: "Neon Analytics",
      description: "Real-time data visualization with predictive insights",
      price: "$199",
      features: ["Live dashboards", "Predictive analytics", "Custom reports", "API access"],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "text-pink-500 border-pink-500 shadow-pink-500/50",
      purple: "text-purple-500 border-purple-500 shadow-purple-500/50",
      cyan: "text-cyan-400 border-cyan-400 shadow-cyan-400/50"
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-cyan-400/5 via-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">NEON</span>
            <span className="text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]"> SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our cutting-edge cyberpunk services designed for the future
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 border-2 ${getColorClasses(service.color)} rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.9)] ${service.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Glitch Effect */}
              <div className={`absolute inset-0 border-2 ${getColorClasses(service.color)} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-3xl font-bold mb-4 ${getColorClasses(service.color).split(' ')[0]}`}>
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className={`w-2 h-2 rounded-full mr-3 ${getColorClasses(service.color).split(' ')[0].replace('text-', 'bg-')}`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button className={`w-full py-3 px-6 border-2 ${getColorClasses(service.color)} text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]`}>
                  Get Started
                </button>
              </div>

              {/* Neon Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-${service.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
} 