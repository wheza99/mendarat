"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    // Form submission logic would go here
  };
  
  // Contact information
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Call Us",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email Us",
      info: "contact@cosmicdesign.com",
      link: "mailto:contact@cosmicdesign.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Visit Us",
      info: "123 Cosmic Avenue, Stellar City, SC 12345",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-[#1A0B2E] to-[#1F1147]"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[30px] rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[60px] rounded-full border border-[#E5E4E2]"></div>
        </div>
        <div className="absolute right-0 top-0 w-[200px] h-[200px] opacity-5">
          <div className="absolute inset-0 rounded-full border border-[#E5E4E2]"></div>
          <div className="absolute inset-[20px] rounded-full border border-[#E5E4E2]"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-4">Contact Transmission</h2>
          <p className="text-[#E5E4E2]/70 max-w-2xl mx-auto">
            Send a signal to our cosmic headquarters and initiate a conversation about your project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact information cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-6 transition-all duration-500 hover:border-[#E5E4E2]/30 relative overflow-hidden"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                  <div className="absolute top-0 left-0 w-[1px] h-4 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-[1px] w-4 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 h-[1px] w-4 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#9370DB] mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#E5E4E2] font-medium mb-1">
                      {item.title}
                    </h3>
                    <a 
                      href={item.link} 
                      className="text-[#E5E4E2]/70 hover:text-[#9370DB] transition-colors duration-300"
                    >
                      {item.info}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Social media links */}
            <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-6 transition-all duration-500 hover:border-[#E5E4E2]/30 relative overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-[1px] h-4 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-[1px] w-4 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-[1px] w-4 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
              </div>
              
              <h3 className="text-[#E5E4E2] font-medium mb-3">Connect With Us</h3>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E4E2]/20 text-[#E5E4E2]/70 hover:text-[#9370DB] hover:border-[#9370DB] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E4E2]/20 text-[#E5E4E2]/70 hover:text-[#9370DB] hover:border-[#9370DB] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E4E2]/20 text-[#E5E4E2]/70 hover:text-[#9370DB] hover:border-[#9370DB] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E4E2]/20 text-[#E5E4E2]/70 hover:text-[#9370DB] hover:border-[#9370DB] transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#2A1B3D]/50 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 relative overflow-hidden">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-10 h-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-[1px] h-6 bg-gradient-to-b from-[#E5E4E2]/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-[1px] w-6 bg-gradient-to-r from-[#E5E4E2]/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[1px] h-6 bg-gradient-to-t from-[#E5E4E2]/50 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-[1px] w-6 bg-gradient-to-l from-[#E5E4E2]/50 to-transparent"></div>
              </div>
              
              {/* Constellation background */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="20" y1="20" x2="80" y2="30" stroke="#E5E4E2" strokeWidth="0.5" />
                  <line x1="80" y1="30" x2="30" y2="70" stroke="#E5E4E2" strokeWidth="0.5" />
                  <line x1="30" y1="70" x2="70" y2="80" stroke="#E5E4E2" strokeWidth="0.5" />
                  <circle cx="20" cy="20" r="1" fill="#E5E4E2" />
                  <circle cx="80" cy="30" r="1" fill="#E5E4E2" />
                  <circle cx="30" cy="70" r="1" fill="#E5E4E2" />
                  <circle cx="70" cy="80" r="1" fill="#E5E4E2" />
                </svg>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#E5E4E2]/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1A0B2E]/50 border border-[#E5E4E2]/20 rounded-lg focus:border-[#9370DB] focus:outline-none focus:ring-1 focus:ring-[#9370DB] text-[#E5E4E2] placeholder-[#E5E4E2]/30 transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#E5E4E2]/70 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1A0B2E]/50 border border-[#E5E4E2]/20 rounded-lg focus:border-[#9370DB] focus:outline-none focus:ring-1 focus:ring-[#9370DB] text-[#E5E4E2] placeholder-[#E5E4E2]/30 transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#E5E4E2]/70 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A0B2E]/50 border border-[#E5E4E2]/20 rounded-lg focus:border-[#9370DB] focus:outline-none focus:ring-1 focus:ring-[#9370DB] text-[#E5E4E2] placeholder-[#E5E4E2]/30 transition-colors duration-300 appearance-none"
                  >
                    <option value="" disabled className="bg-[#1A0B2E]">Select a subject</option>
                    <option value="general" className="bg-[#1A0B2E]">General Inquiry</option>
                    <option value="project" className="bg-[#1A0B2E]">Project Consultation</option>
                    <option value="support" className="bg-[#1A0B2E]">Technical Support</option>
                    <option value="other" className="bg-[#1A0B2E]">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E5E4E2]/70 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1A0B2E]/50 border border-[#E5E4E2]/20 rounded-lg focus:border-[#9370DB] focus:outline-none focus:ring-1 focus:ring-[#9370DB] text-[#E5E4E2] placeholder-[#E5E4E2]/30 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 rounded border-[#E5E4E2]/20 bg-[#1A0B2E]/50 text-[#9370DB] focus:ring-[#9370DB] focus:ring-offset-0"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-[#E5E4E2]/70">
                    I agree to the <a href="#" className="text-[#9370DB] hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <div>
                  <Button type="submit" className="w-full py-6 rounded-full bg-gradient-to-r from-[#9370DB] to-[#7B68EE] hover:opacity-90 text-white transition-all duration-300">
                    Send Transmission
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Map or additional info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-[#2A1B3D]/30 backdrop-blur-sm border border-[#E5E4E2]/10 rounded-lg p-8 relative overflow-hidden h-64 flex items-center justify-center">
            {/* Placeholder for map */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto relative mb-4">
                <div className="absolute inset-0 rounded-full border border-[#E5E4E2]/30"></div>
                <div className="absolute inset-[4px] rounded-full border border-[#E5E4E2]/20"></div>
                <div className="absolute inset-[8px] rounded-full bg-[#9370DB]/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E5E4E2]/70">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </div>
              <p className="text-[#E5E4E2]/70">
                Interactive star map would be displayed here
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
