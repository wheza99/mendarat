"use client";

import { useState, useEffect } from "react";
import BusinessTheme1 from "./theme-1";

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
      setError(err instanceof Error ? err.message : 'An error occurred');
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

  return <BusinessTheme1 businessData={businessData} />;
} 