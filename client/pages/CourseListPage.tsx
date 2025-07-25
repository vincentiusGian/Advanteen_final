import React from 'react';
import CourseCard from '../components/CourseCard';

const coursesData = [
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
];

// Duplicate the data to create more cards for the grid view
const displayCourses = [...coursesData, ...coursesData];

const CourseListPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {displayCourses.map((course, index) => (
                        <CourseCard key={index} course={course} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseListPage;