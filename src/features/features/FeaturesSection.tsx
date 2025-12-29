import { Package, Users, BarChart2, Zap, Shield, Clock } from 'lucide-react'

const FEATURES = [
  {
    id: 'inventory',
    title: 'Inventario inteligente',
    description: 'Control de stock en tiempo real con alertas automaticas y trazabilidad completa.',
    icon: Package,
  },
  {
    id: 'crm',
    title: 'CRM integrado',
    description: 'Gestiona clientes, historial de compras y segmentacion en un solo lugar.',
    icon: Users,
  },
  {
    id: 'analytics',
    title: 'Analiticas avanzadas',
    description: 'Dashboards claros con metricas que importan para tomar mejores decisiones.',
    icon: BarChart2,
  },
  {
    id: 'speed',
    title: 'Velocidad extrema',
    description: 'Interfaz optimizada para operaciones rapidas. Cada segundo cuenta.',
    icon: Zap,
  },
  {
    id: 'security',
    title: 'Seguridad total',
    description: 'Datos encriptados, backups automaticos y cumplimiento normativo.',
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
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-500">
            Caracteristicas
          </p>
          <h2
            id="features-title"
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Todo lo que necesitas.
            <br />
            <span className="text-neutral-500">Nada que no.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.id}
              className="card-premium group p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 text-primary-400 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
