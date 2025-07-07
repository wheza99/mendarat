import React from 'react';

export default function GradientServices() {
  const servicesData = {
    title: {
      main: "GRADIENT SERVICES",
      description: "Professional services that blend Art Deco sophistication with neon gradient innovation"
    },
    services: [
      {
        title: "DECO DESIGN",
        description: "Custom Art Deco inspired designs with modern neon gradient aesthetics",
        features: ["Art Deco Design Templates", "Neon Gradient Components", "Basic Animations", "Email Support", "5 Projects"],
        color: "purple"
      },
      {
        title: "NEON DEVELOPMENT",
        description: "Full-stack development with neon gradient UI/UX and Art Deco elements",
        features: ["React/Next.js", "TypeScript", "Tailwind CSS", "Animations"],
        color: "pink"
      },
      {
        title: "GRADIENT BRANDING",
        description: "Complete branding solutions combining Art Deco elegance with neon innovation",
        features: ["Logo Design", "Color Schemes", "Typography", "Brand Guidelines"],
        color: "orange"
      }
    ],
    process: [
      { step: '01', title: 'DISCOVER', desc: 'Art Deco Research', color: 'purple' },
      { step: '02', title: 'DESIGN', desc: 'Neon Gradient Creation', color: 'pink' },
      { step: '03', title: 'DEVELOP', desc: 'Modern Implementation', color: 'orange' },
      { step: '04', title: 'DELIVER', desc: 'Elegant Solution', color: 'purple' }
    ]
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Deco Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/50 via-transparent to-orange-900/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#ec4899_0%,transparent_50%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-pink-800/90 to-orange-800/90 backdrop-blur-xl border border-pink-400 rounded-lg px-6 py-3 shadow-2xl mb-8">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-deco-pulse"></div>
            <span className="text-pink-300 font-light text-sm tracking-wider">SERVICES</span>
            <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-deco-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
              {servicesData.title.main}
            </span>
          </h2>
          
          <p className="text-xl text-pink-300 max-w-3xl mx-auto font-light">
            {servicesData.title.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.services.map((service, index) => (
            <div key={index} className="group relative">
              <div className={`bg-gradient-to-br from-${service.color}-800/90 to-${service.color}-900/90 backdrop-blur-xl border border-${service.color}-400 rounded-lg p-8 shadow-2xl hover:shadow-${service.color}-500/25 transition-all duration-500 transform hover:scale-105 h-full`}>
                {/* Service Icon */}
                <div className={`text-5xl text-${service.color}-300 mb-6 animate-deco-pulse`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {['◆', '◇', '◆'][index]}
                </div>
                
                {/* Service Title */}
                <h3 className={`text-2xl font-bold text-${service.color}-200 mb-4`}>
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className={`text-${service.color}-300 font-light leading-relaxed mb-6`}>
                  {service.description}
                </p>
                
                {/* Service Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center text-${service.color}-300 font-light`}>
                      <div className={`w-2 h-2 bg-${service.color}-400 rounded-full mr-3 animate-deco-pulse`} style={{ animationDelay: `${featureIndex * 0.1}s` }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Deco Corner Elements */}
                <div className={`absolute -top-2 -left-2 w-4 h-4 border-2 border-${service.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 0.5}s` }}></div>
                <div className={`absolute -top-2 -right-2 w-4 h-4 border-2 border-${service.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1}s` }}></div>
                <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-${service.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 1.5}s` }}></div>
                <div className={`absolute -bottom-2 -right-2 w-4 h-4 border-2 border-${service.color}-400 rounded-lg animate-deco-pulse`} style={{ animationDelay: `${index * 0.2 + 2}s` }}></div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-400/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Deco Process Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              DECO PROCESS
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {servicesData.process.map((process, index) => (
              <div key={index} className="relative group">
                <div className={`bg-gradient-to-br from-${process.color}-800/90 to-${process.color}-900/90 backdrop-blur-xl border border-${process.color}-400 rounded-lg p-6 shadow-2xl hover:shadow-${process.color}-500/25 transition-all duration-300 transform hover:scale-105`}>
                  <div className={`text-3xl font-bold text-${process.color}-300 mb-2 animate-deco-pulse`} style={{ animationDelay: `${index * 0.1}s` }}>
                    {process.step}
                  </div>
                  <div className={`text-lg font-semibold text-${process.color}-200 mb-2`}>
                    {process.title}
                  </div>
                  <div className={`text-sm text-${process.color}-400 font-light`}>
                    {process.desc}
                  </div>
                </div>
                
                {/* Process Connector */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-deco-flow"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deco Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-deco-float"
            style={{
              left: `${10 + (i % 4) * 20}%`,
              top: `${25 + Math.floor(i / 4) * 25}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${7 + Math.random() * 3}s`
            }}
          >
            <div className={`w-5 h-5 border-2 border-${['purple', 'pink', 'orange'][i % 3]}-400 rounded-lg animate-deco-spin`}></div>
          </div>
        ))}
      </div>

      {/* Deco Rays */}
      <div className="absolute top-1/4 left-1/3 w-40 h-40">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute w-1 h-20 bg-gradient-to-t from-pink-400 to-transparent animate-deco-ray"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Deco Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full animate-deco-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#f97316'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${9 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 