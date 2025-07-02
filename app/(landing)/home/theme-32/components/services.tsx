'use client';

import theme32Copy from '../copy';

const services = [
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description: "Machine learning, neural networks, dan deep learning untuk automasi cerdas dan prediksi akurat.",
    features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics", "Automated Decision Making"]
  },
  {
    icon: "⛓️",
    title: "Blockchain Solutions", 
    description: "Teknologi blockchain untuk keamanan data, smart contracts, dan sistem terdesentralisasi.",
    features: ["Smart Contracts", "DeFi Applications", "NFT Platforms", "Cryptocurrency Integration"]
  },
  {
    icon: "⚛️",
    title: "Quantum Computing",
    description: "Komputasi kuantum untuk pemecahan masalah kompleks dan optimasi algoritma tingkat lanjut.",
    features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Scientific Computing"]
  },
  {
    icon: "🧠", 
    title: "Neural Networks",
    description: "Jaringan saraf tiruan untuk pattern recognition, klasifikasi data, dan sistem rekomendasi.",
    features: ["Deep Learning", "Pattern Recognition", "Image Processing", "Recommendation Systems"]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(147, 51, 234, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(59, 130, 246, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-6">
            {theme32Copy.services.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            {theme32Copy.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
                        <span className="text-gray-400 font-mono text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-4 h-4 border-2 border-purple-400/30 rotate-45 animate-spin-slow" />
                <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400/20 rounded-full animate-ping" />
              </div>

              {/* Service Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-8 h-8 border border-purple-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-20 w-6 h-6 bg-blue-400/20 transform rotate-45 animate-bounce" />
    </section>
  );
} 