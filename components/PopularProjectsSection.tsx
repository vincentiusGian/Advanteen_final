import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1532640039917-7C7949A45a92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Volunteer for Accessible Technology',
    org: 'GarudaHacks Committee',
    tags: ['Online', 'Offline', 'STEM'],
  },
  {
    img: 'https://images.unsplash.com/photo-1569917812165-28954994c65b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Indonesia\'s Cultural Heritage Campaign',
    org: 'Indonesia\'s Heritage Society',
    tags: ['Online', 'Offline', 'Arts/Culture'],
  },
  {
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Kartini Road To University Campaign',
    org: 'Generation Girl',
    tags: ['Offline', 'Social/Economy'],
  },
  {
    img: 'https://images.unsplash.com/photo-1576085898323-218335e23c27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Coastal Cleanup Initiative',
    org: 'Planet Protectors',
    tags: ['Offline', 'Environment'],
  },
];

const Tag = ({ children }) => <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{children}</span>;

const ProjectCard = ({ project }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
        <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
        <div className="p-5">
            <h3 className="text-lg font-bold text-slate-800">{project.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{project.org}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <div className="mt-5 text-right">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800 text-sm">
                    View Details &gt;
                </a>
            </div>
        </div>
    </div>
);


const PopularProjectsSection: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <section 
            ref={ref}
            className={`pb-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Popular <span className="text-indigo-600">Projects</span>
                    </h2>
                    <a href="#" className="flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800">
                        View more <ArrowRightIcon className="w-5 h-5" />
                    </a>
                </div>
                <div className="flex gap-8 overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar">
                   {projects.map((project, i) => <ProjectCard key={i} project={project} />)}
                </div>
            </div>
        </section>
    );
}

export default PopularProjectsSection;