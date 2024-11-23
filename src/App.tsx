import React from 'react';
import { Menu, X, Phone, Clock, MapPin, Truck, Package, Recycle, Star, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import EmergencyService from './components/EmergencyService';
import ServiceArea from './components/ServiceArea';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <EmergencyService />
        <ServiceArea />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
}

export default App;