import React from 'react';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.582,6.186c-0.23-0.854-0.908-1.532-1.762-1.762C18.252,4,12,4,12,4S5.748,4,4.18,4.424 c-0.854,0.23-1.532,0.908-1.762,1.762C2,7.748,2,12,2,12s0,4.252,0.418,5.814c0.23,0.854,0.908,1.532,1.762,1.762 C5.748,20,12,20,12,20s6.252,0,7.82-0.424c0.854-0.23,1.532-0.908,1.762-1.762C22,16.252,22,12,22,12S22,7.748,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
    </svg>
);

export default YoutubeIcon;
