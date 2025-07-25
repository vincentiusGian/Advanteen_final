import React from 'react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 18H11v-7H8.5v7zM9.75 7.5A1.25 1.25 0 1 0 8.5 8.75a1.25 1.25 0 0 0 1.25-1.25zM17.5 18H20v-4.5c0-1.5-.75-3-2.5-3s-2.5 1.5-2.5 3V18z" />
    </svg>
);

export default LinkedInIcon;
