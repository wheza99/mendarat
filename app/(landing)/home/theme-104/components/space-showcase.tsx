import React from 'react';

export default function SpaceShowcase() {
  const projects = [
    {
      title: "Mars Colony",
      description: "Advanced Mars colonization project with neon infrastructure",
      image: "🪐",
      category: "Space Colony"
    },
    {
      title: "Satellite Network",
      description: "Global satellite network with cosmic communication",
      image: "🛰️",
      category: "Satellite Tech"
    },
    {
      title: "Space Station",
      description: "Orbital space station with neon life support systems",
      image: "🏗️",
      category: "Space Station"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12 font-mono tracking-wider">
          SPACE SHOWCASE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
            >
              {/* Project Card */}
              <div className="relative p-6 border-2 border-blue-400 bg-gradient-to-br from-blue-900/20 to-transparent hover:scale-105 transition-transform font-mono">
                {/* Cosmic Glow Effect */}
                <div className="absolute inset-0 bg-blue-400/10 blur-xl group-hover:bg-blue-400/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 text-center">
                    {project.image}
                  </div>
                  <h3 className="text-xl font-bold text-blue-300 mb-2 text-center">
                    {project.title}
                  </h3>
                  <p className="text-purple-200 text-sm text-center mb-4">
                    {project.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-green-400/20 border border-green-400 text-green-300 text-xs font-mono">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Cosmic Border Animation */}
                <div className="absolute inset-0 border-2 border-blue-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Space Decorative Element */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 5 }, (_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 rounded-full animate-pulse ${
                  ['bg-purple-400', 'bg-blue-400', 'bg-pink-400', 'bg-green-400', 'bg-purple-400'][i]
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