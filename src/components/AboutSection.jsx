import React from 'react';
import { ShieldCheck, HeartHandshake, Phone, Mail, MessageCircle, MapPin, Users, Award, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export default function AboutSection({ onExploreVehicles, onContactClick }) {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-[#F28C28]/5 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 rounded-full bg-[#101C35]/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C35]/5 border border-slate-200 text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-3">
            <HeartHandshake className="w-4 h-4 text-[#F28C28]" />
            About Our Company
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101C35] tracking-tight">
            Dedicated to Comfortable &amp; <br />
            <span className="text-[#F28C28]">Convenient Travel Solutions</span>
          </h2>
        </div>

        {/* Core Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Authentic Founder & Vehicle Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Founder Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5]">
                <img 
                  src="/images/founder/surender-reddy.jpg" 
                  alt="M. Surender Reddy - Hanuman Tours & Travels Founder"
                  className="w-full h-full object-cover object-top filter brightness-95"
                />
                
                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Caption Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F28C28] text-[#101C35] text-[11px] font-black tracking-wider uppercase inline-block mb-1">
                    Proprietor &amp; Founder
                  </span>
                  <h3 className="text-2xl font-black">{BUSINESS_INFO.founder}</h3>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#F5BA42]" />
                    <span>Direct: {BUSINESS_INFO.phoneFormatted}</span>
                  </p>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/80 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F28C28]/15 text-[#F28C28] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">Verified</span>
                    <span className="text-xs font-black text-[#101C35]">Dedicated Family Travel</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Mission, Vehicles & Customer Focus (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Core Required Statement */}
            <div className="p-6 rounded-2xl bg-[#F5F7FA] border-l-4 border-[#F28C28] text-slate-700">
              <p className="text-base sm:text-lg font-medium leading-relaxed italic text-slate-800">
                &ldquo;Hanuman Tours &amp; Travels is dedicated to providing comfortable and convenient travel solutions for families, individuals and groups. With a range of vehicles including Force Urbania, Toyota Innova Crysta, Toyota Innova and Maruti Suzuki Dzire, we help customers plan their journeys with ease.&rdquo;
              </p>
            </div>

            {/* Services Overview */}
            <div className="space-y-3">
              <h3 className="text-xl font-black text-[#101C35]">Our Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating from Hyderabad, Telangana, we cater to all your road travel needs with precision and care:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <strong className="text-xs font-bold text-[#101C35] block mb-1">Outstation Round Trips</strong>
                  <span className="text-xs text-slate-600">Well-planned journeys to Tirupati, Srisailam, Shirdi, Goa, Vizag, and all popular holiday spots.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <strong className="text-xs font-bold text-[#101C35] block mb-1">Pilgrimage &amp; Temple Yatras</strong>
                  <span className="text-xs text-slate-600">Peaceful family darshan tours with flexible stopping options tailored for senior citizens.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <strong className="text-xs font-bold text-[#101C35] block mb-1">Group Travel &amp; Weddings</strong>
                  <span className="text-xs text-slate-600">Flagship Force Urbania (12+1) ensuring everyone travels together in comfort and luxury.</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                  <strong className="text-xs font-bold text-[#101C35] block mb-1">Airport Transfers &amp; City Rentals</strong>
                  <span className="text-xs text-slate-600">Punctual pickups to and from Rajiv Gandhi International Airport (RGIA) Hyderabad.</span>
                </div>
              </div>
            </div>

            {/* Customer-Focused Service */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xl font-black text-[#101C35]">Customer-Focused Service</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every booking is handled directly with personal attention. We take the time to understand your passenger count, luggage volume, and travel schedule to recommend the ideal vehicle for a smooth and memorable journey.
              </p>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#101C35] hover:bg-[#1A2B4C] text-white text-xs font-bold shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F28C28]" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onExploreVehicles}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:border-[#F28C28] text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                <Car className="w-4 h-4 text-[#F28C28]" />
                <span>View All 4 Vehicles</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
