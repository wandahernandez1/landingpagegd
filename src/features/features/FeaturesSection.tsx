import { Package, Users, BarChart2, Zap, Shield, Clock } from 'lucide-react'

const FEATURES = [
  {
    id: 'inventory',
    title: 'Inventario inteligente',
    description: 'Control de stock en tiempo real con alertas automáticas y trazabilidad completa.',
    icon: Package,
  },
  {
    id: 'crm',
    title: 'CRM integrado',
    description: 'Gestiona clientes, historial de compras y segmentación en un solo lugar.',
    icon: Users,
  },
  {
    id: 'analytics',
    title: 'Analíticas avanzadas',
    description: 'Dashboards claros con métricas que importan para tomar mejores decisiones.',
    icon: BarChart2,
  },
  {
    id: 'speed',
    title: 'Velocidad extrema',
    description: 'Interfaz optimizada para operaciones rápidas. Cada segundo cuenta.',
    icon: Zap,
  },
  {
    id: 'security',
    title: 'Seguridad total',
    description: 'Datos encriptados, backups automáticos y cumplimiento normativo.',
    icon: Shield,
  },
  {
    id: 'support',
    title: 'Soporte 24/7',
    description: 'Equipo experto en español disponible cuando lo necesites.',
    icon: Clock,
  },
]

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-black py-32 md:py-40"
      aria-labelledby="features-title"
    >
      <div className="container-custom">
        {/* Section Header - Aligned Right */}
        <header className="mb-20 flex flex-col items-end text-right md:mb-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-500 md:text-base">
            Características
          </p>
          <h2
            id="features-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Todo lo que necesitas.
          </h2>
          <span className="mt-2 text-4xl font-bold tracking-tight text-neutral-500 sm:text-5xl md:text-6xl lg:text-7xl">
            Nada que no.
          </span>
        </header>

        {/* Features Grid - 2 columns layout */}
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2 lg:gap-x-24 lg:gap-y-20">
          {FEATURES.map((feature) => (
            <article
              key={feature.id}
              className="group relative"
            >
              {/* Icon */}
              <div className="mb-6">
                <feature.icon 
                  className="h-8 w-8 text-primary-500 transition-transform duration-300 group-hover:scale-110 lg:h-10 lg:w-10" 
                  strokeWidth={1.5}
                  aria-hidden="true" 
                />
              </div>
              
              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl lg:text-[1.75rem]">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-base leading-relaxed text-neutral-400 md:text-lg">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
