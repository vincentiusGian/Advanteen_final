
import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const CertificateDownloader: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <div 
            ref={ref}
            className={`h-full flex flex-col items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
        >
            <div className="w-full bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="bg-gradient-to-r from-green-400 to-teal-400 text-white font-bold text-center py-3 px-6 rounded-xl shadow-md mb-6">
                    Task Completed! Download your certificate below!
                </div>
                <div className="bg-indigo-600 rounded-xl p-8 min-h-[300px] flex justify-center items-center shadow-inner">
                     <button className="bg-gradient-to-br from-amber-400 to-orange-500 text-white font-bold py-4 px-12 rounded-2xl shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificateDownloader;