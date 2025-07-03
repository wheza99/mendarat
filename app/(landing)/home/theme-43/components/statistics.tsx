export default function Statistics() {
  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="flex items-center gap-8 mb-12">
            <div className="text-8xl md:text-9xl font-extralight text-gray-300">
              04
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight">
                ACHIEVEMENTS
              </h2>
              <div className="w-24 h-px bg-blue-500 mt-4" />
            </div>
          </div>
        </div>

        {/* Main stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          {[
            {
              number: "150+",
              label: "PROJECTS COMPLETED",
              description: "Successful design solutions delivered across various industries and scales."
            },
            {
              number: "98%", 
              label: "CLIENT SATISFACTION",
              description: "Consistently exceeding expectations through collaborative design process."
            },
            {
              number: "5+",
              label: "YEARS EXPERIENCE", 
              description: "Deep expertise in Swiss design principles and modern methodology."
            },
            {
              number: "25+",
              label: "INTERNATIONAL AWARDS",
              description: "Recognition from leading design institutions and competitions worldwide."
            }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="space-y-6">
                <div className="text-5xl md:text-6xl font-extralight text-gray-900 swiss-fade" style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.number}
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm tracking-widest text-gray-500 font-light uppercase">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="space-y-16">
          <div className="text-center">
            <h3 className="text-3xl font-extralight text-gray-900 mb-4 tracking-tight">
              DESIGN PROCESS
            </h3>
            <p className="text-gray-600 font-light max-w-3xl mx-auto">
              Our systematic approach ensures every project achieves optimal results through structured methodology.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                phase: "RESEARCH",
                description: "Understanding context, constraints, and objectives through comprehensive analysis."
              },
              {
                step: "02",
                phase: "STRATEGY", 
                description: "Developing clear direction and framework for design decisions."
              },
              {
                step: "03",
                phase: "IDEATION",
                description: "Exploring multiple solutions while maintaining design principles."
              },
              {
                step: "04", 
                phase: "REFINEMENT",
                description: "Iterating and perfecting the chosen direction through testing."
              },
              {
                step: "05",
                phase: "DELIVERY",
                description: "Finalizing all deliverables with proper documentation and guidelines."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < 4 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-300" style={{ transform: 'translateX(-50%)' }} />
                )}
                
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 border-2 border-gray-300 mx-auto flex items-center justify-center minimal-pulse" style={{ animationDelay: `${index * 0.3}s` }}>
                      <div className="text-sm font-light text-gray-600">
                        {process.step}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-medium text-gray-900 tracking-wide">
                      {process.phase}
                    </h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client testimonial */}
        <div className="mt-32 bg-white p-16 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-extralight text-gray-700 leading-relaxed mb-8">
              "Their approach to design is methodical yet creative. Every decision is purposeful, 
              and the final result exceeds our highest expectations."
            </blockquote>
            <div className="space-y-2">
              <cite className="text-gray-900 font-medium">
                Sarah Chen
              </cite>
              <div className="text-sm text-gray-500 font-light tracking-wide">
                CREATIVE DIRECTOR, MINIMAL STUDIO
              </div>
            </div>
          </div>
        </div>

        {/* Awards section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-extralight text-gray-900 mb-4 tracking-tight">
              RECOGNITION
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center">
            {[
              "AWWWARDS",
              "CSS DESIGN", 
              "DRIBBBLE",
              "BEHANCE",
              "FWA"
            ].map((award, index) => (
              <div key={index} className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                <div className="text-lg font-light tracking-widest text-gray-600">
                  {award}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 