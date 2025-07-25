import React from 'react';

const KnowledgeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 01-7.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6.75h4.5M12 3v3.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9.75h9" />
    </svg>
);

export default KnowledgeIcon;
