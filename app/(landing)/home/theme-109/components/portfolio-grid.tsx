import React from 'react';

export default function PortfolioGrid() {
  const projects = [
    {
      title: "Brand Identity Design",
      category: "Branding",
      image: "🎨",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Web Application",
      category: "Development",
      image: "💻",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX",
      image: "📱",
      color: "from-pink-500 to-orange-600"
    },
    {
      title: "Marketing Campaign",
      category: "Marketing",
      image: "📢",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Print Design",
      category: "Print",
      image: "🖨️",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Video Production",
      category: "Video",
      image: "🎬",
      color: "from-red-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest creative projects and see how we bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Project image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                {project.image}
              </div>
              
              {/* Project info */}
              <div className="p-6">
                <div className="text-sm text-gray-500 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl mb-2">👁️</div>
                    <div className="font-bold">View Project</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all projects button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
} 