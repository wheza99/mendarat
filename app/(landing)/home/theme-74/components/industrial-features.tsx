import React from 'react';

export default function IndustrialFeatures() {
  const features = [
    {
      title: "Steam-Powered Engine",
      description: "Revolutionary steam engine technology with 99.9% efficiency and zero emissions.",
      icon: "⚙️",
      color: "amber",
      stats: "500 HP"
    },
    {
      title: "Brass Gear System",
      description: "Precision-engineered brass gears with industrial-grade durability and smooth operation.",
      icon: "🔧",
      color: "orange",
      stats: "50K RPM"
    },
    {
      title: "Copper Piping Network",
      description: "Advanced copper piping system with thermal conductivity and corrosion resistance.",
      icon: "🔩",
      color: "red",
      stats: "24/7 Flow"
    },
    {
      title: "Victorian Aesthetics",
      description: "Classic Victorian design elements with modern steampunk innovation and style.",
      icon: "🏛️",
      color: "amber",
      stats: "1890s Style"
    },
    {
      title: "Industrial Automation",
      description: "Fully automated industrial processes with steam-powered robotics and AI integration.",
      icon: "🤖",
      color: "orange",
      stats: "AI Driven"
    },
    {
      title: "Steam Pressure Control",
      description: "Advanced pressure control systems with real-time monitoring and safety protocols.",
      icon: "📊",
      color: "red",
      stats: "1000 PSI"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f59e0b_0%,transparent_50%)] bg-[length:150px_150px] animate-steam-gear"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-br from-amber-800/80 to-orange-800/80 backdrop-blur-xl border border-amber-400 rounded-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mr-2 animate-steam-pulse"></div>
            <span className="text-sm font-bold text-amber-400 tracking-wider">
              INDUSTRIAL FEATURES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="block">Steam-Powered</span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect fusion of Victorian industrial aesthetics and modern steampunk technology. 
            Our steam-powered features deliver unmatched performance and reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-amber-800/60 to-orange-800/60 backdrop-blur-xl border-2 border-gray-600 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-steam-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Feature Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-xl flex items-center justify-center text-2xl shadow-lg animate-steam-pulse`}>
                  {feature.icon}
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 border-2 border-${feature.color}-400 rounded-full animate-steam-spin`}></div>
              </div>

              {/* Feature Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-br from-${feature.color}-800/80 to-${feature.color}-600/80 backdrop-blur-xl border border-${feature.color}-400 rounded-lg`}>
                  <div className={`w-2 h-2 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-600 rounded-full mr-2 animate-steam-pulse`}></div>
                  <span className={`text-sm font-bold text-${feature.color}-400 tracking-wider`}>
                    {feature.stats}
                  </span>
                </div>
              </div>

              {/* Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-400/5 to-${feature.color}-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Steam Particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 bg-${feature.color}-400 rounded-full animate-steam-particle`}
                    style={{
                      left: `${i * 4}px`,
                      top: `${i * 4}px`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>

              {/* Corner Gear */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 border-2 border-${feature.color}-400 rounded-full animate-steam-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: '99.9%', label: 'Efficiency Rate', color: 'amber' },
            { number: '50K+', label: 'Gears Manufactured', color: 'orange' },
            { number: '24/7', label: 'Steam Operation', color: 'red' },
            { number: '1890s', label: 'Victorian Era', color: 'amber' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2 animate-steam-glow`}>
                {stat.number}
              </div>
              <div className="text-sm font-light text-gray-400 tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-12 h-12 border-2 border-amber-400 rounded-lg animate-steam-pulse"></div>
      <div className="absolute top-1/3 right-8 w-12 h-12 border-2 border-orange-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-12 h-12 border-2 border-red-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-8 w-12 h-12 border-2 border-amber-400 rounded-lg animate-steam-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Steam Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400/10 to-transparent animate-steam-scan"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-400/10 to-transparent animate-steam-scan" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
} 