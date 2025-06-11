import { clientsSectionCopy } from "../copy";

export default function Clients() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#004080] to-[#003366] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#40E0D0] to-[#87CEEB]">
            {clientsSectionCopy.title}
          </h2>
          <p className="text-xl text-[#48D1CC]">{clientsSectionCopy.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientsSectionCopy.clients.map((client, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#40E0D0]/10 to-[#48D1CC]/10 backdrop-blur-sm border border-[#40E0D0]/20 rounded-2xl hover:border-[#40E0D0]/40 transition-all duration-300"
            >
              <p className="text-[#87CEEB] font-medium text-sm">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}