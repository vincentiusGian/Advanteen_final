import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import DiamondIcon from './icons/DiamondIcon';
import CoinIcon from './icons/CoinIcon';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full">{children}</span>
);

interface Project {
  img: string;
  title: string;
  organizer: string;
  tags: string[];
  prizes: {
    gems: number;
    coins: number;
    collectible: string;
  };
}

interface ProjectInfoCardProps {
  project: Project;
}

const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({ project }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <div 
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col p-6">
                <div className="rounded-xl overflow-hidden">
                     <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                </div>
                <div className="mt-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{project.organizer}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-200">
                        <h4 className="font-semibold text-slate-600 mb-3">Completion prize:</h4>
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <DiamondIcon className="w-5 h-5 text-fuchsia-500" />
                                <span className="font-bold text-slate-700">{project.prizes.gems}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CoinIcon className="w-5 h-5 text-yellow-500" />
                                <span className="font-bold text-slate-700">{project.prizes.coins}</span>
                            </div>
                        </div>
                         <p className="text-sm text-slate-500 mt-3">{project.prizes.collectible}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfoCard;