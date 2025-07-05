# 🚀 Landing Page Template - React + Bootstrap

Una landing page moderna, responsive y profesional construida con React y Bootstrap, perfecta para revender a clientes con mínima personalización.

## ✨ Características

- **🎨 Diseño Moderno**: Gradientes, animaciones y efectos visuales atractivos
- **📱 Totalmente Responsive**: Optimizado para todos los dispositivos
- **⚡ Performance**: Carga rápida y optimizada
- **🔧 Fácil Personalización**: Sistema de configuración centralizado
- **📊 SEO Optimizado**: Meta tags y estructura semántica
- **🎯 Conversión**: Diseñado para maximizar conversiones
- **📧 Formulario de Contacto**: Funcional y profesional
- **🗺️ Integración de Mapa**: Google Maps integrado
- **📱 Redes Sociales**: Enlaces a todas las plataformas principales

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework principal
- **Bootstrap 5** - Framework CSS
- **Bootstrap Icons** - Iconografía
- **CSS3** - Estilos personalizados y animaciones
- **JavaScript ES6+** - Funcionalidad moderna

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/template-landing.git
   cd template-landing
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abre tu navegador**
   ```
   http://localhost:3000
   ```

## 🎨 Personalización

### Configuración Rápida

Edita el archivo `src/config/siteConfig.js` para personalizar:

```javascript
export const siteConfig = {
  company: {
    name: 'TuEmpresa',           // ← Cambia el nombre
    tagline: 'Tu tagline aquí',  // ← Cambia el slogan
    description: 'Tu descripción',
    logo: '🚀',                  // ← Cambia el logo
  },
  contact: {
    phone: '+54 11 1234-5678',   // ← Tu teléfono
    email: 'info@tuempresa.com', // ← Tu email
    address: 'Tu dirección',     // ← Tu dirección
  },
  // ... más configuraciones
};
```

### Personalización Avanzada

#### 1. **Colores del Tema**
```javascript
colors: {
  primary: '#667eea',    // Color principal
  secondary: '#764ba2',  // Color secundario
  accent: '#ffc107',     // Color de acento
}
```

#### 2. **Servicios**
```javascript
services: [
  {
    title: 'Tu Servicio',
    icon: 'bi bi-tu-icono',
    description: 'Descripción del servicio',
    price: 'Desde $XXX',
    features: ['Característica 1', 'Característica 2']
  }
]
```

#### 3. **Testimonios**
```javascript
testimonials: [
  {
    name: 'Nombre del Cliente',
    position: 'Cargo, Empresa',
    image: 'URL de la imagen',
    text: 'Testimonio del cliente',
    rating: 5
  }
]
```

#### 4. **Redes Sociales**
```javascript
social: {
  facebook: 'https://facebook.com/tuempresa',
  instagram: 'https://instagram.com/tuempresa',
  // ... más redes
}
```

### Personalización de Imágenes

1. **Logo**: Reemplaza el emoji en `siteConfig.company.logo` con la ruta de tu imagen
2. **Imágenes de Servicios**: Cambia las URLs en `siteConfig.services[].image`
3. **Fotos de Testimonios**: Actualiza las URLs en `siteConfig.testimonials[].image`

### Personalización de Estilos

Edita `src/App.css` para personalizar:
- Colores del tema
- Tipografías
- Animaciones
- Efectos hover

## 📱 Secciones Incluidas

### 1. **Hero Section**
- Título impactante con gradiente
- Llamadas a la acción
- Elementos flotantes animados
- Indicador de scroll

### 2. **Sobre Nosotros**
- Estadísticas de la empresa
- Características principales
- Misión y visión
- Elementos interactivos

### 3. **Servicios**
- 6 servicios principales
- Imágenes de alta calidad
- Precios y características
- Efectos hover

### 4. **Testimonios**
- 6 testimonios de clientes
- Calificaciones con estrellas
- Fotos de perfil
- Estadísticas adicionales

### 5. **Contacto**
- Formulario completo
- Información de contacto
- Redes sociales
- Mapa integrado

### 6. **Footer**
- Enlaces organizados
- Newsletter
- Información legal
- Botón "Volver arriba"

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conecta tu repositorio a Netlify
2. Configura el build command: `npm run build`
3. Configura el publish directory: `build`
4. ¡Listo!

### Vercel
1. Conecta tu repositorio a Vercel
2. Configura automáticamente
3. ¡Listo!

### GitHub Pages
```bash
npm run build
# Sube la carpeta build a GitHub Pages
```

## 📊 Optimización SEO

El template incluye:
- Meta tags optimizados
- Estructura semántica HTML5
- Open Graph tags
- Schema markup básico
- URLs amigables
- Imágenes optimizadas

## 🔧 Funcionalidades

### Formulario de Contacto
- Validación en tiempo real
- Estados de carga
- Mensajes de confirmación
- Campos personalizables

### Navegación
- Scroll suave
- Navegación fija
- Indicadores activos
- Responsive

### Animaciones
- Scroll animations
- Hover effects
- Loading states
- Transiciones suaves

## 📈 Analytics y Tracking

Para agregar Google Analytics:

1. Obtén tu ID de tracking
2. Agrega el script en `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Consejos de Conversión

1. **Llamadas a la Acción**: Usa colores contrastantes
2. **Testimonios**: Incluye fotos reales de clientes
3. **Precios**: Sé transparente con los costos
4. **Contacto**: Múltiples formas de contacto
5. **Velocidad**: Optimiza las imágenes

## 📞 Soporte

Para soporte técnico o personalizaciones adicionales:
- Email: soporte@tuempresa.com
- WhatsApp: +54 11 1234-5678
- Documentación: [docs.tuempresa.com](https://docs.tuempresa.com)

## 📄 Licencia

Este template está bajo licencia MIT. Puedes usarlo para proyectos comerciales sin restricciones.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Changelog

### v1.0.0
- ✨ Lanzamiento inicial
- 🎨 Diseño moderno con gradientes
- 📱 Responsive design
- 🔧 Sistema de configuración
- 📊 SEO optimizado

---

**¡Gracias por usar nuestro template! 🚀**

Si te gustó, no olvides darle una ⭐ al repositorio. 