import React from 'react';
import { Users, Wind, Briefcase, Eye, Calendar, MessageCircle, Play, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export default function VehicleCard({ vehicle, onViewDetails, onBookNow }) {
  // Generate WhatsApp prefilled message
  const whatsappUrl = `https://wa.me/919848587868?text=${encodeURIComponent(
    `Hello Hanuman Tours & Travels, I would like to get a travel quotation for ${vehicle.name} (${vehicle.capacity}). Please share availability and best rates.`
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
      
      {/* Vehicle Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img 
          src={vehicle.image} 
          alt={`Hanuman Tours & Travels - ${vehicle.name}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#101C35]/90 backdrop-blur-md border border-white/20 shadow">
            {vehicle.badge}
          </span>
          {vehicle.hasVideo && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white bg-red-600/90 backdrop-blur-md shadow animate-pulse">
              <Play className="w-3 h-3 fill-white" /> Video Tour
            </span>
          )}
        </div>

        {/* Registration Number badge if authentic */}
        {vehicle.regNumber && (
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-sm border border-slate-700/60 text-[11px] font-mono font-bold text-[#F5BA42]">
            Reg: {vehicle.regNumber}
          </div>
        )}
      </div>

      {/* Vehicle Info Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider block">
                {vehicle.category}
              </span>
              <h3 className="text-2xl font-black text-[#101C35] tracking-tight group-hover:text-[#F28C28] transition-colors">
                {vehicle.name}
              </h3>
            </div>
          </div>

          {/* Key Specs Pills */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 my-3 text-center">
            <div className="bg-[#F5F7FA] p-2 rounded-lg">
              <Users className="w-4 h-4 mx-auto text-[#F28C28] mb-1" />
              <span className="block text-[11px] text-slate-500 font-medium">Capacity</span>
              <span className="block text-xs font-extrabold text-[#101C35]">{vehicle.capacity}</span>
            </div>

            <div className="bg-[#F5F7FA] p-2 rounded-lg">
              <Wind className="w-4 h-4 mx-auto text-[#D6A447] mb-1" />
              <span className="block text-[11px] text-slate-500 font-medium">AC Type</span>
              <span className="block text-xs font-extrabold text-[#101C35] truncate" title={vehicle.ac}>
                {vehicle.ac.split(' ')[0]} AC
              </span>
            </div>

            <div className="bg-[#F5F7FA] p-2 rounded-lg">
              <Briefcase className="w-4 h-4 mx-auto text-emerald-600 mb-1" />
              <span className="block text-[11px] text-slate-500 font-medium">Luggage</span>
              <span className="block text-xs font-extrabold text-[#101C35] truncate" title={vehicle.luggage}>
                Spacious
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
            {vehicle.description}
          </p>
        </div>

        {/* Pricing Notice & Buttons */}
        <div className="pt-2">
          {/* Transparent Quotation Note (No invented rates) */}
          <div className="mb-4 py-2 px-3 rounded-lg bg-amber-50 border border-amber-200/70 text-center">
            <span className="text-xs font-semibold text-amber-900 block">
              &ldquo;{vehicle.quotationNote}&rdquo;
            </span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onViewDetails(vehicle)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-[#101C35] text-slate-800 hover:text-[#101C35] bg-white hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-slate-600" />
              <span>View Details</span>
            </button>

            <button
              onClick={() => onBookNow(vehicle)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] hover:brightness-110 text-[#101C35] text-xs font-extrabold shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* WhatsApp Direct Quote Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
