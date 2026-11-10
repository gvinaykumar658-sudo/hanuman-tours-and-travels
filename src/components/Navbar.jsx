import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO } from '../data/travelData';

export default function Navbar({ activeSection, onNavigate, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Our Vehicles', href: '#vehicles', id: 'vehicles' },
    { name: 'Tour Packages', href: '#packages', id: 'packages' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#0A1222] text-slate-300 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: 24/7 service statement */}
          <div className="flex items-center gap-2 text-slate-300 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#F28C28]/20 text-[#F28C28] font-bold text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-[#F28C28]" /> 24/7 Service
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline font-medium">Hyderabad &bull; Force Urbania (12+1) &bull; Innova Crysta &bull; Outstations</span>
          </div>

          {/* Right: Direct Contact Shortcuts */}
          <div className="flex items-center flex-wrap justify-center gap-4 text-xs font-semibold">
            <a 
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#D6A447] transition-colors"
              title="Call Hanuman Tours & Travels"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6A447]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            
            <a 
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            <a 
              href={BUSINESS_INFO.emailLink}
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              title="Email Hanuman Tours & Travels"
            >
              <Mail className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#101C35]/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-700/50' 
          : 'bg-[#101C35] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            className="focus:outline-none"
          >
            <Logo isDark={true} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive 
                      ? 'text-[#F28C28] bg-white/5' 
                      : 'text-slate-200 hover:text-[#D6A447] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#F28C28] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking ? onOpenBooking() : handleLinkClick('booking')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#101C35] bg-gradient-to-r from-[#F5BA42] via-[#D6A447] to-[#F28C28] hover:from-[#F28C28] hover:to-[#D6A447] hover:text-white rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking ? onOpenBooking() : handleLinkClick('booking')}
              className="px-3 py-1.5 text-xs font-bold text-[#101C35] bg-[#F28C28] hover:bg-[#D6A447] rounded-md transition-colors sm:hidden"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F28C28]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D172C] border-t border-slate-800 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={`px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive 
                        ? 'bg-[#F28C28]/15 text-[#F28C28] font-bold' 
                        : 'text-slate-200 hover:bg-white/5 hover:text-[#D6A447]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#F28C28]"></span>}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenBooking) onOpenBooking();
                    else handleLinkClick('booking');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[#F28C28] to-[#D6A447] text-[#101C35] font-extrabold text-sm shadow-md"
                >
                  <span>Book Your Journey Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-800 text-slate-100 text-xs font-bold hover:bg-slate-700"
                  >
                    <Phone className="w-4 h-4 text-[#D6A447]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
