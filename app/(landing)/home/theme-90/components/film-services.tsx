import React from 'react';

export default function FilmServices() {
  const services = [
    {
      title: "Cinematic Production",
      description: "Full-service film production with noir aesthetics and modern neon elements.",
      price: "$5,000",
      features: ["Story Development", "Cinematography", "Neon Lighting", "Post-Production"],
      color: "red"
    },
    {
      title: "Neon Design",
      description: "Custom neon installations and lighting design for your projects.",
      price: "$2,500",
      features: ["Custom Designs", "Installation", "Maintenance", "Warranty"],
      color: "blue"
    },
    {
      title: "Film Noir Consulting",
      description: "Expert consultation for achieving the perfect noir atmosphere.",
      price: "$1,500",
      features: ["Lighting Design", "Set Decoration", "Color Grading", "Sound Design"],
      color: "purple"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 blur-3xl animate-noir-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl animate-noir-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Film Grain */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,transparent_50%)] bg-[length:2px_2px] animate-noir-grain"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              FILM SERVICES
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional film noir and neon design services for your creative vision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-500 hover:scale-105"
            >
              {/* Neon Border Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${service.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Service Header */}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-semibold mb-2 text-${service.color}-400 group-hover:text-${service.color}-300 transition-colors duration-300`}>
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <div className={`text-3xl font-bold text-${service.color}-400`}>
                  {service.price}
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 bg-${service.color}-400 rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${service.color}-500/50`}>
                Get Started
              </button>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${service.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Cinematic Accent Lines */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent rounded-full animate-noir-pulse"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full animate-noir-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full animate-noir-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-6 h-6 border border-red-500/30 rounded-full animate-noir-float"></div>
      <div className="absolute bottom-20 left-10 w-8 h-8 border border-blue-500/30 rounded-full animate-noir-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 border border-purple-500/30 rounded-full animate-noir-float" style={{animationDelay: '8s'}}></div>
    </section>
  );
} 