import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
// import Footer from './components/Footer';

const handleNavClick = (e, sectionId) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80; // fallback to 80px if navbar not found
    const elementPosition = section.offsetTop;
    const offsetPosition = elementPosition - navbarHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#home" onClick={e => handleNavClick(e, 'home')}>
            <i className="bi bi-rocket-takeoff me-2"></i>TuEmpresa
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home" onClick={e => handleNavClick(e, 'home')}>
                  <i className="bi bi-house me-1"></i>Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={e => handleNavClick(e, 'about')}>
                  <i className="bi bi-info-circle me-1"></i>Sobre Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services" onClick={e => handleNavClick(e, 'services')}>
                  <i className="bi bi-gear me-1"></i>Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials" onClick={e => handleNavClick(e, 'testimonials')}>
                  <i className="bi bi-star me-1"></i>Testimonios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={e => handleNavClick(e, 'contact')}>
                  <i className="bi bi-chat-dots me-1"></i>Contacto
                </a>
              </li>
              <li className="nav-item ms-lg-2" style={{ alignContent: 'center' }}>
                <a className="btn btn-primary btn-sm" href="#contact" onClick={e => handleNavClick(e, 'contact')}>
                  <i className="bi bi-telephone me-1"></i>Llamar Ahora
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>

      {/* Footer */}
      {/* <Footer /> */}
      <footer className="bg-dark text-white py-1">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">Hecho por <a style={{ textDecoration: 'none', color: 'white' }} href='https://www.linkedin.com/in/ariel-paz/' target='_blank' rel='noopener noreferrer'>@Ari</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
