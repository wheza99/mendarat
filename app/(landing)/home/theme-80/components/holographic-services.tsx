import React from 'react';

export default function HolographicServices() {
  const services = [
    {
      title: 'HOLOGRAPHIC DESIGN',
      description: 'Advanced holographic interfaces with minimalist aesthetics',
      icon: '◢',
      gradient: 'from-slate-400 via-blue-400 to-indigo-400',
      features: ['Holographic Displays', 'Minimalist UI', 'Future Technology']
    },
    {
      title: 'MINIMALIST INTERFACE',
      description: 'Clean, intuitive design that enhances user experience',
      icon: '◣',
      gradient: 'from-blue-400 via-indigo-400 to-slate-400',
      features: ['Clean Design', 'Intuitive Controls', 'Modern Aesthetics']
    },
    {
      title: 'FUTURISTIC SOLUTIONS',
      description: 'Next-generation technology with elegant simplicity',
      icon: '◤',
      gradient: 'from-indigo-400 via-slate-400 to-blue-400',
      features: ['Advanced Tech', 'Elegant Design', 'Future Ready']
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Holographic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#64748b_0%,transparent_50%)] bg-[length:180px_180px] animate-holographic-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,#3b82f6_50%,transparent_100%)] bg-[length:280px_280px] animate-holographic-flow"></div>
      </div>

      {/* Holographic Corner Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 border-4 border-slate-400 rounded-lg animate-holographic-pulse"></div>
      <div className="absolute top-0 right-0 w-40 h-40 border-4 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 border-4 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            HOLOGRAPHIC SERVICES
          </div>
          <div className="text-xl text-slate-300 font-light">
            Minimalist Excellence with Holographic Innovation
          </div>
          
          {/* Holographic Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-blue-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-indigo-400 rotate-45 animate-holographic-spin"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-slate-100/60 to-blue-100/60 backdrop-blur-xl border border-slate-300/40 rounded-lg p-8 h-full hover:border-slate-400/80 transition-all duration-300 transform hover:scale-105">
                {/* Holographic Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-slate-400 rounded-sm animate-holographic-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-indigo-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-slate-400 rounded-sm animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Service Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-lg text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-slate-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full"></div>
                        <span className="text-sm text-slate-600 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Holographic Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-400/0 via-slate-400/30 to-slate-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-holographic-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Holographic Center Showcase */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-slate-100/80 to-blue-100/80 backdrop-blur-xl border border-slate-300/50 rounded-lg p-12 max-w-4xl">
            {/* Holographic Corner Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-3 border-slate-400 rounded-lg animate-holographic-pulse"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-blue-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-3 border-indigo-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-3 border-slate-400 rounded-lg animate-holographic-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-slate-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                HOLOGRAPHIC
              </span>
              <span className="text-gray-800"> MEETS </span>
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-slate-400 bg-clip-text text-transparent">
                MINIMALISM
              </span>
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Experience the perfect fusion of advanced holographic technology with clean minimalist design. 
              Our solutions combine cutting-edge innovation with timeless elegance.
            </p>

            {/* Holographic Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '∞', label: 'POSSIBILITIES', color: 'slate' },
                { number: '2024', label: 'FUTURE TECH', color: 'blue' },
                { number: '100%', label: 'MINIMALIST', color: 'indigo' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className={`bg-gradient-to-br from-${stat.color}-100/50 to-${stat.color}-200/50 backdrop-blur-xl border border-${stat.color}-300/50 rounded-lg p-4 hover:border-${stat.color}-400 transition-all duration-300`}>
                    <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-slate-600 font-light uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Holographic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-holographic-float"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            >
              <div className={`w-8 h-8 border-2 border-${['slate', 'blue', 'indigo'][i % 3]}-400 rounded-sm animate-holographic-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 