export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Principal Designer",
      bio: "With over 15 years of experience, Sarah leads our design team with vision and creativity.",
      image: "/images/team1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Senior Architect",
      bio: "Michael's innovative approach to space and structure has earned him numerous design awards.",
      image: "/images/team2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Stylist",
      bio: "Emily brings warmth and personality to every project with her exceptional eye for detail.",
      image: "/images/team3.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our team of experienced designers and architects brings passion,
            expertise, and creativity to every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 relative overflow-hidden group">
                <div 
                  className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden bg-gray-200"
                  style={{ width: '240px', height: '240px', margin: '0 auto' }}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center bg-gray-300"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300">
                      <span className="text-black">in</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300">
                      <span className="text-black">fb</span>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-opacity-90 transition duration-300">
                      <span className="text-black">ig</span>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
