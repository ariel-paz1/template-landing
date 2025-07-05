import React from 'react';

const scrollToAbout = () => {
  const section = document.getElementById('about');
  if (section) {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    const elementPosition = section.offsetTop;
    const offsetPosition = elementPosition - navbarHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Home = () => (
  <section className="hero-section position-relative overflow-hidden d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
    {/* Background Elements */}
    {/* <div className="position-absolute top-0 start-0 w-100 h-100">
      <div className="position-absolute" style={{top: '10%', left: '10%', width: '200px', height: '200px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', animation: 'float 6s ease-in-out infinite'}}></div>
      <div className="position-absolute" style={{top: '60%', right: '15%', width: '150px', height: '150px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', animation: 'float 8s ease-in-out infinite reverse'}}></div>
      <div className="position-absolute" style={{bottom: '20%', left: '20%', width: '100px', height: '100px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', animation: 'float 4s ease-in-out infinite'}}></div>
    </div> */}

    <div className="container h-100 d-flex align-items-center justify-content-center">
      <div className="row w-100 align-items-center justify-content-center">
        <div className="col-lg-7 col-12 text-white text-center mx-auto">
          <div className="hero-content animate__animated animate__fadeInLeft">
            <h1 className="display-3 fw-bold mb-4 lh-sm">
              Transformamos Ideas en
              <span className="text-warning"> Realidad Digital</span>
            </h1>
            <p className="lead mb-4 opacity-75">
              Creamos experiencias digitales excepcionales que conectan con tu audiencia
              y generan resultados medibles para tu negocio.
            </p>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-4">
              <a href="#contact" className="btn btn-warning btn-lg px-4 py-3 fw-bold shadow-lg">
                <i className="bi bi-rocket-takeoff me-2"></i>Empezar Ahora
              </a>
              <a href="#services" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                <i className="bi bi-play-circle me-2"></i>Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{zIndex: 2}}>
      <button
        className="scroll-indicator animate__animated animate__bounce animate__infinite btn btn-link p-0 border-0"
        style={{background: 'none'}}
        aria-label="Ver siguiente sección"
        onClick={scrollToAbout}
      >
        <i className="bi bi-chevron-down text-white fs-4"></i>
      </button>
    </div>

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      .hero-section {
        background-attachment: fixed;
      }
      
      .scroll-indicator {
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .scroll-indicator:hover {
        transform: translateY(5px);
      }
      
      @media (max-width: 768px) {
        .hero-section {
          background-attachment: scroll;
        }
        .display-3 {
          font-size: 2.2rem;
        }
        .hero-content {
          padding: 0 1rem;
        }
      }
    `}</style>
  </section>
);

export default Home;