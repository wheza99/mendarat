import React from 'react';

export default function MinimalShowcase() {
  const showcases = [
    {
      title: 'HOLOGRAPHIC DISPLAYS',
      description: 'Advanced holographic technology with minimalist interface design',
      icon: '◢',
      gradient: 'from-slate-400 to-blue-400',
      animation: 'animate-holographic-morph-1'
    },
    {
      title: 'MINIMALIST DESIGN',
      description: 'Clean, uncluttered aesthetics that enhance user experience',
      icon: '◣',
      gradient: 'from-blue-400 to-indigo-400',
      animation: 'animate-holographic-morph-2'
    },
    {
      title: 'FUTURISTIC INTERFACE',
      description: 'Next-generation technology with elegant simplicity',
      icon: '◤',
      gradient: 'from-indigo-400 to-slate-400',
      animation: 'animate-holographic-morph-3'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Holographic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#64748b_0%,transparent_50%)] bg-[length:160px_160px] animate-holographic-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:240px_240px] animate-holographic-flow"></div>
      </div>

      {/* Holographic Corner Elements */}
      <div className="absolute top-0 left-0 w-36 h-36 border-4 border-slate-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute top-0 right-0 w-36 h-36 border-4 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-36 h-36 border-4 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 border-4 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            MINIMAL SHOWCASE
          </div>
          <div className="text-xl text-slate-300 font-light">
            Transforming Design Through Holographic Innovation
          </div>
          
          {/* Holographic Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-14 h-1 bg-gradient-to-r from-slate-400 to-blue-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-indigo-400 rotate-45 animate-holographic-spin"></div>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {showcases.map((showcase, index) => (
            <div key={index} className="group relative">
              {/* Showcase Card */}
              <div className="relative bg-gradient-to-br from-slate-100/70 to-blue-100/70 backdrop-blur-xl border border-slate-300/50 rounded-lg p-8 h-full hover:border-slate-400/80 transition-all duration-300 transform hover:scale-105">
                {/* Holographic Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-slate-400 rounded-sm animate-holographic-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-indigo-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-slate-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Showcase Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${showcase.gradient} rounded-lg text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 ${showcase.animation}`}>
                    {showcase.icon}
                  </div>
                </div>

                {/* Showcase Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-slate-600 transition-colors duration-300">
                    {showcase.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {showcase.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${showcase.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Holographic Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-400/0 via-slate-400/30 to-slate-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-holographic-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Holographic Center Morph */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-slate-100/80 to-blue-100/80 backdrop-blur-xl border border-slate-300/50 rounded-lg p-12 max-w-5xl">
            {/* Holographic Corner Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-3 border-slate-400 rounded-lg animate-holographic-pulse"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-3 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-3 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                HOLOGRAPHIC
              </span>
              <span className="text-gray-800"> SHOWCASE </span>
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-slate-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Watch as minimalist design transforms into advanced holographic technology. Our showcase demonstrates 
              the perfect balance between clean aesthetics and cutting-edge innovation.
            </p>

            {/* Holographic Morphing Elements */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              {Array.from({ length: 5 }, (_, i) => (
                <div
                  key={i}
                  className={`w-16 h-16 border-4 border-${['slate', 'blue', 'indigo', 'slate', 'blue'][i]}-400 rounded-lg animate-holographic-morph`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>

            {/* Holographic Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { feature: 'HOLOGRAPHIC DISPLAYS', color: 'slate' },
                { feature: 'MINIMALIST DESIGN', color: 'blue' },
                { feature: 'FUTURISTIC TECH', color: 'indigo' }
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div className={`bg-gradient-to-br from-${item.color}-100/50 to-${item.color}-200/50 backdrop-blur-xl border border-${item.color}-300/50 rounded-lg p-4 hover:border-${item.color}-400 transition-all duration-300`}>
                    <div className={`text-sm font-bold text-${item.color}-600 uppercase tracking-wider`}>
                      {item.feature}
                    </div>
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-holographic-float"
              style={{
                left: `${8 + (i % 5) * 20}%`,
                top: `${15 + Math.floor(i / 5) * 30}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${14 + Math.random() * 10}s`
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