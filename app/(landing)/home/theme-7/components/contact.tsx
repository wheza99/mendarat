"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { contactSectionCopy } from "../copy";

export default function Contact() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<null | "sending" | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  // Digital circuit background
  const DigitalCircuit = () => {
    return (
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contact-circuit"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(1.5)"
            >
              <path
                d="M0 20 H40 M40 20 V80 M40 80 H100 M60 0 V40 M60 40 H100"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="0.5"
              />
              <circle cx="40" cy="20" r="2" fill="#06b6d4" />
              <circle cx="40" cy="80" r="2" fill="#06b6d4" />
              <circle cx="60" cy="40" r="2" fill="#06b6d4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-circuit)" />
        </svg>
      </div>
    );
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <DigitalCircuit />
      
      {/* Glowing accent elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[100px]"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
      />

      <div className="container mx-auto px-4" ref={containerRef}>
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {contactSectionCopy.heading}
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            {contactSectionCopy.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-8 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-cyan-500/30 shadow-[0_5px_30px_rgba(0,0,0,0.3)]">
              {/* Digital circuit overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 50 H100 M50 0 V100"
                    stroke="#06b6d4"
                    strokeWidth="0.5"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="50" cy="50" r="3" fill="#06b6d4" />
                </svg>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400" />
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute top-0 right-0 w-[2px] h-full bg-cyan-400" />
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-cyan-400" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute bottom-0 right-0 w-[2px] h-full bg-cyan-400" />
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-cyan-400 text-sm font-mono mb-2">
                    NAME
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={contactSectionCopy.formPlaceholders.name}
                      className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      required
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-cyan-400 text-sm font-mono mb-2">
                    EMAIL
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={contactSectionCopy.formPlaceholders.email}
                      className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      required
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-cyan-400 text-sm font-mono mb-2">
                    PHONE
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder={contactSectionCopy.formPlaceholders.phone}
                      className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-cyan-400 text-sm font-mono mb-2">
                    MESSAGE
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder={contactSectionCopy.formPlaceholders.message}
                      rows={5}
                      className="w-full bg-gray-800/50 border border-cyan-500/30 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      required
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  </div>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={formStatus === "sending"}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-md relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {formStatus === "sending" 
                        ? "SENDING..." 
                        : contactSectionCopy.formPlaceholders.submitButton}
                    </span>
                    <motion.span
                      className="absolute inset-0 opacity-0 group-hover:opacity-30"
                      animate={{
                        background: [
                          "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.5) 0%, transparent 50%)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </motion.button>
                </div>
                
                {/* Form status message */}
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-center"
                  >
                    Your message has been sent successfully. We'll be in touch soon.
                  </motion.div>
                )}
                
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-md bg-red-500/20 border border-red-500/30 text-red-300 text-center"
                  >
                    There was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
          
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Locations */}
            {contactSectionCopy.locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative p-6 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-cyan-500/30 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
              >
                {/* Digital circuit overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d={index % 2 === 0 
                        ? "M0 30 H100 M30 0 V100" 
                        : "M0 70 H100 M70 0 V100"
                      }
                      stroke="#06b6d4"
                      strokeWidth="0.5"
                      fill="none"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle 
                      cx={index % 2 === 0 ? "30" : "70"} 
                      cy={index % 2 === 0 ? "30" : "70"} 
                      r="3" 
                      fill="#06b6d4" 
                    />
                  </svg>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400" />
                  <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400" />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-full bg-cyan-400" />
                </div>
                
                {/* Location content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    {location.city}
                  </h3>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-3 text-cyan-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{location.address}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-3 text-cyan-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{location.phone}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 mr-3 text-cyan-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-cyan-400 hover:text-white transition-colors">
                        {location.email}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Digital map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-cyan-500/30"
            >
              {/* Digital map visualization */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-20 grid-rows-10 opacity-30">
                  {[...Array(200)].map((_, i) => (
                    <div key={i} className="border border-cyan-500/20" />
                  ))}
                </div>
                
                {/* Map points */}
                {contactSectionCopy.locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    className="absolute w-4 h-4 rounded-full bg-cyan-400/80"
                    style={{
                      left: `${30 + index * 40}%`,
                      top: `${40 + (index % 2) * 20}%`,
                    }}
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-400"
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </motion.div>
                ))}
                
                {/* Connection lines */}
                <svg
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                >
                  <motion.path
                    d={`M${30}% ${40}% L${70}% ${60}%`}
                    stroke="#06b6d4"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="5,5"
                    animate={{
                      strokeDashoffset: [0, -20],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </svg>
                
                {/* Digital globe effect */}
                <div className="relative w-40 h-40 opacity-20">
                  <div className="absolute inset-0 rounded-full border border-cyan-500/50" />
                  <div className="absolute inset-0 rounded-full border border-cyan-500/30" style={{ transform: "scale(0.8)" }} />
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20" style={{ transform: "scale(0.6)" }} />
                  <div className="absolute inset-0 rounded-full border border-cyan-500/10" style={{ transform: "scale(0.4)" }} />
                  
                  {/* Rotating meridians */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-cyan-500/20"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-t border-b border-cyan-500/20"
                    animate={{ rotateX: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute top-0 left-0 w-[2px] h-full bg-cyan-400" />
              </div>
              <div className="absolute top-0 right-0 w-12 h-12">
                <div className="absolute top-0 right-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute top-0 right-0 w-[2px] h-full bg-cyan-400" />
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute bottom-0 left-0 w-[2px] h-full bg-cyan-400" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-400" />
                <div className="absolute bottom-0 right-0 w-[2px] h-full bg-cyan-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
