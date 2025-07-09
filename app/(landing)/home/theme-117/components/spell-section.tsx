import React from 'react';

export default function SpellSection() {
  const spells = [
    {
      title: "Elemental Magic Workshop",
      date: "Every Full Moon",
      time: "8:00 PM - 12:00 AM",
      instructor: "Master Mystic Luna",
      capacity: "12 students",
      price: "$200/session",
      description: "Learn to harness the power of earth, air, fire, and water",
      skills: ["Elemental Control", "Energy Manipulation", "Spell Casting"]
    },
    {
      title: "Crystal Divination Training",
      date: "Every New Moon",
      time: "7:00 PM - 10:00 PM",
      instructor: "Crystal Seer Aurora",
      capacity: "8 students",
      price: "$150/session",
      description: "Master the art of crystal ball reading and divination",
      skills: ["Crystal Reading", "Future Sight", "Intuitive Development"]
    },
    {
      title: "Astral Projection Mastery",
      date: "Monthly",
      time: "Full Weekend",
      instructor: "Astral Traveler Zephyr",
      capacity: "6 students",
      price: "$500/weekend",
      description: "Learn to journey through astral realms and dimensions",
      skills: ["Soul Travel", "Realm Navigation", "Spirit Communication"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6 font-serif">
            MYSTICAL TRAINING
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto font-serif">
            Learn ancient spells and mystical arts from master practitioners
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {spells.map((spell, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105 p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4 font-serif">
                {spell.title}
              </h3>
              
              <p className="text-purple-200 mb-6 leading-relaxed font-serif">
                {spell.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Date:</span>
                  <span className="text-purple-400 font-bold font-serif">{spell.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Time:</span>
                  <span className="text-purple-400 font-bold font-serif">{spell.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Instructor:</span>
                  <span className="text-purple-400 font-bold font-serif">{spell.instructor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Capacity:</span>
                  <span className="text-purple-400 font-bold font-serif">{spell.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Price:</span>
                  <span className="text-purple-400 font-bold font-serif">{spell.price}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-purple-300 font-semibold mb-3 font-serif">Skills Taught:</h4>
                <div className="space-y-2">
                  {spell.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <span className="text-purple-400 mr-2">✨</span>
                      <span className="text-purple-200 text-sm font-serif">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-purple-500/25 transition-all duration-300 font-serif">
                ENROLL NOW
              </button>
            </div>
          ))}
        </div>
        
        {/* Training facilities */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-purple-400 mb-8 font-serif">
            MYSTICAL FACILITIES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🔮</div>
              <div className="text-purple-400 font-bold mb-2 font-serif">Crystal Chamber</div>
              <div className="text-purple-200 text-sm font-serif">Sacred space for crystal readings and divination</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <div className="text-purple-400 font-bold mb-2 font-serif">Spell Circle</div>
              <div className="text-purple-200 text-sm font-serif">Ancient circle for spell casting and rituals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <div className="text-purple-400 font-bold mb-2 font-serif">Astral Portal</div>
              <div className="text-purple-200 text-sm font-serif">Gateway for astral projection and journeying</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💫</div>
              <div className="text-purple-400 font-bold mb-2 font-serif">Energy Garden</div>
              <div className="text-purple-200 text-sm font-serif">Sacred garden for meditation and healing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 