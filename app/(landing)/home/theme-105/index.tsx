import React, { Suspense, lazy } from 'react';

const PaperHero = lazy(() => import('./components/paper-hero'));
const CollageFeatures = lazy(() => import('./components/collage-features'));
const ShowcaseGallery = lazy(() => import('./components/showcase-gallery'));
const CreativeServices = lazy(() => import('./components/creative-services'));
const PaperPricing = lazy(() => import('./components/paper-pricing'));
const ContactCutout = lazy(() => import('./components/contact-cutout'));

const PaperLoader = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-[#f6f3ee]">
    <div className="relative flex flex-col items-center">
      {/* Paper sheet animation */}
      <div className="w-24 h-32 bg-[#fdf6e3] rounded-[18px] shadow-lg border-2 border-dashed border-yellow-300 animate-bounce-slow"></div>
      <div className="absolute top-2 left-2 w-8 h-8 bg-pink-200 rounded-[8px] rotate-12 shadow-md border-2 border-pink-300 animate-wiggle"></div>
      <div className="absolute bottom-2 right-2 w-10 h-6 bg-blue-200 rounded-[6px] -rotate-6 shadow-md border-2 border-blue-300 animate-wiggle"></div>
      <div className="absolute top-10 right-8 w-6 h-6 bg-green-200 rounded-full shadow border-2 border-green-300 animate-wiggle"></div>
      <div className="absolute bottom-8 left-8 w-8 h-4 bg-orange-200 rounded-[6px] shadow border-2 border-orange-300 animate-wiggle"></div>
      <span className="mt-8 text-yellow-600 font-bold font-mono tracking-wider animate-pulse">Loading Paper Collage...</span>
    </div>
    <style jsx>{`
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      .animate-bounce-slow { animation: bounce-slow 2.2s infinite; }
      @keyframes wiggle {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(4deg); }
      }
      .animate-wiggle { animation: wiggle 1.8s infinite; }
    `}</style>
  </div>
);

export default function HomePageTheme105() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] relative overflow-x-hidden font-sans">
      {/* Paper texture background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('/paper-texture.png')] opacity-40 mix-blend-multiply" />
        {/* Collage shapes */}
        <div className="absolute top-10 left-10 w-32 h-20 bg-yellow-200 rounded-[18px] shadow-lg rotate-3 opacity-70" />
        <div className="absolute bottom-16 right-16 w-24 h-16 bg-pink-200 rounded-[12px] shadow-lg -rotate-6 opacity-60" />
        <div className="absolute top-1/2 left-1/4 w-20 h-10 bg-blue-200 rounded-[10px] shadow-lg rotate-12 opacity-50" />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-8 bg-green-200 rounded-[8px] shadow-lg -rotate-3 opacity-50" />
      </div>
      <div className="relative z-10">
        <Suspense fallback={<PaperLoader />}>
          <PaperHero />
        </Suspense>
        <Suspense fallback={<PaperLoader />}>
          <CollageFeatures />
        </Suspense>
        <Suspense fallback={<PaperLoader />}>
          <ShowcaseGallery />
        </Suspense>
        <Suspense fallback={<PaperLoader />}>
          <CreativeServices />
        </Suspense>
        <Suspense fallback={<PaperLoader />}>
          <PaperPricing />
        </Suspense>
        <Suspense fallback={<PaperLoader />}>
          <ContactCutout />
        </Suspense>
      </div>
    </div>
  );
} 