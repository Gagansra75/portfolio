import React from 'react';

// ProjectImage: returns one of several inline SVG illustrations based on `variant` (1-6)
// Props: variant (number|string), title (string), className (string for wrapper div)
const ProjectImage = ({ variant = 1, title = 'Project', className = '' }) => {
  const v = Number(variant) || 1;

  const commonSvgProps = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 64 64',
    className: 'w-32 h-32 text-white',
    role: 'img',
    'aria-label': `${title} illustration`,
  };

  return (
    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 transform transition-transform duration-500 ${className}`}>
      {v === 1 && (
        // Laptop + code lines
        <svg {...commonSvgProps}>
          <rect x="6" y="8" width="52" height="34" rx="3" fill="currentColor" opacity="0.12" />
          <rect x="10" y="12" width="44" height="26" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.9" />
          <path d="M16 22h6M24 22h18M16 26h6M24 26h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <rect x="18" y="44" width="28" height="4" rx="1" fill="currentColor" opacity="0.12" />
        </svg>
      )}

      {v === 2 && (
        // Terminal / console
        <svg {...commonSvgProps}>
          <rect x="6" y="8" width="52" height="34" rx="3" fill="currentColor" opacity="0.08" />
          <path d="M14 20 L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 20 L14 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="28" y="20" width="14" height="2" rx="1" fill="currentColor" />
          <rect x="18" y="44" width="28" height="4" rx="1" fill="currentColor" opacity="0.12" />
        </svg>
      )}

      {v === 3 && (
        // Code brackets / symbols
        <svg {...commonSvgProps}>
          <circle cx="32" cy="28" r="20" fill="currentColor" opacity="0.06" />
          <path d="M26 20 L22 32 L26 44" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 20 L42 32 L38 44" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="24" y="48" width="16" height="2" rx="1" fill="currentColor" opacity="0.12" />
        </svg>
      )}

      {v === 4 && (
        // Cloud / server
        <svg {...commonSvgProps}>
          <ellipse cx="36" cy="26" rx="18" ry="10" fill="currentColor" opacity="0.12" />
          <rect x="18" y="28" width="28" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="22" y="32" width="6" height="3" rx="1" fill="currentColor" />
          <rect x="32" y="32" width="6" height="3" rx="1" fill="currentColor" />
          <rect x="18" y="44" width="28" height="4" rx="1" fill="currentColor" opacity="0.12" />
        </svg>
      )}

      {v === 5 && (
        // Data chart / analytics
        <svg {...commonSvgProps}>
          <rect x="6" y="8" width="52" height="34" rx="3" fill="currentColor" opacity="0.06" />
          <rect x="14" y="28" width="4" height="8" rx="1" fill="currentColor" />
          <rect x="22" y="22" width="4" height="14" rx="1" fill="currentColor" />
          <rect x="30" y="18" width="4" height="18" rx="1" fill="currentColor" />
          <rect x="38" y="26" width="4" height="10" rx="1" fill="currentColor" />
          <rect x="18" y="44" width="28" height="4" rx="1" fill="currentColor" opacity="0.12" />
        </svg>
      )}

      {v === 6 && (
        // Mobile device mock
        <svg {...commonSvgProps}>
          <rect x="22" y="8" width="20" height="36" rx="3" fill="currentColor" opacity="0.08" />
          <rect x="24" y="12" width="16" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M30 20h4M30 24h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="32" cy="42" r="1" fill="currentColor" />
          <rect x="18" y="44" width="28" height="4" rx="1" fill="currentColor" opacity="0.12" />
        </svg>
      )}
    </div>
  );
};

export default ProjectImage;
