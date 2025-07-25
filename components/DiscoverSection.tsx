import React from 'react';
import CoursesIcon from './icons/CoursesIcon';
import SocialProjectIcon from './icons/SocialProjectIcon';
import InternshipsIcon from './icons/InternshipsIcon';
import GachaIcon from './icons/GachaIcon';
import AiIcon from './icons/AiIcon';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const FeatureItem = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center text-center gap-4">
    <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <p className="text-slate-600">{subtitle}</p>
    </div>
  </div>
);


const DiscoverSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className={`py-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Discover <span className="text-indigo-600">awesome</span> features!
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
          <FeatureItem icon={<CoursesIcon className="w-14 h-14" />} title="Courses and" subtitle="Tutoring" />
          <FeatureItem icon={<SocialProjectIcon className="w-14 h-14" />} title="Social Project" subtitle="Society" />
          <FeatureItem icon={<InternshipsIcon className="w-14 h-14" />} title="Youth" subtitle="Internships" />
          <FeatureItem icon={<GachaIcon className="w-14 h-14" />} title="Collectibles" subtitle="Gacha" />
          <FeatureItem icon={<AiIcon className="w-14 h-14" />} title="AI Powered" subtitle="Suggestions" />
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;