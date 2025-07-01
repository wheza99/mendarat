"use client";

import { useState, useEffect } from "react";
import BusinessTheme1 from "./theme-1";
import BusinessTheme2 from "./theme-2";
import BusinessTheme3 from "./theme-3";
import BusinessTheme4 from "./theme-4";
import BusinessTheme5 from "./theme-5";
import BusinessTheme6 from "./theme-6";

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
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2" | "theme-3" | "theme-4" | "theme-5" | "theme-6">("theme-6");

  // Function to get mock data based on active theme
  const getMockDataByTheme = (theme: string): BusinessData => {
    const baseData = {
      id: "DEMO001",
      img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      currency: "IDR",
      format: "business",
      language: "Indonesian",
      status: "active",
      socialMedia: {
        instagram: "https://instagram.com/creativestudio",
        facebook: "https://facebook.com/creativestudio",
        twitter: "https://twitter.com/creativestudio",
        linkedin: "https://linkedin.com/company/creativestudio"
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
      }
    };

    switch (theme) {
      case "theme-1":
        return {
          ...baseData,
          businessId: "BIZ-2024-001",
          logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
          name: "ARKA ARSITEK",
          email: "hello@arkaarsitek.com",
          location: "Jakarta, Indonesia",
          category: "Architecture",
          description: "Studio arsitektur modern yang menghadirkan desain inovatif dan fungsional untuk ruang hunian dan komersial yang menginspirasi.",
          primary_color: "#2563eb",
          secondary_color: "#1d4ed8",
          selected_template: "theme-1",
          metadata: {
            privacy: "Kami mengutamakan privasi dan keamanan data Anda dengan kebijakan perlindungan yang komprehensif.",
            shipping: "Layanan konsultasi tersedia di seluruh Indonesia dengan sistem appointment online.",
            terms: "Syarat dan ketentuan profesional yang disesuaikan dengan kebutuhan konsultasi arsitektur.",
            description: "Menciptakan ruang yang indah dan fungsional yang menginspirasi dan meningkatkan kehidupan sehari-hari.",
            announcement: "🏗️ Konsultasi arsitektur gratis untuk proyek pertama Anda!",
            background: "#FFFFFF",
            banner: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
            services: ["Architectural Design", "Interior Planning", "3D Visualization", "Construction Management"],
            currency: "IDR",
            language: "Indonesian"
          },
          address: "Jl. Arsitektur Modern No. 123, Jakarta Pusat, 10110"
        };
      
      case "theme-2":
        return {
          ...baseData,
          businessId: "BIZ-2024-002",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
          name: "GOLDEN CRAFT STUDIO",
          email: "hello@goldencraft.com",
          location: "Bandung, Indonesia",
          category: "Handcraft & Art",
          description: "Studio kerajinan tangan premium yang menghadirkan karya seni berkualitas tinggi dengan sentuhan emas dan kemewahan tradisional.",
          primary_color: "#f59e0b",
          secondary_color: "#d97706",
          selected_template: "theme-2",
          metadata: {
            privacy: "Privasi dan keamanan data pelanggan adalah prioritas utama kami.",
            shipping: "Pengiriman aman ke seluruh Indonesia dengan packaging premium.",
            terms: "Syarat dan ketentuan yang mengutamakan kepuasan pelanggan.",
            description: "Menghadirkan karya seni kerajinan tangan berkualitas tinggi dengan detail yang sempurna.",
            announcement: "✨ Koleksi emas terbaru dengan diskon 20% untuk pelanggan setia!",
            background: "#FFFFFF",
            banner: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop",
            services: ["Custom Jewelry", "Art Crafts", "Gold Plating", "Restoration"],
            currency: "IDR",
            language: "Indonesian"
          },
          address: "Jl. Kerajinan Emas No. 456, Bandung, 40123"
        };
      
      case "theme-3":
        return {
          ...baseData,
          businessId: "BIZ-2024-003",
          logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop",
          name: "BLUE OCEAN TECH",
          email: "hello@blueoceantech.com",
          location: "Surabaya, Indonesia",
          category: "Technology Solutions",
          description: "Perusahaan teknologi yang menghadirkan solusi digital inovatif untuk transformasi bisnis modern dengan pendekatan blue ocean strategy.",
          primary_color: "#3b82f6",
          secondary_color: "#2563eb",
          selected_template: "theme-3",
          metadata: {
            privacy: "Keamanan data dan privasi digital adalah fondasi layanan kami.",
            shipping: "Implementasi sistem tersedia secara remote dan on-site.",
            terms: "Kontrak layanan yang fleksibel dan menguntungkan kedua belah pihak.",
            description: "Menghadirkan solusi teknologi terdepan untuk akselerasi bisnis digital.",
            announcement: "🚀 Paket digital transformation dengan harga spesial tahun ini!",
            background: "#FFFFFF",
            banner: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop",
            services: ["Web Development", "Mobile Apps", "Cloud Solutions", "Digital Marketing"],
            currency: "IDR",
            language: "Indonesian"
          },
          address: "Jl. Teknologi Digital No. 789, Surabaya, 60123"
        };
      
      case "theme-4":
        return {
          ...baseData,
          businessId: "BIZ-2024-004",
          logo: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=100&h=100&fit=crop",
          name: "EMERALD GARDEN SPA",
          email: "hello@emeraldgarden.com",
          location: "Bali, Indonesia",
          category: "Wellness & Spa",
          description: "Spa dan wellness center premium yang menghadirkan pengalaman relaksasi holistik dengan terapi alami dan suasana emerald garden yang menenangkan.",
          primary_color: "#059669",
          secondary_color: "#047857",
          selected_template: "theme-4",
          metadata: {
            privacy: "Privasi dan kenyamanan tamu adalah prioritas utama kami.",
            shipping: "Layanan home spa tersedia untuk area Bali dan sekitarnya.",
            terms: "Kebijakan layanan yang mengutamakan kesehatan dan keselamatan tamu.",
            description: "Menghadirkan pengalaman spa dan wellness terbaik dengan terapi alami berkualitas tinggi.",
            announcement: "🌿 Paket wellness retreat dengan pemandangan emerald garden yang menakjubkan!",
            background: "#FFFFFF",
            banner: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=600&fit=crop",
            services: ["Traditional Massage", "Aromatherapy", "Facial Treatment", "Wellness Retreat"],
            currency: "IDR",
            language: "Indonesian"
          },
          address: "Jl. Emerald Garden No. 321, Ubud, Bali, 80571"
        };
      
      case "theme-5":
        return {
          ...baseData,
          businessId: "BIZ-2024-005",
          logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop",
          name: "CREATIVE STUDIO ARTISAN",
          email: "hello@creativestudio.com",
          location: "Yogyakarta, Indonesia",
          category: "Creative Design",
          description: "Studio kreatif yang menghadirkan karya seni dan desain inovatif dengan sentuhan artistik yang memukau dan penuh inspirasi.",
          primary_color: "#8b5cf6",
          secondary_color: "#ec4899",
          selected_template: "theme-5",
          metadata: {
            privacy: "Hak cipta dan privasi karya seni dilindungi dengan sistem keamanan terdepan.",
            shipping: "Pengiriman karya seni dengan packaging khusus ke seluruh Indonesia.",
            terms: "Kontrak kerjasama yang melindungi hak cipta dan kepentingan bersama.",
            description: "Menciptakan karya seni dan desain yang menginspirasi dengan kualitas premium.",
            announcement: "🎨 Pameran seni terbaru dengan koleksi eksklusif dari artisan terbaik!",
            background: "#FFFFFF",
            banner: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=600&fit=crop",
            services: ["Graphic Design", "Digital Art", "Brand Identity", "Creative Consultation"],
            currency: "IDR",
            language: "Indonesian"
          },
          address: "Jl. Seni Kreatif No. 654, Yogyakarta, 55223"
        };
      
      case "theme-6":
      default:
        return {
          ...baseData,
          businessId: "BIZ-2024-006",
          logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop",
          name: "NATURAL ELEGANCE STUDIO",
          email: "hello@naturalelegance.com",
          location: "Jakarta, Indonesia",
          category: "Sustainable Design",
          description: "Studio desain berkelanjutan yang menggabungkan keindahan alami dengan inovasi teknologi untuk menciptakan solusi bisnis yang ramah lingkungan dan elegan.",
          primary_color: "#0d9488",
          secondary_color: "#059669",
          selected_template: "theme-6",
          metadata: {
            privacy: "Kami mengutamakan privasi dan keamanan data Anda dengan kebijakan perlindungan yang komprehensif dan teknologi enkripsi terdepan.",
            shipping: "Layanan pengiriman cepat dan terpercaya tersedia di seluruh Indonesia dengan tracking real-time.",
            terms: "Syarat dan ketentuan profesional yang disesuaikan dengan kebutuhan konsultasi desain kreatif.",
            description: "Menciptakan ruang yang indah dan fungsional yang menginspirasi dan meningkatkan kehidupan sehari-hari dengan sentuhan artistik modern.",
            announcement: "🌿 Layanan Natural Elegance dengan teknologi berkelanjutan kini tersedia untuk semua klien!",
            background: "#FFFFFF",
            banner: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
            services: ["Sustainable Design", "Eco-Consulting", "Green Technology", "Natural Branding"],
            currency: "IDR",
            language: "Indonesian"
          },
          address: "Jl. Natural Elegance No. 456, Jakarta Selatan, 12345"
        };
    }
  };

  useEffect(() => {
    const mockData = getMockDataByTheme(activeTheme);
    console.log(`🎯 Setting mock data for ${activeTheme}:`, mockData.name);
    setBusinessData(mockData);
  }, [activeTheme]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-300 mx-auto"></div>
          <p className="mt-4 text-gray-100">Memuat Business Theme...</p>
          <p className="mt-2 text-gray-200 text-sm">Loading Data</p>
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
      case "theme-6":
        console.log('🌿 Rendering BusinessTheme6 with data:', businessData);
        return <BusinessTheme6 data={businessData} />;
      default:
        console.log('🌿 Rendering default BusinessTheme6 with data:', businessData);
        return <BusinessTheme6 data={businessData} />;
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
          <button
            onClick={() => setActiveTheme("theme-6")}
            className={`px-3 py-2 text-xs font-medium rounded transition-colors ${
              activeTheme === "theme-6"
                ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Theme 6
          </button>
        </div>
      </div>
      
      {renderTheme()}
    </>
  );
} 