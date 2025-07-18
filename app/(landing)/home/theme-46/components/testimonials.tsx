'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { testimonialsSectionCopy } from '../copy';

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Holographic Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="holoGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#22D3EE" strokeWidth="1" opacity="0.5" />
              </pattern>
              <linearGradient id="holoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#holoGrid)" />
          </svg>
        </div>
        
        {/* Cyber Testimonial Nodes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `testimonial-float ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Data Streams */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                width: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `data-stream ${8 + Math.random() * 4}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 180}deg)`
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
              {testimonialsSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            {testimonialsSectionCopy.description}
          </motion.p>
        </motion.div>
        
        {/* Main Testimonial Display */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Cyber Frame */}
            <div className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-3xl p-8 overflow-hidden group-hover:border-purple-400/50 transition-all duration-300">
              {/* Holographic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Scan Lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full h-px bg-cyan-400/50"
                    style={{
                      top: `${i * 10}%`,
                      animation: `scan-line ${2 + Math.random() * 1}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 1}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Main Image */}
              <div className="relative z-10 aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={testimonialsSectionCopy.mainImage}
                  alt={testimonialsSectionCopy.mainImageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
              </div>
              
              {/* Cyber Corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-300" />
          </motion.div>
          
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quote */}
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-gray-200 leading-relaxed pl-8 italic">
                "{testimonialsSectionCopy.testimonials[0].quote}"
              </blockquote>
            </div>
            
            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400/50">
                  <Image
                    src={testimonialsSectionCopy.testimonials[0].image}
                    alt={testimonialsSectionCopy.testimonials[0].name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse" />
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white">
                  {testimonialsSectionCopy.testimonials[0].name}
                </h4>
                <p className="text-cyan-400">
                  {testimonialsSectionCopy.testimonials[0].role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsSectionCopy.testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Testimonial Card */}
              <div className="relative bg-gray-900/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 h-full overflow-hidden group-hover:border-purple-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Holographic Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Cyber Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="#22D3EE" strokeWidth="2" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="#A855F7" strokeWidth="1" />
                    <circle cx="50" cy="50" r="10" fill="none" stroke="#3B82F6" strokeWidth="1" />
                  </svg>
                </div>
                
                <div className="relative z-10 space-y-4">
                  {/* Quote */}
                  <blockquote className="text-gray-300 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-700/50">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-cyan-400/30">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border border-gray-900 animate-pulse" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-cyan-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Cyber Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-cyan-400/50 group-hover:border-purple-400/70 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes testimonial-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        
        @keyframes data-stream {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
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