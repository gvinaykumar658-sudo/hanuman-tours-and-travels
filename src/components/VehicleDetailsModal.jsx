import React, { useState } from 'react';
import { X, Users, Wind, Briefcase, CheckCircle2, MessageCircle, Calendar, Play, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export default function VehicleDetailsModal({ vehicle, onClose, onBookNow }) {
  if (!vehicle) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const images = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  const handleNext = () => {
    setIsPlayingVideo(false);
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIsPlayingVideo(false);
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const whatsappUrl = `https://wa.me/919848587868?text=${encodeURIComponent(
    `Hello Hanuman Tours & Travels, I am interested in booking the ${vehicle.name} (${vehicle.capacity}). Please provide quotes and availability.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all shadow-md focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Section: Carousel / Video Player */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-slate-950 overflow-hidden">
          {isPlayingVideo && vehicle.video ? (
            <div className="w-full h-full flex items-center justify-center bg-black">
              <video 
                src={vehicle.video} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video player.
              </video>
            </div>
          ) : (
            <>
              <img 
                src={images[activeImageIdx]} 
                alt={`${vehicle.name} photo ${activeImageIdx + 1}`}
                className="w-full h-full object-cover object-center"
              />

              {/* Prev / Next Carousel Controls */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Video Play Overlay Button */}
              {vehicle.hasVideo && (
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg transition-transform hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Play Video Walkthrough</span>
                </button>
              )}

              {/* Image Counter Indicator */}
              <div className="absolute bottom-4 left-4 px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs font-mono font-bold text-white">
                {activeImageIdx + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 px-6 py-3 bg-slate-900 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsPlayingVideo(false);
                  setActiveImageIdx(i);
                }}
                className={`w-16 h-11 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  !isPlayingVideo && activeImageIdx === i ? 'border-[#F28C28] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}

            {vehicle.hasVideo && (
              <button
                onClick={() => setIsPlayingVideo(true)}
                className={`w-16 h-11 shrink-0 rounded-lg overflow-hidden border-2 flex items-center justify-center bg-red-950/80 text-red-400 transition-all ${
                  isPlayingVideo ? 'border-red-500 scale-105' : 'border-slate-700 opacity-70 hover:opacity-100'
                }`}
                title="Play Video"
              >
                <Play className="w-5 h-5 fill-red-400" />
              </button>
            )}
          </div>
        )}

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#F28C28]/15 text-[#F28C28]">
                  {vehicle.category}
                </span>
                {vehicle.regNumber && (
                  <span className="text-xs font-mono font-bold text-slate-500">
                    Reg: {vehicle.regNumber}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-black text-[#101C35]">{vehicle.name}</h2>
            </div>

            {/* Capacity Pill */}
            <div className="flex items-center gap-3 bg-[#F5F7FA] px-4 py-2.5 rounded-2xl border border-slate-200">
              <Users className="w-5 h-5 text-[#F28C28]" />
              <div>
                <span className="block text-[10px] text-slate-500 uppercase font-semibold">Verified Capacity</span>
                <span className="text-sm font-black text-[#101C35]">{vehicle.capacity}</span>
              </div>
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">Air Conditioning</span>
              <span className="text-xs font-bold text-[#101C35]">{vehicle.ac}</span>
            </div>
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">Luggage Space</span>
              <span className="text-xs font-bold text-[#101C35]">{vehicle.luggage}</span>
            </div>
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">Fuel / Drivetrain</span>
              <span className="text-xs font-bold text-[#101C35]">{vehicle.fuel}</span>
            </div>
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-500 block">Transmission</span>
              <span className="text-xs font-bold text-[#101C35]">{vehicle.transmission}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">About Vehicle</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* Key Features List */}
          {vehicle.features && vehicle.features.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Key Features &amp; Comfort</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Journeys */}
          {vehicle.idealFor && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Ideal For</h4>
              <div className="flex flex-wrap gap-2">
                {vehicle.idealFor.map((trip, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                    &bull; {trip}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Transparent Quotation Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
            <p className="text-xs text-amber-900 font-bold">
              {vehicle.quotationNote}
            </p>
            <p className="text-[11px] text-amber-700 mt-0.5">
              Tariffs vary based on kilometers, round-trip duration, driver allowance and interstate toll taxes.
            </p>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#F28C28]"
            >
              <Phone className="w-4 h-4 text-[#F28C28]" />
              <span>Direct Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onBookNow(vehicle);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] text-[#101C35] text-xs font-extrabold shadow-md hover:brightness-110 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Vehicle</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
