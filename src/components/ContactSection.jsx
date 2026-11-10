import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle, Clock, ShieldCheck, User } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and phone number');
      return;
    }

    const text = 
`*HANUMAN TOURS & TRAVELS - GENERAL ENQUIRY*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📱 *Mobile:* ${formData.phone.trim()}
${formData.email.trim() ? `📧 *Email:* ${formData.email.trim()}\n` : ''}💬 *Message:* ${formData.message.trim() || 'I would like to enquire about your travel services.'}
━━━━━━━━━━━━━━━━━━`;

    window.open(`https://wa.me/919848587868?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#F28C28] uppercase tracking-wider mb-3">
            <Phone className="w-4 h-4 text-[#F28C28]" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#101C35] tracking-tight">
            Contact Hanuman Tours &amp; Travels
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We are available 24/7 to answer your calls, respond to WhatsApp messages, and provide custom travel quotes.
          </p>
        </div>

        {/* 3 Contact Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all text-center flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#F28C28] flex items-center justify-center mx-auto mb-4 border border-amber-100">
                <Phone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Direct Calling</span>
              <h3 className="text-xl font-black text-[#101C35] mb-2">{BUSINESS_INFO.phoneFormatted}</h3>
              <p className="text-xs text-slate-500 mb-6">Available 24 hours daily for immediate booking &amp; roadside help.</p>
            </div>
            <a
              href={BUSINESS_INFO.phoneLink}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#101C35] hover:bg-[#1A2B4C] text-white text-xs font-bold shadow transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D6A447]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all text-center flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <MessageCircle className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Instant WhatsApp</span>
              <h3 className="text-xl font-black text-[#101C35] mb-2">{BUSINESS_INFO.phoneFormatted}</h3>
              <p className="text-xs text-slate-500 mb-6">Fastest quotes, vehicle photo sharing, and live status.</p>
            </div>
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all text-center flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-100">
                <Mail className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Official Email</span>
              <h3 className="text-base font-black text-[#101C35] mb-2 break-all">{BUSINESS_INFO.email}</h3>
              <p className="text-xs text-slate-500 mb-6">Send corporate RFPs, multi-day itineraries and billing enquiries.</p>
            </div>
            <a
              href={BUSINESS_INFO.emailLink}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold shadow transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F28C28]" />
              <span>Email Us</span>
            </a>
          </div>

        </div>

        {/* Contact Form & Google Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Quick Contact Message Form (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#101C35] mb-2">Send Us a Quick Message</h3>
              <p className="text-xs text-slate-600 mb-6">
                Have a question regarding vehicle availability or outstation routes? Leave a message below.
              </p>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-[#101C35]">Message Sent via WhatsApp!</h4>
                  <p className="text-xs text-slate-600">Thank you for contacting Hanuman Tours &amp; Travels.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#F28C28] underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Mobile number"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email address"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist your trip?"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#F5F7FA] border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#F28C28] to-[#D6A447] text-[#101C35] font-extrabold text-sm shadow hover:brightness-110 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-500">
              Founder: <strong>M. Surender Reddy</strong> &bull; Hyderabad, Telangana
            </div>
          </div>

          {/* Google Maps Embed / Location Placeholder (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-bold text-[#F28C28] uppercase tracking-wider block">Headquarters &amp; Operations</span>
                  <h3 className="text-xl font-black text-[#101C35]">Hyderabad, Telangana</h3>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700">
                  <MapPin className="w-5 h-5 text-[#F28C28]" />
                </div>
              </div>

              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Operating base in Hyderabad with doorstep vehicle dispatch available across all zones including Gachibowli, Hitec City, Secunderabad, Kukatpally, Mehdipatnam, LB Nagar, and Rajiv Gandhi International Airport (Shamshabad).
              </p>

              {/* Responsive Google Maps Embed Placeholder for Hyderabad */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100 shadow-inner">
                <iframe
                  title="Hanuman Tours & Travels Operating Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31604085444!2d78.26795893335502!3d17.412299801452936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter contrast-105"
                ></iframe>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Open 24/7 Everyday
              </span>
              <span className="font-semibold text-slate-700">
                All-India Permit Fleet
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
