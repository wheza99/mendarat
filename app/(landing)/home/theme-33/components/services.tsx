'use client';

import theme33Copy from '../copy';

const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning user interfaces that provide exceptional user experiences across all devices.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  },
  {
    icon: "💻",
    title: "Web Development",
    description: "Building responsive, fast, and scalable websites using modern technologies and best practices.",
    features: ["Frontend Development", "Backend Systems", "API Integration", "Performance Optimization"]
  },
  {
    icon: "🚀",
    title: "Brand Identity",
    description: "Creating memorable brand identities that resonate with your audience and stand out in the market.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"]
  },
  {
    icon: "📱",
    title: "Digital Strategy",
    description: "Developing comprehensive digital strategies to help your business grow and succeed online.",
    features: ["Market Analysis", "Digital Marketing", "Content Strategy", "Growth Planning"]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-100 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Background Glass Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full" />
        <div className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-r from-pink-200/20 to-purple-200/20 backdrop-blur-sm rounded-2xl rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 p-8 inline-block shadow-lg">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              {theme33Copy.services.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              {theme33Copy.services.subtitle}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glass Card */}
              <div className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-3xl p-8 hover:bg-white/35 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="bg-white/40 backdrop-blur-md border border-white/50 rounded-xl px-3 py-2 text-center"
                      >
                        <span className="text-gray-700 font-medium text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400/60 rounded-full animate-ping" />
              </div>

              {/* Service Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 p-6 inline-block shadow-lg">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="relative z-10">Explore All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 