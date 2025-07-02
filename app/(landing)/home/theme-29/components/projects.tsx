"use client";

import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "EcoTech Marketplace",
      category: "ecommerce",
      status: "flourishing",
      description: "Sustainable marketplace connecting eco-conscious consumers with green products.",
      growth: "350% organic traffic increase",
      impact: "50K+ eco-friendly purchases",
      image: "🌱",
      color: "from-green-400 to-emerald-600",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      id: 2,
      title: "GreenSpace Community",
      category: "social",
      status: "growing",
      description: "Social platform for environmental activists and sustainability enthusiasts.",
      growth: "10K+ active community members",
      impact: "500+ environmental projects",
      image: "🌿",
      color: "from-emerald-400 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100"
    },
    {
      id: 3,
      title: "CleanEnergy Dashboard",
      category: "saas",
      status: "mature",
      description: "Analytics platform for renewable energy monitoring and optimization.",
      growth: "95% client retention rate",
      impact: "1M+ kWh energy optimized",
      image: "⚡",
      color: "from-teal-400 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-100"
    },
    {
      id: 4,
      title: "Urban Garden App",
      category: "mobile",
      status: "sprouting",
      description: "Mobile app helping city dwellers create and maintain urban gardens.",
      growth: "25K+ app downloads",
      impact: "5K+ urban gardens created",
      image: "🏙️",
      color: "from-cyan-400 to-blue-600",
      bgColor: "from-cyan-50 to-blue-100"
    },
    {
      id: 5,
      title: "Sustainable Supply Chain",
      category: "enterprise",
      status: "flourishing",
      description: "Enterprise solution for tracking and optimizing sustainable supply chains.",
      growth: "200+ enterprise clients",
      impact: "30% carbon footprint reduction",
      image: "🚛",
      color: "from-blue-400 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100"
    },
    {
      id: 6,
      title: "Ocean Cleanup Tracker",
      category: "nonprofit",
      status: "growing",
      description: "Platform for tracking and coordinating ocean cleanup initiatives worldwide.",
      growth: "100+ cleanup organizations",
      impact: "500 tons of ocean waste removed",
      image: "🌊",
      color: "from-indigo-400 to-purple-600",
      bgColor: "from-indigo-50 to-purple-100"
    }
  ];

  const filters = [
    { id: "all", label: "All Ecosystems", icon: "🌍" },
    { id: "ecommerce", label: "E-commerce", icon: "🛒" },
    { id: "social", label: "Social", icon: "👥" },
    { id: "saas", label: "SaaS", icon: "☁️" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "enterprise", label: "Enterprise", icon: "🏢" },
    { id: "nonprofit", label: "Non-profit", icon: "❤️" }
  ];

  const statusConfig = {
    sprouting: { icon: "🌱", label: "Sprouting", color: "text-green-600 bg-green-100" },
    growing: { icon: "🌿", label: "Growing", color: "text-emerald-600 bg-emerald-100" },
    mature: { icon: "🌳", label: "Mature", color: "text-teal-600 bg-teal-100" },
    flourishing: { icon: "🌸", label: "Flourishing", color: "text-cyan-600 bg-cyan-100" }
  };

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-48 h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-32 h-64 bg-gradient-to-t from-teal-200 to-cyan-300 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full mb-6">
            <span className="text-3xl">🌳</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Our Growing Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the flourishing digital ecosystems we've cultivated, each one growing sustainably 
            and making a positive impact on the world.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <span className="text-lg mr-2">{filter.icon}</span>
              <span>{filter.label}</span>
              {activeFilter === filter.id && (
                <div className="ml-2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br ${project.bgColor} rounded-3xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full blur-sm"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Project Icon & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusConfig[project.status as keyof typeof statusConfig].color}`}>
                    <span className="mr-1">{statusConfig[project.status as keyof typeof statusConfig].icon}</span>
                    {statusConfig[project.status as keyof typeof statusConfig].label}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium">Growth:</span>
                    <span className="ml-1">{project.growth}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium">Impact:</span>
                    <span className="ml-1">{project.impact}</span>
                  </div>
                </div>

                {/* Growth Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                    <span>Ecosystem Health</span>
                    <span>
                      {project.status === 'sprouting' ? '25%' : 
                       project.status === 'growing' ? '60%' : 
                       project.status === 'mature' ? '85%' : '95%'}
                    </span>
                  </div>
                  <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${project.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: project.status === 'sprouting' ? '25%' : 
                               project.status === 'growing' ? '60%' : 
                               project.status === 'mature' ? '85%' : '95%'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="group/btn w-full py-3 bg-white/70 hover:bg-white text-gray-700 hover:text-gray-800 rounded-xl font-medium transition-all duration-300 hover:shadow-md">
                  <span className="flex items-center justify-center">
                    Explore Ecosystem
                    <div className="ml-2 text-lg group-hover/btn:animate-bounce">🔍</div>
                  </span>
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to See Your Project Flourish? 🌸
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our growing portfolio of successful digital ecosystems. Let's cultivate 
              something beautiful together that makes a lasting positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <span>Plant Your Idea</span>
                <div className="ml-2 text-xl group-hover:animate-bounce">🌱</div>
              </button>
              <button className="group inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-600 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-50 hover:scale-105">
                <span>View All Projects</span>
                <div className="ml-2 text-lg group-hover:animate-pulse">🌿</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 