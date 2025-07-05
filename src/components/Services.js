import React from 'react';

const services = [
  {
    title: 'Desarrollo Web',
    icon: 'bi bi-laptop',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    desc: 'Sitios web modernos, rápidos y completamente responsivos que convierten visitantes en clientes.',
    features: ['Diseño Responsivo', 'SEO Optimizado', 'Velocidad Garantizada'],
    price: 'Desde $XXX'
  },
  {
    title: 'Aplicaciones Móviles',
    icon: 'bi bi-phone',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
    desc: 'Apps nativas e híbridas para iOS y Android que destacan en las tiendas de aplicaciones.',
    features: ['iOS & Android', 'UI/UX Premium', 'Mantenimiento'],
    price: 'Desde $XXX'
  },
  {
    title: 'Marketing Digital',
    icon: 'bi bi-bar-chart-line',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    desc: 'Estrategias integrales de marketing digital para aumentar tu presencia online y ventas.',
    features: ['SEO & SEM', 'Redes Sociales', 'Analytics'],
    price: 'Desde $XXX/mes'
  },
  {
    title: 'Diseño Gráfico',
    icon: 'bi bi-brush',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    desc: 'Diseños creativos y profesionales que fortalecen tu identidad de marca.',
    features: ['Branding', 'Material Promocional', 'Ilustraciones'],
    price: 'Desde $XXX'
  },
  {
    title: 'Consultoría IT',
    icon: 'bi bi-gear',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80',
    desc: 'Asesoramiento experto para optimizar tus procesos tecnológicos y aumentar la eficiencia.',
    features: ['Auditoría IT', 'Optimización', 'Capacitación'],
    price: 'Desde $XXX/hora'
  },
  {
    title: 'E-commerce',
    icon: 'bi bi-cart',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
    desc: 'Tiendas online completas con pasarelas de pago seguras y gestión de inventario.',
    features: ['Pasarelas de Pago', 'Gestión de Stock', 'Analytics'],
    price: 'Desde $XXX'
  }
];

const Services = () => (
  <section className="py-5 position-relative" id="services" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
    <div className="container">
      {/* Header */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center text-white">
          <h2 className="display-5 fw-bold mb-3">Soluciones Digitales Completas</h2>
          <p className="lead opacity-75">
            Ofrecemos una gama completa de servicios digitales para hacer crecer tu negocio 
            y alcanzar el éxito en el mundo digital.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="row g-4">
        {services.map((service, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="service-card card border-0 shadow-lg h-100 position-relative overflow-hidden">
              <div className="service-image position-relative">
                <img src={service.img} alt={service.title} className="card-img-top" style={{height: 200, objectFit: 'cover'}} />
                <div className="service-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{background: 'rgba(102, 126, 234, 0.9)'}}>
                  <i className={`${service.icon} text-white`} style={{fontSize: '3rem'}}></i>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h4 className="card-title fw-bold mb-0">{service.title}</h4>
                  <span className="badge bg-primary bg-gradient px-3 py-2 rounded-pill">{service.price}</span>
                </div>
                <p className="card-text text-secondary mb-3">{service.desc}</p>
                
                <div className="features-list mb-3">
                  {service.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <small className="text-muted">{feature}</small>
                    </div>
                  ))}
                </div>
                
                <div className="d-grid">
                  <a href="#contact" className="btn btn-primary btn-sm">
                    <i className="bi bi-arrow-right me-2"></i>Solicitar Cotización
                  </a>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="position-absolute top-0 end-0 bg-primary" style={{width: '60px', height: '60px', transform: 'translate(30px, -30px)', borderRadius: '50%', opacity: 0.1}}></div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <div className="text-center text-white">
            <h3 className="fw-bold mb-3">¿No encuentras lo que buscas?</h3>
            <p className="lead mb-4 opacity-75">
              Contáctanos para crear una solución personalizada que se adapte perfectamente a tus necesidades.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#contact" className="btn btn-warning btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-chat-dots me-2"></i>Consulta Gratuita
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-telephone me-2"></i>Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .service-card {
        transition: all 0.3s ease;
        border-radius: 15px;
        background: white;
      }
      
      .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
      }
      
      .service-image {
        overflow: hidden;
      }
      
      .service-overlay {
        opacity: 0;
        transition: all 0.3s ease;
      }
      
      .service-card:hover .service-overlay {
        opacity: 1;
      }
      
      .service-card:hover .service-image img {
        transform: scale(1.1);
        transition: transform 0.3s ease;
      }
      
      .features-list {
        border-top: 1px solid #eee;
        padding-top: 1rem;
      }
      
      @media (max-width: 768px) {
        .service-card {
          margin-bottom: 1rem;
        }
      }
    `}</style>
  </section>
);

export default Services;