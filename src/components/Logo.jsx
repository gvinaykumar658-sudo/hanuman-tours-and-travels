import React from 'react';

export default function Logo({ variant = 'horizontal', isDark = false, className = '' }) {
  const textColor = isDark ? '#FFFFFF' : '#101C35';
  const subtitleColor = '#F28C28';
  const tagColor = isDark ? '#94A3B8' : '#64748B';

  if (variant === 'icon-only') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <div className="w-full h-full rounded-full overflow-hidden shadow-lg p-0.5 bg-gradient-to-tr from-[#D6A447] via-[#F28C28] to-[#FFE082]">
          <img 
            src="/logo/hanuman-badge.png" 
            alt="Hanuman Holidays Logo" 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Real Lord Hanuman Idol Badge */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 transition-transform duration-300 hover:scale-105">
        <div className="w-full h-full rounded-full p-0.5 bg-gradient-to-tr from-[#D6A447] via-[#F28C28] to-[#FFE082] shadow-md shadow-orange-500/20">
          <img 
            src="/logo/hanuman-badge.png" 
            alt="Hanuman Holidays Official Emblem" 
            className="w-full h-full object-cover rounded-full bg-[#101C35]"
          />
        </div>
        {/* Subtle glowing halo */}
        <div className="absolute inset-0 rounded-full bg-[#F28C28]/20 blur-sm -z-10"></div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span 
            className="text-xl md:text-2xl font-black tracking-tight leading-none"
            style={{ color: textColor, fontFamily: 'Outfit, sans-serif' }}
          >
            HANUMAN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]"></span>
        </div>
        
        <span 
          className="text-xs md:text-sm font-black tracking-[0.22em] leading-tight mt-0.5"
          style={{ color: subtitleColor }}
        >
          HOLIDAYS
        </span>
        
        <span 
          className="text-[9px] md:text-[10px] font-semibold tracking-wider uppercase mt-0.5 opacity-90 hidden sm:block"
          style={{ color: tagColor }}
        >
          Tours &bull; Travels &bull; Car Rentals
        </span>
      </div>
    </div>
  );
}
