import React from 'react';
import { MapPin, Navigation, Calendar, MessageCircle, Eye, Clock, Car } from 'lucide-react';

export default function TourPackageCard({ pkg, onExplore, onBook }) {
  const whatsappUrl = `https://wa.me/919848587868?text=${encodeURIComponent(
    `Hello Hanuman Tours & Travels, I am enquiring about the ${pkg.title} (${pkg.from} to ${pkg.to}). Please share vehicle options and travel quotation.`
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
      
      {/* Destination Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img 
          src={pkg.image} 
          alt={`Tour package from ${pkg.from} to ${pkg.to}`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>

        {/* Route Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-[#101C35]/90 backdrop-blur-md border border-white/20 shadow">
            {pkg.badge}
          </span>
        </div>

        {/* Route Banner at bottom of image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
          <div className="flex items-center gap-1.5 drop-shadow-md">
            <MapPin className="w-4 h-4 text-[#F28C28]" />
            <span>{pkg.from}</span>
            <Navigation className="w-3.5 h-3.5 text-[#D6A447] rotate-90" />
            <span className="text-[#F5BA42]">{pkg.to}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-xl font-black text-[#101C35] mb-2 group-hover:text-[#F28C28] transition-colors leading-snug">
            {pkg.title}
          </h3>

          {/* Duration & Distance */}
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 font-medium">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
              {pkg.duration}
            </span>
            <span>&bull;</span>
            <span>{pkg.distance}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {pkg.description}
          </p>

          {/* Highlights */}
          <div className="space-y-1.5 mb-4">
            {pkg.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]"></span>
                <span className="truncate">{h}</span>
              </div>
            ))}
          </div>

          {/* Recommended Vehicles */}
          {pkg.recommendedVehicles && (
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg mb-4">
              <Car className="w-3.5 h-3.5 text-[#D6A447] shrink-0" />
              <span className="truncate">Fleet: {pkg.recommendedVehicles.join(', ')}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onExplore(pkg)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:border-[#101C35] text-slate-800 hover:text-[#101C35] bg-white hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-slate-600" />
              <span>Explore</span>
            </button>

            <button
              onClick={() => onBook(pkg)}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] hover:brightness-110 text-[#101C35] text-xs font-extrabold shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Trip</span>
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

      </div>
    </div>
  );
}
