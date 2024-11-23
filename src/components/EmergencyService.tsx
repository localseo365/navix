import React from 'react';
import { Clock, Phone } from 'lucide-react';

const EmergencyService = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-500 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Servicio de Emergencia 24/7
              </h2>
              <p className="mt-2 text-white text-opacity-90">
                Respuesta inmediata para situaciones urgentes
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="rounded-md">
                <a
                  href="tel:+34633759649"
                  className="flex items-center justify-center px-8 py-4 bg-black text-white text-lg font-semibold rounded-md hover:bg-gray-900 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  633 75 96 49
                </a>
              </div>
              <div className="mt-4 flex items-center justify-center text-white">
                <Clock className="mr-2 h-5 w-5" />
                <span>Disponible 24 horas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyService;