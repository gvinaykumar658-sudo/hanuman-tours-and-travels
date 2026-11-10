import React from 'react';
import { X, MapPin, Navigation, Clock, CheckCircle2, MessageCircle, Calendar, Phone, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export default function PackageDetailsModal({ pkg, onClose, onBookNow }) {
  if (!pkg) return null;

  const whatsappUrl = `https://wa.me/919848587868?text=${encodeURIComponent(
    `Hello Hanuman Tours & Travels, I would like to book / enquire about the package: ${pkg.title} (${pkg.from} to ${pkg.to}). Please provide available vehicles and best quotation.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all shadow-md focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-900 overflow-hidden">
          <img 
            src={pkg.image} 
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F28C28] text-[#101C35] mb-2 inline-block">
              {pkg.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black drop-shadow-md">{pkg.title}</h2>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 mt-1">
              <MapPin className="w-4 h-4 text-[#F28C28]" />
              <span>Starting: {pkg.from}</span>
              <span>&rarr;</span>
              <span className="text-[#F5BA42]">Destination: {pkg.to}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Route Meta */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">Typical Duration</span>
              <span className="text-xs font-bold text-[#101C35]">{pkg.duration}</span>
            </div>
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">Distance (One Way)</span>
              <span className="text-xs font-bold text-[#101C35]">{pkg.distance}</span>
            </div>
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-slate-100 col-span-2 sm:col-span-1">
              <span className="text-[11px] text-slate-500 block">Pickup &amp; Drop</span>
              <span className="text-xs font-bold text-[#101C35]">Anywhere in Hyderabad</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Tour Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {pkg.description}
            </p>
          </div>

          {/* Highlights */}
          {pkg.highlights && pkg.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Key Places Covered &amp; Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pkg.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Fleet */}
          {pkg.recommendedVehicles && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Fleet Options Available</h4>
              <div className="flex flex-wrap gap-2">
                {pkg.recommendedVehicles.map((v, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101C35]/5 text-[#101C35] text-xs font-bold border border-slate-200">
                    <Car className="w-3.5 h-3.5 text-[#F28C28]" />
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Transparent Quotation Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
            <p className="text-xs text-amber-900 font-bold">
              Custom travel quotation provided based on your exact family size, dates &amp; hotel requirements.
            </p>
            <p className="text-[11px] text-amber-700 mt-0.5">
              No hidden costs. Complete itinerary customization available.
            </p>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#F28C28]"
            >
              <Phone className="w-4 h-4 text-[#F28C28]" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onBookNow(pkg);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] text-[#101C35] text-xs font-extrabold shadow-md hover:brightness-110 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Trip</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
