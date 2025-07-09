import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Eleanor Whitmore",
      role: "Art Collector",
      content: "The restoration work on my grandmother's Victorian chair was exceptional. They preserved its original character while making it beautiful again.",
      rating: 5,
      avatar: "👵",
      year: "2023"
    },
    {
      name: "Marcus Chen",
      role: "Antique Dealer",
      content: "Their appraisal service is incredibly thorough. The detailed documentation helped me sell a rare piece for its true value.",
      rating: 5,
      avatar: "👨‍💼",
      year: "2023"
    },
    {
      name: "Isabella Rodriguez",
      role: "Interior Designer",
      content: "I've been sourcing vintage pieces from them for years. Their collection is always authentic and their expertise is unmatched.",
      rating: 5,
      avatar: "👩‍🎨",
      year: "2023"
    },
    {
      name: "Robert Thompson",
      role: "Museum Curator",
      content: "As a curator, I trust their conservation services completely. They understand the importance of preserving historical integrity.",
      rating: 5,
      avatar: "👨‍🏫",
      year: "2023"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-800 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            What our valued customers say about their experience with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-none border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 shadow-lg"
            >
              {/* Vintage frame decoration */}
              <div className="absolute inset-0 border-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">★</span>
                  ))}
                </div>
                
                {/* Quote marks */}
                <div className="text-4xl text-amber-300 mb-4">"</div>
                
                <p className="text-gray-700 leading-relaxed mb-6 font-serif italic">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-serif text-amber-800 font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 font-serif">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-amber-600 font-serif">
                    {testimonial.year}
                  </div>
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-serif text-amber-700 mb-2">500+</div>
              <div className="text-gray-600 font-serif">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-orange-700 mb-2">4.9/5</div>
              <div className="text-gray-600 font-serif">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-yellow-700 mb-2">50+</div>
              <div className="text-gray-600 font-serif">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif text-amber-700 mb-2">100%</div>
              <div className="text-gray-600 font-serif">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 