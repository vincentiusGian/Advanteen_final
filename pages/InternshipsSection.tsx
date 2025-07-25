import React, { useState, useRef } from 'react';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import { useIntersectionObserver } from '../components/hooks/useIntersectionObserver';
import LogoIcon from '../components/icons/LogoIcon';

const internshipData = [
  { 
    title: "UI/UX DESIGNER", 
    company: "Indonesia's Heritage Society", 
    description: "Responsible to respond towards certain audience and prospective clients' needs, as well as maintaining the company's image and positive reputation.",
    type: "On-site | Part-time"
  },
  { 
    title: "PUBLIC RELATIONS", 
    company: "GarudaHacks Committee", 
    description: "Responsible to respond towards certain audience and prospective clients' needs, as well as maintaining the company's image and positive reputation with business perspectives, as well as maintaining integrity within the organizational communication.",
    type: "On-site | Part-time"
  },
  { 
    title: "EDUCATION CONSULTANT", 
    company: "Advanteens Academic Pursuit", 
    description: "Responsible to respond towards certain audience and prospective clients' needs, as well as maintaining the company's image and positive reputation.",
    type: "On-site | Part-time"
  },
  { 
    title: "SOCIAL MEDIA MANAGER", 
    company: "Digital Creatives Inc.", 
    description: "Responsible to respond towards certain audience and prospective clients' needs, as well as maintaining the company's image and positive reputation.",
    type: "On-site | Part-time"
  },
];

const InternshipCard = ({ internship, isActive }) => (
    <div className={`flex-shrink-0 w-72 h-48 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg rounded-3xl p-6 flex flex-col justify-between items-start text-white shadow-2xl border border-white/20 transition-all duration-500 ${isActive ? 'scale-110 -translate-y-4' : 'scale-90 opacity-60'}`}>
        <div>
            <h3 className="text-xl font-bold">{internship.title}</h3>
            <p className="text-indigo-200 mt-1">{internship.company}</p>
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 opacity-50">
                <LogoIcon />
            </div>
        </div>
    </div>
);

const InternshipsSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? internshipData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === internshipData.length - 1 ? 0 : prev + 1));
  };

  const activeInternship = internshipData[activeIndex];

  return (
    <section 
      ref={ref}
      className={`py-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 transition-all duration-1000 ease-out overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            CONTRIBUTE, INVEST YOUR SKILLS, AND START INTERNSHIPS
          </h2>
        </div>
        <div className="relative flex flex-col items-center justify-center">
            
            <div className="relative h-64 w-full flex items-center justify-center">
                <button onClick={handlePrev} className="absolute left-0 md:left-12 z-20 p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors">
                    <ChevronLeftIcon className="w-6 h-6"/>
                </button>

                <div className="absolute w-[200%] md:w-full h-full flex items-center justify-center transition-transform duration-500 ease-in-out" style={{ transform: `translateX(${-activeIndex * 22}rem)`}}>
                    <div className="flex items-center gap-8">
                        {internshipData.map((item, i) => <InternshipCard key={i} internship={item} isActive={i === activeIndex} />)}
                    </div>
                </div>

                <button onClick={handleNext} className="absolute right-0 md:right-12 z-20 p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors">
                    <ChevronRightIcon className="w-6 h-6"/>
                </button>
            </div>
            
            <div className="mt-12 relative w-full max-w-md h-48">
              <div className={`transition-opacity duration-500 absolute w-full ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl text-slate-700">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/90 transform rotate-45"></div>
                    <p className="text-sm font-semibold text-indigo-600 mb-2">{activeInternship.type}</p>
                    <p className="text-sm leading-relaxed">{activeInternship.description}</p>
                    <div className="text-center mt-4">
                        <button className="px-8 py-2 bg-indigo-600 text-white font-bold rounded-full shadow-lg shadow-indigo-500/40 transform transition-all duration-300 hover:scale-105">
                            INQUIRE
                        </button>
                    </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
                <button className="px-10 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/40 transform transition-all duration-300 hover:scale-105">
                    JOIN ADVANTEENS
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;