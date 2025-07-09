import React from 'react';

export default function NordicServices() {
  const services = [
    {
      icon: '🏠',
      title: 'Interior Design',
      description: 'Create harmonious living spaces with Scandinavian design principles',
      features: ['Space planning', 'Color consultation', 'Furniture selection', 'Lighting design']
    },
    {
      icon: '🌲',
      title: 'Wellness Coaching',
      description: 'Embrace the Nordic approach to health and well-being',
      features: ['Lifestyle guidance', 'Stress management', 'Mindfulness practices', 'Work-life balance']
    },
    {
      icon: '❄️',
      title: 'Minimalist Consulting',
      description: 'Simplify your life with expert decluttering and organization',
      features: ['Home organization', 'Digital decluttering', 'Time management', 'Sustainable choices']
    },
    {
      icon: '🧸',
      title: 'Hygge Workshops',
      description: 'Learn to create cozy, comfortable environments and moments',
      features: ['Home atmosphere', 'Seasonal rituals', 'Comfort practices', 'Social connection']
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/60 via-gray-50/60 to-blue-50/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800 tracking-wide">
            Nordic Services
          </h2>
          <p className="text-xl text-slate-600 font-light">
            ❄️ Professional guidance for authentic Nordic living 🌲
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service card with clean design */}
              <div className="relative p-8 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-slate-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-50/50 via-gray-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon and title */}
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4 animate-pulse">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-light text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                      <span className="text-slate-600 text-sm font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full px-6 py-3 bg-slate-800 text-white font-light rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  🌲 Learn More
                </button>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-200 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
            <h3 className="text-2xl font-light text-slate-800 mb-4">
              🏔️ Custom Nordic Experiences
            </h3>
            <p className="text-slate-600 mb-6 font-light">
              We can create personalized experiences tailored to your specific Nordic lifestyle goals
            </p>
            <button className="px-6 py-3 bg-slate-800 text-white font-light rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
              🌲 Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-slate-200 text-xl animate-bounce">
        🌲
      </div>
      <div className="absolute bottom-10 right-10 text-gray-200 text-xl animate-pulse">
        ❄️
      </div>
      <div className="absolute top-1/2 left-5 text-blue-200 text-lg animate-spin">
        🏔️
      </div>
      <div className="absolute top-1/3 right-5 text-slate-100 text-lg animate-bounce">
        🧸
      </div>
    </section>
  );
} 