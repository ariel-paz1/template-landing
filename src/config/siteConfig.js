// Configuración del sitio - Personaliza estos valores para tu cliente
export const siteConfig = {
  // Información de la empresa
  company: {
    name: 'TuEmpresa',
    tagline: 'Transformamos Ideas en Realidad Digital',
    description: 'Somos expertos en transformación digital, ayudando a empresas a crecer y destacar en el mundo digital con soluciones innovadoras y profesionales.',
    logo: '🚀', // Puedes cambiar por una imagen: '/logo.png'
    founded: '2019'
  },

  // Información de contacto
  contact: {
    phone: '+54 11 1234-5678',
    email: 'info@tuempresa.com',
    address: 'Buenos Aires, Argentina',
    hours: 'Lun - Vie: 9:00 - 18:00',
    whatsapp: '+5491123456789'
  },

  // Redes sociales
  social: {
    facebook: 'https://facebook.com/tuempresa',
    instagram: 'https://instagram.com/tuempresa',
    twitter: 'https://twitter.com/tuempresa',
    linkedin: 'https://linkedin.com/company/tuempresa',
    youtube: 'https://youtube.com/tuempresa'
  },

  // Servicios principales
  services: [
    {
      title: 'Desarrollo Web',
      icon: 'bi bi-laptop',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      description: 'Sitios web modernos, rápidos y completamente responsivos que convierten visitantes en clientes.',
      features: ['Diseño Responsivo', 'SEO Optimizado', 'Velocidad Garantizada'],
      price: 'Desde $999',
      popular: true
    },
    {
      title: 'Aplicaciones Móviles',
      icon: 'bi bi-phone',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
      description: 'Apps nativas e híbridas para iOS y Android que destacan en las tiendas de aplicaciones.',
      features: ['iOS & Android', 'UI/UX Premium', 'Mantenimiento'],
      price: 'Desde $1,999'
    },
    {
      title: 'Marketing Digital',
      icon: 'bi bi-bar-chart-line',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
      description: 'Estrategias integrales de marketing digital para aumentar tu presencia online y ventas.',
      features: ['SEO & SEM', 'Redes Sociales', 'Analytics'],
      price: 'Desde $499/mes'
    },
    {
      title: 'Diseño Gráfico',
      icon: 'bi bi-brush',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      description: 'Diseños creativos y profesionales que fortalecen tu identidad de marca.',
      features: ['Branding', 'Material Promocional', 'Ilustraciones'],
      price: 'Desde $299'
    },
    {
      title: 'Consultoría IT',
      icon: 'bi bi-gear',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80',
      description: 'Asesoramiento experto para optimizar tus procesos tecnológicos y aumentar la eficiencia.',
      features: ['Auditoría IT', 'Optimización', 'Capacitación'],
      price: 'Desde $199/hora'
    },
    {
      title: 'E-commerce',
      icon: 'bi bi-cart',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
      description: 'Tiendas online completas con pasarelas de pago seguras y gestión de inventario.',
      features: ['Pasarelas de Pago', 'Gestión de Stock', 'Analytics'],
      price: 'Desde $1,499'
    }
  ],

  // Estadísticas
  stats: {
    projects: '500+',
    satisfaction: '98%',
    experience: '5+',
    support: '24/7'
  },

  // Testimonios
  testimonials: [
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
  ],

  // Colores del tema (puedes personalizar)
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#ffc107',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40'
  },

  // Configuración del mapa
  map: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.577234726045!2d-58.44747368477044!3d-34.6170031804547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb7b1f1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sObelisco!5e0!3m2!1ses!2sar!4v1680000000000!5m2!1ses!2sar'
  },

  // SEO
  seo: {
    title: 'TuEmpresa - Soluciones Digitales Profesionales',
    description: 'Somos expertos en transformación digital, ayudando a empresas a crecer y destacar en el mundo digital con soluciones innovadoras y profesionales.',
    keywords: 'desarrollo web, aplicaciones móviles, marketing digital, diseño gráfico, consultoría IT, e-commerce',
    author: 'TuEmpresa',
    ogImage: '/og-image.jpg'
  }
};

// Función para obtener la configuración
export const getConfig = () => siteConfig;

// Función para actualizar la configuración
export const updateConfig = (newConfig) => {
  Object.assign(siteConfig, newConfig);
};

export default siteConfig; 