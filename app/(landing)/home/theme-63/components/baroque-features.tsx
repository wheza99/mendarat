import React from 'react';

export default function BaroqueFeatures() {
  const baroqueFeatures = [
    {
      title: "AI-Powered Restoration",
      description: "Breathe new life into damaged Renaissance masterpieces using advanced machine learning algorithms that understand classical techniques and historical context.",
      icon: "🔄",
      capabilities: ["Crack Repair", "Color Restoration", "Missing Parts Reconstruction", "Age Reversal"],
      stats: { accuracy: "99.7%", speed: "10x faster", works: "2,847 restored" }
    },
    {
      title: "Style Transfer Engine",
      description: "Transform any artwork into the style of Renaissance masters while preserving the original composition and emotional essence.",
      icon: "🎭",
      capabilities: ["Leonardo Style", "Michelangelo Touch", "Raphael Harmony", "Botticelli Grace"],
      stats: { styles: "247 masters", quality: "Museum grade", speed: "Real-time" }
    },
    {
      title: "Golden Ratio Analyzer",
      description: "Discover and apply the mathematical principles of beauty that guided Renaissance artists in creating harmonious compositions.",
      icon: "📐",
      capabilities: ["Proportion Analysis", "Divine Composition", "Balance Optimization", "Harmony Metrics"],
      stats: { precision: "0.001%", rules: "Classical 12", analysis: "Instant" }
    },
    {
      title: "Historical Color Palette",
      description: "Access authentic pigments and color combinations used by Renaissance masters, recreated through spectral analysis of original works.",
      icon: "🎨",
      capabilities: ["Period Accuracy", "Pigment Simulation", "Aging Effects", "Regional Variations"],
      stats: { colors: "15,000+", periods: "6 centuries", accuracy: "Spectral match" }
    },
    {
      title: "3D Sculpture Studio",
      description: "Create digital sculptures with the same precision and attention to human anatomy that characterized Renaissance masters.",
      icon: "🗿",
      capabilities: ["Anatomy Guides", "Marble Physics", "Tool Simulation", "Light Studies"],
      stats: { precision: "0.1mm", materials: "47 types", realism: "Photographic" }
    },
    {
      title: "Collaborative Canvas",
      description: "Work alongside AI masters in real-time, receiving guidance and suggestions based on centuries of artistic knowledge.",
      icon: "🤝",
      capabilities: ["Real-time Feedback", "Technique Suggestions", "Historical Context", "Style Guidance"],
      stats: { mentors: "12 AI masters", response: "Instant", learning: "Adaptive" }
    }
  ];

  const achievements = [
    { metric: "2.5M", label: "Artworks Created", icon: "🎨" },
    { metric: "847K", label: "Artists Trained", icon: "👨‍🎨" },
    { metric: "99.8%", label: "Accuracy Rate", icon: "🎯" },
    { metric: "156", label: "Countries Served", icon: "🌍" },
    { metric: "4.9/5", label: "User Rating", icon: "⭐" },
    { metric: "24/7", label: "AI Availability", icon: "🤖" }
  ];

  const testimonials = [
    {
      name: "Sofia Artista",
      role: "Digital Renaissance Artist",
      quote: "This platform transformed my understanding of classical techniques. The AI mentors provide insights I never could have discovered alone.",
      rating: 5,
      avatar: "👩‍🎨"
    },
    {
      name: "Marco Scultore", 
      role: "3D Sculpture Specialist",
      quote: "The level of anatomical detail and guidance rivals studying under the greatest masters. It's like having Michelangelo as your personal tutor.",
      rating: 5,
      avatar: "👨‍🏫"
    },
    {
      name: "Elena Restauro",
      role: "Art Restoration Expert", 
      quote: "The AI restoration tools are revolutionary. We've brought back masterpieces that were thought to be lost forever.",
      rating: 5,
      avatar: "🔬"
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Ornate Baroque Background */}
      <div className="absolute inset-0">
        {/* Baroque Ornaments */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(12)].map((_, i) => (
            <g key={i}>
              <circle
                cx={25 + (i % 4) * 25}
                cy={25 + Math.floor(i / 4) * 25}
                r="8"
                stroke="#d97706"
                strokeWidth="0.3"
                fill="none"
                className="animate-renaissance-pulse"
                style={{animationDelay: `${i * 0.3}s`}}
              />
              <path
                d={`M${25 + (i % 4) * 25},${25 + Math.floor(i / 4) * 25} 
                    L${35 + (i % 4) * 25},${15 + Math.floor(i / 4) * 25}
                    L${15 + (i % 4) * 25},${15 + Math.floor(i / 4) * 25} Z`}
                stroke="#ea580c"
                strokeWidth="0.2"
                fill="none"
                className="animate-renaissance-float"
                style={{animationDelay: `${i * 0.5}s`}}
              />
            </g>
          ))}
        </svg>

        {/* Floating Decorative Elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-600/20 animate-renaissance-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 25 + 30}s`
            }}
          >
            {['⚜️', '👑', '🏛️', '📜', '⚱️', '💎', '🕊️', '🌹'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 mb-8 bg-gradient-to-r from-amber-100/80 to-orange-100/80 backdrop-blur-sm border-2 border-amber-300/30 rounded-full">
            <span className="text-amber-700 text-lg font-semibold">👑 Baroque Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Magnificent Capabilities
          </h2>
          
          <p className="text-xl text-amber-800/80 max-w-3xl mx-auto leading-relaxed">
            Discover the ornate power of our AI-enhanced platform, where every feature 
            is crafted with the same attention to detail as a Renaissance masterpiece.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-100/80 to-orange-100/80 backdrop-blur-sm border-2 border-amber-200/40 rounded-xl p-6 hover:border-orange-400/60 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-4xl mb-3 animate-renaissance-pulse">
                {achievement.icon}
              </div>
              <div className="text-2xl font-bold text-amber-700 mb-1 animate-renaissance-count">
                {achievement.metric}
              </div>
              <div className="text-amber-600/80 text-sm font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {baroqueFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-50/90 to-orange-50/90 backdrop-blur-sm border-2 border-amber-200/40 rounded-2xl overflow-hidden hover:border-red-400/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-8">
                {/* Feature Header */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-renaissance-pulse">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800 mb-3 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-amber-700/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="mb-6">
                  <h4 className="text-amber-800 font-semibold mb-3">Capabilities:</h4>
                  <div className="space-y-2">
                    {feature.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                        <span className="text-amber-700/80 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="border-t border-amber-200/40 pt-6">
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(feature.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="flex justify-between items-center">
                        <span className="text-amber-600 text-sm capitalize">{key}:</span>
                        <span className="text-orange-700 font-semibold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-800 text-center mb-12">
            What Masters Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-orange-100/80 to-red-100/80 backdrop-blur-sm border border-orange-200/40 rounded-xl p-6 hover:border-red-400/60 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-amber-800">{testimonial.name}</h4>
                    <p className="text-orange-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-amber-500 text-xl">⭐</span>
                  ))}
                </div>
                
                <p className="text-amber-700/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ornate Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-amber-100/90 to-red-100/90 backdrop-blur-sm border-2 border-amber-300/40 rounded-2xl p-12 max-w-3xl mx-auto overflow-hidden">
            {/* Decorative Corners */}
            <div className="absolute top-4 left-4 text-3xl text-amber-600/30">⚜️</div>
            <div className="absolute top-4 right-4 text-3xl text-amber-600/30">⚜️</div>
            <div className="absolute bottom-4 left-4 text-3xl text-amber-600/30">⚜️</div>
            <div className="absolute bottom-4 right-4 text-3xl text-amber-600/30">⚜️</div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-amber-800 mb-6">
                Experience the Renaissance Revolution
              </h3>
              <p className="text-xl text-amber-700/80 mb-8 leading-relaxed">
                Join the digital art renaissance where classical mastery meets 
                artificial intelligence. Create, learn, and inspire with tools 
                worthy of the greatest artists in history.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-white font-bold rounded-full border-2 border-amber-700 hover:from-amber-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                  <span className="flex items-center space-x-3">
                    <span>👑</span>
                    <span>Begin Your Mastery</span>
                    <span>→</span>
                  </span>
                </button>
                <button className="px-10 py-4 bg-amber-50 text-amber-700 font-bold rounded-full border-2 border-amber-300 hover:bg-amber-100 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center space-x-3">
                    <span>🎨</span>
                    <span>Explore Features</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 