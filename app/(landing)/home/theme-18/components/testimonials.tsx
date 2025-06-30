"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechStart",
      content: "Tim ini benar-benar memahami visi futuristik kami. Hasil website yang mereka buat sangat memukau dengan aesthetic neon yang perfect!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
    },
    {
      name: "David Kim", 
      position: "Founder, GameCorp",
      content: "UI/UX yang dibuat sangat inovatif dan sesuai dengan target audience gaming kami. Performa website juga luar biasa cepat!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Lisa Wang",
      position: "CMO, DigitalCorp", 
      content: "Proses kerjasama yang profesional dan hasil akhir yang beyond expectation. Brand identity kami menjadi lebih kuat dan memorable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b72f5fb2?w=100&h=100&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Suara dari Masa Depan
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-black/70 border border-purple-500/30 hover:border-cyan-400/60 transition-all duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-pink-500/50"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 