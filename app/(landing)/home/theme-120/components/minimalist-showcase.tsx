import React from 'react';

export default function MinimalistShowcase() {
  const showcaseItems = [
    {
      title: 'Scandinavian Furniture',
      description: 'Clean, functional pieces for modern living',
      image: '🪑',
      price: '€1,200',
      category: 'Furniture'
    },
    {
      title: 'Hygge Home Decor',
      description: 'Cozy accessories for comfortable living',
      image: '🕯️',
      price: '€85',
      category: 'Decor'
    },
    {
      title: 'Nordic Wellness Retreat',
      description: 'Experience authentic Scandinavian wellness',
      image: '🧘',
      price: '€450',
      category: 'Wellness'
    },
    {
      title: 'Minimalist Design Course',
      description: 'Learn the principles of Nordic design',
      image: '📐',
      price: '€180',
      category: 'Education'
    },
    {
      title: 'Sustainable Living Guide',
      description: 'Eco-friendly practices for modern life',
      image: '🌱',
      price: '€65',
      category: 'Lifestyle'
    },
    {
      title: 'Nordic Cooking Workshop',
      description: 'Traditional Scandinavian cuisine',
      image: '🍽️',
      price: '€120',
      category: 'Culinary'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-slate-50/60 to-gray-50/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800 tracking-wide">
            Minimalist Showcase
          </h2>
          <p className="text-xl text-slate-600 font-light">
            🏔️ Curated Nordic lifestyle essentials ❄️
          </p>
        </div>

        {/* Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card with clean design */}
              <div className="relative p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-slate-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-50/50 via-gray-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-light bg-slate-800 text-white rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Image/Icon */}
                <div className="text-4xl mb-4 text-center animate-pulse">
                  {item.image}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-light mb-3 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed font-light">
                    {item.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-light text-slate-800">
                      {item.price}
                    </span>
                    <button className="px-4 py-2 bg-slate-800 text-white text-sm font-light rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                      🌲 Explore
                    </button>
                  </div>
                </div>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-200 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-slate-800 text-white font-light rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-sm">
            🏔️ View All Products
          </button>
        </div>
      </div>

      {/* Floating Nordic elements */}
      <div className="absolute top-20 left-20 text-slate-300 text-2xl animate-bounce">
        🌲
      </div>
      <div className="absolute bottom-20 right-20 text-gray-300 text-2xl animate-pulse">
        ❄️
      </div>
      <div className="absolute top-1/2 left-10 text-blue-300 text-xl animate-spin">
        🏔️
      </div>
      <div className="absolute top-1/3 right-10 text-slate-200 text-xl animate-bounce">
        🧸
      </div>
    </section>
  );
} 