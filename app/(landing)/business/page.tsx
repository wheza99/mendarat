"use client";

import { useState, useEffect } from "react";
import BusinessTheme1 from "./theme-1";
import BusinessTheme2 from "./theme-2";
import BusinessTheme3 from "./theme-3";
import BusinessTheme4 from "./theme-4";
import BusinessTheme5 from "./theme-5";

export interface BusinessData {
  id: string;
  img: string;
  name: string;
  currency: string;
  format: string;
  language: string;
  status: string;
  primary_color: string;
  secondary_color: string;
  selected_template: string;
  businessId: string;
  logo?: string;
  email?: string;
  location?: string;
  category?: string;
  description?: string;
  socialMedia?: {
    [key: string]: string | null;
  };
  metadata: {
    privacy: string;
    shipping: string | null;
    terms: string;
    description: string;
    announcement: string;
    background: string;
    banner: string | null;
    services?: string[];
    currency?: string;
    language?: string;
  };
  socials: {
    tiktok: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
  };
  messenger: {
    whatsapp: string | null;
    discord: string | null;
    instagram: string | null;
    facebook: string | null;
  };
  social_media?: {
    platform: string;
    url: string;
  }[];
  menu: {
    leftpane: string | null;
    rightpane: string | null;
    bottompane: string | null;
  };
  address: string | null;
}

export default function BusinessPage() {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5">("theme-5");

  useEffect(() => {
    // Langsung set mock data tanpa loading
    const mockData: BusinessData = {
      id: "DEMO001",
      businessId: "BIZ-2024-001",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
      name: "CREATIVE STUDIO ARTISAN",
      email: "hello@creativestudio.com",
      location: "Jakarta, Indonesia",
      category: "Creative Design",
      description: "Studio kreatif yang menghadirkan solusi desain inovatif dengan sentuhan artistik untuk berbagai kebutuhan bisnis modern.",
      currency: "IDR",
      format: "business",
      language: "Indonesian",
      status: "active",
      primary_color: "#8B5CF6",
      secondary_color: "#EC4899",
      selected_template: "theme-5",
      socialMedia: {
        instagram: "https://instagram.com/creativestudio",
        facebook: "https://facebook.com/creativestudio",
        twitter: "https://twitter.com/creativestudio",
        linkedin: "https://linkedin.com/company/creativestudio"
      },
      metadata: {
        privacy: "Kami mengutamakan privasi dan keamanan data Anda dengan kebijakan perlindungan yang komprehensif dan teknologi enkripsi terdepan.",
        shipping: "Layanan pengiriman cepat dan terpercaya tersedia di seluruh Indonesia dengan tracking real-time.",
        terms: "Syarat dan ketentuan profesional yang disesuaikan dengan kebutuhan konsultasi desain kreatif.",
        description: "Menciptakan ruang yang indah dan fungsional yang menginspirasi dan meningkatkan kehidupan sehari-hari dengan sentuhan artistik modern.",
        announcement: "🎨 Layanan desain berkelanjutan dan konsultasi kreatif kini tersedia!",
        background: "#FFFFFF",
        banner: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
        services: ["Desain Grafis", "Branding", "UI/UX Design", "Konsultasi Kreatif"],
        currency: "IDR",
        language: "Indonesian"
      },
      socials: {
        tiktok: "https://tiktok.com/@creativestudio",
        facebook: "https://facebook.com/creativestudio",
        instagram: "https://instagram.com/creativestudio",
        twitter: "https://twitter.com/creativestudio"
      },
      messenger: {
        whatsapp: "https://wa.me/628123456789",
        discord: null,
        instagram: "https://instagram.com/creativestudio",
        facebook: "https://facebook.com/creativestudio"
      },
      menu: {
        leftpane: "Services",
        rightpane: "Contact",
        bottompane: "Projects"
      },
      address: "Jl. Kreativitas No. 123, Jakarta Selatan, 12345"
    };
    
    console.log('🎨 Setting mock data directly for Theme-5:', mockData);
    setBusinessData(mockData);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-300 mx-auto"></div>
          <p className="mt-4 text-purple-100">Memuat Business Theme-5...</p>
          <p className="mt-2 text-purple-200 text-sm">Creative Studio Artisan</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  if (!businessData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No business data found</p>
      </div>
    );
  }

  // Render theme based on selection
  const renderTheme = () => {
    console.log('🎯 Rendering theme:', activeTheme, 'with data:', businessData);
    switch (activeTheme) {
      case "theme-1":
        return <BusinessTheme1 businessData={businessData} />;
      case "theme-2":
        return <BusinessTheme2 businessData={businessData} />;
      case "theme-3":
        return <BusinessTheme3 businessData={businessData} />;
      case "theme-4":
        return <BusinessTheme4 businessData={businessData} />;
      case "theme-5":
        console.log('🎨 Rendering BusinessTheme5 with data:', businessData);
        return <BusinessTheme5 data={businessData} />;
      default:
        console.log('🎨 Rendering default BusinessTheme5 with data:', businessData);
        return <BusinessTheme5 data={businessData} />;
    }
  };

  return (
    <>
      {/* Theme Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTheme("theme-1")}
            className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
              activeTheme === "theme-1"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Theme 1
          </button>
          <button
            onClick={() => setActiveTheme("theme-2")}
            className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
              activeTheme === "theme-2"
                ? "bg-amber-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Theme 2
          </button>
          <button
            onClick={() => setActiveTheme("theme-3")}
            className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
              activeTheme === "theme-3"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Theme 3
          </button>
          <button
            onClick={() => setActiveTheme("theme-4")}
            className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
              activeTheme === "theme-4"
                ? "bg-emerald-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Theme 4
          </button>
          <button
            onClick={() => setActiveTheme("theme-5")}
            className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
              activeTheme === "theme-5"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Theme 5
          </button>
        </div>
      </div>
      
      {renderTheme()}
    </>
  );
} 