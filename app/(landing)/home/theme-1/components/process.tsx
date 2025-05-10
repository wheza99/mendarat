export default function Process() {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start by understanding your vision, requirements, and budget to create a project roadmap."
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Our designers create detailed concepts and mood boards based on your preferences and needs."
    },
    {
      number: "03",
      title: "Design Refinement",
      description: "We refine the concepts based on your feedback until we achieve the perfect design solution."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Our team of experts brings your design to life with precision and attention to detail."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our proven design process ensures that each project is executed flawlessly,
            from initial concept to final implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="border border-gray-200 p-8 bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl font-bold text-black mb-6">{step.number}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-3 bg-black text-white hover:bg-opacity-90 transition duration-300">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
