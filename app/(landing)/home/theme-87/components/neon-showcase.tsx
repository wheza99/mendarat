import React from 'react';

export default function NeonShowcase() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with sunset-inspired design",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛍️",
      category: "Web App"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking experience",
      tech: ["React Native", "Firebase", "Biometrics", "Plaid"],
      image: "🏦",
      category: "Mobile App"
    },
    {
      title: "AI Dashboard",
      description: "Real-time analytics dashboard with AI insights",
      tech: ["Vue.js", "Python", "TensorFlow", "WebSocket"],
      image: "🤖",
      category: "Web App"
    },
    {
      title: "Social Media Platform",
      description: "Next-generation social networking platform",
      tech: ["Next.js", "PostgreSQL", "Redis", "AWS"],
      image: "📱",
      category: "Web App"
    },
    {
      title: "Fitness Tracker",
      description: "Comprehensive fitness tracking and analytics",
      tech: ["Flutter", "Firebase", "HealthKit", "ML Kit"],
      image: "💪",
      category: "Mobile App"
    },
    {
      title: "Smart Home Hub",
      description: "IoT dashboard for smart home management",
      tech: ["Angular", "Node.js", "MQTT", "Docker"],
      image: "🏠",
      category: "IoT"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️", color: "orange" },
    { name: "Node.js", icon: "🟢", color: "pink" },
    { name: "TypeScript", icon: "🔷", color: "purple" },
    { name: "Python", icon: "🐍", color: "orange" },
    { name: "AWS", icon: "☁️", color: "pink" },
    { name: "Docker", icon: "🐳", color: "purple" },
    { name: "MongoDB", icon: "🍃", color: "orange" },
    { name: "Firebase", icon: "🔥", color: "pink" }
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/10 to-transparent"></div>
        
        {/* Floating Tech Icons */}
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={`tech-${i}`}
            className="absolute animate-sunset-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <div className="w-8 h-8 border border-orange-400/30 rounded-full animate-sunset-pulse"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-sunset">
            Our Work
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative projects that combine cutting-edge technology with stunning design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="sunset-card p-6 hover-sunset-scale group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="text-6xl mb-4 text-center animate-sunset-pulse group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full text-xs font-medium text-orange-300 mb-4">
                {project.category}
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-3 neon-text-orange">
                {project.title}
              </h3>
              <p className="text-orange-200 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded text-xs text-orange-300 border border-orange-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <button className="w-full btn-sunset py-2 rounded-lg font-medium hover-sunset-scale">
                View Project
              </button>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Technologies We Use
            </h3>
            <p className="text-orange-200 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks that power our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center sunset-glass p-6 rounded-2xl hover-sunset-glow group"
              >
                <div className="text-4xl mb-4 animate-sunset-pulse group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h4 className={`text-lg font-semibold neon-text-${tech.color}`}>
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="sunset-glass p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Our Impact
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed", icon: "🎯" },
              { number: "50+", label: "Happy Clients", icon: "😊" },
              { number: "5+", label: "Years Experience", icon: "⏰" },
              { number: "99%", label: "Client Satisfaction", icon: "⭐" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-400/10 to-pink-400/10"
              >
                <div className="text-3xl mb-2 animate-sunset-pulse">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2 neon-text-orange">
                  {stat.number}
                </div>
                <div className="text-orange-200 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="sunset-glass p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 gradient-text-sunset">
              Ready to Start Your Project?
            </h3>
            <p className="text-orange-200 mb-8 text-lg">
              Let's create something amazing together with our unique sunset-inspired design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-sunset px-8 py-4 rounded-xl font-semibold hover-sunset-scale">
                Start Project
              </button>
              <button className="sunset-glass px-8 py-4 rounded-xl font-semibold text-white border border-orange-400/50 hover-sunset-glow transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-1/4 w-20 h-20 border border-purple-400/30 rounded-full animate-sunset-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 border border-orange-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 border border-pink-400/30 rounded-full animate-sunset-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
} 