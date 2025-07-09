import React from 'react';

export default function CaravanSection() {
  const caravans = [
    {
      title: "Desert Caravan Expedition",
      date: "Every Full Moon",
      time: "Sunset - Sunrise",
      guide: "Master Guide Ahmed",
      capacity: "12 travelers",
      price: "$300/trip",
      description: "Traditional camel caravan through ancient desert routes",
      skills: ["Camel Riding", "Desert Navigation", "Cultural Immersion"]
    },
    {
      title: "Oasis Discovery Tour",
      date: "Every Weekend",
      time: "Full Day",
      guide: "Oasis Expert Fatima",
      capacity: "8 travelers",
      price: "$200/day",
      description: "Discover hidden oases and ancient watering holes",
      skills: ["Oasis Finding", "Water Conservation", "Desert Survival"]
    },
    {
      title: "Archaeological Caravan",
      date: "Monthly",
      time: "3 Days",
      guide: "Archaeologist Dr. Omar",
      capacity: "6 travelers",
      price: "$800/expedition",
      description: "Search for ancient artifacts and historical sites",
      skills: ["Archaeological Methods", "Site Preservation", "Historical Knowledge"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-900/50 to-orange-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-6 font-serif">
            DESERT CARAVANS
          </h2>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto font-serif">
            Traditional caravan experiences and desert expeditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caravans.map((caravan, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-serif">
                {caravan.title}
              </h3>
              
              <p className="text-amber-200 mb-6 leading-relaxed font-serif">
                {caravan.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Date:</span>
                  <span className="text-amber-400 font-bold font-serif">{caravan.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Time:</span>
                  <span className="text-amber-400 font-bold font-serif">{caravan.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Guide:</span>
                  <span className="text-amber-400 font-bold font-serif">{caravan.guide}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Capacity:</span>
                  <span className="text-amber-400 font-bold font-serif">{caravan.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-200">Price:</span>
                  <span className="text-amber-400 font-bold font-serif">{caravan.price}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-amber-300 font-semibold mb-3 font-serif">Skills Learned:</h4>
                <div className="space-y-2">
                  {caravan.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="text-amber-400 mr-2">🐪</span>
                      <span className="text-amber-200 text-sm font-serif">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-amber-500/25 transition-all duration-300 font-serif">
                JOIN CARAVAN
              </button>
            </div>
          ))}
        </div>
        
        {/* Caravan facilities */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-amber-400 mb-8 font-serif">
            CARAVAN FACILITIES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🐪</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Camel Stables</div>
              <div className="text-amber-200 text-sm font-serif">Well-maintained camels for desert journeys</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏕️</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Desert Camps</div>
              <div className="text-amber-200 text-sm font-serif">Traditional desert camping facilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌴</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Oasis Stops</div>
              <div className="text-amber-200 text-sm font-serif">Rest stops at beautiful desert oases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏺</div>
              <div className="text-amber-400 font-bold mb-2 font-serif">Cultural Centers</div>
              <div className="text-amber-200 text-sm font-serif">Traditional cultural and historical sites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 