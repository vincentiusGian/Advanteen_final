import React from 'react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.03998C6.49625 2.03998 2.04004 6.49623 2.04004 12C2.04004 16.8837 5.59904 20.925 10.278 21.815V14.24H7.55804V12H10.278V9.78C10.278 7.09873 11.9038 5.625 14.3323 5.625C15.51 5.625 16.518 5.715 16.797 5.75V8.12H15.405C14.0725 8.12 13.722 8.91125 13.722 9.99125V12H16.653L16.206 14.24H13.722V21.87C18.459 20.985 21.96 16.9075 21.96 12C21.96 6.49623 17.5038 2.03998 12 2.03998Z" />
    </svg>
);

export default FacebookIcon;
