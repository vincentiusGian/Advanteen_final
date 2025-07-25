import React from 'react';

const ClipboardIllustration: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(-10 150 150)">
            {/* Clipboard */}
            <rect x="50" y="30" width="200" height="250" rx="20" fill="#E2E8F0"/>
            <rect x="110" y="10" width="80" height="50" rx="10" fill="#94A3B8"/>
            <rect x="125" y="25" width="50" height="10" rx="5" fill="#E2E8F0"/>

            {/* Paper */}
            <rect x="65" y="45" width="170" height="220" rx="10" fill="white"/>
            
            {/* Lines and checks */}
            <g transform="translate(85, 90)">
                <path d="M10 0 H 120 M 10 30 H 120 M 10 60 H 120" stroke="#CBD5E1" strokeWidth="2"/>
                <path d="M0 5 L5 10 L10 0" stroke="#EF4444" strokeWidth="3" fill="none" transform="translate(0, -5)"/>
                <path d="M0 5 L5 10 L10 0" stroke="#EF4444" strokeWidth="3" fill="none" transform="translate(0, 25)"/>
                <path d="M0 5 L5 10 L10 0" stroke="#EF4444" strokeWidth="3" fill="none" transform="translate(0, 55)"/>
            </g>
        </g>
        <g transform="rotate(15 150 150)">
            {/* Magnifying glass */}
            <circle cx="200" cy="150" r="50" stroke="#F59E0B" strokeWidth="15" fill="rgba(251, 191, 36, 0.2)"/>
            <rect x="235" y="195" width="20" height="60" fill="#64748B" transform="rotate(45 235 195)"/>
        </g>
    </svg>
);

export default ClipboardIllustration;
