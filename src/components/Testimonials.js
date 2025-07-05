import React from 'react';

const testimonials = [
  {
    name: 'María González',
    position: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80',
    text: 'Increíble trabajo realizado por el equipo. Nuestro sitio web aumentó las conversiones en un 300% en solo 3 meses. Altamente recomendados.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    position: 'Fundador, DigitalMinds',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    text: 'Profesionalismo y calidad excepcional. El proyecto se entregó a tiempo y superó todas nuestras expectativas. Definitivamente volveremos a trabajar juntos.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    position: 'Directora de Marketing, InnovateCorp',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    text: 'La mejor inversión que hemos hecho para nuestro negocio. El equipo entendió perfectamente nuestras necesidades y entregó resultados extraordinarios.',
    rating: 5
  },
  {
    name: 'Luis Fernández',
    position: 'Emprendedor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    text: 'Como emprendedor, necesitaba algo profesional pero accesible. Este equipo me dio exactamente eso y más. Mi negocio ha crecido exponencialmente.',
    rating: 5
  },
  {
    name: 'Sofía López',
    position: 'Gerente de Producto, StartupXYZ',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    text: 'Excelente comunicación y resultados. El proyecto se desarrolló de manera fluida y el resultado final fue espectacular. Muy satisfecha.',
    rating: 5
  },
  {
    name: 'Diego Silva',
    position: 'Director Comercial, GrowthCo',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    text: 'Impresionante capacidad técnica y creatividad. Transformaron nuestra visión en una realidad digital que supera nuestras expectativas.',
    rating: 5
  }
];

const Testimonials = () => (
  <section className="py-5 position-relative" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
    <div className="container">
      {/* Header */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center text-white">
          <h2 className="display-5 fw-bold mb-3">Lo Que Dicen Nuestros Clientes</h2>
          <p className="lead opacity-75">
            Descubre por qué cientos de empresas confían en nosotros para sus proyectos digitales.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="row g-4">
        {testimonials.map((testimonial, idx) => (
          <div className="col-12 col-md-6 col-lg-4" key={idx}>
            <div className="testimonial-card card border-0 shadow-lg h-100 position-relative">
              <div className="card-body p-4">
                {/* Rating */}
                <div className="rating mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="testimonial-text mb-4">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="d-flex align-items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="rounded-circle me-3"
                    style={{width: 50, height: 50, objectFit: 'cover'}}
                  />
                  <div>
                    <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.position}</small>
                  </div>
                </div>
                
                {/* Quote Icon */}
                <div className="position-absolute top-0 end-0 p-3">
                  <i className="bi bi-quote text-primary opacity-25" style={{fontSize: '2rem'}}></i>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="position-absolute bottom-0 start-0 bg-primary" style={{width: '40px', height: '40px', transform: 'translate(-20px, 20px)', borderRadius: '50%', opacity: 0.1}}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <div className="text-center text-white">
            <div className="row g-4">
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="display-4 fw-bold mb-2">500+</div>
                  <p className="mb-0 opacity-75">Clientes Satisfechos</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="display-4 fw-bold mb-2">98%</div>
                  <p className="mb-0 opacity-75">Satisfacción</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="display-4 fw-bold mb-2">4.9/5</div>
                  <p className="mb-0 opacity-75">Calificación Promedio</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="stat-item">
                  <div className="display-4 fw-bold mb-2">24/7</div>
                  <p className="mb-0 opacity-75">Soporte Disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="text-center text-white">
            <h3 className="fw-bold mb-3">¿Listo para unirte a nuestros clientes satisfechos?</h3>
            <p className="lead mb-4 opacity-75">
              Únete a cientos de empresas que ya han transformado su presencia digital con nosotros.
            </p>
            <a href="#contact" className="btn btn-warning btn-lg px-4 py-3 fw-bold">
              <i className="bi bi-rocket-takeoff me-2"></i>Empezar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .testimonial-card {
        transition: all 0.3s ease;
        border-radius: 15px;
        background: white;
      }
      
      .testimonial-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
      }
      
      .testimonial-text {
        font-style: italic;
        line-height: 1.6;
        color: #6c757d;
      }
      
      .rating {
        font-size: 1.1rem;
      }
      
      .stat-item {
        transition: all 0.3s ease;
      }
      
      .stat-item:hover {
        transform: scale(1.05);
      }
      
      @media (max-width: 768px) {
        .testimonial-card {
          margin-bottom: 1rem;
        }
      }
    `}</style>
  </section>
);

export default Testimonials; 