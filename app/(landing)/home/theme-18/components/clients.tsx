"use client";

export default function Clients() {
  const clients = [
    { name: "TechCorp", category: "Technology" },
    { name: "NeonStart", category: "Startup" },
    { name: "DigitalFlow", category: "Agency" },
    { name: "FutureBank", category: "Finance" },
    { name: "GameStudio", category: "Gaming" },
    { name: "MediaCorp", category: "Media" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Partner Digital Terpercaya
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="group text-center p-6 rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500/20 to-cyan-400/20 rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                {client.name[0]}
              </div>
              <h4 className="text-white font-semibold mb-1">{client.name}</h4>
              <p className="text-gray-400 text-sm">{client.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 