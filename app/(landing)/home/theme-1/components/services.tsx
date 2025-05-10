export default function Services() {
  const serviceItems = [
    {
      title: "Interior Design",
      description: "Complete design solutions tailored to your lifestyle and preferences.",
      icon: "🏠"
    },
    {
      title: "Architectural Planning",
      description: "Comprehensive architectural services for new builds and renovations.",
      icon: "📐"
    },
    {
      title: "Custom Furniture",
      description: "Bespoke furniture designs that combine aesthetics with functionality.",
      icon: "🪑"
    },
    {
      title: "Space Optimization",
      description: "Smart solutions to maximize your space without compromising on style.",
      icon: "✨"
    },
    {
      title: "Lighting Design",
      description: "Strategic lighting plans that enhance atmosphere and functionality.",
      icon: "💡"
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly solutions that minimize environmental impact.",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a comprehensive range of interior design and architectural services 
            to transform your space into something extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="#" className="inline-block mt-4 text-black border-b border-black pb-1 hover:border-opacity-50 transition-all duration-200">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
