import { processSectionCopy } from "../copy";

export default function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#003366] to-[#001a2e] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {processSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC]">{processSectionCopy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSectionCopy.steps.map((step, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border border-[#40E0D0]/20 rounded-3xl p-8 hover:border-[#40E0D0]/40 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#40E0D0] to-[#48D1CC] rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}