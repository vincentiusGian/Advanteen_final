import React from 'react';

const GachaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25M12 4.875A2.625 2.625 0 1012 10.125A2.625 2.625 0 0012 4.875z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25H3M3.75 11.25c0-1.85.996-3.486 2.459-4.331A2.625 2.625 0 018.25 9.75V11.25m8.25-1.5c.428 0 .848.069 1.241.194a2.625 2.625 0 002.558-2.128 1.5 1.5 0 00-1.898-1.82 2.625 2.625 0 00-1.902 0" />
    </svg>
);

export default GachaIcon;
