import { testimonialsSectionCopy } from "../copy";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#001a2e] to-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {testimonialsSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC]">{testimonialsSectionCopy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsSectionCopy.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border border-[#40E0D0]/20 rounded-3xl p-8 hover:border-[#40E0D0]/40 transition-all duration-300"
            >
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-[#40E0D0] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}