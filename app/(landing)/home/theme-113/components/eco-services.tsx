import React from 'react';

export default function EcoServices() {
  const services = [
    {
      title: 'Zero Waste Consultation',
      description: 'Personalized guidance to help you transition to a zero-waste lifestyle',
      icon: '♻️',
      price: 'From $99',
      duration: '2-4 hours',
      features: ['Home Assessment', 'Custom Plan', 'Follow-up Support']
    },
    {
      title: 'Sustainable Living Workshops',
      description: 'Learn practical skills for reducing your environmental footprint',
      icon: '🌱',
      price: 'From $49',
      duration: '3-6 hours',
      features: ['DIY Products', 'Composting', 'Upcycling']
    },
    {
      title: 'Corporate Sustainability',
      description: 'Help your business implement eco-friendly practices and policies',
      icon: '🏢',
      price: 'From $299',
      duration: '1-2 days',
      features: ['Audit & Assessment', 'Policy Development', 'Employee Training']
    },
    {
      title: 'Eco Product Reviews',
      description: 'Expert reviews and recommendations for sustainable products',
      icon: '🔍',
      price: 'From $29',
      duration: '1 hour',
      features: ['Product Testing', 'Honest Reviews', 'Buying Guides']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6">
            SUSTAINABLE SERVICES
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Expert guidance and support for your sustainable living journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Nature effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-green-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-green-600">{service.price}</div>
                  <div className="text-sm text-green-500">{service.duration}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Animated button */}
                <button className="group/btn relative px-6 py-3 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 overflow-hidden font-bold">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Green decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              CUSTOM SUSTAINABILITY PLAN?
            </h3>
            <p className="text-green-600 mb-6 max-w-md mx-auto">
              Let us create a personalized sustainability plan for your lifestyle
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 