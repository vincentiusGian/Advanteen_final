import React from 'react';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{children}</span>
);

interface Course {
  img: string;
  title: string;
  provider: string;
  tags: string[];
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
    
    return (
        <div 
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]">
                <div className="overflow-hidden">
                     <img src={course.img} alt={course.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800">{course.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{course.provider}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {course.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                    <div className="mt-auto pt-6 text-right">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800 text-sm group-hover:text-indigo-500 transition-colors">
                            View Details &gt;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;