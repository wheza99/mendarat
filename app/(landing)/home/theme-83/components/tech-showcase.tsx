import React from 'react';

export default function TechShowcase() {
  const technologies = [
    {
      name: "React",
      description: "Modern UI framework",
      icon: "⚛️",
      color: "cyan"
    },
    {
      name: "Node.js",
      description: "Server-side JavaScript",
      icon: "🟢",
      color: "pink"
    },
    {
      name: "Python",
      description: "AI & Data Science",
      icon: "🐍",
      color: "purple"
    },
    {
      name: "Docker",
      description: "Containerization",
      icon: "🐳",
      color: "cyan"
    },
    {
      name: "AWS",
      description: "Cloud Infrastructure",
      icon: "☁️",
      color: "pink"
    },
    {
      name: "MongoDB",
      description: "NoSQL Database",
      icon: "🍃",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 border border-purple-400 rounded-sm bg-black/50 backdrop-blur-sm mb-6">
          <span className="text-purple-400 font-mono text-sm tracking-wider">TECHNOLOGY</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="text-purple-400">TECH</span>
          <span className="text-cyan-400"> STACK</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Built with cutting-edge technologies for maximum performance
        </p>
      </div>

      {/* Technology Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative group p-6 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 text-center"
            >
              {/* Cyber Corner Elements */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-purple-400"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-cyan-400"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-pink-400"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-purple-400"></div>

              {/* Tech Icon */}
              <div className="text-3xl mb-4">
                {tech.icon}
              </div>

              {/* Tech Name */}
              <h3 className={`text-lg font-bold text-${tech.color}-400 mb-2`}>
                {tech.name}
              </h3>

              {/* Tech Description */}
              <p className="text-gray-400 text-sm">
                {tech.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 border border-purple-400 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { number: "99.9%", label: "UPTIME", color: "cyan" },
          { number: "50ms", label: "RESPONSE TIME", color: "pink" },
          { number: "10M+", label: "REQUESTS/DAY", color: "purple" },
          { number: "24/7", label: "MONITORING", color: "cyan" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 border border-gray-800 rounded-sm bg-black/30 backdrop-blur-sm">
            <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>
              {stat.number}
            </div>
            <div className="text-gray-400 font-mono text-sm tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Cyber Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 border border-purple-400 rounded-sm animate-cyber-pulse"></div>
      <div className="absolute top-40 right-10 w-8 h-8 border border-cyan-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border border-pink-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 right-20 w-8 h-8 border border-purple-400 rounded-sm animate-cyber-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
} 