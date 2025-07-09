import React from 'react';

export default function ServicesShowcase() {
  const services = [
    {
      icon: "🎨",
      title: "Brand Identity",
      description: "Create memorable brand experiences with strategic design and visual storytelling",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Build stunning websites and applications that drive results and engage users",
      features: ["Custom Websites", "E-commerce", "Web Applications"]
    },
    {
      icon: "📱",
      title: "UI/UX Design",
      description: "Design intuitive user experiences that delight and convert your audience",
      features: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: "📢",
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that grow your business and reach your goals",
      features: ["Social Media", "Content Strategy", "SEO Optimization"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions to help your business stand out and succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-blue-600 font-bold hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Let's discuss how we can help bring your creative vision to life
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 