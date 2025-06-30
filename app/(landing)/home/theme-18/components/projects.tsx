"use client";

export default function Projects() {
  const projects = [
    {
      title: "Neon Commerce",
      category: "E-commerce",
      description: "Platform e-commerce dengan UI futuristik",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      title: "Tokyo Gaming Hub", 
      category: "Web Design",
      description: "Gaming platform dengan aesthetic J-pop",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
    },
    {
      title: "Hologram Mobile",
      category: "Mobile App", 
      description: "Mobile app dengan holographic UI",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio Futuristik
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-black/70 border border-purple-500/30 hover:border-cyan-400/60 transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-cyan-400 text-sm mb-3">{project.category}</p>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 