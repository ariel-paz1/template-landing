import React, { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-section">
              <h5 className="fw-bold mb-3 text-warning">TuEmpresa</h5>
              <p className="text-muted mb-3">
                Somos expertos en transformación digital, ayudando a empresas a crecer 
                y destacar en el mundo digital con soluciones innovadoras y profesionales.
              </p>
              <div className="social-links">
                <a href="#" className="social-link me-3" title="Facebook">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="social-link me-3" title="Instagram">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="social-link me-3" title="Twitter">
                  <i className="bi bi-twitter-x fs-5"></i>
                </a>
                <a href="#" className="social-link me-3" title="LinkedIn">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a href="#" className="social-link" title="WhatsApp">
                  <i className="bi bi-whatsapp fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h6 className="fw-bold mb-3">Servicios</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#services" className="footer-link">Desarrollo Web</a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link">Apps Móviles</a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link">Marketing Digital</a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link">Diseño Gráfico</a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link">Consultoría IT</a>
                </li>
                <li className="mb-2">
                  <a href="#services" className="footer-link">E-commerce</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h6 className="fw-bold mb-3">Empresa</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#about" className="footer-link">Sobre Nosotros</a>
                </li>
                <li className="mb-2">
                  <a href="#testimonials" className="footer-link">Testimonios</a>
                </li>
                <li className="mb-2">
                  <a href="#contact" className="footer-link">Contacto</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Carreras</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Prensa</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h6 className="fw-bold mb-3">Soporte</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="footer-link">Centro de Ayuda</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Documentación</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Tutoriales</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Estado del Servicio</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Reportar Bug</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">Solicitar Función</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h6 className="fw-bold mb-3">Contacto</h6>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-geo-alt text-warning me-2"></i>
                  <small className="text-muted">Buenos Aires, Argentina</small>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-telephone text-warning me-2"></i>
                  <small className="text-muted">+54 11 1234-5678</small>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-envelope text-warning me-2"></i>
                  <small className="text-muted">info@tuempresa.com</small>
                </li>
                <li className="mb-2 d-flex align-items-center">
                  <i className="bi bi-clock text-warning me-2"></i>
                  <small className="text-muted">Lun - Vie: 9:00 - 18:00</small>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="row mt-5 pt-4 border-top border-secondary">
          <div className="col-lg-6">
            <h6 className="fw-bold mb-3">Suscríbete a nuestro Newsletter</h6>
            <p className="text-muted mb-3">
              Recibe las últimas noticias, consejos y ofertas especiales directamente en tu email.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Tu email" 
                aria-label="Email para newsletter"
              />
              <button className="btn btn-warning" type="button">
                <i className="bi bi-send"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row mt-4 pt-4 border-top border-secondary">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © {currentYear} TuEmpresa. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="footer-link">Política de Privacidad</a>
              </li>
              <li className="list-inline-item">
                <span className="text-muted">|</span>
              </li>
              <li className="list-inline-item">
                <a href="#" className="footer-link">Términos de Servicio</a>
              </li>
              <li className="list-inline-item">
                <span className="text-muted">|</span>
              </li>
              <li className="list-inline-item">
                <a href="#" className="footer-link">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button 
          className="btn btn-warning position-fixed bottom-0 end-0 m-4 rounded-circle"
          style={{width: 50, height: 50, zIndex: 1000}}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          title="Volver arriba"
        >
          <i className="bi bi-arrow-up"></i>
        </button>
      )}

      <style>{`
        .footer-section {
          margin-bottom: 1rem;
        }
        
        .footer-link {
          color: #adb5bd;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #ffc107;
        }
        
        .social-link {
          color: #adb5bd;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .social-link:hover {
          color: #ffc107;
          transform: translateY(-2px);
        }
        
        .input-group .form-control:focus {
          border-color: #ffc107;
          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
        }
        
        .btn-warning {
          background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-warning:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
        }
        
        @media (max-width: 768px) {
          .footer-section {
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 