import React from 'react';

export default function HolographicServices() {
  const services = [
    {
      title: 'Glassmorphism UI Design',
      description: 'Create stunning interfaces with our advanced glassmorphism design system.',
      icon: '🎨',
      features: ['Transparent Layers', 'Blur Effects', 'Light Reflections'],
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Holographic Components',
      description: 'Build interactive holographic elements that respond to user gestures.',
      icon: '🌟',
      features: ['3D Effects', 'Motion Tracking', 'Spatial Audio'],
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Quantum Animations',
      description: 'Smooth, physics-based animations that feel natural and responsive.',
      icon: '⚡',
      features: ['Fluid Motion', 'Easing Curves', 'Performance Optimized'],
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section className="relative py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-glassmorphism-scan"
              style={{
                top: `${10 + i * 8}%`,
                left: `-10%`,
                right: `-10%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>

        {/* Floating Holographic Orbs */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-glassmorphism-float"
            style={{
              left: `${15 + (i % 3) * 30}%`,
              top: `${25 + Math.floor(i / 3) * 25}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              background: `radial-gradient(circle, ${['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]}/20, transparent)`,
              boxShadow: `0 0 30px ${['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]}/30`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-full text-sm font-medium text-white/90 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2 animate-glassmorphism-pulse"></div>
            HOLOGRAPHIC SERVICES
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the future of digital services with our cutting-edge holographic and glassmorphism technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-20 h-20 backdrop-blur-md bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center text-3xl shadow-2xl`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Holographic Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + i * 10}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <span className="mr-2">Get Started Today</span>
            <div className="w-4 h-4 border-2 border-white/50 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-glassmorphism-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
} 