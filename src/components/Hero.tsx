import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-black pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Almacén industrial"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Especialistas en el vaciado <span className="text-orange-500">de naves industriales en Barcelona</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Más de 10 años de experiencia en servicios profesionales de desalojo, limpieza y gestión de residuos industriales en Barcelona y área metropolitana. 
          Ofrecemos soluciones integrales para empresas que necesitan vaciar, limpiar o reorganizar sus espacios industriales, garantizando eficiencia, 
          rapidez y compromiso medioambiental. Presupuesto sin compromiso en 24-48 horas.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#contacto"
            className="bg-orange-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-orange-600 transition-colors flex items-center"
          >
            Solicitar Presupuesto
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a
            href="#servicios"
            className="text-white text-lg font-semibold hover:text-orange-500"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;