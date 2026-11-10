import React from 'react';

export default function Logo({ variant = 'horizontal', isDark = false, className = '' }) {
  // If isDark is true, we render light text (for dark navy navbar / footer)
  const textColor = isDark ? '#FFFFFF' : '#101C35';
  const subtitleColor = isDark ? '#F28C28' : '#F28C28';
  const tagColor = isDark ? '#94A3B8' : '#64748B';

  if (variant === 'icon-only') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="logoSaffron" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5722"/>
              <stop offset="50%" stopColor="#F28C28"/>
              <stop offset="100%" stopColor="#D6A447"/>
            </linearGradient>
            <linearGradient id="logoGold" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D6A447"/>
              <stop offset="50%" stopColor="#F5BA42"/>
              <stop offset="100%" stopColor="#FFF2A7"/>
            </linearGradient>
          </defs>

          {/* Navy Shield Base */}
          <circle cx="50" cy="50" r="48" fill="#101C35" stroke="url(#logoGold)" strokeWidth="3"/>
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#logoSaffron)" strokeWidth="1.5" strokeDasharray="3, 3" opacity="0.8"/>
          
          {/* Travel Orbit Track */}
          <path d="M 14 65 C 24 24, 76 20, 88 46" fill="none" stroke="url(#logoGold)" strokeWidth="2" strokeLinecap="round"/>
          <polygon points="88,46 91,43 94,46 91,49" fill="#FFF2A7"/>

          {/* Mukut */}
          <path d="M 39 26 L 47 16 L 52 24 L 57 12 L 62 24 L 67 17 L 73 28 Z" fill="url(#logoGold)"/>
          <circle cx="57" cy="14" r="2.2" fill="#FF5722"/>

          {/* Forehead & Tilak */}
          <path d="M 43 28 C 52 27 64 28 68 33 C 65 37 60 39 54 39 C 52 39 46 37 43 28 Z" fill="#FFE082"/>
          <path d="M 54 27 L 56 27 L 55 35 Z" fill="#FF2020"/>
          <line x1="55" y1="27" x2="55" y2="36" stroke="#FF2020" strokeWidth="1.2"/>

          {/* Hanuman Silhouette Profile */}
          <path d="M 62 33 C 65 37 67 41 63 44 C 68 44 74 48 72 54 C 68 59 61 60 55 60 C 56 64 60 67 63 70 C 57 71 48 68 43 64 C 40 59 38 52 38 44 C 38 36 43 28 50 26 Z" fill="url(#logoSaffron)"/>

          {/* Kundal (Earring) */}
          <circle cx="41" cy="49" r="4" fill="url(#logoGold)"/>
          <circle cx="41" cy="49" r="1.5" fill="#101C35"/>

          {/* Gada (Mace) */}
          <g transform="rotate(-35 50 50)">
            <line x1="20" y1="50" x2="80" y2="50" stroke="url(#logoGold)" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="76" cy="50" rx="7" ry="5.5" fill="url(#logoGold)"/>
            <circle cx="81" cy="50" r="3" fill="#FF5722"/>
            <circle cx="22" cy="50" r="2.5" fill="url(#logoGold)"/>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Badge */}
      <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 transition-transform duration-300 hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="logoSaffronMain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5722"/>
              <stop offset="50%" stopColor="#F28C28"/>
              <stop offset="100%" stopColor="#D6A447"/>
            </linearGradient>
            <linearGradient id="logoGoldMain" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D6A447"/>
              <stop offset="50%" stopColor="#F5BA42"/>
              <stop offset="100%" stopColor="#FFF2A7"/>
            </linearGradient>
          </defs>

          <circle cx="50" cy="50" r="48" fill="#101C35" stroke="url(#logoGoldMain)" strokeWidth="3"/>
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#logoSaffronMain)" strokeWidth="1.5" strokeDasharray="3, 3" opacity="0.8"/>
          
          <path d="M 14 65 C 24 24, 76 20, 88 46" fill="none" stroke="url(#logoGoldMain)" strokeWidth="2" strokeLinecap="round"/>
          <polygon points="88,46 91,43 94,46 91,49" fill="#FFF2A7"/>

          <path d="M 39 26 L 47 16 L 52 24 L 57 12 L 62 24 L 67 17 L 73 28 Z" fill="url(#logoGoldMain)"/>
          <circle cx="57" cy="14" r="2.2" fill="#FF5722"/>

          <path d="M 43 28 C 52 27 64 28 68 33 C 65 37 60 39 54 39 C 52 39 46 37 43 28 Z" fill="#FFE082"/>
          <path d="M 54 27 L 56 27 L 55 35 Z" fill="#FF2020"/>
          <line x1="55" y1="27" x2="55" y2="36" stroke="#FF2020" strokeWidth="1.2"/>

          <path d="M 62 33 C 65 37 67 41 63 44 C 68 44 74 48 72 54 C 68 59 61 60 55 60 C 56 64 60 67 63 70 C 57 71 48 68 43 64 C 40 59 38 52 38 44 C 38 36 43 28 50 26 Z" fill="url(#logoSaffronMain)"/>

          <circle cx="41" cy="49" r="4" fill="url(#logoGoldMain)"/>
          <circle cx="41" cy="49" r="1.5" fill="#101C35"/>

          <g transform="rotate(-35 50 50)">
            <line x1="20" y1="50" x2="80" y2="50" stroke="url(#logoGoldMain)" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="76" cy="50" rx="7" ry="5.5" fill="url(#logoGoldMain)"/>
            <circle cx="81" cy="50" r="3" fill="#FF5722"/>
            <circle cx="22" cy="50" r="2.5" fill="url(#logoGoldMain)"/>
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span 
            className="text-lg md:text-2xl font-black tracking-tight leading-none"
            style={{ color: textColor, fontFamily: 'Outfit, sans-serif' }}
          >
            HANUMAN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]"></span>
        </div>
        
        <span 
          className="text-[11px] md:text-xs font-extrabold tracking-[0.22em] leading-tight mt-0.5"
          style={{ color: subtitleColor }}
        >
          TOURS &amp; TRAVELS
        </span>
        
        <span 
          className="text-[9px] md:text-[10px] font-medium tracking-wide uppercase mt-0.5 opacity-90 hidden sm:block"
          style={{ color: tagColor }}
        >
          Car Rentals &bull; Force Urbania &bull; Outstations
        </span>
      </div>
    </div>
  );
}
