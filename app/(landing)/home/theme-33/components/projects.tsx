'use client';

import theme33Copy from '../copy';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce solution with advanced filtering, payment integration, and responsive design.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "🛍️"
  },
  {
    title: "Mobile Banking App",
    category: "UI/UX Design",
    description: "Intuitive mobile banking interface with biometric authentication and real-time notifications.",
    tech: ["Figma", "React Native", "Biometric API", "Push Notifications"],
    image: "💳"
  },
  {
    title: "Brand Identity System",
    category: "Branding",
    description: "Complete brand identity including logo, guidelines, and marketing materials for tech startup.",
    tech: ["Adobe Creative Suite", "Brand Guidelines", "Print Design", "Digital Assets"],
    image: "🎯"
  },
  {
    title: "SaaS Dashboard",
    category: "Product Design",
    description: "Analytics dashboard with data visualization, real-time updates, and customizable widgets.",
    tech: ["Vue.js", "D3.js", "WebSocket", "Chart.js"],
    image: "📊"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-r from-indigo-200/20 to-pink-200/20 rounded-3xl rotate-12 blur-xl" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-white/10 backdrop-blur-sm rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 p-8 inline-block shadow-lg">
            <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
              {theme33Copy.projects.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
              {theme33Copy.projects.subtitle}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Glass Card */}
              <div className="bg-white/25 backdrop-blur-lg border border-white/40 rounded-3xl p-8 hover:bg-white/35 transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-full px-4 py-2">
                      <span className="text-xs text-gray-700 font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-white/40 backdrop-blur-md border border-white/50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-400/60 rounded-full animate-ping" />
              </div>

              {/* Project Number */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg backdrop-blur-sm">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/30 backdrop-blur-lg rounded-3xl border border-white/40 p-6 inline-block shadow-lg">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 