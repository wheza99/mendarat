import React from 'react';

export default function PaperServices() {
  const services = [
    {
      title: 'DIGITAL ORIGAMI',
      description: 'Modern paper folding techniques with digital precision',
      icon: '◢',
      gradient: 'from-blue-400 via-purple-400 to-indigo-400',
      features: ['Geometric Precision', 'Digital Folding', 'Soft Gradients']
    },
    {
      title: 'MORPHING EFFECTS',
      description: 'Smooth transitions and shape-shifting animations',
      icon: '◣',
      gradient: 'from-purple-400 via-indigo-400 to-blue-400',
      features: ['Shape Morphing', 'Smooth Transitions', 'Modern Effects']
    },
    {
      title: 'PASTEL AESTHETICS',
      description: 'Gentle color palettes and soft visual experiences',
      icon: '◤',
      gradient: 'from-indigo-400 via-blue-400 to-purple-400',
      features: ['Soft Colors', 'Gentle Gradients', 'Calming Design']
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Origami Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#3b82f6_0%,transparent_50%)] bg-[length:180px_180px] animate-origami-gear"></div>
        <div className="absolute inset-0 bg-[linear-gradient(60deg,transparent_0%,#8b5cf6_50%,transparent_100%)] bg-[length:280px_280px] animate-origami-flow"></div>
      </div>

      {/* Origami Corner Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 border-4 border-blue-400 rounded-lg animate-origami-pulse"></div>
      <div className="absolute top-0 right-0 w-40 h-40 border-4 border-purple-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 border-4 border-indigo-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-4 border-blue-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            PAPER SERVICES
          </div>
          <div className="text-xl text-blue-600 font-light">
            Origami Excellence with Digital Innovation
          </div>
          
          {/* Origami Divider */}
          <div className="flex justify-center items-center mt-8">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            <div className="mx-4 w-4 h-4 border-2 border-indigo-400 rotate-45 animate-origami-spin"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="relative bg-gradient-to-br from-blue-100/60 to-purple-100/60 backdrop-blur-xl border border-blue-300/40 rounded-lg p-8 h-full hover:border-blue-400/80 transition-all duration-300 transform hover:scale-105">
                {/* Origami Corner Decorations */}
                <div className="absolute top-6 left-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-origami-pulse"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-2 border-purple-400 rounded-sm animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-indigo-400 rounded-sm animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-2 border-blue-400 rounded-sm animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Service Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-lg text-white text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        <span className="text-sm text-blue-600 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Origami Border Animation */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400/60 transition-all duration-300">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-origami-sweep"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Origami Center Showcase */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-blue-100/80 to-purple-100/80 backdrop-blur-xl border border-blue-300/50 rounded-lg p-12 max-w-4xl">
            {/* Origami Corner Decorations */}
            <div className="absolute top-8 left-8 w-12 h-12 border-3 border-blue-400 rounded-lg animate-origami-pulse"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-3 border-purple-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border-3 border-indigo-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 border-3 border-blue-400 rounded-lg animate-origami-pulse" style={{ animationDelay: '1.5s' }}></div>

            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                ORIGAMI
              </span>
              <span className="text-gray-800"> MEETS </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                DIGITAL
              </span>
            </h3>
            
            <p className="text-lg text-blue-600 mb-8 leading-relaxed">
              Experience the perfect fusion of traditional origami artistry with cutting-edge digital technology. 
              Our designs combine geometric precision with soft, elegant aesthetics.
            </p>

            {/* Origami Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: '1000+', label: 'DIGITAL FOLDS', color: 'blue' },
                { number: '2024', label: 'MODERN TECH', color: 'purple' },
                { number: '∞', label: 'POSSIBILITIES', color: 'indigo' }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className={`bg-gradient-to-br from-${stat.color}-100/50 to-${stat.color}-200/50 backdrop-blur-xl border border-${stat.color}-300/50 rounded-lg p-4 hover:border-${stat.color}-400 transition-all duration-300`}>
                    <div className={`text-2xl font-bold text-${stat.color}-600 mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-xs text-blue-600 font-light uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Origami Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-origami-float"
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            >
              <div className={`w-8 h-8 border-2 border-${['blue', 'purple', 'indigo'][i % 3]}-400 rounded-sm animate-origami-spin`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 