"use client";

import { motion } from "framer-motion";
import { teamSectionCopy } from "../copy";

const Team = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Cyber Constellation Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        
        {/* Digital Constellation */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
        
        {/* Cyber Constellation Lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`constellation-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              width: `${100 + Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
        
        {/* Floating Cyber Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {teamSectionCopy.heading.split('\n').map((line, index) => (
              <span key={index} className={index === 0 ? "block" : "block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"}>
                {line}
              </span>
            ))}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            {teamSectionCopy.description}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            {teamSectionCopy.buttonText}
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamSectionCopy.teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-sm">
                {/* Cyber Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/50 z-10" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50 z-10" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-cyan-400/50 z-10" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/50 z-10" />
                
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Cyber Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Scanning Line Effect */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, 256, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Security Clearance Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-3 py-1 bg-gradient-to-r from-green-400/20 to-cyan-400/20 backdrop-blur-sm border border-green-400/30 rounded-full">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-xs font-mono">CLEARED</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  
                  {/* Security Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded bg-gray-800/50">
                      <div className="text-cyan-400 font-bold text-sm">Level 5</div>
                      <div className="text-gray-400 text-xs">Clearance</div>
                    </div>
                    <div className="text-center p-2 rounded bg-gray-800/50">
                      <div className="text-purple-400 font-bold text-sm">Expert</div>
                      <div className="text-gray-400 text-xs">Rating</div>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {teamSectionCopy.socialLinks.map((social, socialIndex) => (
                      <motion.button
                        key={social}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 hover:border-cyan-400 flex items-center justify-center transition-all duration-300"
                      >
                        <span className="text-gray-400 hover:text-cyan-400 text-sm font-semibold">
                          {social}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Data Stream Effect */}
                <motion.div
                  className="absolute left-0 top-1/2 w-px h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    scaleY: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-6xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Team Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Security Experts", value: "50+", color: "cyan", icon: "👥" },
                { label: "Certifications", value: "200+", color: "purple", icon: "🏆" },
                { label: "Years Experience", value: "15+", color: "green", icon: "⭐" },
                { label: "Success Rate", value: "99.9%", color: "yellow", icon: "🎯" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className={`text-2xl font-bold mb-1 text-${stat.color}-400`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                  
                  {/* Activity Indicator */}
                  <div className="mt-3 flex items-center justify-center space-x-2">
                    <div className={`w-2 h-2 bg-${stat.color}-400 rounded-full animate-pulse`} />
                    <span className="text-xs text-gray-400 font-mono">ACTIVE</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Security Clearance Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white text-center mb-6">Security Clearance Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { level: "Level 1", name: "Basic", color: "gray" },
                { level: "Level 2", name: "Standard", color: "blue" },
                { level: "Level 3", name: "Advanced", color: "green" },
                { level: "Level 4", name: "Expert", color: "purple" },
                { level: "Level 5", name: "Elite", color: "cyan" },
              ].map((clearance, index) => (
                <motion.div
                  key={clearance.level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-3 rounded-lg bg-gray-800/30 border border-gray-700/50"
                >
                  <div className={`text-sm font-bold mb-1 text-${clearance.color}-400`}>
                    {clearance.level}
                  </div>
                  <div className="text-gray-300 text-xs">{clearance.name}</div>
                  <div className="mt-2 flex items-center justify-center">
                    <div className={`w-2 h-2 bg-${clearance.color}-400 rounded-full`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;