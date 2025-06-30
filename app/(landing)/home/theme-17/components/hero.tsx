"use client";

import { useEffect, useState } from "react";
import { heroSectionCopy } from "../copy";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-60">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-200/40 to-sky-200/40 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-sky-200/40 to-amber-200/40 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x * 0.015}%`,
            bottom: `${mousePosition.y * 0.015}%`,
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              
              {/* Tagline Glass Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-emerald-400/50"></div>
                <span className="text-slate-700 font-medium text-sm tracking-wide">
                  {heroSectionCopy.tagline}
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight">
                  {heroSectionCopy.heading1}
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent leading-tight">
                  {heroSectionCopy.heading2}
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-lg">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {heroSectionCopy.description}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Primary CTA - Glass Button */}
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500/90 to-sky-500/90 backdrop-blur-lg border border-white/30 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <span className="relative z-10">{heroSectionCopy.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-sky-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {/* Secondary CTA */}
                <button className="px-8 py-4 bg-white/30 backdrop-blur-lg border border-white/50 text-slate-700 font-semibold text-lg rounded-2xl hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-lg">
                  {heroSectionCopy.exploreCta}
                </button>
              </div>

              {/* Floating Stats */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="px-4 py-2 bg-white/25 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg">
                  <div className="text-emerald-600 font-bold text-xl">500+</div>
                  <div className="text-slate-600 text-sm">Projects</div>
                </div>
                <div className="px-4 py-2 bg-white/25 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg">
                  <div className="text-sky-600 font-bold text-xl">98%</div>
                  <div className="text-slate-600 text-sm">Happy Clients</div>
                </div>
                <div className="px-4 py-2 bg-white/25 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg">
                  <div className="text-amber-600 font-bold text-xl">5+</div>
                  <div className="text-slate-600 text-sm">Years</div>
                </div>
              </div>
            </div>

            {/* Right Column - Glass Dashboard Mockup */}
            <div className="relative">
              
              {/* Main Glass Container */}
              <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 shadow-2xl">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                  </div>
                  <div className="text-slate-600 text-sm font-medium px-3 py-1 bg-white/30 rounded-lg backdrop-blur-sm">
                    Digital Dashboard
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  
                  {/* Chart Area */}
                  <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-slate-700 font-semibold mb-4">Growth Analytics</div>
                    <div className="flex items-end space-x-2 h-24">
                      {[65, 80, 45, 90, 75, 95, 85].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 bg-gradient-to-t from-emerald-400 to-sky-400 rounded-t-lg shadow-lg"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-emerald-400/20 to-sky-400/20 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">₹2.4M</div>
                      <div className="text-slate-600 text-sm">Revenue</div>
                    </div>
                    <div className="bg-gradient-to-br from-sky-400/20 to-amber-400/20 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                      <div className="text-2xl font-bold text-sky-600 mb-1">12.5K</div>
                      <div className="text-slate-600 text-sm">Users</div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-slate-700 font-medium mb-3">Recent Activity</div>
                    <div className="space-y-2">
                      {[
                        { icon: "🚀", text: "New project launched", time: "2m ago" },
                        { icon: "💰", text: "Payment received", time: "5m ago" },
                        { icon: "👥", text: "Team member added", time: "10m ago" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3 p-2 bg-white/20 rounded-lg">
                          <span className="text-lg">{item.icon}</span>
                          <div className="flex-1">
                            <div className="text-slate-700 text-sm font-medium">{item.text}</div>
                            <div className="text-slate-500 text-xs">{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-xl shadow-lg animate-bounce opacity-80"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-lg shadow-lg animate-pulse opacity-60"></div>
              </div>

              {/* Additional Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white/25 backdrop-blur-lg border border-white/30 rounded-2xl p-4 shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-slate-700 text-sm font-medium">System Online</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white/25 backdrop-blur-lg border border-white/30 rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-sky-600 font-bold text-lg">99.9%</div>
                  <div className="text-slate-600 text-xs">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center z-20">
        <span className="text-slate-600 text-sm mb-3">{heroSectionCopy.scrollText}</span>
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center pt-2 bg-white/20 backdrop-blur-sm">
          <div className="w-1 h-2 bg-emerald-500 rounded-full animate-bounce shadow-lg shadow-emerald-500/50" />
        </div>
      </div>
    </section>
  );
} 