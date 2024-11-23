import React from 'react';
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-orange-500 font-bold text-2xl">NAVIX</span>
            <p className="mt-4 text-gray-300">
              Expertos en desalojos industriales en Barcelona y área metropolitana. 
              Compromiso con la eficiencia y el medio ambiente.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-orange-500">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-orange-500">Servicios</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-orange-500">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Barcelona, España</li>
              <li>
                <a href="tel:+34633759649" className="text-gray-300 hover:text-orange-500 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  633 75 96 49
                </a>
              </li>
              <li><a href="https://wa.me/34633759649" className="text-gray-300 hover:text-orange-500">WhatsApp</a></li>
              <li><a href="mailto:info@navix.vercel.app" className="text-gray-300 hover:text-orange-500">info@navix.vercel.app</a></li>
              <li><a href="https://navix.vercel.app" className="text-gray-300 hover:text-orange-500">navix.vercel.app</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 space-y-4">
            <p>© {new Date().getFullYear()} NAVIX. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="/privacidad" className="hover:text-orange-500">Política de Privacidad</a>
              <span>|</span>
              <a href="/legal" className="hover:text-orange-500">Aviso Legal</a>
              <span>|</span>
              <a href="/cookies" className="hover:text-orange-500">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;