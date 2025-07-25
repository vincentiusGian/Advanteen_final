import React from 'react';
import RocketIllustration from './icons/RocketIllustration';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const VisionCard = ({ children, className = '', number }) => (
    <div className="relative flex flex-col items-center">
        <div className="absolute -top-8 w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg border-4 border-white/50">
            {number}
        </div>
        <div className={`bg-white/90 backdrop-blur-md p-8 pt-10 rounded-2xl shadow-2xl border border-white/30 max-w-sm w-full ${className}`}>
            <p className="text-slate-700 font-semibold text-lg leading-relaxed text-center">{children}</p>
        </div>
    </div>
);

const VisionSection: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

    return (
        <section 
            ref={ref}
            className={`relative py-24 bg-gradient-to-br from-cyan-300 via-sky-400 to-indigo-500 overflow-hidden transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold">
                    OUR VISION & GOALS
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-indigo-100">
                    A future where academics, careers, and social impact goes hand in hand into creating a sustainable system every generation and entity can rely and grow upon.
                </p>

                <div className="mt-24 flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-0">
                    <VisionCard number={1} className="lg:mr-[-50px] lg:z-0">
                        Lead an initiative based system to open opportunities while maxing efficiency of educational outcome and impact towards society.
                    </VisionCard>
                    
                    <RocketIllustration className="w-64 h-64 lg:w-96 lg:h-96 my-8 lg:my-0 relative z-10 animate-[bounce_3s_ease-in-out_infinite]" />

                    <VisionCard number={2} className="lg:ml-[-50px] lg:z-0">
                        Provide a fun, supportive, and collaborative social bridge to empower individuals and different educational entities.
                    </VisionCard>
                </div>
            </div>
            
            {/* Decorative Stars */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 text-yellow-300 animate-pulse">&#9733;</div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 text-yellow-300 animate-pulse animation-delay-300">&#9733;</div>
            <div className="absolute top-1/3 right-1/4 w-5 h-5 text-yellow-300 animate-pulse animation-delay-500">&#9733;</div>
            <div className="absolute top-2/3 right-1/4 w-8 h-8 text-yellow-300 animate-pulse animation-delay-200">&#9733;</div>
        </section>
    );
}

export default VisionSection;