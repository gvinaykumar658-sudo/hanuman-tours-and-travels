import React from 'react';
import { Armchair, UserCheck, IndianRupee, HeartHandshake, Clock, CalendarCheck2, ShieldCheck, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/travelData';

export default function WhyChooseUs() {
  const getIcon = (name) => {
    switch (name) {
      case 'ComfortableVehicles':
        return <Armchair className="w-7 h-7 text-[#F28C28]" />;
      case 'ProfessionalDrivers':
        return <UserCheck className="w-7 h-7 text-[#D6A447]" />;
      case 'AffordableTravel':
        return <IndianRupee className="w-7 h-7 text-emerald-500" />;
      case 'FamilyFriendlyJourneys':
        return <HeartHandshake className="w-7 h-7 text-[#F28C28]" />;
      case 'OnTimeService':
        return <Clock className="w-7 h-7 text-[#D6A447]" />;
      case 'EasyBooking':
        return <CalendarCheck2 className="w-7 h-7 text-indigo-500" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#F28C28]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F5F7FA] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F28C28]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#101C35]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
            Why Choose Hanuman Tours &amp; Travels
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101C35] tracking-tight">
            Committed to Making Every <br />
            <span className="text-[#F28C28]">Journey Peaceful &amp; Memorable</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus on clean, comfortable vehicles, courteous drivers, and transparent communication so you can travel with complete peace of mind.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-xl bg-[#F5F7FA] group-hover:bg-[#101C35] border border-slate-200/60 flex items-center justify-center mb-6 transition-colors duration-300">
                  {getIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#101C35] mb-3 group-hover:text-[#F28C28] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#D6A447] transition-colors">
                <span>Hanuman Standard</span>
                <span className="text-[#F28C28] font-bold">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Customer Trust Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 text-center shadow-sm max-w-2xl mx-auto">
          <p className="text-sm font-medium text-slate-700">
            Dedicated driver assistance &bull; Doorstep pickup in Hyderabad &bull; Transparent trip estimates
          </p>
        </div>

      </div>
    </section>
  );
}
