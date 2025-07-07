import React from 'react';

export default function StellarFeatures() {
  const features = [
    {
      icon: "◐",
      title: "Infinite Exploration",
      description: "Navigate through endless cosmic landscapes with precision and grace.",
      metric: "∞",
      unit: "Possibilities"
    },
    {
      icon: "◑",
      title: "Stellar Precision",
      description: "Every element positioned with astronomical accuracy and purpose.",
      metric: "99.9%",
      unit: "Accuracy"
    },
    {
      icon: "◒",
      title: "Cosmic Harmony",
      description: "Perfect balance between form and function across all dimensions.",
      metric: "360°",
      unit: "Coverage"
    },
    {
      icon: "◓",
      title: "Void Simplicity",
      description: "Embracing the beauty of negative space and minimalist design.",
      metric: "0.1%",
      unit: "Complexity"
    },
    {
      icon: "●",
      title: "Galactic Scale",
      description: "Designed to adapt and expand across infinite screen sizes.",
      metric: "∞",
      unit: "Scalability"
    },
    {
      icon: "○",
      title: "Light Speed",
      description: "Optimized performance that travels at the speed of light.",
      metric: "299,792,458",
      unit: "m/s"
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-white mb-6">
            STELLAR
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FEATURES
            </span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Discover the fundamental forces that power our cosmic design philosophy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl text-white/80 mb-6 font-light">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 font-light leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Metric */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light text-blue-400">
                    {feature.metric}
                  </span>
                  <span className="text-sm text-slate-400 uppercase tracking-widest">
                    {feature.unit}
                  </span>
                </div>
              </div>

              {/* Hover Effect Lines */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Cosmic Separator */}
        <div className="flex items-center justify-center mt-20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-cosmic-pulse"></div>
            <div className="w-4 h-4 border border-white/20 rounded-full animate-cosmic-orbit"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full animate-cosmic-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 