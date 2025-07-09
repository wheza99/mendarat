import React from 'react';

export default function StreetFeatures() {
  const features = [
    {
      icon: '🎌',
      title: 'Street Fashion',
      description: 'Discover the latest trends in Japanese street fashion and Harajuku style',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: '🏮',
      title: 'Neon Nights',
      description: 'Experience the vibrant nightlife and neon-lit entertainment districts',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      icon: '⛩️',
      title: 'Cultural Fusion',
      description: 'Where traditional Japanese culture meets modern urban innovation',
      color: 'from-cyan-500 to-pink-600'
    },
    {
      icon: '🎎',
      title: 'Street Art',
      description: 'Explore the dynamic world of Japanese street art and graffiti culture',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: '🗾',
      title: 'Urban Culture',
      description: 'Immerse yourself in the unique urban culture of Tokyo streets',
      color: 'from-purple-500 to-cyan-600'
    },
    {
      icon: '🎌',
      title: 'Street Food',
      description: 'Taste the authentic flavors of Japanese street food culture',
      color: 'from-cyan-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 via-purple-900/50 to-cyan-900/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Street Culture Features
          </h2>
          <p className="text-xl text-pink-200 font-mono">
            🗾 Experience the essence of Japanese urban culture 🎌
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card background with neon effect */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-pink-900/80 via-purple-900/80 to-cyan-900/80 border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105">
                
                {/* Neon glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="text-6xl mb-6 text-center animate-pulse">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-pink-100 group-hover:text-pink-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-pink-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-400/50 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 text-pink-400 text-2xl animate-bounce">
          🎌
        </div>
        <div className="absolute bottom-10 right-10 text-purple-400 text-2xl animate-pulse">
          🏮
        </div>
        <div className="absolute top-1/2 left-5 text-cyan-400 text-xl animate-spin">
          ⛩️
        </div>
        <div className="absolute top-1/3 right-5 text-pink-300 text-xl animate-bounce">
          🎎
        </div>
      </div>

      {/* Neon scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
} 