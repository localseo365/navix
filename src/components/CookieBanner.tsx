import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Small delay to prevent hydration issues
    const timer = setTimeout(() => {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem('cookieConsent', 'accepted');
      setIsVisible(false);
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="/cookies" className="text-sm text-orange-500 hover:text-orange-400 whitespace-nowrap">
              Más información
            </a>
            <button
              onClick={acceptCookies}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap flex items-center gap-2"
            >
              Aceptar
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;