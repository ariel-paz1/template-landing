import React from 'react';

const About = () => (
  <section className="py-5 position-relative" id="about" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
    <div className="container">
      {/* Header Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8 text-center">
          <h2 className="display-5 fw-bold mb-3">¿Por Qué Elegirnos?</h2>
          <p className="lead text-secondary">
            Somos un equipo apasionado por la innovación y el éxito de nuestros clientes. 
            Nuestra experiencia y dedicación nos convierten en tu mejor aliado digital.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row g-4 mb-5">
        <div className="col-6 col-md-3 text-center">
          <div className="stat-card p-4 rounded-3 bg-white shadow-sm">
            <div className="display-4 fw-bold text-primary mb-2">500+</div>
            <p className="text-muted mb-0">Proyectos Exitosos</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center">
          <div className="stat-card p-4 rounded-3 bg-white shadow-sm">
            <div className="display-4 fw-bold text-success mb-2">98%</div>
            <p className="text-muted mb-0">Clientes Satisfechos</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center">
          <div className="stat-card p-4 rounded-3 bg-white shadow-sm">
            <div className="display-4 fw-bold text-warning mb-2">5+</div>
            <p className="text-muted mb-0">Años de Experiencia</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center">
          <div className="stat-card p-4 rounded-3 bg-white shadow-sm">
            <div className="display-4 fw-bold text-info mb-2">24/7</div>
            <p className="text-muted mb-0">Soporte Disponible</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="feature-card card border-0 shadow-lg h-100 position-relative overflow-hidden">
            <div className="card-body p-4 text-center">
              <div className="feature-icon mb-4">
                <div className="bg-primary bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: 80, height: 80}}>
                  <i className="bi bi-lightbulb text-white fs-1"></i>
                </div>
              </div>
              <h4 className="fw-bold mb-3">Innovación Constante</h4>
              <p className="text-secondary mb-0">
                Mantenemosnos actualizados con las últimas tecnologías y tendencias 
                para ofrecerte soluciones de vanguardia.
              </p>
            </div>
            <div className="position-absolute top-0 end-0 bg-primary" style={{width: '100px', height: '100px', transform: 'translate(50%, -50%)', borderRadius: '50%', opacity: 0.1}}></div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="feature-card card border-0 shadow-lg h-100 position-relative overflow-hidden">
            <div className="card-body p-4 text-center">
              <div className="feature-icon mb-4">
                <div className="bg-success bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: 80, height: 80}}>
                  <i className="bi bi-award text-white fs-1"></i>
                </div>
              </div>
              <h4 className="fw-bold mb-3">Calidad Premium</h4>
              <p className="text-secondary mb-0">
                Cada proyecto se desarrolla con los más altos estándares de calidad, 
                garantizando resultados excepcionales.
              </p>
            </div>
            <div className="position-absolute top-0 end-0 bg-success" style={{width: '100px', height: '100px', transform: 'translate(50%, -50%)', borderRadius: '50%', opacity: 0.1}}></div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="feature-card card border-0 shadow-lg h-100 position-relative overflow-hidden">
            <div className="card-body p-4 text-center">
              <div className="feature-icon mb-4">
                <div className="bg-warning bg-gradient rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: 80, height: 80}}>
                  <i className="bi bi-people text-white fs-1"></i>
                </div>
              </div>
              <h4 className="fw-bold mb-3">Atención Personalizada</h4>
              <p className="text-secondary mb-0">
                Trabajamos de cerca contigo para entender tus necesidades específicas 
                y crear soluciones a medida.
              </p>
            </div>
            <div className="position-absolute top-0 end-0 bg-warning" style={{width: '100px', height: '100px', transform: 'translate(50%, -50%)', borderRadius: '50%', opacity: 0.1}}></div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row mt-5 pt-5">
        <div className="col-lg-6">
          <div className="pe-lg-5">
            <h3 className="fw-bold mb-4">Nuestra Misión</h3>
            <p className="text-secondary mb-4">
              Empoderar a empresas y emprendedores con herramientas digitales innovadoras 
              que impulsen su crecimiento y éxito en el mercado actual.
            </p>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-check-circle-fill text-success me-3"></i>
              <span>Soluciones personalizadas para cada negocio</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-check-circle-fill text-success me-3"></i>
              <span>Tecnología de última generación</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-success me-3"></i>
              <span>Resultados medibles y garantizados</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ps-lg-5">
            <h3 className="fw-bold mb-4">Nuestra Visión</h3>
            <p className="text-secondary mb-4">
              Ser reconocidos como el socio estratégico preferido para la transformación 
              digital, liderando la innovación en el sector tecnológico.
            </p>
            <div className="bg-primary bg-gradient text-white p-4 rounded-3">
              <h5 className="fw-bold mb-2">¿Listo para empezar?</h5>
              <p className="mb-3 opacity-75">Únete a cientos de empresas que ya confían en nosotros</p>
              <a href="#contact" className="btn btn-light fw-bold">Contáctanos Ahora</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .feature-card {
        transition: all 0.3s ease;
        border-radius: 15px;
      }
      
      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
      }
      
      .stat-card {
        transition: all 0.3s ease;
        border-radius: 15px;
      }
      
      .stat-card:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
      }
      
      .feature-icon {
        transition: all 0.3s ease;
      }
      
      .feature-card:hover .feature-icon {
        transform: scale(1.1);
      }
    `}</style>
  </section>
);

export default About;