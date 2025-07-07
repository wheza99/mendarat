import React, { useState } from 'react';

export default function NebulaShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: "NGC-7635",
      name: "Bubble Nebula",
      type: "Emission Nebula",
      distance: "7,100 ly",
      description: "A stellar wind bubble created by a massive star, demonstrating the power of minimal design in cosmic proportions.",
      image: "◯",
      stats: {
        diameter: "7 ly",
        temperature: "11,000 K",
        age: "4 million years"
      },
      colors: ["from-blue-500", "to-cyan-400"]
    },
    {
      id: "M-42",
      name: "Orion Nebula",
      type: "Star-forming Region",
      distance: "1,344 ly",
      description: "A stellar nursery where new stars are born, showcasing the beauty of creation through simplicity.",
      image: "◐",
      stats: {
        diameter: "24 ly",
        temperature: "10,000 K",
        age: "1 million years"
      },
      colors: ["from-purple-500", "to-pink-400"]
    },
    {
      id: "NGC-6302",
      name: "Bug Nebula",
      type: "Planetary Nebula",
      distance: "3,400 ly",
      description: "The final breath of a dying star, transformed into an elegant cosmic sculpture.",
      image: "◑",
      stats: {
        diameter: "5 ly",
        temperature: "36,000 K",
        age: "2,000 years"
      },
      colors: ["from-indigo-500", "to-purple-400"]
    },
    {
      id: "NGC-2392",
      name: "Eskimo Nebula",
      type: "Planetary Nebula",
      distance: "2,870 ly",
      description: "A perfectly symmetrical display of cosmic minimalism and geometric precision.",
      image: "◒",
      stats: {
        diameter: "0.7 ly",
        temperature: "50,000 K",
        age: "10,000 years"
      },
      colors: ["from-cyan-500", "to-blue-400"]
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin text-white mb-6">
            NEBULA
            <span className="block bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              SHOWCASE
            </span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Witness the cosmic artistry where stellar winds sculpt the universe.
          </p>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 backdrop-blur-sm">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`relative px-4 py-2 transition-all duration-500 ${
                  activeProject === index
                    ? 'bg-white/10 border border-white/20 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span className="text-sm uppercase tracking-widest">
                  {project.id}
                </span>
                {activeProject === index && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Project Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 bg-white/5 border border-white/10 backdrop-blur-sm">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].colors[0]} ${projects[activeProject].colors[1]} opacity-5`}></div>
            
            <div className="relative z-10">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-light text-white mb-2">
                    {projects[activeProject].name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-400 uppercase tracking-widest">
                      {projects[activeProject].type}
                    </span>
                    <div className="w-px h-4 bg-white/20"></div>
                    <span className="text-sm text-slate-400">
                      {projects[activeProject].distance}
                    </span>
                  </div>
                </div>
                
                {/* Project Visual */}
                <div className="text-8xl text-white/80 font-light">
                  {projects[activeProject].image}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                {projects[activeProject].description}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-light text-blue-400 mb-2">
                    {projects[activeProject].stats.diameter}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest">
                    Diameter
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-purple-400 mb-2">
                    {projects[activeProject].stats.temperature}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest">
                    Temperature
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-cyan-400 mb-2">
                    {projects[activeProject].stats.age}
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest">
                    Age
                  </div>
                </div>
              </div>

              {/* Project Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-6 py-3 bg-transparent border border-white/20 text-white hover:border-white/40 transition-all duration-500">
                  <span className="relative z-10 text-sm uppercase tracking-widest">
                    View Details
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${projects[activeProject].colors[0]}/20 ${projects[activeProject].colors[1]}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </button>
                <button className="group relative px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-500">
                  <span className="relative z-10 text-sm uppercase tracking-widest">
                    Explore Region
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeProject === index
                  ? 'bg-white animate-cosmic-pulse'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 