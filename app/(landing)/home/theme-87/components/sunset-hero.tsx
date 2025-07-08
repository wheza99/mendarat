import React from 'react';

export default function SunsetHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Sunset Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 via-pink-500/20 to-purple-600/20"></div>
        
        {/* Floating Neon Orbs */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-sunset-float"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${['orange', 'pink', 'purple'][i % 3]}-400/30 to-${['orange', 'pink', 'purple'][i % 3]}-600/30 backdrop-blur-sm border border-${['orange', 'pink', 'purple'][i % 3]}-400/50 animate-sunset-pulse`}></div>
          </div>
        ))}

        {/* Sunset Rays */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-1 h-32 bg-gradient-to-t from-orange-400/40 to-transparent animate-sunset-ray rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text-sunset animate-sunset-pulse">
            NEON
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white neon-text-pink">
            SUNSET
          </h2>
          <p className="text-xl md:text-2xl text-orange-200 font-light max-w-3xl mx-auto leading-relaxed">
            Where technology meets the warmth of sunset, creating an experience that's both 
            <span className="neon-text-orange"> futuristic </span> and 
            <span className="neon-text-pink"> inviting</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="btn-sunset text-lg px-8 py-4 rounded-xl font-semibold hover-sunset-scale">
            Get Started
          </button>
          <button className="sunset-glass text-lg px-8 py-4 rounded-xl font-semibold text-white border border-orange-400/50 hover-sunset-glow transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "🌅",
              title: "Sunset Aesthetics",
              description: "Warm, inviting colors that create a welcoming atmosphere"
            },
            {
              icon: "⚡",
              title: "Neon Technology",
              description: "Cutting-edge features with a futuristic neon glow"
            },
            {
              icon: "🎨",
              title: "Unique Design",
              description: "A perfect blend of natural warmth and digital innovation"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="sunset-card p-6 text-center hover-sunset-scale"
            >
              <div className="text-4xl mb-4 animate-sunset-pulse">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 neon-text-orange">
                {feature.title}
              </h3>
              <p className="text-orange-200 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-sunset-float">
          <div className="w-6 h-10 border-2 border-orange-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400/70 rounded-full mt-2 animate-sunset-pulse"></div>
          </div>
          <p className="text-orange-300 text-sm mt-2 font-light">Scroll to explore</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-orange-400/30 rounded-full animate-sunset-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-pink-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-purple-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 