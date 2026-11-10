import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Play, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/travelData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'urbania', name: 'Force Urbania (12+1)' },
    { id: 'crysta', name: 'Innova Crysta' },
    { id: 'innova', name: 'Toyota Innova' },
    { id: 'dzire', name: 'Maruti Dzire' },
    { id: 'about', name: 'Founder & Fleet' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-20 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-3">
            <ImageIcon className="w-4 h-4 text-[#F28C28]" />
            Real Fleet Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101C35] tracking-tight">
            Our Genuine Fleet &amp; <br />
            <span className="text-[#F28C28]">Vehicle Photographs</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Browse through authentic photographs of our Force Urbania, Toyota Innova Crysta, and Innova. What you see is what arrives at your doorstep.
          </p>
        </div>

        {/* Video Tour Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#101C35] via-[#1A2B4C] to-[#101C35] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/30 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Play className="w-3.5 h-3.5 fill-red-400" /> Exclusive Video Walkthrough
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Watch Our Force Urbania (12+1) in Action
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Inspect the automatic passenger footstep, executive reclining seats, wide aisle, and pristine exterior before you book.
            </p>
          </div>

          <button
            onClick={() => setVideoModalOpen(true)}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] text-[#101C35] font-black text-sm shadow-lg hover:brightness-110 transition-all hover:scale-105 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-[#101C35]" />
            <span>Play Walkthrough Video</span>
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#101C35] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#101C35] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Corner Category Tag */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 bg-white flex-1 flex flex-col justify-between">
                <h4 className="text-xs font-bold text-[#101C35] group-hover:text-[#F28C28] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all z-20"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Image & Caption Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-[90vh] flex flex-col items-center"
            >
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />

              <div className="mt-4 text-center text-white max-w-2xl px-4">
                <h3 className="text-lg font-bold text-white">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {filteredItems[activeLightboxIndex].desc}
                </p>
                <div className="text-[11px] font-mono text-[#D6A447] mt-2">
                  Image {activeLightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Player Modal */}
        {videoModalOpen && (
          <div
            onClick={() => setVideoModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-black rounded-3xl overflow-hidden max-w-3xl w-full relative shadow-2xl border border-slate-800"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full bg-black flex items-center justify-center">
                <video
                  src="/videos/urbania-walkthrough.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">Force Urbania (12+1) Official Walkthrough</h4>
                  <p className="text-xs text-slate-400">Authentic vehicle video recorded for Hanuman Tours &amp; Travels</p>
                </div>
                <a
                  href={`https://wa.me/919848587868?text=${encodeURIComponent('Hello, I watched your Force Urbania walkthrough video and want to book it.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                >
                  Book Urbania
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
