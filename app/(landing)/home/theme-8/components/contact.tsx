"use client";

import { contactSectionCopy } from "../copy";
import { motion } from "framer-motion";
import { useState } from "react";

// Using custom icons since we're having issues with heroicons
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formState);
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Horizontal neon line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            {contactSectionCopy.heading}
          </h2>
          <p className="text-blue-100 opacity-90 max-w-2xl mx-auto">
            {contactSectionCopy.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-lg -m-1 blur-md"></div>
              
              <div className="relative rounded-lg overflow-hidden border border-pink-500/30 bg-black/50 backdrop-blur-sm p-8">
                {/* VHS tracking lines effect */}
                <div className="absolute inset-0 bg-scanlines opacity-10"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 opacity-80"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-pink-500 opacity-80"></div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-blue-200 text-sm mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder={contactSectionCopy.formPlaceholders.name}
                        className="w-full px-4 py-3 bg-black/70 border border-pink-500/30 rounded-md focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 text-white placeholder-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-blue-200 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder={contactSectionCopy.formPlaceholders.email}
                        className="w-full px-4 py-3 bg-black/70 border border-pink-500/30 rounded-md focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 text-white placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-blue-200 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder={contactSectionCopy.formPlaceholders.phone}
                      className="w-full px-4 py-3 bg-black/70 border border-pink-500/30 rounded-md focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 text-white placeholder-gray-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-blue-200 text-sm mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder={contactSectionCopy.formPlaceholders.message}
                      rows={5}
                      className="w-full px-4 py-3 bg-black/70 border border-pink-500/30 rounded-md focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 text-white placeholder-gray-500 resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-pink-600 to-blue-600 text-white font-bold rounded-md hover:shadow-[0_0_20px_rgba(219,39,119,0.5)] transition-all duration-300"
                  >
                    {contactSectionCopy.formPlaceholders.submitButton}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
          
          {/* Contact info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {contactSectionCopy.locations.map((location, index) => (
                <div 
                  key={index} 
                  className="relative"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-blue-600/20 rounded-lg -m-1 blur-sm"></div>
                  
                  <div className="relative rounded-lg overflow-hidden border border-pink-500/30 bg-black/50 backdrop-blur-sm p-6">
                    {/* VHS tracking lines effect */}
                    <div className="absolute inset-0 bg-scanlines opacity-10"></div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-pink-500 opacity-80"></div>
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500 opacity-80"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{location.city}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 mr-4">
                          <MapPinIcon className="w-5 h-5 text-pink-400" />
                        </div>
                        <p className="text-blue-100">{location.address}</p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 mr-4">
                          <PhoneIcon className="w-5 h-5 text-pink-400" />
                        </div>
                        <p className="text-blue-100">{location.phone}</p>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-blue-500/20 mr-4">
                          <EnvelopeIcon className="w-5 h-5 text-pink-400" />
                        </div>
                        <p className="text-blue-100">{location.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social media links */}
            <div className="mt-8 flex justify-center lg:justify-start space-x-4">
              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500/50 text-blue-400 hover:text-pink-400 hover:border-pink-500/70 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* Twitter */}
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500/50 text-blue-400 hover:text-pink-400 hover:border-pink-500/70 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500/50 text-blue-400 hover:text-pink-400 hover:border-pink-500/70 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500/50 text-blue-400 hover:text-pink-400 hover:border-pink-500/70 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
