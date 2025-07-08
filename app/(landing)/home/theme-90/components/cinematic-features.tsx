import React from 'react';

export default function CinematicFeatures() {
  const features = [
    {
      icon: "🎬",
      title: "Cinematic Experience",
      description: "Immerse yourself in a world where every interaction feels like a scene from a classic film noir masterpiece.",
      color: "red"
    },
    {
      icon: "💡",
      title: "Dramatic Lighting",
      description: "Advanced lighting systems that create the perfect atmosphere for your story to unfold.",
      color: "blue"
    },
    {
      icon: "🎭",
      title: "Character Development",
      description: "Build compelling narratives with tools designed for creating unforgettable characters and plots.",
      color: "purple"
    },
    {
      icon: "🎨",
      title: "Visual Storytelling",
      description: "Craft stunning visuals that speak volumes without saying a word.",
      color: "cyan"
    },
    {
      icon: "🎪",
      title: "Immersive Atmosphere",
      description: "Create environments that transport your audience to another world entirely.",
      color: "red"
    },
    {
      icon: "🌟",
      title: "Neon Aesthetics",
      description: "Modern neon elements that bring classic noir into the contemporary era.",
      color: "blue"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-500/5 blur-3xl animate-noir-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 blur-3xl animate-noir-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Film Grain */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:2px_2px] animate-noir-grain"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              CINEMATIC FEATURES
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the tools and techniques that make every moment a masterpiece
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 hover:scale-105"
            >
              {/* Neon Border Effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                feature.color === 'red' ? 'bg-gradient-to-r from-red-500/20 to-transparent' :
                feature.color === 'blue' ? 'bg-gradient-to-r from-blue-500/20 to-transparent' :
                feature.color === 'purple' ? 'bg-gradient-to-r from-purple-500/20 to-transparent' :
                'bg-gradient-to-r from-cyan-500/20 to-transparent'
              }`}></div>
              
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              
              {/* Content */}
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                feature.color === 'red' ? 'text-red-400 group-hover:text-red-300' :
                feature.color === 'blue' ? 'text-blue-400 group-hover:text-blue-300' :
                feature.color === 'purple' ? 'text-purple-400 group-hover:text-purple-300' :
                'text-cyan-400 group-hover:text-cyan-300'
              }`}>
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                feature.color === 'red' ? 'bg-gradient-to-r from-red-500/10 to-transparent' :
                feature.color === 'blue' ? 'bg-gradient-to-r from-blue-500/10 to-transparent' :
                feature.color === 'purple' ? 'bg-gradient-to-r from-purple-500/10 to-transparent' :
                'bg-gradient-to-r from-cyan-500/10 to-transparent'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Cinematic Accent Lines */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full animate-noir-pulse"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full animate-noir-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full animate-noir-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 border border-red-500/30 rounded-full animate-noir-float"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 border border-blue-500/30 rounded-full animate-noir-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 border border-purple-500/30 rounded-full animate-noir-float" style={{animationDelay: '6s'}}></div>
    </section>
  );
} 