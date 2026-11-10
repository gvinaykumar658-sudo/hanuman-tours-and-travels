import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import VehiclesSection from './components/VehiclesSection';
import PackagesSection from './components/PackagesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import VehicleDetailsModal from './components/VehicleDetailsModal';
import PackageDetailsModal from './components/PackageDetailsModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [prefilledVehicle, setPrefilledVehicle] = useState(null);
  const [prefilledDestination, setPrefilledDestination] = useState(null);

  // Active section spy on scroll
  useEffect(() => {
    const sectionIds = ['home', 'vehicles', 'packages', 'gallery', 'about', 'booking', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookVehicle = (vehicle) => {
    setPrefilledVehicle(vehicle);
    scrollToSection('booking');
  };

  const handleBookPackage = (pkg) => {
    setPrefilledDestination(pkg);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      
      {/* 1. Header / Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenBooking={() => scrollToSection('booking')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero
          onBookClick={() => scrollToSection('booking')}
          onExploreVehicles={() => scrollToSection('vehicles')}
        />

        {/* 3. Why Choose Us */}
        <WhyChooseUs />

        {/* 4. Our Vehicles */}
        <VehiclesSection
          onViewVehicleDetails={(v) => setSelectedVehicle(v)}
          onBookVehicle={handleBookVehicle}
        />

        {/* 5. Popular Tour Packages */}
        <PackagesSection
          onExplorePackage={(p) => setSelectedPackage(p)}
          onBookPackage={handleBookPackage}
        />

        {/* 6. Real Vehicle & Video Gallery */}
        <GallerySection />

        {/* 7. About Us & Founder */}
        <AboutSection
          onExploreVehicles={() => scrollToSection('vehicles')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 8. Booking & Enquiry System */}
        <BookingForm
          initialVehicle={prefilledVehicle}
          initialDestination={prefilledDestination}
        />

        {/* 9. Contact Us & Google Maps */}
        <ContactSection />

      </main>

      {/* 10. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onVehicleClick={(v) => {
          setSelectedVehicle(v);
        }}
        onPackageClick={(p) => {
          setSelectedPackage(p);
        }}
      />

      {/* 11. Floating WhatsApp & Mobile Call Widget */}
      <FloatingWhatsApp />

      {/* 12. Interactive Modals */}
      {selectedVehicle && (
        <VehicleDetailsModal
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onBookNow={(v) => {
            setSelectedVehicle(null);
            handleBookVehicle(v);
          }}
        />
      )}

      {selectedPackage && (
        <PackageDetailsModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
          onBookNow={(p) => {
            setSelectedPackage(null);
            handleBookPackage(p);
          }}
        />
      )}

    </div>
  );
}
