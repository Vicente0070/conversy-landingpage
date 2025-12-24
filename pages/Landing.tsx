import React from 'react';
import { Header, Footer } from '../components/Layout';
import { Hero } from '../sections/Hero';
import { SocialProof, Benefits, Features, HiddenCosts, Timeline, Results, FAQ } from '../sections/LandingSections';
import { CaseStudy } from '../sections/CaseStudy';
import { FinalCTA } from '../sections/FinalCTA';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-950 font-sans text-text-100 selection:bg-primary-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <Features />
        <HiddenCosts />
        <Timeline />
        <Results />
        <CaseStudy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};