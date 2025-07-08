import React from 'react';

export default function GlitchShowcase() {
  const showcases = [
    {
      title: "Neon Dashboard",
      description: "Real-time monitoring with holographic displays and predictive analytics",
      image: "🎛️",
      color: "pink"
    },
    {
      title: "Cyber Security",
      description: "Advanced threat detection with AI-powered response systems",
      image: "🛡️",
      color: "purple"
    },
    {
      title: "Quantum Network",
      description: "Ultra-fast data transmission with quantum encryption protocols",
      image: "🌐",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      pink: "text-pink-500 border-pink-500 shadow-pink-500/50",
      purple: "text-purple-500 border-purple-500 shadow-purple-500/50",
      cyan: "text-cyan-400 border-cyan-400 shadow-cyan-400/50"
    };
    return colors[color as keyof typeof colors] || colors.pink;
  };

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-purple-500/5 via-pink-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">GLITCH</span>
            <span className="text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]"> SHOWCASE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Witness the power of cyberpunk technology in action
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className={`group relative p-8 border-2 ${getColorClasses(showcase.color)} rounded-lg bg-black/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.9)]`}
            >
              {/* Glitch Animation */}
              <div className={`absolute inset-0 border-2 ${getColorClasses(showcase.color)} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
              
              {/* Image/Icon */}
              <div className="text-6xl mb-6 text-center relative z-10">
                {showcase.image}
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className={`text-3xl font-bold mb-4 ${getColorClasses(showcase.color).split(' ')[0]} drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]`}>
                  {showcase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {showcase.description}
                </p>
              </div>

              {/* Neon Glow Effect */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-${showcase.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]">
            <span className="relative z-10">Experience the Future</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 animate-pulse"></div>
          </button>
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg shadow-pink-500/50"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
} 