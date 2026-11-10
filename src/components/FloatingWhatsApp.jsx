import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultWhatsappMsg = encodeURIComponent(
    'Hello Hanuman Tours & Travels, I would like to enquire about your car rental and tour packages.'
  );

  return (
    <>
      {/* Floating Action Container in Bottom Right */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Floating Tooltip Bubble */}
        {showTooltip && (
          <div className="relative bg-[#101C35] text-white text-xs px-3.5 py-2 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-2 animate-bounce hidden sm:flex">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-bold">Need a Quick Quote? Chat on WhatsApp!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white ml-1"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            {/* Arrow pointer */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#101C35] transform rotate-45 border-r border-b border-slate-700/80"></div>
          </div>
        )}

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2">
          
          {/* Mobile Quick Call Button */}
          <a
            href={BUSINESS_INFO.phoneLink}
            className="w-12 h-12 rounded-full bg-[#101C35] hover:bg-[#1A2B4C] text-[#F5BA42] border border-[#D6A447]/40 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 sm:hidden"
            title="Call Hanuman Tours & Travels"
          >
            <Phone className="w-5 h-5 text-[#F28C28]" />
          </a>

          {/* Floating WhatsApp Button */}
          <a
            href={`https://wa.me/919848587868?text=${defaultWhatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 whatsapp-pulse focus:outline-none"
            title="Chat with Hanuman Tours & Travels on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 fill-white text-emerald-500" />
          </a>

        </div>

      </div>
    </>
  );
}
