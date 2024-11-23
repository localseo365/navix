import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} className="text-orange-500 font-bold text-2xl hover:text-orange-400">
              NAVIX
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={scrollToTop} className="text-white hover:text-orange-500">Inicio</button>
              <a href="#nosotros" className="text-white hover:text-orange-500">Nosotros</a>
              <a href="#servicios" className="text-white hover:text-orange-500">Servicios</a>
              <a href="#portfolio" className="text-white hover:text-orange-500">Portfolio</a>
              <a href="#testimonios" className="text-white hover:text-orange-500">Testimonios</a>
              <a href="#contacto" className="text-white hover:text-orange-500">Contacto</a>
              <a href="tel:+34633759649" className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                <Phone className="w-4 h-4 mr-2" />
                633 75 96 49
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <button onClick={scrollToTop} className="text-white block px-3 py-2 hover:bg-orange-500 rounded-md w-full text-left">
              Inicio
            </button>
            <a href="#nosotros" className="text-white block px-3 py-2 hover:bg-orange-500 rounded-md">Nosotros</a>
            <a href="#servicios" className="text-white block px-3 py-2 hover:bg-orange-500 rounded-md">Servicios</a>
            <a href="#portfolio" className="text-white block px-3 py-2 hover:bg-orange-500 rounded-md">Portfolio</a>
            <a href="#testimonios" className="text-white block px-3 py-2 hover:bg-orange-500 rounded-md">Testimonios</a>
            <a href="#contacto" className="text-white block px-3 py-2 hover:bg-orange-500 rounded-md">Contacto</a>
            <a href="tel:+34633759649" className="flex items-center text-white px-3 py-2 hover:bg-orange-500 rounded-md">
              <Phone className="w-4 h-4 mr-2" />
              633 75 96 49
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;