import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Phone, Mail, Car, MessageCircle, AlertCircle, CheckCircle, Send, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO, VEHICLES } from '../data/travelData';

export default function BookingForm({ initialVehicle, initialDestination }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    pickup: 'Hyderabad',
    destination: '',
    journeyDate: '',
    returnDate: '',
    passengers: '4',
    vehicle: 'Force Urbania (12+1 Seater)',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');

  // Update initial vehicle or destination when prop changes
  useEffect(() => {
    if (initialVehicle) {
      setFormData(prev => ({
        ...prev,
        vehicle: `${initialVehicle.name} (${initialVehicle.capacity})`
      }));
    }
  }, [initialVehicle]);

  useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({
        ...prev,
        destination: initialDestination.to || initialDestination.title || ''
      }));
    }
  }, [initialDestination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.pickup.trim()) {
      errs.pickup = 'Please provide pickup location';
    }
    if (!formData.destination.trim()) {
      errs.destination = 'Please provide destination';
    }
    if (!formData.journeyDate) {
      errs.journeyDate = 'Please select journey date';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Format professional WhatsApp Enquiry Message
    const message = 
`*HANUMAN TOURS & TRAVELS - BOOKING ENQUIRY*
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${formData.name.trim()}
📱 *Mobile Number:* ${formData.mobile.trim()}
${formData.email.trim() ? `📧 *Email:* ${formData.email.trim()}\n` : ''}📍 *Pickup Location:* ${formData.pickup.trim()}
🎯 *Destination:* ${formData.destination.trim()}
📅 *Journey Date:* ${formData.journeyDate}
${formData.returnDate ? `🔄 *Return Date:* ${formData.returnDate}\n` : ''}👥 *Passengers:* ${formData.passengers} Pax
🚗 *Vehicle Selected:* ${formData.vehicle}
${formData.requirements.trim() ? `📝 *Special Requirements:* ${formData.requirements.trim()}\n` : ''}━━━━━━━━━━━━━━━━━━━━
_Note: Booking enquiry awaiting confirmation._`;

    const whatsappLink = `https://wa.me/919848587868?text=${encodeURIComponent(message)}`;
    setGeneratedWhatsAppUrl(whatsappLink);
    setIsSubmitted(true);

    // Automatically trigger WhatsApp in new tab
    window.open(whatsappLink, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setGeneratedWhatsAppUrl('');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      pickup: 'Hyderabad',
      destination: '',
      journeyDate: '',
      returnDate: '',
      passengers: '4',
      vehicle: 'Force Urbania (12+1 Seater)',
      requirements: ''
    });
  };

  // Get today's date formatted as YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101C35]/5 border border-slate-200 text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4 text-[#F28C28]" />
            Fast &amp; Transparent Booking
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101C35] tracking-tight">
            Book Your Journey or <br />
            <span className="text-[#F28C28]">Request a Free Quotation</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Fill in your trip details below. Your enquiry is immediately transmitted to our dispatch desk via WhatsApp for rapid confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F5F7FA] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            
            {isSubmitted ? (
              <div className="text-center py-8 space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-[#101C35]">Enquiry Prepared Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your formatted WhatsApp message has been launched. If WhatsApp did not open automatically, click the button below:
                  </p>
                </div>

                {/* Status Notice Requirement: Enquiry awaiting confirmation */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left max-w-md mx-auto">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">Enquiry Awaiting Confirmation:</strong>
                      <span>This is an official travel enquiry. Our manager (M. Surender Reddy) will verify vehicle availability and confirm your booking with the best quotation.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-md"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Open WhatsApp Message</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#D6A447]" />
                    <span>Call Us Now</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs font-bold text-slate-500 hover:text-[#101C35] underline cursor-pointer"
                  >
                    Submit Another Trip Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Notice Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs font-bold text-[#101C35] uppercase tracking-wider">
                    Travel Enquiry Form
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" /> Instant Response
                  </span>
                </div>

                {/* Name & Mobile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="e.g. 9848587868"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.mobile ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                      }`}
                    />
                    {errors.mobile && <span className="text-[11px] text-red-500 mt-1 block">{errors.mobile}</span>}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  />
                </div>

                {/* Pickup & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Pickup Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        placeholder="e.g. Hyderabad / Airport / Secunderabad"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                          errors.pickup ? 'border-red-400' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {errors.pickup && <span className="text-[11px] text-red-500 mt-1 block">{errors.pickup}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Destination <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Tirupati / Srisailam / Goa"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.destination ? 'border-red-400' : 'border-slate-300'
                      }`}
                    />
                    {errors.destination && <span className="text-[11px] text-red-500 mt-1 block">{errors.destination}</span>}
                  </div>
                </div>

                {/* Dates: Journey Date & Return Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Journey Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="journeyDate"
                      min={todayStr}
                      value={formData.journeyDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28] ${
                        errors.journeyDate ? 'border-red-400' : 'border-slate-300'
                      }`}
                    />
                    {errors.journeyDate && <span className="text-[11px] text-red-500 mt-1 block">{errors.journeyDate}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Return Date <span className="text-slate-400 font-normal">(Optional for Round-Trip)</span>
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      min={formData.journeyDate || todayStr}
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>
                </div>

                {/* Passengers & Vehicle Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Number of Passengers
                    </label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    >
                      <option value="1-3">1 - 3 Passengers (Sedan)</option>
                      <option value="4">4 Passengers (Dzire / Sedan)</option>
                      <option value="5-7">5 - 7 Passengers (Innova Crysta / Innova)</option>
                      <option value="8-12">8 - 12 Passengers (Force Urbania)</option>
                      <option value="13+">13+ Passengers (Multiple Vehicles / Van)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select Vehicle
                    </label>
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    >
                      <option value="Force Urbania (12+1 Seater)">Force Urbania (12+1 Seater)</option>
                      <option value="Toyota Innova Crysta (7+1 / 6+1)">Toyota Innova Crysta</option>
                      <option value="Toyota Innova (7+1 Seater)">Toyota Innova Classic</option>
                      <option value="Maruti Suzuki Dzire (4+1 Seater)">Maruti Suzuki Dzire (Sedan)</option>
                      <option value="Need Recommendation based on group">Need Recommendation from Travels</option>
                    </select>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Additional Requirements (Optional)
                  </label>
                  <textarea
                    name="requirements"
                    rows="3"
                    value={formData.requirements}
                    onChange={handleChange}
                    placeholder="e.g. Pilgrimage trip with senior citizens, airport pickup flight time, multi-day hotel stops, or extra luggage requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                  ></textarea>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-[#F28C28] via-[#D6A447] to-[#F28C28] text-[#101C35] font-extrabold text-base shadow-lg hover:brightness-110 transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Booking Enquiry</span>
                  </button>
                </div>

                {/* Confirmation Notice */}
                <p className="text-center text-[11px] text-slate-500">
                  * Submission sends an enquiry to our desk for vehicle check &amp; price quotation. It is not an instant debit or final booking.
                </p>

              </form>
            )}

          </div>

          {/* Right Column: Contact Cards & Phone Booking (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Call Card */}
            <div className="bg-[#101C35] text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[#F28C28]/10 blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#F28C28]/20 flex items-center justify-center text-[#F28C28]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider block">Prefer Speaking Directly?</span>
                  <h3 className="text-xl font-black text-white">Call for Instant Booking</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Have an urgent airport transfer or last-minute outstation journey? Speak directly with Mr. M. Surender Reddy for prompt vehicle dispatch.
              </p>

              <div className="space-y-3">
                <a
                  href={BUSINESS_INFO.phoneLink}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F28C28] hover:bg-[#D6A447] text-[#101C35] font-black text-base shadow-md transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Why Book with Us Summary */}
            <div className="bg-[#F5F7FA] border border-slate-200 rounded-3xl p-6 sm:p-7 space-y-4">
              <h4 className="text-base font-black text-[#101C35]">Booking Guarantee &amp; Transparency</h4>
              
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>100% Genuine Fleet:</strong> You get the exact vehicle model booked (Force Urbania / Crysta / Innova / Dzire).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Clear &amp; Upfront Tariff:</strong> No surprise fees or extra unagreed toll surcharges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Clean &amp; Sanitized Vehicles:</strong> Fresh upholstery, working AC, and washed before pickup.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Experienced Highway Chauffeurs:</strong> Courteous and familiar with Telugu, Hindi &amp; English.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
