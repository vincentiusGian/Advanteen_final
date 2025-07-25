import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import VisionSection from '../components/VisionSection';
import DiscoverSection from '../components/DiscoverSection';
import PopularCoursesSection from '../components/PopularCoursesSection';
import PopularProjectsSection from '../components/PopularProjectsSection';
import InternshipsSection from './InternshipsSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <VisionSection />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#77E4D4] to-[#DEE8FF]"></div>
        <div 
          className="absolute top-0 left-0 right-0"
          style={{ transform: 'translateY(-50%)' }}
        >
          <svg viewBox="0 0 1440 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 43.9999C146 79.5 288 102.5 442.5 86C645 64 840.5 0.5 1025.5 1.00002C1210.5 1.50004 1350.5 44 1440 59.5V130H0V43.9999Z" fill="#DEE8FF"/>
          </svg>
        </div>
        <div className="relative bg-[#DEE8FF] pt-20">
            <DiscoverSection />
            <PopularCoursesSection />
            <PopularProjectsSection />
        </div>
      </div>
      <InternshipsSection />
    </>
  );
};

export default LandingPage;
