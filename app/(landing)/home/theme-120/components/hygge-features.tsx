import React from 'react';

export default function HyggeFeatures() {
  const features = [
    {
      icon: '🏠',
      title: 'Cozy Living',
      description: 'Create warm, inviting spaces that promote comfort and well-being',
      color: 'from-slate-100 to-gray-100'
    },
    {
      icon: '🌲',
      title: 'Natural Elements',
      description: 'Incorporate wood, stone, and plants for organic beauty',
      color: 'from-gray-100 to-blue-100'
    },
    {
      icon: '❄️',
      title: 'Minimalist Design',
      description: 'Clean lines and uncluttered spaces for peaceful living',
      color: 'from-blue-100 to-slate-100'
    },
    {
      icon: '🧸',
      title: 'Hygge Philosophy',
      description: 'Embrace the Danish art of creating cozy, comfortable moments',
      color: 'from-slate-100 to-gray-100'
    },
    {
      icon: '🏔️',
      title: 'Nordic Aesthetics',
      description: 'Timeless design inspired by Scandinavian landscapes',
      color: 'from-gray-100 to-blue-100'
    },
    {
      icon: '🦊',
      title: 'Sustainable Living',
      description: 'Eco-friendly choices that respect nature and future generations',
      color: 'from-blue-100 to-slate-100'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-slate-50/50 to-blue-50/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800 tracking-wide">
            Hygge Features
          </h2>
          <p className="text-xl text-slate-600 font-light">
            🌲 Discover the art of Nordic living ❄️
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card with clean design */}
              <div className="relative p-8 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-slate-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-50/50 via-gray-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="text-4xl mb-6 text-center animate-pulse">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-light mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-200 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 text-slate-300 text-xl animate-bounce">
          🌲
        </div>
        <div className="absolute bottom-10 right-10 text-gray-300 text-xl animate-pulse">
          ❄️
        </div>
        <div className="absolute top-1/2 left-5 text-blue-300 text-lg animate-spin">
          🏔️
        </div>
        <div className="absolute top-1/3 right-5 text-slate-200 text-lg animate-bounce">
          🧸
        </div>
      </div>

      {/* Subtle accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
} 