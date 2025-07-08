import React from 'react';

export default function NeonFeatures() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized technology stack",
      color: "orange"
    },
    {
      icon: "🛡️",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      color: "pink"
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Responsive design that works perfectly on all devices",
      color: "purple"
    },
    {
      icon: "⚡",
      title: "Real-time Sync",
      description: "Instant synchronization across all your devices and platforms",
      color: "orange"
    },
    {
      icon: "🎯",
      title: "Smart Analytics",
      description: "Advanced analytics and insights to drive your success",
      color: "pink"
    },
    {
      icon: "🔧",
      title: "Easy Integration",
      description: "Simple API integration with comprehensive documentation",
      color: "purple"
    }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-600/10 to-transparent"></div>
        
        {/* Floating Particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full animate-sunset-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${['#f97316', '#ec4899', '#a855f7'][Math.floor(Math.random() * 3)]}, transparent)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-sunset">
            Powerful Features
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Discover the perfect blend of cutting-edge technology and warm, inviting design
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="sunset-card p-8 text-center hover-sunset-scale group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 animate-sunset-pulse group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-4 neon-text-${feature.color} group-hover:scale-105 transition-transform duration-300`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-orange-200 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { number: "99.9%", label: "Uptime", color: "orange" },
            { number: "10M+", label: "Users", color: "pink" },
            { number: "50+", label: "Countries", color: "purple" },
            { number: "24/7", label: "Support", color: "orange" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center sunset-glass p-6 rounded-2xl hover-sunset-glow"
            >
              <div className={`text-4xl font-bold mb-2 neon-text-${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-orange-200 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="sunset-glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Ready to Experience the Future?
            </h3>
            <p className="text-orange-200 mb-8 text-lg">
              Join thousands of users who have already transformed their digital experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-sunset px-8 py-4 rounded-xl font-semibold hover-sunset-scale">
                Start Free Trial
              </button>
              <button className="sunset-glass px-8 py-4 rounded-xl font-semibold text-white border border-orange-400/50 hover-sunset-glow transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-orange-400/30 rounded-full animate-sunset-pulse"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 border border-pink-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-purple-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 