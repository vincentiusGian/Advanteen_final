import React from 'react';

const InternshipsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.97a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 011.08-1.92L11.1 9.39a.75.75 0 01.9 0l6.17 2.84a2.25 2.25 0 011.08 1.92z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V12.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75L12 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L9 6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L15 6" />
    </svg>
);

export default InternshipsIcon;
