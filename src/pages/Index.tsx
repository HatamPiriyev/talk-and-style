import React from 'react';
import { HeroSection, ServicesSection, PortfolioSection } from '@/components/Sections';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <Chatbot />
    </div>
  );
};

export default Index;
