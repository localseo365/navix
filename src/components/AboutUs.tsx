import React from 'react';
import { Shield, Leaf, Clock } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Experiencia y Confianza",
      description: "Más de una década de experiencia en el sector industrial, con más de 500 proyectos completados con éxito. Equipo altamente cualificado y certificado para todo tipo de trabajos industriales."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Compromiso",
      description: "Cumplimiento riguroso de plazos y expectativas del cliente. Planificación detallada de cada proyecto, con seguimiento continuo y comunicación transparente. Disponibilidad 24/7 para emergencias."
    },
    {
      icon: <Leaf className="h-8 w-8 text-orange-500" />,
      title: "Sostenibilidad",
      description: "Gestión responsable y sostenible de residuos industriales. Certificados en gestión ambiental ISO 14001. Compromiso con la economía circular y el reciclaje de materiales industriales."
    }
  ];

  return (
    <section id="nosotros" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Conoce a NAVIX
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              NAVIX es tu empresa de confianza para el vaciado de naves industriales en Barcelona, 
              con más de 10 años de experiencia y cientos de proyectos completados. Nos especializamos 
              en ofrecer soluciones integrales para empresas que necesitan gestionar sus espacios 
              industriales de manera eficiente y sostenible. Nuestro equipo de profesionales 
              cualificados garantiza un servicio de máxima calidad, cumpliendo con todas las 
              normativas de seguridad y medioambientales vigentes.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Equipo NAVIX"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;