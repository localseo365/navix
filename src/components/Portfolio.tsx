import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Desalojo Fábrica Textil",
      location: "Hospitalet de Llobregat",
      area: "2.500m²"
    },
    {
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Limpieza Nave Industrial",
      location: "Zona Franca, Barcelona",
      area: "3.800m²"
    },
    {
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Vaciado Almacén Logístico",
      location: "Badalona",
      area: "1.900m²"
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Proyectos realizados
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Algunos de nuestros trabajos más destacados
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-white">
                  {project.location} • {project.area}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;