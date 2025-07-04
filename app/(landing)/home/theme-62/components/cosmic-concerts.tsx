import React from 'react';

export default function CosmicConcerts() {
  const upcomingConcerts = [
    {
      title: "Supernova Symphony Live",
      artist: "The Stellar Explosions",
      venue: "Crab Nebula Amphitheater",
      date: "2157.03.14",
      time: "20:00 GST",
      duration: "∞ Hours",
      price: "500 Stardust",
      status: "Selling Fast",
      image: "🌟",
      description: "Witness the birth and death of stars in musical form"
    },
    {
      title: "Black Hole Blues Festival",
      artist: "Event Horizon Collective",
      venue: "Sagittarius A* Arena",
      date: "2157.04.22",
      time: "∞:∞ EST",
      duration: "Until Heat Death",
      price: "1000 Stardust",
      status: "VIP Only",
      image: "🕳️",
      description: "Deep space jazz that bends reality itself"
    },
    {
      title: "Galactic Philharmonic Tour",
      artist: "Andromeda Orchestra",
      venue: "Traveling Galaxy",
      date: "2157.05.01",
      time: "Multiple Times",
      duration: "2.5M Years",
      price: "Free",
      status: "Open Seats",
      image: "🎼",
      description: "A musical journey across 2.5 million light years"
    },
    {
      title: "Pulsar Rhythm Rave",
      artist: "DJ Neutron Star",
      venue: "Asteroid Belt Club",
      date: "2157.03.28",
      time: "23:59 MST",
      duration: "1.337ms Loop",
      price: "250 Stardust",
      status: "Almost Sold Out",
      image: "🔥",
      description: "Hyperspeed beats that pulse at neutron frequency"
    },
    {
      title: "Cosmic Ambient Meditation",
      artist: "The Void Collective",
      venue: "Dark Matter Temple",
      date: "2157.06.15",
      time: "Always Now",
      duration: "Eternal",
      price: "Inner Peace",
      status: "Open Registration",
      image: "🧘",
      description: "Transcendental experience in the depths of space"
    },
    {
      title: "Solar Wind Choirs",
      artist: "Corona Mass Ejection",
      venue: "Sun Surface Stage",
      date: "2157.07.04",
      time: "Solar Noon",
      duration: "11 Year Cycle",
      price: "Heat Resistance",
      status: "Extreme Conditions",
      image: "☀️",
      description: "Harmonies powered by the fury of our star"
    }
  ];

  const featuredVenues = [
    {
      name: "Nebula Concert Hall",
      location: "Eagle Nebula",
      capacity: "∞ Beings",
      acoustics: "Perfect Vacuum",
      image: "🌌"
    },
    {
      name: "Quasar Amphitheater",
      location: "3C 273",
      capacity: "10¹² Entities",
      acoustics: "Superluminal",
      image: "⭐"
    },
    {
      name: "Dark Matter Dome",
      location: "Unknown Coordinates",
      capacity: "Invisible Audience",
      acoustics: "Beyond Physics",
      image: "🕳️"
    }
  ];

  const statusColors: Record<string, string> = {
    "Selling Fast": "text-orange-400",
    "VIP Only": "text-purple-400",
    "Open Seats": "text-green-400",
    "Almost Sold Out": "text-red-400",
    "Open Registration": "text-cyan-400",
    "Extreme Conditions": "text-yellow-400"
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Concert Stage Lights */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-cosmic-spotlight"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 8 + 4}s`
            }}
          >
            <div className="w-20 h-20 bg-gradient-radial from-cyan-400/30 to-transparent rounded-full blur-xl" />
          </div>
        ))}
        
        {/* Musical Energy Waves */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <path
                d={`M0,${50 + Math.sin(i) * 20} Q25,${30 + Math.cos(i) * 15} 50,${50 + Math.sin(i + 1) * 20} T100,${50 + Math.sin(i + 2) * 20}`}
                stroke="#8b5cf6"
                strokeWidth="0.5"
                fill="none"
                className="animate-cosmic-wave"
                style={{animationDelay: `${i * 0.3}s`}}
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">🎤 Cosmic Concerts</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Galactic Performances
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience live performances that transcend dimensions, 
            where artists from across the universe gather to create music 
            that resonates through space and time.
          </p>
        </div>

        {/* Upcoming Concerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {upcomingConcerts.map((concert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/40 to-purple-900/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Concert Poster */}
              <div className="relative h-48 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 flex items-center justify-center">
                <div className="text-8xl opacity-60 animate-cosmic-pulse">
                  {concert.image}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold ${statusColors[concert.status]}`}>
                    {concert.status}
                  </span>
                </div>
                
                {/* Energy Waves Overlay */}
                <div className="absolute inset-0 flex justify-center items-end pb-4">
                  <div className="flex space-x-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-white/50 to-transparent rounded-full animate-cosmic-wave"
                        style={{
                          width: '2px',
                          height: `${Math.random() * 30 + 10}px`,
                          animationDelay: `${i * 0.1 + index * 0.3}s`,
                          animationDuration: `${Math.random() * 1.5 + 1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Concert Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {concert.title}
                </h3>
                
                <div className="text-purple-400 font-medium mb-4">
                  {concert.artist}
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {concert.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Venue</span>
                    <span className="text-gray-300">{concert.venue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Date</span>
                    <span className="text-cyan-400 font-mono">{concert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time</span>
                    <span className="text-cyan-400 font-mono">{concert.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration</span>
                    <span className="text-emerald-400">{concert.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price</span>
                    <span className="text-yellow-400 font-bold">{concert.price}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm">
                    🎫 Get Tickets
                  </button>
                  <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm">
                    ℹ️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Venues */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Legendary Concert Venues
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVenues.map((venue, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-5xl mb-4 animate-cosmic-pulse">
                  {venue.image}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {venue.name}
                </h4>
                
                <div className="space-y-2 text-sm">
                  <div className="text-gray-400">
                    <span className="text-purple-400">Location:</span> {venue.location}
                  </div>
                  <div className="text-gray-400">
                    <span className="text-cyan-400">Capacity:</span> {venue.capacity}
                  </div>
                  <div className="text-gray-400">
                    <span className="text-emerald-400">Acoustics:</span> {venue.acoustics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Concert Experience */}
        <div className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            The Ultimate Cosmic Experience
          </h3>
          
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our concerts feature multidimensional sound, gravity-defying visuals, 
            and performances that can literally move planets. Experience music 
            that exists beyond the physical realm.
          </p>

          {/* Experience Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {icon: "🌈", title: "Dimensional Audio", desc: "Sound across multiple realities"},
              {icon: "⚡", title: "Energy Synchronization", desc: "Sync your biorhythms with cosmic frequencies"},
              {icon: "🔮", title: "Reality Distortion", desc: "Visual effects that bend space-time"}
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3 animate-cosmic-pulse">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              🎫 Browse All Events
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              📱 Download Cosmic App
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 