"use client";

export default function Team() {
  const team = [
    {
      name: "Akira Tanaka",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "Spesialis UI/UX dengan 8+ tahun pengalaman"
    },
    {
      name: "Yuki Sato",
      position: "Lead Developer", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b72f5fb2?w=300&h=300&fit=crop",
      bio: "Full-stack developer expert dalam teknologi modern"
    },
    {
      name: "Hiroshi Kimura",
      position: "Digital Strategist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Strategis digital dengan fokus pada inovasi"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tim Digital Warriors
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 inline-block">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-pink-500/30 group-hover:border-cyan-400/60 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-cyan-400 font-semibold mb-3">{member.position}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 