import React from 'react';
import { MapPin } from 'lucide-react';

const ServiceArea = () => {
  const municipalities = [
    'Barcelona',
    'Hospitalet',
    'Badalona',
    'Sabadell',
    'Terrassa',
    'Cornellà',
    'Sant Cugat'
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            ¿Dónde trabajamos?
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {municipalities.map((city, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">y más...</span>
                </div>
              </div>
            </div>
            
            <p className="mt-8 text-lg text-gray-600">
              Ofrecemos nuestros servicios en Barcelona y en todos los municipios cercanos, 
              garantizando un servicio eficiente y adaptado a las necesidades locales.
            </p>
          </div>

          <div className="h-[500px] bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11976.619042841892!2d2.112205293427377!3d41.37072222921991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49891f0dfe089%3A0x46a0a20e749e621e!2sCarrer%20d&#39;Antoni%20de%20Capmany%2C%2015%2C%20Sants-Montju%C3%AFc%2C%2008028%20Barcelona!5e0!3m2!1sca!2ses!4v1732381090213!5m2!1sca!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;