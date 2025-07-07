import React from 'react';

export default function MinimalFeatures() {
  const features = [
    {
      icon: '◢',
      title: 'HOLOGRAPHIC DISPLAY',
      description: 'Advanced holographic technology with minimalist interface design',
      gradient: 'from-slate-400 to-blue-400'
    },
    {
      icon: '◣',
      title: 'MINIMALIST AESTHETICS',
      description: 'Clean, uncluttered design principles with maximum visual impact',
      gradient: 'from-blue-400 to-indigo-400'
    },
    {
      icon: '◤',
      title: 'FUTURISTIC SIMPLICITY',
      description: 'Cutting-edge technology presented through elegant minimalism',
      gradient: 'from-indigo-400 to-slate-400'
    },
    {
      icon: '◥',
      title: 'ADVANCED INTERFACE',
      description: 'Intuitive holographic controls with minimalist user experience',
      gradient: 'from-slate-400 to-indigo-400'
    },
    {
      icon: '◢',
      title: 'CLEAN DESIGN',
      description: 'Sophisticated minimalism that enhances user interaction',
      gradient: 'from-blue-400 to-slate-400'
    },
    {
      icon: '◣',
      title: 'FUTURE READY',
      description: 'Next-generation holographic technology with timeless design',
      gradient: 'from-indigo-400 to-blue-400'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Holographic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,#64748b_0%,transparent_50%)] bg-[length:150px_150px] animate-holographic-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:250px_250px] animate-holographic-flow"></div>
      </div>

      {/* Holographic Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-slate-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-4 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-4 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            MINIMAL FEATURES
          </div>
          <div className="text-xl text-slate-300 font-light">
            Where Simplicity Meets Innovation
          </div>
          
          {/* Holographic Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-12 h-1 bg-gradient-to-r from-slate-400 to-blue-400"></div>
            <div className="mx-4 w-3 h-3 border-2 border-indigo-400 rotate-45 animate-holographic-spin"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Feature Card */}
              <div className="relative bg-gradient-to-br from-slate-100/50 to-blue-100/50 backdrop-blur-xl border border-slate-300/30 rounded-lg p-8 h-full hover:border-slate-400/60 transition-all duration-300 transform hover:scale-105">
                {/* Holographic Corner Decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-2 border-slate-400 rounded-sm animate-holographic-pulse"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-blue-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-indigo-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-slate-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Feature Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-slate-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Holographic Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-400/50 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-400/0 via-slate-400/20 to-slate-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-holographic-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Holographic Center Element */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-slate-400 rounded-lg animate-holographic-pulse"></div>
            <div className="absolute inset-2 w-16 h-16 border-4 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-4 w-8 h-8 border-4 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-holographic-float"
              style={{
                left: `${15 + (i % 3) * 35}%`,
                top: `${25 + Math.floor(i / 3) * 30}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${10 + Math.random() * 6}s`
              }}
            >
              <div className={`w-6 h-6 border-2 border-${['slate', 'blue', 'indigo'][i % 3]}-400 rounded-sm animate-holographic-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 