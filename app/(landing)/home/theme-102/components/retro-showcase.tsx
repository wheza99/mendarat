import React from 'react';

export default function RetroShowcase() {
  const projects = [
    {
      title: "Neon City",
      description: "A retro-futuristic cityscape with neon lights",
      image: "🏙️",
      category: "Digital Art"
    },
    {
      title: "Synthwave Album",
      description: "Retro-futuristic music with neon aesthetics",
      image: "🎵",
      category: "Music"
    },
    {
      title: "Retro Game",
      description: "80s-inspired arcade game with neon graphics",
      image: "🎮",
      category: "Gaming"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-12 font-mono tracking-wider">
          RETRO SHOWCASE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
            >
              {/* Project Card */}
              <div className="relative p-6 border-2 border-cyan-400 bg-gradient-to-br from-cyan-900/20 to-transparent hover:scale-105 transition-transform font-mono">
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 bg-cyan-400/10 blur-xl group-hover:bg-cyan-400/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 text-center">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-pink-200 text-sm text-center mb-4">
                    {project.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-orange-400/20 border border-orange-400 text-orange-300 text-xs font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Neon Border Animation */}
                <div className="absolute inset-0 border-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Synthwave Decorative Element */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 5 }, (_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 rounded-full animate-pulse ${
                  ['bg-pink-400', 'bg-purple-400', 'bg-cyan-400', 'bg-orange-400', 'bg-pink-400'][i]
                }`}
                style={{animationDelay: `${i * 0.2}s`}}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 