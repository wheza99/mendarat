import React from 'react';

export default function NeonShowcase() {
  const showcaseItems = [
    {
      title: "Neon Dreams",
      description: "Where classic noir meets modern neon aesthetics",
      image: "🎭",
      color: "red"
    },
    {
      title: "Cinematic Shadows",
      description: "Dramatic lighting that tells your story",
      image: "🎬",
      color: "blue"
    },
    {
      title: "Film Noir Magic",
      description: "Every frame is a work of art",
      image: "🎨",
      color: "purple"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-3xl animate-noir-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl animate-noir-pulse" style={{animationDelay: '3s'}}></div>
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
              NEON SHOWCASE
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Witness the perfect fusion of classic film noir and contemporary neon aesthetics
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-500 hover:scale-105"
            >
              {/* Neon Border Effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                item.color === 'red' ? 'bg-gradient-to-r from-red-500/20 to-transparent' :
                item.color === 'blue' ? 'bg-gradient-to-r from-blue-500/20 to-transparent' :
                'bg-gradient-to-r from-purple-500/20 to-transparent'
              }`}></div>
              
              {/* Icon */}
              <div className="text-6xl mb-6 text-center">{item.image}</div>
              
              {/* Content */}
              <h3 className={`text-2xl font-semibold mb-4 text-center transition-colors duration-300 ${
                item.color === 'red' ? 'text-red-400 group-hover:text-red-300' :
                item.color === 'blue' ? 'text-blue-400 group-hover:text-blue-300' :
                'text-purple-400 group-hover:text-purple-300'
              }`}>
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-center leading-relaxed">
                {item.description}
              </p>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                item.color === 'red' ? 'bg-gradient-to-r from-red-500/10 to-transparent' :
                item.color === 'blue' ? 'bg-gradient-to-r from-blue-500/10 to-transparent' :
                'bg-gradient-to-r from-purple-500/10 to-transparent'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Cinematic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-400 mb-2 animate-noir-pulse">100+</div>
            <div className="text-gray-400">Cinematic Scenes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2 animate-noir-pulse" style={{animationDelay: '0.5s'}}>50+</div>
            <div className="text-gray-400">Neon Effects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2 animate-noir-pulse" style={{animationDelay: '1s'}}>25+</div>
            <div className="text-gray-400">Film Noir Elements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2 animate-noir-pulse" style={{animationDelay: '1.5s'}}>∞</div>
            <div className="text-gray-400">Creative Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
            <span className="relative z-10">Explore the Showcase</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-purple-500 animate-noir-pulse opacity-0 group-hover:opacity-20"></div>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-8 h-8 border border-red-500/30 rounded-full animate-noir-float"></div>
      <div className="absolute bottom-20 left-10 w-6 h-6 border border-blue-500/30 rounded-full animate-noir-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 right-5 w-4 h-4 border border-purple-500/30 rounded-full animate-noir-float" style={{animationDelay: '8s'}}></div>
    </section>
  );
} 