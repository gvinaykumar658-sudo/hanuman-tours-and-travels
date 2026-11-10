import React, { useState } from 'react';
import { Car, ShieldCheck, Sparkles } from 'lucide-react';
import VehicleCard from './VehicleCard';
import { VEHICLES } from '../data/travelData';

export default function VehiclesSection({ onViewVehicleDetails, onBookVehicle }) {
  const [filter, setFilter] = useState('all');

  const filteredVehicles = filter === 'all'
    ? VEHICLES
    : filter === 'large'
    ? VEHICLES.filter(v => v.id === 'force-urbania')
    : filter === 'mpv'
    ? VEHICLES.filter(v => v.id.includes('innova'))
    : VEHICLES.filter(v => v.id.includes('dzire'));

  return (
    <section id="vehicles" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C35]/5 border border-slate-200 text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-3">
            <Car className="w-4 h-4 text-[#F28C28]" />
            Clean, Verified Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101C35] tracking-tight">
            Our Vehicles &amp; <br />
            <span className="text-[#F28C28]">Travel Fleet Options</span>
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            From our spacious flagship 12+1 Seater Force Urbania for group pilgrimages, to executive Innova Crystas and budget-friendly Dzire sedans.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All 4 Vehicles' },
            { id: 'large', label: 'Force Urbania (12+1 Seater)' },
            { id: 'mpv', label: 'Toyota Innova Crysta & Innova' },
            { id: 'sedan', label: 'Maruti Suzuki Dzire (Sedan)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#101C35] text-white shadow-md'
                  : 'bg-[#F5F7FA] text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4 Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onViewDetails={onViewVehicleDetails}
              onBookNow={onBookVehicle}
            />
          ))}
        </div>

        {/* Fleet Integrity Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F5F7FA] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#F28C28] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#101C35]">Need Help Choosing the Right Vehicle?</h4>
              <p className="text-xs text-slate-500">Tell us your passenger count and luggage volume; we'll suggest the most comfortable setup.</p>
            </div>
          </div>

          <a
            href="https://wa.me/919848587868?text=Hello%20Hanuman%20Tours%20%26%20Travels%2C%20please%20help%20me%20choose%20the%20best%20vehicle%20for%20my%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-sm transition-colors whitespace-nowrap"
          >
            Chat with Fleet Manager
          </a>
        </div>

      </div>
    </section>
  );
}
