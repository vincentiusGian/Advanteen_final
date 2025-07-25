import React from 'react';

const RocketIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            {/* Fire */}
            <path d="M80 180 C 80 160, 120 160, 120 180 L 100 220 Z" fill="#F59E0B"/>
            <path d="M90 180 C 90 170, 110 170, 110 180 L 100 200 Z" fill="#FBBF24"/>
            
            {/* Body */}
            <path d="M80 70 C 80 20, 120 20, 120 70 V 180 H 80 Z" fill="#E0E7FF"/>
            <path d="M100 10 C 130 10, 130 60, 100 60 C 70 60, 70 10, 100 10 Z" fill="#6366F1"/>
            
            {/* Window */}
            <circle cx="100" cy="90" r="15" fill="#38BDF8" stroke="white" strokeWidth="3"/>
            
            {/* Fins */}
            <path d="M80 120 L 50 160 V 120 Z" fill="#6366F1"/>
            <path d="M120 120 L 150 160 V 120 Z" fill="#6366F1"/>
        </g>
    </svg>
);

export default RocketIllustration;
