import React from 'react';

export default function CreativeHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative">
      {/* Bold geometric accent */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-pink-500 to-orange-500 transform -rotate-12 opacity-20"></div>
      
      {/* Main heading with creative typography */}
      <div className="relative mb-8">
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4 tracking-tight">
          CREATE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            INSPIRE
          </span>
        </h1>
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 transform rotate-45 animate-pulse"></div>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-8 leading-relaxed font-light">
        We transform ideas into extraordinary experiences. 
        Our creative agency brings your vision to life with innovative design and strategic thinking.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
          <span className="relative z-10">Start Project</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
        <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
          View Portfolio
        </button>
      </div>
      
      {/* Creative stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="text-4xl font-black text-blue-600 mb-2">150+</div>
          <div className="text-gray-600 font-medium">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-purple-600 mb-2">50+</div>
          <div className="text-gray-600 font-medium">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-black text-pink-600 mb-2">5+</div>
          <div className="text-gray-600 font-medium">Years Experience</div>
        </div>
      </div>
    </section>
  );
} 