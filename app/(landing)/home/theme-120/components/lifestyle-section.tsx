import React from 'react';

export default function LifestyleSection() {
  const events = [
    {
      title: 'Nordic Design Week',
      date: 'March 10-16',
      description: 'Explore the latest trends in Scandinavian design and architecture',
      icon: '🏠',
      status: 'Upcoming'
    },
    {
      title: 'Hygge Winter Retreat',
      date: 'April 5-8',
      description: 'Experience authentic Danish coziness in a mountain setting',
      icon: '🧸',
      status: 'Registration Open'
    },
    {
      title: 'Minimalist Living Workshop',
      date: 'May 15-17',
      description: 'Learn to declutter and organize your life the Nordic way',
      icon: '❄️',
      status: 'Coming Soon'
    },
    {
      title: 'Sustainable Nordic Cooking',
      date: 'June 1-30',
      description: 'Master traditional Scandinavian recipes and techniques',
      icon: '🍽️',
      status: 'Planning'
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/60 via-slate-50/60 to-blue-50/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800 tracking-wide">
            Lifestyle Events
          </h2>
          <p className="text-xl text-slate-600 font-light">
            🌲 Immerse yourself in authentic Nordic living ❄️
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="group relative">
              {/* Event card with clean design */}
              <div className="relative p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-slate-300 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-50/50 via-gray-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Header with icon and status */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-2xl animate-pulse">
                    {event.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-light bg-slate-800 text-white rounded-full">
                    {event.status}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-light mb-2 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3 font-light">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-light text-sm">
                      📅 {event.date}
                    </span>
                    <button className="px-4 py-2 bg-slate-800 text-white text-sm font-light rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                      🌲 Details
                    </button>
                  </div>
                </div>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-slate-200 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
            <div className="text-3xl mb-4 animate-bounce">
              🏠
            </div>
            <h3 className="text-lg font-light text-slate-800 mb-2">
              Functional Beauty
            </h3>
            <p className="text-slate-600 text-sm font-light">
              Design that serves both form and function in perfect harmony
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
            <div className="text-3xl mb-4 animate-pulse">
              ❄️
            </div>
            <h3 className="text-lg font-light text-slate-800 mb-2">
              Natural Simplicity
            </h3>
            <p className="text-slate-600 text-sm font-light">
              Embrace the beauty of uncluttered, natural living spaces
            </p>
          </div>

          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
            <div className="text-3xl mb-4 animate-spin">
              🌲
            </div>
            <h3 className="text-lg font-light text-slate-800 mb-2">
              Sustainable Living
            </h3>
            <p className="text-slate-600 text-sm font-light">
              Eco-conscious choices that respect nature and future generations
            </p>
          </div>
        </div>
      </div>

      {/* Floating Nordic elements */}
      <div className="absolute top-20 left-20 text-slate-200 text-xl animate-bounce">
        🌲
      </div>
      <div className="absolute bottom-20 right-20 text-gray-200 text-xl animate-pulse">
        ❄️
      </div>
      <div className="absolute top-1/2 left-10 text-blue-200 text-lg animate-spin">
        🏔️
      </div>
      <div className="absolute top-1/3 right-10 text-slate-100 text-lg animate-bounce">
        🧸
      </div>
    </section>
  );
} 