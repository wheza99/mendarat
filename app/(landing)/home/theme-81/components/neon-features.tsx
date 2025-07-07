import React from 'react';

export default function NeonFeatures() {
  const featuresData = {
    title: {
      main: "DECO FEATURES",
      description: "Discover the perfect blend of Art Deco elegance and modern neon gradient innovation"
    },
    features: [
      {
        title: "DECO GEOMETRY",
        description: "Classic Art Deco geometric patterns reimagined with neon gradients and modern aesthetics",
        icon: "◆",
        color: "purple"
      },
      {
        title: "NEON GRADIENTS", 
        description: "Smooth color transitions from purple to pink to orange creating stunning visual effects",
        icon: "◇",
        color: "pink"
      },
      {
        title: "FUTURISTIC TYPOGRAPHY",
        description: "Bold, elegant typography that bridges the gap between 1920s elegance and 2024 innovation",
        icon: "◆",
        color: "orange"
      },
      {
        title: "GLASSMORPHIC EFFECTS",
        description: "Translucent elements with backdrop blur creating depth and modern sophistication",
        icon: "◇",
        color: "purple"
      },
      {
        title: "ANIMATED ELEMENTS",
        description: "Smooth animations and transitions that bring the Art Deco aesthetic to life",
        icon: "◆",
        color: "pink"
      },
      {
        title: "RESPONSIVE DESIGN",
        description: "Perfectly adapted layouts that maintain elegance across all device sizes",
        icon: "◇",
        color: "orange"
      }
    ],
    stats: [
      { number: '50+', label: 'PROJECTS', color: 'purple' },
      { number: '100%', label: 'SATISFACTION', color: 'pink' },
      { number: '24/7', label: 'SUPPORT', color: 'orange' },
      { number: '∞', label: 'POSSIBILITIES', color: 'purple' }
    ]
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deco Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-transparent to-pink-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#a855f7_0%,transparent_50%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-800/90 to-pink-800/90 backdrop-blur-xl border border-purple-400 rounded-lg px-6 py-3 shadow-2xl mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-deco-pulse"></div>
            <span className="text-purple-300 font-light text-sm tracking-wider">FEATURES</span>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              {featuresData.title.main}
            </span>
          </h2>
          
          <p className="text-xl text-purple-300 max-w-3xl mx-auto font-light">
            {featuresData.title.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className={`bg-gradient-to-br from-${feature.color}-800/90 to-${feature.color}-900/90 backdrop-blur-xl border border-${feature.color}-400 rounded-lg p-8 shadow-2xl hover:shadow-${feature.color}-500/25 transition-all duration-500 transform hover:scale-105`}>
                {/* Deco Icon */}
                <div className={`text-4xl text-${feature.color}-300 mb-6 animate-deco-pulse`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {feature.icon}
                </div>
                
                {/* Feature Title */}
                <h3 className={`text-2xl font-bold text-${feature.color}-200 mb-4`}>
                  {feature.title}
                </h3>
                
                {/* Feature Description */}
                <p className={`text-${feature.color}-300 font-light leading-relaxed`}>
                  {feature.description}
                </p>
                
                {/* Deco Corner Elements */}
                <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-${feature.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 0.5}s` }}></div>
                <div className={`absolute -top-2 -right-2 w-4 h-4 border-2 border-${feature.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 1}s` }}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-${feature.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 1.5}s` }}></div>
                <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-2 border-${feature.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.1 + 2}s` }}></div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Deco Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {featuresData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold text-${stat.color}-300 mb-2 animate-deco-pulse`} style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.number}
              </div>
              <div className={`text-sm text-${stat.color}-400 font-light tracking-wider`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deco Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-deco-float"
            style={{
              left: `${15 + (i % 3) * 25}%`,
              top: `${30 + Math.floor(i / 3) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            <div className={`w-6 h-6 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-lg animate-deco-spin`}></div>
          </div>
        ))}
      </div>

      {/* Deco Rays */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-1 h-16 bg-gradient-to-t from-purple-400 to-transparent animate-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Deco Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-deco-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#f97316'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 