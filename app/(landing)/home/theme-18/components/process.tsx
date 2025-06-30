"use client";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery Phase", 
      description: "Analisis mendalam terhadap kebutuhan dan visi digital klien",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Design System",
      description: "Pembuatan design system dengan aesthetic futuristik",
      icon: "🎨"
    },
    {
      number: "03", 
      title: "Development",
      description: "Pengembangan dengan teknologi cutting-edge",
      icon: "⚡"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Peluncuran project dan maintenance berkala",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Proses Digital Workflow
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group text-center relative">
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="text-4xl font-black text-pink-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400 opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 