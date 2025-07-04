import React, { Suspense } from 'react';

// Lazy load components for better performance
const RenaissanceHero = React.lazy(() => import('./components/renaissance-hero'));
const ArtisticAI = React.lazy(() => import('./components/artistic-ai'));
const DigitalGallery = React.lazy(() => import('./components/digital-gallery'));
const CreativeWorkshop = React.lazy(() => import('./components/creative-workshop'));
const BaroqueFeatures = React.lazy(() => import('./components/baroque-features'));
const MasterContact = React.lazy(() => import('./components/master-contact'));

const ComponentWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
      <div className="animate-renaissance-fade-in">
        <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  }>
    {children}
  </Suspense>
);

export default function HomePageTheme63() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-amber-900">
      <ComponentWrapper>
        <RenaissanceHero />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <ArtisticAI />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <DigitalGallery />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <CreativeWorkshop />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <BaroqueFeatures />
      </ComponentWrapper>
      
      <ComponentWrapper>
        <MasterContact />
      </ComponentWrapper>
    </div>
  );
} 