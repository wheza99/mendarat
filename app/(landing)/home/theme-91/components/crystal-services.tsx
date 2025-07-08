import React from 'react';

export default function CrystalServices() {
  const services = [
    {
      title: "Aurora Design",
      description: "Complete aurora borealis effect integration with custom animations and interactive elements.",
      price: "$2,500",
      features: ["Custom Aurora Animations", "Interactive Light Effects", "Color Transitions", "Responsive Design"],
      gradient: "from-purple-400 to-pink-400",
      icon: "🌌"
    },
    {
      title: "Glass Morphism Pro",
      description: "Professional glassmorphism implementation with advanced blur effects and transparency.",
      price: "$3,500",
      features: ["Advanced Blur Effects", "Multi-layer Glass", "Responsive Transparency", "Cross-browser Support"],
      gradient: "from-cyan-400 to-teal-400",
      icon: "💠"
    },
    {
      title: "Prismatic Suite",
      description: "Complete prismatic design system with dynamic color shifting and crystal effects.",
      price: "$4,500",
      features: ["Dynamic Color Shifting", "Crystal Effects", "Prismatic Animations", "Light Refraction"],
      gradient: "from-pink-400 to-purple-400",
      icon: "🔆"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Crystal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-conic from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-conic from-cyan-500/10 via-teal-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              CRYSTAL SERVICES
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Professional aurora and glassmorphism design services for your next project
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Aurora Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Service Header */}
              <div className="text-center mb-8">
                <div className="text-5xl mb-4 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <span className="relative z-10">{service.icon}</span>
                </div>
                <h3 className={`text-2xl font-semibold mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all duration-300`}>
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>
                <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.price}
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${service.gradient}`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.gradient} bg-opacity-20 backdrop-blur-xl border border-white/30 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                Get Started
              </button>

              {/* Glass Reflection */}
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Aurora Accent Lines */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating Crystal Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg animate-bounce transform rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-10 h-10 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl animate-bounce transform -rotate-12"></div>
      <div className="absolute top-1/2 left-5 w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full animate-bounce"></div>
    </section>
  );
} 