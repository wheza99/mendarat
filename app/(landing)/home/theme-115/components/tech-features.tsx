import React from 'react';

export default function TechFeatures() {
  const features = [
    {
      icon: "⚡",
      title: "Quantum Computing",
      description: "Next-generation quantum processing for complex calculations",
      color: "from-cyan-500 to-purple-500"
    },
    {
      icon: "🔮",
      title: "AI Integration",
      description: "Advanced artificial intelligence and machine learning systems",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: "🌐",
      title: "Neural Networks",
      description: "Deep learning networks for pattern recognition",
      color: "from-cyan-500 to-indigo-500"
    },
    {
      icon: "💻",
      title: "Cybersecurity",
      description: "Advanced threat detection and protection systems",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🚀",
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and deployment",
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: "🔬",
      title: "Data Analytics",
      description: "Real-time data processing and insights",
      color: "from-cyan-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 font-mono">
            TECH FEATURES
          </h2>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto font-mono">
            Cutting-edge technology solutions for the digital future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Cyber effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3 font-mono">
                  {feature.title}
                </h3>
                <p className="text-cyan-300 leading-relaxed font-mono">
                  {feature.description}
                </p>
              </div>
              
              {/* Neon decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
              DEPLOY CYBER TECH
            </h3>
            <p className="text-cyan-300 mb-6 max-w-md mx-auto font-mono">
              Integrate advanced technology solutions into your infrastructure
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 font-mono">
              DEPLOY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 