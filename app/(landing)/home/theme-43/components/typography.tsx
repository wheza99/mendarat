export default function Typography() {
  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-24">
          <div className="flex items-center gap-8 mb-12">
            <div className="text-8xl md:text-9xl font-extralight text-gray-300">
              02
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 tracking-tight">
                TYPOGRAPHY
              </h2>
              <div className="w-24 h-px bg-blue-500 mt-4" />
            </div>
          </div>
        </div>

        {/* Typography showcase */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left - Typography samples */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-7xl md:text-8xl font-extralight text-gray-900 leading-none tracking-tight">
                Aa
              </h3>
              <p className="text-gray-600 font-light">
                Helvetica Neue — The foundation of Swiss typography. Clean, neutral, and infinitely versatile.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-4xl font-extralight text-gray-900 mb-2">
                  Primary Typeface
                </div>
                <div className="text-gray-600 font-light">
                  Used for headlines and important information
                </div>
              </div>

              <div>
                <div className="text-xl font-light text-gray-700 mb-2">
                  Secondary Typography
                </div>
                <div className="text-gray-600 font-light">
                  Applied to body text and supporting content
                </div>
              </div>

              <div>
                <div className="text-sm tracking-widest text-gray-500 font-light uppercase mb-2">
                  ACCENT TYPOGRAPHY
                </div>
                <div className="text-gray-600 font-light text-sm">
                  Reserved for labels, captions, and micro-copy
                </div>
              </div>
            </div>
          </div>

          {/* Right - Design principles */}
          <div className="space-y-16">
            <div className="bg-white p-12 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
              <h4 className="text-2xl font-light text-gray-900 mb-6">
                Design Principles
              </h4>
              <div className="space-y-6">
                {[
                  {
                    principle: "Hierarchy",
                    description: "Clear typographic hierarchy guides the reader through content naturally and efficiently."
                  },
                  {
                    principle: "Readability", 
                    description: "Optimal line length, spacing, and contrast ensure comfortable reading experience."
                  },
                  {
                    principle: "Consistency",
                    description: "Systematic approach to typography creates visual harmony across all touchpoints."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-6 h-6 border border-gray-300 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900 mb-2">
                        {item.principle}
                      </div>
                      <div className="text-gray-600 font-light text-sm leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography scales */}
            <div className="space-y-6">
              <h4 className="text-lg font-medium text-gray-900">
                Scale & Rhythm
              </h4>
              <div className="space-y-4">
                {[
                  { size: "H1", px: "72px", example: "Headlines" },
                  { size: "H2", px: "48px", example: "Section Titles" },
                  { size: "H3", px: "32px", example: "Subsections" },
                  { size: "Body", px: "18px", example: "Primary Text" },
                  { size: "Caption", px: "14px", example: "Supporting Text" }
                ].map((scale, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center gap-4">
                      <div className="text-sm font-medium text-gray-900 w-12">
                        {scale.size}
                      </div>
                      <div className="text-sm text-gray-500">
                        {scale.px}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 font-light">
                      {scale.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-32 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-extralight text-gray-700 leading-relaxed mb-8">
              "Typography is the craft of endowing human language with a durable visual form."
            </blockquote>
            <cite className="text-sm tracking-widest text-gray-500 font-light uppercase">
              Robert Bringhurst
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
} 