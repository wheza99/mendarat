import React from 'react';

export default function CyberFeatures() {
  const features = [
    {
      icon: "🔍",
      title: "SHADOW DETECTION",
      description: "Advanced algorithms that see through the darkness, revealing hidden patterns in the digital underworld.",
      color: "red"
    },
    {
      icon: "⚡",
      title: "NEON ACCELERATION",
      description: "Lightning-fast performance that cuts through the night like a neon blade through shadows.",
      color: "blue"
    },
    {
      icon: "🛡️",
      title: "DARK FORTRESS",
      description: "Impenetrable security protocols that guard your secrets in the depths of the digital abyss.",
      color: "red"
    },
    {
      icon: "🌊",
      title: "LIQUID INTERFACE",
      description: "Fluid, responsive design that flows like rain on neon-lit streets.",
      color: "blue"
    },
    {
      icon: "🎭",
      title: "MASQUERADE MODE",
      description: "Identity protection so seamless, even the shadows can't tell who you really are.",
      color: "red"
    },
    {
      icon: "🔮",
      title: "CRYSTAL BALL",
      description: "Predictive analytics that peer into the future through the lens of data and darkness.",
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Noir Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJub2lyIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iNCIgaGVpZ2h0PSI0Ij4KICAgICAgPHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI2ZmMDAwMCIgb3BhY2l0eT0iMC4xIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbm9pcikiLz4KPC9zdmc+')]"></div>
        </div>
        
        {/* Floating Neon Lines */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent animate-noir-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: `-10%`,
              right: `-10%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-noir-fade-in">
            <span className="text-white">CYBER</span>
            <span className="text-red-500 animate-noir-flicker"> FEATURES</span>
          </h2>
          <p className="text-xl text-gray-400 font-mono max-w-3xl mx-auto animate-noir-fade-in-delayed">
            Cutting-edge technology wrapped in the shadows of noir aesthetics. 
            Every feature tells a story of power and mystery.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-black/50 border border-gray-800 rounded-lg p-8 hover:border-red-500/50 transition-all duration-500 animate-noir-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 animate-noir-pulse">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${
                  feature.color === 'red' ? 'text-red-500' : 'text-blue-500'
                } animate-noir-flicker`}>
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Neon Border Effect */}
                <div className={`absolute inset-0 border border-${feature.color}-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-500 font-mono text-sm animate-noir-flicker">
            <span>SYSTEM STATUS: OPERATIONAL</span>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-noir-pulse"></span>
            <span>NEON LEVEL: OPTIMAL</span>
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-noir-pulse"></span>
            <span>SHADOW DEPTH: MAXIMUM</span>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-noir-float ${
              i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 