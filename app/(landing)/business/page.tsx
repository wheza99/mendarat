"use client";

import { useState, useEffect } from "react";
import BusinessTheme1 from "./theme-1";
import BusinessTheme2 from "./theme-2";
import BusinessTheme3 from "./theme-3";
import BusinessTheme4 from "./theme-4";

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
  metadata: {
    privacy: string;
    shipping: string | null;
    terms: string;
    description: string;
    announcement: string;
    background: string;
    banner: string | null;
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<"theme-1" | "theme-2" | "theme-3" | "theme-4">("theme-4");

  useEffect(() => {
    // Default domain untuk testing, nanti bisa diambil dari URL params atau state
    const domain = "whezabakery.withrolly.com";
    fetchBusinessData(domain);
  }, []);

  const fetchBusinessData = async (domain: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/business', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch business data');
      }

      const data = await response.json();
      setBusinessData(data);
    } catch (err) {
      console.error('API Error, using mock data:', err);
      // Fallback to mock data for demo purposes
      const mockData: BusinessData = {
        id: "DEMO001",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
        name: "ARKA ARSITEK",
        currency: "IDR",
        format: "business",
        language: "Indonesian",
        status: "Active",
        primary_color: "#047857",
        secondary_color: "#065F46",
        selected_template: "theme-4",
        metadata: {
          privacy: "We prioritize your privacy and data security with comprehensive protection policies.",
          shipping: "Fast and reliable shipping services available nationwide.",
          terms: "Professional terms of service tailored to architectural consulting needs.",
          description: "Creating beautiful, functional spaces that inspire and elevate everyday living.",
          announcement: "🎉 New sustainable design services now available!",
          background: "#FFFFFF",
          banner: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
        },
        socials: {
          tiktok: "https://tiktok.com/@arkaarsitek",
          facebook: "https://facebook.com/arkaarsitek",
          instagram: "https://instagram.com/arkaarsitek",
          twitter: "https://twitter.com/arkaarsitek"
        },
        messenger: {
          whatsapp: "https://wa.me/628123456789",
          discord: null,
          instagram: "https://instagram.com/arkaarsitek",
          facebook: "https://facebook.com/arkaarsitek"
        },
        menu: {
          leftpane: "Services",
          rightpane: "Contact",
          bottompane: "Projects"
        },
        address: "123 Design Street, Creative City, 12345"
      };
      setBusinessData(mockData);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat data business...</p>
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
            onClick={() => fetchBusinessData("whezabakery.withrolly.com")}
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
    switch (activeTheme) {
      case "theme-1":
        return <BusinessTheme1 businessData={businessData} />;
      case "theme-2":
        return <BusinessTheme2 businessData={businessData} />;
      case "theme-3":
        return <BusinessTheme3 businessData={businessData} />;
      case "theme-4":
        return <BusinessTheme4 businessData={businessData} />;
      default:
        return <BusinessTheme3 businessData={businessData} />;
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
        </div>
      </div>
      
      {renderTheme()}
    </>
  );
} 