import React from 'react';

export default function TokyoServices() {
  const services = [
    {
      icon: '🎌',
      title: 'Street Photography',
      description: 'Professional photography tours capturing the essence of Tokyo streets',
      features: ['Neon-lit locations', 'Cultural insights', 'Professional equipment', 'Digital delivery']
    },
    {
      icon: '🏮',
      title: 'Cultural Tours',
      description: 'Guided tours through the most vibrant districts of Tokyo',
      features: ['Local guides', 'Hidden gems', 'Cultural context', 'Small groups']
    },
    {
      icon: '⛩️',
      title: 'Fashion Styling',
      description: 'Personal styling services inspired by Japanese street fashion',
      features: ['Personal consultation', 'Wardrobe planning', 'Shopping assistance', 'Style transformation']
    },
    {
      icon: '🎎',
      title: 'Street Art Workshops',
      description: 'Learn the techniques of Japanese street art and graffiti',
      features: ['Hands-on training', 'Art supplies included', 'Gallery showcase', 'Certificate']
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background with neon grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-purple-900/60 to-pink-900/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tokyo Services
          </h2>
          <p className="text-xl text-cyan-200 font-mono">
            ⛩️ Professional services for authentic Japanese experiences 🎌
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service card with neon effect */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-pink-900/90 via-purple-900/90 to-cyan-900/90 border border-cyan-400/40 hover:border-cyan-400/80 transition-all duration-300 transform hover:scale-105">
                
                {/* Neon glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon and title */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 animate-pulse">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-100 group-hover:text-cyan-200 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-cyan-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-cyan-200 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  🏮 Learn More
                </button>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/60 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-pink-900/80 via-purple-900/80 to-cyan-900/80 border border-pink-400/40">
            <h3 className="text-2xl font-bold text-pink-100 mb-4">
              🗾 Custom Experiences Available
            </h3>
            <p className="text-pink-200 mb-4">
              We can create personalized experiences tailored to your specific interests in Japanese street culture
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              🎌 Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-cyan-400 text-2xl animate-bounce">
        🎌
      </div>
      <div className="absolute bottom-10 right-10 text-pink-400 text-2xl animate-pulse">
        🏮
      </div>
      <div className="absolute top-1/2 left-5 text-purple-400 text-xl animate-spin">
        ⛩️
      </div>
      <div className="absolute top-1/3 right-5 text-cyan-300 text-xl animate-bounce">
        🎎
      </div>
    </section>
  );
} 