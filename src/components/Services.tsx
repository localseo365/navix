import React from 'react';
import { Truck, Package, Recycle, Wrench, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8 text-orange-500" />,
      title: "Vaciado de naves industriales",
      description: "Servicio integral de vaciado y desalojo de naves industriales en Barcelona y área metropolitana. Incluye desmontaje, clasificación de materiales, gestión de residuos y limpieza final. Experiencia en todo tipo de instalaciones: fábricas, almacenes, talleres y centros logísticos."
    },
    {
      icon: <Recycle className="h-8 w-8 text-orange-500" />,
      title: "Gestión de residuos y reciclaje",
      description: "Gestión responsable y certificada de residuos industriales, cumpliendo con toda la normativa ambiental vigente. Separación y clasificación de materiales, transporte a centros autorizados y emisión de certificados de gestión. Especialistas en residuos industriales, metales, plásticos y materiales específicos."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-orange-500" />,
      title: "Limpieza post-vaciado",
      description: "Servicio profesional de limpieza industrial tras el vaciado, incluyendo desinfección, eliminación de residuos y acondicionamiento del espacio. Preparamos su nave para su siguiente uso, ya sea venta, alquiler o nueva actividad industrial."
    },
    {
      icon: <Wrench className="h-8 w-8 text-orange-500" />,
      title: "Retirada de maquinaria y equipos",
      description: "Desmontaje y retirada especializada de maquinaria industrial y equipamiento pesado. Personal cualificado y medios técnicos adecuados para garantizar la seguridad en todo el proceso. Experiencia en todo tipo de maquinaria: producción, almacenaje, climatización y equipos especiales."
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nuestros servicios de vaciado de naves
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluciones profesionales y eficientes para el desalojo industrial
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 -translate-y-1/2 p-4 bg-black rounded-full">
                {service.icon}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {service.description}
              </p>
              <button className="mt-6 btn">
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;