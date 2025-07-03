export default function Portfolio() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="flex items-center gap-8 mb-12">
            <div className="text-8xl md:text-9xl font-extralight text-gray-300">
              03
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight">
                PORTFOLIO
              </h2>
              <div className="w-24 h-px bg-blue-500 mt-4" />
            </div>
          </div>
          <p className="text-xl text-gray-600 font-light max-w-3xl">
            Selected works that demonstrate our commitment to functional beauty and design excellence.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="space-y-32">
          {[
            {
              number: "001",
              title: "MINIMAL ARCHITECTURE",
              category: "Brand Identity",
              year: "2024",
              description: "Complete visual identity for a contemporary architecture firm focused on minimalist residential design."
            },
            {
              number: "002", 
              title: "STUDIO HELVETICA",
              category: "Digital Design",
              year: "2024",
              description: "Digital platform redesign emphasizing typography and user experience for a design consultancy."
            },
            {
              number: "003",
              title: "MODERN LIVING",
              category: "Editorial Design", 
              year: "2023",
              description: "Art direction and layout design for a quarterly magazine celebrating contemporary lifestyle."
            }
          ].map((project, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Project info */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl font-extralight text-blue-500 swiss-fade">
                        {project.number}
                      </div>
                      <div className="text-sm tracking-widest text-gray-500 font-light uppercase">
                        {project.category} • {project.year}
                      </div>
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-xl text-gray-600 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-3 text-gray-700 font-light tracking-wide hover:text-gray-900 transition-colors duration-300 group">
                      <span>VIEW PROJECT</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    
                    <div className="w-px h-6 bg-gray-300" />
                    
                    <button className="text-gray-500 font-light tracking-wide hover:text-gray-700 transition-colors duration-300">
                      CASE STUDY
                    </button>
                  </div>
                </div>

                {/* Project visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden group-hover:bg-gray-200 transition-colors duration-500">
                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
                      backgroundSize: '32px 32px'
                    }} />
                    
                    {/* Visual elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Main shape */}
                        <div className="w-40 h-40 border-2 border-gray-400 geometric-float" />
                        
                        {/* Accent elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 geometric-float" style={{ animationDelay: '0.3s' }} />
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 border border-gray-300 geometric-float" style={{ animationDelay: '0.6s' }} />
                      </div>
                    </div>
                    
                    {/* Project label */}
                    <div className="absolute top-6 left-6">
                      <div className="text-sm tracking-widest text-gray-500 font-light uppercase">
                        {project.category}
                      </div>
                    </div>
                    
                    {/* Year badge */}
                    <div className="absolute bottom-6 right-6">
                      <div className="w-12 h-12 border border-gray-400 flex items-center justify-center">
                        <div className="text-xs text-gray-600 font-light">
                          {project.year.slice(-2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-4 px-12 py-4 border-2 border-gray-900 text-gray-900 font-light tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">
            <span>VIEW ALL PROJECTS</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 