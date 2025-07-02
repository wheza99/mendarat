"use client";

import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: "🌱",
      title: "Digital Seed Planting",
      description: "We plant the initial seeds of your digital presence with sustainable, growth-focused strategies.",
      features: [
        "Organic SEO Foundation",
        "Sustainable Content Strategy",
        "Growth-Oriented Architecture",
        "Natural User Experience"
      ],
      color: "from-green-400 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100",
      pattern: "leaf"
    },
    {
      icon: "🌿",
      title: "Ecosystem Cultivation",
      description: "Nurture your digital ecosystem with interconnected solutions that grow together harmoniously.",
      features: [
        "Integrated Platform Development",
        "Cross-Channel Synergy",
        "Sustainable Scalability",
        "Organic User Engagement"
      ],
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100",
      pattern: "vine"
    },
    {
      icon: "🌳",
      title: "Growth Optimization",
      description: "Optimize your digital growth with data-driven insights and natural expansion strategies.",
      features: [
        "Performance Analytics",
        "Growth Acceleration",
        "Resource Optimization",
        "Sustainable Scaling"
      ],
      color: "from-teal-400 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-100",
      pattern: "tree"
    },
    {
      icon: "🌸",
      title: "Flourishing Support",
      description: "Continuous support and maintenance to ensure your digital ecosystem flourishes year-round.",
      features: [
        "24/7 Ecosystem Monitoring",
        "Proactive Maintenance",
        "Growth Consultation",
        "Seasonal Optimization"
      ],
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-50 to-blue-100",
      pattern: "flower"
    }
  ];

  const getPatternSVG = (pattern: string) => {
    switch (pattern) {
      case 'leaf':
        return (
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <path d="M20,80 Q50,20 80,80 Q50,60 20,80" fill="currentColor" />
            <path d="M30,70 Q50,40 70,70" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        );
      case 'vine':
        return (
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <path d="M10,50 Q30,20 50,50 Q70,80 90,50" stroke="currentColor" strokeWidth="3" fill="none" />
            <circle cx="30" cy="35" r="3" fill="currentColor" />
            <circle cx="70" cy="65" r="3" fill="currentColor" />
          </svg>
        );
      case 'tree':
        return (
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <rect x="45" y="60" width="10" height="30" fill="currentColor" />
            <circle cx="50" cy="40" r="20" fill="currentColor" opacity="0.7" />
            <circle cx="35" cy="50" r="15" fill="currentColor" opacity="0.5" />
            <circle cx="65" cy="50" r="15" fill="currentColor" opacity="0.5" />
          </svg>
        );
      case 'flower':
        return (
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="8" fill="currentColor" />
            <ellipse cx="50" cy="35" rx="8" ry="15" fill="currentColor" opacity="0.7" />
            <ellipse cx="65" cy="50" rx="15" ry="8" fill="currentColor" opacity="0.7" />
            <ellipse cx="50" cy="65" rx="8" ry="15" fill="currentColor" opacity="0.7" />
            <ellipse cx="35" cy="50" rx="15" ry="8" fill="currentColor" opacity="0.7" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full mb-6">
            <span className="text-3xl">🌿</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Our Organic Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like nature's lifecycle, our services work in harmony to create a thriving digital ecosystem
            that grows sustainably over time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 text-green-600 ${hoveredIndex === index ? 'opacity-20' : 'opacity-10'} transition-opacity duration-300`}>
                {getPatternSVG(service.pattern)}
              </div>

              {/* Floating Organic Elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/30 rounded-full blur-sm"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`text-5xl mb-6 transform transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-12' : ''}`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-600 transition-all duration-300"
                      style={{
                        transitionDelay: hoveredIndex === index ? `${featureIndex * 100}ms` : '0ms'
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${service.color} transform transition-all duration-300 ${hoveredIndex === index ? 'scale-150' : ''}`}></div>
                      <span className={`transition-all duration-300 ${hoveredIndex === index ? 'text-gray-800 font-medium' : ''}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Growth Indicator */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} animate-pulse`}></div>
                    <span className="text-sm text-gray-500">Growing</span>
                  </div>
                  <div className={`text-2xl transition-all duration-300 ${hoveredIndex === index ? 'animate-bounce' : ''}`}>
                    →
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Plant Your Digital Seeds? 🌱
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's cultivate a sustainable digital ecosystem that grows with your business goals 
              and flourishes in the competitive landscape.
            </p>
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span>Start Your Journey</span>
              <div className="ml-2 text-xl group-hover:animate-bounce">🌿</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 