'use client';

import { motion } from 'framer-motion';
import { clientsSectionCopy } from '../copy';

export default function Clients() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Bio Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Organic Membrane */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-green-900/10" />
        
        {/* Bio Spores */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-emerald-400/20 to-green-400/20"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Bio Network */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 600">
            {[...Array(20)].map((_, i) => {
              const x1 = Math.random() * 1000;
              const y1 = Math.random() * 600;
              const x2 = Math.random() * 1000;
              const y2 = Math.random() * 600;
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#10B981"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 4
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
              MITRA KOLABORASI
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Dipercaya oleh berbagai institusi penelitian dan perusahaan teknologi terdepan dalam mengembangkan solusi biomimetik yang inovatif.
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clientsSectionCopy.clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              {/* Bio Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 h-32 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-emerald-400/50 group-hover:bg-emerald-900/30">
                {/* Neural Network Background */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 200 150">
                    {[...Array(6)].map((_, i) => {
                      const x1 = Math.random() * 200;
                      const y1 = Math.random() * 150;
                      const x2 = Math.random() * 200;
                      const y2 = Math.random() * 150;
                      return (
                        <g key={i}>
                          <line
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#10B981"
                            strokeWidth="1"
                            opacity="0.4"
                          />
                          <circle
                            cx={x1}
                            cy={y1}
                            r="1.5"
                            fill="#14B8A6"
                            opacity="0.6"
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>
                
                {/* Client Logo */}
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="mb-3"
                  >
                    <svg
                      className="w-12 h-12 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      fillRule={client.fillRule as "nonzero" | "evenodd" | "inherit" | undefined}
                      clipRule={client.clipRule as "nonzero" | "evenodd" | "inherit" | undefined}
                    >
                      {client.svgPaths.map((path, pathIndex) => (
                        <motion.path
                          key={pathIndex}
                          d={path}
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: index * 0.1 + pathIndex * 0.2 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </svg>
                  </motion.div>
                  
                  <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                    {client.name}
                  </h3>
                </div>
                
                {/* Bio Particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-8, 8, -8],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random()
                      }}
                    />
                  ))}
                </div>
                
                {/* Bio Membrane Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Bio Border Animation */}
                <div className="absolute inset-0 border-2 border-emerald-400/0 group-hover:border-emerald-400/40 rounded-2xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "50+", label: "Mitra Aktif" },
              { value: "200+", label: "Proyek Kolaborasi" },
              { value: "15+", label: "Negara" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Bio Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm border border-emerald-400/30 rounded-xl p-6 group-hover:border-emerald-400/60 transition-all duration-500">
                  {/* Neural Network Background */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <svg className="w-full h-full" viewBox="0 0 150 100">
                      {[...Array(4)].map((_, i) => {
                        const x1 = Math.random() * 150;
                        const y1 = Math.random() * 100;
                        const x2 = Math.random() * 150;
                        const y2 = Math.random() * 100;
                        return (
                          <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#10B981"
                            strokeWidth="1"
                            opacity="0.6"
                          />
                        );
                      })}
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-3xl font-bold text-emerald-300 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}