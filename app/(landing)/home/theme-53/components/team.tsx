"use client";

import { motion } from "framer-motion";
import { copy } from "../copy";

const Team = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900">
        {/* Constellation Network */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {[...Array(15)].map((_, i) => (
              <g key={i}>
                <circle
                  cx={Math.random() * 1000}
                  cy={Math.random() * 1000}
                  r="2"
                  fill="#8b5cf6"
                  opacity={0.6}
                />
                {i > 0 && (
                  <line
                    x1={Math.random() * 1000}
                    y1={Math.random() * 1000}
                    x2={Math.random() * 1000}
                    y2={Math.random() * 1000}
                    stroke="#8b5cf6"
                    strokeWidth="0.5"
                    opacity={0.3}
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
        
        {/* Cosmic Energy Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-radial from-purple-500/20 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {copy.team.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {copy.team.subtitle}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.team.members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="relative group"
            >
              {/* Member Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-800/20 to-blue-800/20 backdrop-blur-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                {/* Cosmic Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Orbital Rings */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-purple-400/50 rounded-full animate-spin" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-blue-400/50 rounded-full animate-pulse" />
                
                <div className="relative z-10 text-center">
                  {/* Avatar */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                    className="relative w-24 h-24 mx-auto mb-6"
                  >
                    {/* Avatar Background */}
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                  </motion.div>

                  {/* Member Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-300 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Cosmic Skills Indicator */}
                  <div className="flex justify-center space-x-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-purple-400"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Contact Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 font-medium hover:from-purple-600/30 hover:to-blue-600/30 hover:border-purple-400/50 transition-all duration-300"
                  >
                    Connect
                  </motion.button>
                </div>

                {/* Cosmic Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${15 + i * 10}%`,
                      }}
                      animate={{
                        x: [0, 10, 0],
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2.5 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    initial={{ x: '100%' }}
                    whileHover={{ x: '-100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center">
            <p className="text-gray-300 mb-4">Ready to join our cosmic crew?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Join Our Mission
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;