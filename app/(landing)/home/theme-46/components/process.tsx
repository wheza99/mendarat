'use client';

import { motion } from 'framer-motion';
import { processSectionCopy } from '../copy';

export default function Process() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Digital Timeline */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            {/* Main Timeline */}
            <line
              x1="100"
              y1="200"
              x2="900"
              y2="800"
              stroke="url(#timelineGradient)"
              strokeWidth="3"
              className="animate-pulse"
            />
            
            {/* Timeline Nodes */}
            {[...Array(8)].map((_, i) => {
              const x = 100 + (i * 100);
              const y = 200 + (i * 75);
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#22D3EE"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="15"
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="2"
                    className="animate-ping"
                    style={{
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                </g>
              );
            })}
            
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Cyber Circuits */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-400/20"
              style={{
                width: `${20 + Math.random() * 60}px`,
                height: `${20 + Math.random() * 60}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `circuit-glow ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 45}deg)`
              }}
            />
          ))}
        </div>
        
        {/* Data Flow */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-flow ${8 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {processSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {processSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-400 transform -translate-x-1/2" />
          
          <div className="space-y-24">
            {processSectionCopy.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Step Number & Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  {/* Step Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative inline-block"
                  >
                    <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden group">
                      {/* Holographic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-400/20 animate-pulse" />
                      
                      {/* Step Number */}
                      <span className="relative z-10 text-2xl font-bold text-white font-mono">
                        {step.number}
                      </span>
                      
                      {/* Cyber Frame */}
                      <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-xl" />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce" />
                  </motion.div>
                  
                  {/* Step Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Cyber Visual */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className={`relative group ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}
                >
                  {/* Cyber Container */}
                  <div className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 h-64 overflow-hidden group-hover:border-purple-400/50 transition-all duration-300">
                    {/* Holographic Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Scan Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-px bg-cyan-400/50"
                          style={{
                            top: `${i * 8.33}%`,
                            animation: `scan-line ${1.5 + Math.random() * 0.5}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 1}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Cyber Pattern */}
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="relative">
                        {/* Central Node */}
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
                        </div>
                        
                        {/* Orbiting Elements */}
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-40px)`,
                              animation: `orbit ${8 + i}s linear infinite`
                            }}
                          />
                        ))}
                        
                        {/* Connecting Lines */}
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-px h-10 bg-gradient-to-t from-cyan-400/50 to-transparent"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                              transformOrigin: 'center bottom'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Cyber Frame */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                  </div>
                  
                  {/* Floating Cyber Elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
                </motion.div>
                
                {/* Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                    className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full border-4 border-gray-900 animate-pulse"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes circuit-glow {
          0%, 100% {
            border-color: rgba(34, 211, 238, 0.2);
            box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
          }
          50% {
            border-color: rgba(168, 85, 247, 0.5);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
          }
        }
        
        @keyframes data-flow {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translate(200px, -100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateY(-40px);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateY(-40px);
          }
        }
        
        @keyframes scan-line {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}