export default function Features() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24 text-center">
          <div className="w-16 h-1 bg-gray-900 mx-auto mb-8" />
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6 tracking-tight">
            SERVICES
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Comprehensive design solutions crafted with precision and purpose
          </p>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left column - Feature list */}
          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Brand Identity",
                description: "Complete visual identity systems that communicate your brand's essence through carefully curated typography, color, and form.",
                details: ["Logo Design", "Typography Systems", "Color Palettes", "Brand Guidelines"]
              },
              {
                number: "02", 
                title: "Digital Design",
                description: "User-centered digital experiences built on solid design principles with attention to every interaction detail.",
                details: ["Web Design", "App Interfaces", "User Experience", "Design Systems"]
              },
              {
                number: "03",
                title: "Print Design",
                description: "Timeless print solutions that merge traditional craftsmanship with contemporary design thinking.",
                details: ["Editorial Design", "Packaging", "Collateral", "Publication"]
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-8">
                  <div className="text-6xl font-extralight text-blue-500 swiss-fade">
                    {feature.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="text-sm text-gray-500 font-light tracking-wide">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Visual element */}
          <div className="relative">
            <div className="sticky top-32">
              {/* Main visual */}
              <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
                
                {/* Geometric shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 border-2 border-gray-400 geometric-float" />
                    <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/20 geometric-float" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 border border-gray-300 geometric-float" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                {/* Typography overlay */}
                <div className="absolute bottom-8 left-8">
                  <div className="text-4xl font-extralight text-gray-700 tracking-tight">
                    FORM
                  </div>
                  <div className="w-12 h-px bg-gray-400 mt-2" />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { number: "150+", label: "PROJECTS" },
                  { number: "98%", label: "SATISFACTION" },
                  { number: "5+", label: "YEARS" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-extralight text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-500 tracking-widest font-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-3 border border-gray-300 hover:border-gray-900 transition-colors duration-300 cursor-pointer group">
            <span className="text-gray-700 font-light tracking-wide">EXPLORE ALL SERVICES</span>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-700 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
} 