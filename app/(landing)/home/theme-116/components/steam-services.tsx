import React from 'react';

export default function SteamServices() {
  const services = [
    {
      icon: "⚙️",
      title: "Steam Engine Repair",
      description: "Expert repair and maintenance of steam engines",
      price: "From $500",
      duration: "2-5 days",
      features: ["Diagnostic Testing", "Parts Replacement", "Performance Tuning"]
    },
    {
      icon: "🔧",
      title: "Mechanical Assembly",
      description: "Custom mechanical system assembly",
      price: "From $1,200",
      duration: "1-2 weeks",
      features: ["Custom Design", "Precision Assembly", "Quality Testing"]
    },
    {
      icon: "🚂",
      title: "Locomotive Service",
      description: "Steam locomotive restoration and service",
      price: "From $3,000",
      duration: "2-4 weeks",
      features: ["Full Restoration", "Safety Inspection", "Performance Testing"]
    },
    {
      icon: "🔩",
      title: "Brass Fitting Installation",
      description: "Professional brass fitting installation",
      price: "From $300",
      duration: "1-3 days",
      features: ["Precision Installation", "Leak Testing", "Quality Assurance"]
    },
    {
      icon: "⚡",
      title: "Steam Power Consulting",
      description: "Expert steam power system consulting",
      price: "From $200/hr",
      duration: "As needed",
      features: ["System Design", "Efficiency Analysis", "Safety Review"]
    },
    {
      icon: "🏭",
      title: "Industrial Training",
      description: "Steam power operation training",
      price: "From $150/day",
      duration: "1-5 days",
      features: ["Hands-on Training", "Safety Procedures", "Maintenance Skills"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            STEAM SERVICES
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Professional steam engineering and mechanical services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              {/* Service icon */}
              <div className="text-4xl mb-6">{service.icon}</div>
              
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-serif">
                {service.title}
              </h3>
              
              <p className="text-amber-200 mb-6 leading-relaxed font-serif">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Price:</span>
                  <span className="text-amber-400 font-bold font-serif">{service.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Duration:</span>
                  <span className="text-amber-400 font-bold font-serif">{service.duration}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-amber-300 font-semibold mb-3 font-serif">Includes:</h4>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-amber-400 mr-2">⚙️</span>
                      <span className="text-amber-200 text-sm font-serif">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action button */}
              <div className="mt-6">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                  BOOK SERVICE
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Service guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-2xl border border-amber-500/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-4 font-serif">
              STEAM POWER GUARANTEE
            </h3>
            <p className="text-amber-200 mb-6 max-w-md mx-auto font-serif">
              All our services come with a 100% satisfaction guarantee and 2-year warranty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                GET QUOTE
              </button>
              <button className="px-6 py-3 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-amber-900 transition-all duration-300 font-serif">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 