import React from 'react';

export default function WorkshopSection() {
  const workshops = [
    {
      title: "Steam Engine Workshop",
      date: "Every Saturday",
      time: "9:00 AM - 5:00 PM",
      instructor: "Master Engineer Smith",
      capacity: "12 students",
      price: "$150/day",
      description: "Learn the fundamentals of steam engine operation and maintenance",
      skills: ["Engine Assembly", "Steam Safety", "Performance Tuning"]
    },
    {
      title: "Brass Crafting Workshop",
      date: "Every Sunday",
      time: "10:00 AM - 4:00 PM",
      instructor: "Craftsman Johnson",
      capacity: "8 students",
      price: "$200/day",
      description: "Master the art of brass fitting and steam component crafting",
      skills: ["Brass Working", "Precision Fitting", "Quality Control"]
    },
    {
      title: "Locomotive Restoration",
      date: "Monthly",
      time: "Full Week",
      instructor: "Railway Expert Davis",
      capacity: "6 students",
      price: "$500/week",
      description: "Complete locomotive restoration and steam railway systems",
      skills: ["Full Restoration", "Railway Systems", "Historical Preservation"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-900/50 to-orange-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            STEAM WORKSHOPS
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Hands-on training in steam engineering and mechanical arts
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-serif">
                {workshop.title}
              </h3>
              
              <p className="text-amber-200 mb-6 leading-relaxed font-serif">
                {workshop.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Date:</span>
                  <span className="text-amber-400 font-bold font-serif">{workshop.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Time:</span>
                  <span className="text-amber-400 font-bold font-serif">{workshop.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Instructor:</span>
                  <span className="text-amber-400 font-bold font-serif">{workshop.instructor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Capacity:</span>
                  <span className="text-amber-400 font-bold font-serif">{workshop.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Price:</span>
                  <span className="text-amber-400 font-bold font-serif">{workshop.price}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-amber-300 font-semibold mb-3 font-serif">Skills Covered:</h4>
                <div className="space-y-2">
                  {workshop.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="text-amber-400 mr-2">🔧</span>
                      <span className="text-amber-200 text-sm font-serif">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                ENROLL NOW
              </button>
            </div>
          ))}
        </div>
        
        {/* Workshop facilities */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-amber-400 mb-8 font-serif">
            WORKSHOP FACILITIES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Steam Engines</div>
              <div className="text-amber-200 text-sm font-serif">Working steam engines for hands-on training</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Tool Stations</div>
              <div className="text-amber-200 text-sm font-serif">Fully equipped mechanical tool stations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚂</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Locomotive</div>
              <div className="text-amber-200 text-sm font-serif">Full-scale locomotive for restoration training</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔩</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Brass Shop</div>
              <div className="text-amber-200 text-sm font-serif">Specialized brass working facilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 