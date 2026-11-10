import React, { useState } from 'react';
import { Compass, Sparkles, MessageCircle, MapPin, Send } from 'lucide-react';
import TourPackageCard from './TourPackageCard';
import { TOUR_PACKAGES } from '../data/travelData';

export default function PackagesSection({ onExplorePackage, onBookPackage }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Packages (10)' },
    { id: 'pilgrimage', label: 'Temple & Pilgrimages' },
    { id: 'leisure', label: 'Hills & Leisure Getaways' },
    { id: 'quick', label: '1-Day & Weekend Trips' },
  ];

  const filteredPackages = filter === 'all'
    ? TOUR_PACKAGES
    : filter === 'pilgrimage'
    ? TOUR_PACKAGES.filter(p => ['hyderabad-to-tirupati', 'hyderabad-to-srisailam', 'hyderabad-to-yadagirigutta', 'hyderabad-to-shirdi', 'hyderabad-to-vijayawada'].includes(p.id))
    : filter === 'leisure'
    ? TOUR_PACKAGES.filter(p => ['hyderabad-to-vizag', 'hyderabad-to-araku-valley', 'hyderabad-to-goa', 'hyderabad-to-other-destinations'].includes(p.id))
    : TOUR_PACKAGES.filter(p => ['hyderabad-to-yadagirigutta', 'hyderabad-to-warangal', 'hyderabad-to-srisailam'].includes(p.id));

  return (
    <section id="packages" className="py-20 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-[#F28C28]" />
            Curated Routes from Hyderabad
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101C35] tracking-tight">
            Popular Tour Packages &amp; <br />
            <span className="text-[#F28C28]">Outstation Trips</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Choose from our highly requested outstation itineraries starting from Hyderabad, or customize your family's travel schedule with full vehicle freedom.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-[#101C35] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPackages.map((pkg) => (
            <TourPackageCard
              key={pkg.id}
              pkg={pkg}
              onExplore={onExplorePackage}
              onBook={onBookPackage}
            />
          ))}
        </div>

        {/* Custom Tour Package Enquiry Banner */}
        <div className="bg-gradient-to-r from-[#101C35] via-[#1A2B4C] to-[#101C35] rounded-3xl p-8 sm:p-12 text-white border border-slate-700 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F28C28]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F28C28]/20 text-[#F5BA42] border border-[#F28C28]/40 uppercase tracking-wider inline-block">
                Tailored Travel Solution
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black">
                Planning a Custom Family or Corporate Trip?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Need a multi-city route, pilgrimage yatra across multiple states (like Sabarimala, Arunachalam, Mantralayam, or North India), or a weekend hill station getaway? We craft custom itineraries with transparent quotations.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/919848587868?text=${encodeURIComponent('Hello Hanuman Tours & Travels, I need a customized outstation travel package from Hyderabad.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] text-[#101C35] font-black text-sm shadow-lg hover:brightness-110 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Custom Package</span>
              </a>

              <a
                href="tel:+919848587868"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all text-center"
              >
                <span>Call Us: +91 98485 87868</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
