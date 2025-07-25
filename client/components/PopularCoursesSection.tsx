import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const courses = [
  {
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Guide to beginner programming',
    provider: 'Universitas Multimedia Nusantara',
    tags: ['Technology', 'Web Development', 'General', 'Full-Stack'],
  },
  {
    img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Paint your creative career',
    provider: 'Universitas Multimedia Nusantara',
    tags: ['Graphic Design', 'Illustration', 'Design Thinking', 'Portfolio-Building'],
  },
  {
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Speak like a leader and own the room',
    provider: 'Universitas Multimedia Nusantara',
    tags: ['Public Speaking', 'Leadership'],
  },
    {
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Advanced Frontend Development',
    provider: 'CodeAcademy',
    tags: ['Technology', 'Web Development', 'Frontend'],
  },
];

const Tag = ({ children }) => <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">{children}</span>;

const CourseCard = ({ course }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
        <img src={course.img} alt={course.title} className="w-full h-40 object-cover" />
        <div className="p-5">
            <h3 className="text-lg font-bold text-slate-800">{course.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{course.provider}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {course.tags.slice(0, 2).map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <div className="mt-5 text-right">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-800 text-sm">
                    View Details &gt;
                </a>
            </div>
        </div>
    </div>
);


const PopularCoursesSection: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

    return (
        <section 
            ref={ref}
            className={`py-24 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Popular <span className="text-indigo-600">Courses</span>
                    </h2>
                    <a href="#" className="flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-800">
                        View more <ArrowRightIcon className="w-5 h-5" />
                    </a>
                </div>
                <div className="flex gap-8 overflow-x-auto pb-6 -mx-4 px-4 hide-scrollbar">
                   {courses.map((course, i) => <CourseCard key={i} course={course} />)}
                </div>
            </div>
        </section>
    );
}

export default PopularCoursesSection;