# LandingPageGD - High Conversion Landing Page

Landing page moderna y optimizada, diseñada para maximizar la conversión y ofrecer una experiencia de usuario fluida. Construida con una arquitectura escalable y las mejores prácticas de desarrollo frontend.

## 🛠 Stack Tecnológico

- **Core:** React 18, TypeScript, Vite
- **Estilos:** Tailwind CSS
- **UI Components:** Shadcn/ui (Radix UI)
- **Animaciones & Efectos:** CSS Modules, Parallax custom hooks
- **Scroll:** Lenis (Smooth Scroll)
- **Calidad de Código:** ESLint, Prettier

## 📂 Arquitectura del Proyecto

El proyecto sigue una arquitectura basada en **Features** para garantizar escalabilidad y mantenibilidad:

```
src/
├── features/           # Módulos de negocio independientes
│   ├── cta/            # Sección de Call to Action
│   ├── features/       # Sección de características
│   ├── hero/           # Sección principal (Hero)
│   └── testimonials/   # Sección de prueba social
├── shared/             # Código reutilizable
│   ├── components/     # Componentes UI base (Botones, Cards, Logos)
│   ├── hooks/          # Hooks personalizados (useLenis, useParallaxFrames)
│   └── utils/          # Utilidades y helpers (cn, etc.)
├── layouts/            # Estructura global (Navbar, Footer)
└── assets/             # Recursos estáticos
```

## ✨ Características Clave

- **Performance First:** Optimización de Core Web Vitals y carga rápida.
- **SEO Friendly:** Estructura semántica HTML5 y jerarquía de encabezados correcta.
- **Accesibilidad (a11y):** Componentes diseñados para ser accesibles y navegables.
- **Diseño Responsivo:** Adaptabilidad total a móviles, tablets y escritorio.
- **Smooth Experience:** Scroll suave con Lenis y efectos de parallax optimizados.

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/wandahernandez1/landingpagegd.git
   cd landingpagegd
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🤝 Contribución

Este proyecto sigue principios de **Clean Code** y **SOLID**. Cada PR debe mantener la calidad del código, asegurar la accesibilidad y no degradar la performance.

---

© 2025 LandingPageGD. Todos los derechos reservados.
