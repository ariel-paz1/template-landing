import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-5 position-relative" id="contact" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3">¿Listo para Empezar?</h2>
            <p className="lead text-secondary">
              Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad. 
              Nuestro equipo está listo para responder todas tus consultas.
            </p>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="contact-info">
              <h4 className="fw-bold mb-4 text-primary">Información de Contacto</h4>
              
              <div className="contact-item d-flex align-items-center mb-4">
                <div className="contact-icon bg-primary bg-gradient rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                  <i className="bi bi-geo-alt text-white"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Ubicación</h6>
                  <p className="text-muted mb-0">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-center mb-4">
                <div className="contact-icon bg-success bg-gradient rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                  <i className="bi bi-telephone text-white"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Teléfono</h6>
                  <p className="text-muted mb-0">+54 11 1234-5678</p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-center mb-4">
                <div className="contact-icon bg-warning bg-gradient rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                  <i className="bi bi-envelope text-white"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted mb-0">info@tuempresa.com</p>
                </div>
              </div>

              <div className="contact-item d-flex align-items-center mb-4">
                <div className="contact-icon bg-info bg-gradient rounded-circle d-flex align-items-center justify-content-center me-3" style={{width: 50, height: 50}}>
                  <i className="bi bi-clock text-white"></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Horarios</h6>
                  <p className="text-muted mb-0">Lun - Vie: 9:00 - 18:00</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media mt-5">
                <h6 className="fw-bold mb-3">Síguenos</h6>
                <div className="d-flex gap-3">
                  <a href="#" className="social-link bg-primary bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-link bg-danger bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link bg-info bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="social-link bg-success bg-gradient text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: 40, height: 40}}>
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <h4 className="fw-bold mb-4 text-center">Envíanos tu Mensaje</h4>
                  
                  {sent && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      ¡Mensaje enviado correctamente! Te responderemos en las próximas 24 horas.
                      <button type="button" className="btn-close" onClick={() => setSent(false)}></button>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="name">Nombre Completo</label>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Tu teléfono"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          <label htmlFor="phone">Teléfono (opcional)</label>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Selecciona un servicio</option>
                            <option value="web">Desarrollo Web</option>
                            <option value="mobile">Aplicaciones Móviles</option>
                            <option value="marketing">Marketing Digital</option>
                            <option value="design">Diseño Gráfico</option>
                            <option value="consulting">Consultoría IT</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="other">Otro</option>
                          </select>
                          <label htmlFor="service">Servicio de Interés</label>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Tu mensaje"
                            style={{height: 120}}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                          <label htmlFor="message">Mensaje</label>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg w-100 fw-bold"
                          disabled={loading}
                        >
                          {loading ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-send me-2"></i>
                              Enviar Mensaje
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-0">
                <div className="ratio ratio-21x9">
                  <iframe
                    title="Ubicación"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.577234726045!2d-58.44747368477044!3d-34.6170031804547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb7b1f1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sObelisco!5e0!3m2!1ses!2sar!4v1680000000000!5m2!1ses!2sar"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-item {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateX(10px);
        }
        
        .social-link {
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .form-floating > .form-control:focus,
        .form-floating > .form-select:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Contact;