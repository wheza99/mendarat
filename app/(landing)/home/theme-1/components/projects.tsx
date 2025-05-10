export default function Projects() {
  const projects = [
    {
      title: "Modern Apartment",
      category: "Residential",
      image: "/images/project1.jpg"
    },
    {
      title: "Luxury Villa",
      category: "Residential",
      image: "/images/project2.jpg"
    },
    {
      title: "Corporate Office",
      category: "Commercial",
      image: "/images/project3.jpg"
    },
    {
      title: "Boutique Hotel",
      category: "Hospitality",
      image: "/images/project4.jpg"
    },
    {
      title: "Minimalist Kitchen",
      category: "Residential",
      image: "/images/project5.jpg"
    },
    {
      title: "Restaurant Design",
      category: "Commercial",
      image: "/images/project6.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Projects</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our portfolio of exquisite interior designs, each reflecting our commitment 
            to quality, innovation, and timeless elegance.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-black text-white">All</button>
            <button className="px-4 py-2 hover:bg-gray-200 transition duration-300">Residential</button>
            <button className="px-4 py-2 hover:bg-gray-200 transition duration-300">Commercial</button>
            <button className="px-4 py-2 hover:bg-gray-200 transition duration-300">Hospitality</button>
          </div>
        </div>
        
        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden">
              {/* Project Image */}
              <div className="aspect-w-4 aspect-h-3 bg-gray-300">
                <div className="h-64 w-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.category}</p>
                  <a href="#" className="inline-block border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a href="#" className="inline-block px-8 py-3 bg-black text-white hover:bg-opacity-90 transition duration-300">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
