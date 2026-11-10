import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ChevronRight, Heart, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { BUSINESS_INFO, VEHICLES, TOUR_PACKAGES } from '../data/travelData';

export default function Footer({ onNavigate, onVehicleClick, onPackageClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1222] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo isDark={true} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              Hanuman Tours &amp; Travels provides comfortable, reliable and affordable travel solutions for families, individuals and groups. Specializing in Force Urbania (12+1 Seater), Toyota Innova Crysta, and round-trip outstation journeys across India.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Proprietor: <strong className="text-white">{BUSINESS_INFO.founder}</strong></span>
            </div>

            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#F28C28] block mb-2">
                Quick WhatsApp Booking
              </span>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat: {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Vehicles', id: 'vehicles' },
                { label: 'Tour Packages', id: 'packages' },
                { label: 'Photo Gallery', id: 'gallery' },
                { label: 'Contact Us', id: 'contact' },
                { label: 'Book Online', id: 'booking' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="hover:text-[#F28C28] transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D6A447]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Vehicles (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Fleet
            </h4>
            <ul className="space-y-2 text-xs">
              {VEHICLES.map((v) => (
                <li key={v.id}>
                  <button
                    onClick={() => onVehicleClick(v)}
                    className="text-left hover:text-[#F28C28] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D6A447]" />
                    <span className="font-semibold text-slate-200">{v.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">({v.capacity})</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">Popular Outstations:</span>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                {['Tirupati', 'Srisailam', 'Goa', 'Shirdi', 'Araku', 'Vizag'].map((place, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact Information
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">HANUMAN TOURS &amp; TRAVELS</strong>
                  <span className="text-slate-400">{BUSINESS_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6A447] shrink-0" />
                <a href={BUSINESS_INFO.phoneLink} className="text-white hover:text-[#F28C28] font-bold">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={BUSINESS_INFO.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: {BUSINESS_INFO.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F28C28] shrink-0" />
                <a href={BUSINESS_INFO.emailLink} className="text-slate-300 hover:text-white break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                Operating 24/7 across Hyderabad &bull; Outstations Pan-India
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {currentYear} <strong>HANUMAN TOURS &amp; TRAVELS</strong>. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-400">
            &ldquo;Your Journey, Our Responsibility!&rdquo;
          </div>
        </div>

      </div>
    </footer>
  );
}
