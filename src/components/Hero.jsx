import React from 'react';
import { MessageCircle, Calendar, ShieldCheck, Car, Users, Sparkles, MapPin, ChevronRight, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export default function Hero({ onBookClick, onExploreVehicles }) {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#101C35]">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/urbania/urbania-side-lake.jpg" 
          alt="Hanuman Tours & Travels Force Urbania at Scenic Lake" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-110"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1222]/95 via-[#101C35]/85 to-[#101C35]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101C35] via-transparent to-black/30"></div>
      </div>

      {/* Decorative Brand Circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#F28C28]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D6A447]/10 blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text (Left 7 cols) */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 text-xs sm:text-sm font-semibold shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#F28C28] animate-ping"></span>
              <span className="text-[#D6A447] font-bold">HANUMAN TOURS &amp; TRAVELS</span>
              <span className="text-slate-400">&bull;</span>
              <span className="text-slate-200">Hyderabad &bull; Premium Fleet</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Your Journey, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5BA42] via-[#F28C28] to-[#FF5722]">
                Our Responsibility!
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed">
              Experience comfortable, reliable and affordable travel with Hanuman Tours &amp; Travels. From family trips to long-distance journeys, we make every journey memorable.
            </p>

            {/* Key Fleet Highlights Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-slate-700/60 text-xs font-semibold text-slate-200">
                <Car className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>Force Urbania 12+1 Seater</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-slate-700/60 text-xs font-semibold text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D6A447]" />
                <span>Toyota Innova Crysta &amp; Innova</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 border border-slate-700/60 text-xs font-semibold text-slate-200">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>Family Pilgrimages &amp; Outstations</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
              {/* Button 1: Book Your Journey */}
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-extrabold text-[#101C35] bg-gradient-to-r from-[#F5BA42] via-[#D6A447] to-[#F28C28] hover:from-[#F28C28] hover:to-[#D6A447] hover:text-white rounded-xl shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Journey</span>
              </button>

              {/* Button 2: Explore Our Vehicles */}
              <button
                onClick={onExploreVehicles}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Vehicles</span>
                <ChevronRight className="w-5 h-5 text-[#D6A447]" />
              </button>

              {/* Button 3: WhatsApp Us */}
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Direct Call Quick Link */}
            <div className="pt-2 flex items-center gap-2 text-slate-300 text-sm">
              <PhoneCall className="w-4 h-4 text-[#F28C28]" />
              <span>Instant Booking Assistance:</span>
              <a href={BUSINESS_INFO.phoneLink} className="text-white font-bold hover:text-[#D6A447] underline underline-offset-4 decoration-[#F28C28]">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>

          </div>

          {/* Quick Vehicle Highlight Card (Right 4 cols) */}
          <div className="lg:col-span-4 w-full">
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/70 rounded-2xl p-6 shadow-2xl text-left">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#F28C28] uppercase">Featured Flagship</span>
                  <h3 className="text-xl font-extrabold text-white">Force Urbania (12+1)</h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#D6A447]/20 text-[#D6A447] border border-[#D6A447]/30">
                  TG08 X 6633
                </span>
              </div>

              {/* Mini Photo Preview */}
              <div className="relative rounded-xl overflow-hidden mb-4 border border-slate-700/60 aspect-[16/10]">
                <img 
                  src="/images/urbania/urbania-front.jpg" 
                  alt="Force Urbania Front TG08 X 6633"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 bg-black/75 rounded text-[10px] font-bold text-white tracking-wider uppercase backdrop-blur-sm">
                  Authentic Vehicle Photo
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                High-roof luxury group travel with push-back ergonomic seating, automatic footstep, and panoramic view windows. Perfect for Tirupati, Shirdi, Goa &amp; weddings.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px]">Capacity</span>
                  <strong className="text-white font-bold">12+1 Passengers</strong>
                </div>
                <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/50">
                  <span className="text-slate-400 block text-[10px]">Cooling</span>
                  <strong className="text-white font-bold">Dual Zone AC</strong>
                </div>
              </div>

              <button
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] text-[#101C35] font-extrabold text-xs uppercase tracking-wider text-center hover:brightness-110 transition-all shadow-md cursor-pointer"
              >
                Enquire for Force Urbania
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
