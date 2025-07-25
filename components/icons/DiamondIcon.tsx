import React from 'react';

const DiamondIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 24 24" 
        fill="currentColor"
    >
        <path d="M12.0001 1.5L22.5 8.25L12.0001 22.5L1.5 8.25L12.0001 1.5Z" stroke="#FFF" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
);

export default DiamondIcon;