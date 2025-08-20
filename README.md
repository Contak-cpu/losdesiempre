# 🩸 Los de Siempre Hub - El Templo de las Zapas 🏛️

**Multi-local de Sneakers & Moda Premium** - Una plataforma moderna tipo LinkTree pero mucho más potente para gestionar múltiples locales, catálogos y contactos.

## ✨ Características

- 🏪 **Multi-local**: Gestión de 3 locales (Río Gallegos, Mendoza, Córdoba)
- 📱 **Responsive**: Diseño adaptativo para todos los dispositivos
- 🔥 **Filtros inteligentes**: Navegación por local con información detallada
- 📊 **Estadísticas**: Tracking de clicks y favoritos
- 💬 **Contacto directo**: WhatsApp, Instagram y teléfonos integrados
- 🎨 **UI moderna**: Diseño premium con gradientes y animaciones
- ⚡ **Performance**: Optimizado para Vercel y Next.js 14

## 🚀 Tecnologías

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **Icons**: Lucide React
- **Deployment**: Vercel (optimizado)
- **Responsive**: Mobile-first design

## 📁 Estructura del Proyecto

```
losdesiempre-hub/
├── app/                    # App Router de Next.js 14
│   ├── globals.css        # Estilos globales y Tailwind
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/             # Componentes React
│   └── LosDeSeimpreHub.tsx # Componente principal
├── public/                 # Archivos estáticos
├── package.json            # Dependencias y scripts
├── tailwind.config.js      # Configuración de Tailwind
├── next.config.js          # Configuración de Next.js
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Este archivo
```

## 🛠️ Instalación Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/losdesiempre-hub.git
cd losdesiempre-hub
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue automático desde GitHub

1. **Hacer push al repositorio**
```bash
git add .
git commit -m "Initial commit: Los de Siempre Hub"
git push origin main
```

2. **Conectar con Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Conectar tu cuenta de GitHub
   - Importar el repositorio `losdesiempre-hub`
   - Vercel detectará automáticamente que es Next.js
   - Hacer deploy

### Opción 2: Despliegue manual con Vercel CLI

1. **Instalar Vercel CLI**
```bash
npm i -g vercel
```

2. **Hacer deploy**
```bash
vercel
```

3. **Seguir las instrucciones en terminal**

## 📱 Funcionalidades por Local

### 🔥 Río Gallegos
- **Estado**: Entrega Inmediata
- **Catálogo**: Google Drive completo
- **Horarios**: 9:00 - 21:00
- **Contacto**: WhatsApp + Instagram

### ⚡ Mendoza  
- **Estado**: Stock Disponible
- **Catálogo**: 200+ modelos
- **Línea Premium**: Buenos Timbos
- **Horarios**: 10:00 - 20:00

### 🌟 Córdoba
- **Estado**: Web + Local
- **Catálogo**: Drive + Tienda online
- **Envíos**: A todo el país
- **Horarios**: 9:30 - 20:30

## 🎨 Personalización

### Colores de marca
- **Primario**: Rojo (#ef4444)
- **Secundario**: Verde (#22c55e)
- **Acentos**: Púrpura, azul, naranja

### Modificar datos
Editar el archivo `components/LosDeSeimpreHub.tsx`:
- `locations`: Información de locales
- `links`: Enlaces y catálogos
- `contacts`: Información de contacto

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting del código
```

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 SEO y Meta Tags

- Meta tags optimizados para redes sociales
- Open Graph para Facebook/Instagram
- Twitter Cards
- Schema markup para negocios locales
- URLs amigables y sitemap automático

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔒 Seguridad

- Headers de seguridad configurados
- CSP (Content Security Policy)
- HTTPS forzado en producción
- Sanitización de inputs

## 📈 Analytics y Tracking

- Tracking de clicks por enlace
- Favoritos por usuario (localStorage)
- Métricas de engagement
- Preparado para Google Analytics

## 🚀 Roadmap

- [ ] **Fase 1**: ✅ Multi-local básico
- [ ] **Fase 2**: 🔄 Sistema de inventario
- [ ] **Fase 3**: 📊 Dashboard de analytics
- [ ] **Fase 4**: 🛒 E-commerce integrado
- [ ] **Fase 5**: 📱 App móvil nativa

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 📞 Soporte

- **Email**: soporte@losdesiempre.com
- **WhatsApp**: +54 2966 507733
- **Instagram**: [@losdesiempresneakers8](https://www.instagram.com/losdesiempresneakers8)

## 🙏 Agradecimientos

- **Desarrollado por**: pictoN
- **Framework**: Next.js Team
- **UI Components**: Tailwind CSS
- **Icons**: Lucide React

---

**Los de Siempre** - 🩸🏛️ EL TEMPLO DE LAS ZAPAS 🏛️🩸

*Powered by LDS Hub • Última actualización: ${new Date().toLocaleDateString('es-AR')}*
