"use client";

export default function Team() {
  const teamMembers = [
    {
      name: "Adora Montmimy",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3149&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Adeline Palmerton",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Michael Chen",
      role: "Senior Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Stylist",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Only display the first two team members as shown in the design
  const displayedMembers = teamMembers.slice(0, 2);

  return (
    <section className="py-36 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left side - Team info */}
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              MEET OUR
              <br />
              TEAM
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <a
              href="#"
              className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-3 uppercase text-sm tracking-wider hover:bg-opacity-90 transition duration-300"
            >
              VIEW ALL
            </a>
          </div>

          {/* Right side - Team members */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedMembers.map((member, index) => (
              <div key={index} className="relative pb-16">
                <div className="overflow-hidden relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover"
                  />
                  {/* Social media icons overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      >
                        <span className="text-amber-600 font-bold">f</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      >
                        <span className="text-amber-600 font-bold">in</span>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300"
                      >
                        <span className="text-amber-600 font-bold">ig</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2/3 bg-white p-6 text-center shadow-md ">
                  <h3 className="text-xl font-bold mb-1 text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
