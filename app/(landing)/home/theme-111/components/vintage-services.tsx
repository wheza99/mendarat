import React from 'react';

export default function VintageServices() {
  const services = [
    {
      title: 'Antique Appraisal',
      description: 'Professional evaluation of antique value and authenticity',
      icon: '🔍',
      price: '$150',
      duration: '2-3 hours',
      features: ['Detailed Report', 'Photographic Documentation', 'Market Analysis']
    },
    {
      title: 'Restoration & Repair',
      description: 'Expert restoration of damaged or worn antique pieces',
      icon: '🛠️',
      price: 'From $200',
      duration: '1-4 weeks',
      features: ['Wood Restoration', 'Metal Polishing', 'Fabric Repair']
    },
    {
      title: 'Custom Framing',
      description: 'Traditional and modern framing for artwork and memorabilia',
      icon: '🖼️',
      price: 'From $75',
      duration: '3-5 days',
      features: ['Museum Quality', 'UV Protection', 'Custom Design']
    },
    {
      title: 'Conservation',
      description: 'Preservation services to maintain antique condition',
      icon: '🛡️',
      price: 'From $300',
      duration: '2-6 weeks',
      features: ['Climate Control', 'Pest Prevention', 'Condition Monitoring']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
            Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            Expert care and preservation for your most precious vintage pieces
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-none border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 shadow-lg"
            >
              {/* Vintage frame effect */}
              <div className="absolute inset-0 border-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-serif text-amber-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-serif">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-serif text-amber-700">{service.price}</div>
                  <div className="text-sm text-gray-500 font-serif">{service.duration}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 font-serif">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Animated button */}
                <button className="group/btn relative px-6 py-3 border-2 border-amber-600 text-amber-700 rounded-none hover:bg-amber-600 hover:text-white transition-all duration-300 overflow-hidden font-serif">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-white/90 backdrop-blur-sm rounded-none border-2 border-amber-200 shadow-lg">
            <h3 className="text-2xl font-serif text-amber-800 mb-4">
              NEED EXPERT ADVICE?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto font-serif italic">
              Schedule a consultation with our antique specialists
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-serif text-lg rounded-none shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 border-2 border-amber-700">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 