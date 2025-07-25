import React from 'react';
import ClipboardIllustration from './icons/ClipboardIllustration';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const QuoteCard = ({ children, className }) => (
  <div className={`absolute bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 max-w-xs ${className}`}>
    <p className="text-slate-700 font-medium leading-relaxed">
      "{children}"
    </p>
  </div>
);

const TestimonialsSection: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      ref={ref}
      className={`py-24 bg-white transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Behind the <span className="text-indigo-600">Garuda's Glory</span>
          </h2>
        </div>

        <div className="relative flex justify-center items-center h-[500px]">
          <ClipboardIllustration className="w-full max-w-sm md:max-w-md h-auto" />

          <QuoteCard className="top-0 left-0 transform -rotate-3 hidden lg:block">
            Students enrolled in community-learning models are 40% more likely to complete the course" - edX Insights, 2021
          </QuoteCard>
          
          <QuoteCard className="top-12 right-0 transform rotate-3 hidden lg:block">
             Service-learning projects improve both academic outcomes and civic engagement in students, with a 65% increase in real-world skill application” - NYLC 2019
          </QuoteCard>

           <QuoteCard className="bottom-12 left-0 transform rotate-2 hidden lg:block">
            Over 50% of learners in lower income countries are unable to access online learning due to lack of internet, devices, or support"
          </QuoteCard>

          <QuoteCard className="bottom-0 right-0 transform -rotate-2 hidden lg:block">
            Community initiatives led by young people are more likely to experiment with creative solutions and engage hard-to-reach groups.
          </QuoteCard>
          
           {/* Mobile view quotes */}
          <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50">"Students enrolled in community-learning models are 40% more likely to complete the course" - edX Insights, 2021</div>
             <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50">"Service-learning projects improve both academic outcomes and civic engagement..." - NYLC 2019</div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;