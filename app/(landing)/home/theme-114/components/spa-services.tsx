import React from 'react';

export default function SpaServices() {
  const services = [
    {
      title: 'Couples Retreat',
      description: 'Romantic spa packages for couples seeking relaxation together',
      icon: '💑',
      price: 'From $299',
      duration: '3-4 hours',
      features: ['Dual Massage', 'Champagne Service', 'Private Suite']
    },
    {
      title: 'Corporate Wellness',
      description: 'Team building and stress relief programs for businesses',
      icon: '🏢',
      price: 'From $199',
      duration: '2-3 hours',
      features: ['Group Sessions', 'Stress Management', 'Team Bonding']
    },
    {
      title: 'Bridal Packages',
      description: 'Pre-wedding pampering and beauty treatments for brides',
      icon: '👰',
      price: 'From $399',
      duration: '4-6 hours',
      features: ['Bridal Party', 'Hair & Makeup', 'Photography']
    },
    {
      title: 'Wellness Coaching',
      description: 'Personal wellness guidance and lifestyle transformation',
      icon: '🧘‍♀️',
      price: 'From $89',
      duration: '1-2 hours',
      features: ['Personal Assessment', 'Custom Plan', 'Follow-up']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6">
            SPA SERVICES
          </h2>
          <p className="text-xl text-rose-700 max-w-2xl mx-auto">
            Specialized wellness services tailored to your unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl border border-rose-200 hover:border-rose-300 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Zen effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-rose-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-rose-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-rose-600">{service.price}</div>
                  <div className="text-sm text-rose-500">{service.duration}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-rose-600">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Animated button */}
                <button className="group/btn relative px-6 py-3 border-2 border-rose-500 text-rose-600 rounded-lg hover:bg-rose-500 hover:text-white transition-all duration-300 overflow-hidden font-bold">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-rose-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Soft decoration */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-200 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-rose-800 mb-4">
              CUSTOM WELLNESS PACKAGE?
            </h3>
            <p className="text-rose-600 mb-6 max-w-md mx-auto">
              Let us create a personalized wellness experience just for you
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 