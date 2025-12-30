import { Check } from 'lucide-react'
import { Button } from '@/shared/components/ui'

interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  period: string
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Para individuos y equipos pequeños que están comenzando.',
    price: '$49',
    period: '/mes',
    features: [
      '1 variante de producto',
      'Analíticas básicas',
      '1,000,000 datos/mes',
      'Soporte comunitario',
    ],
    cta: 'Elegir Starter',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para negocios en crecimiento que necesitan más poder.',
    price: '$99',
    period: '/mes',
    features: [
      '5 variantes de producto',
      'Reportes con IA',
      '10,000,000 datos/mes',
      'Soporte prioritario por email',
      'Acceso a API',
    ],
    cta: 'Elegir Pro',
    highlighted: true,
    badge: 'MÁS POPULAR',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para grandes organizaciones con necesidades personalizadas.',
    price: 'Contáctanos',
    period: '',
    features: [
      'Variantes ilimitadas',
      'Colaboración avanzada',
      'Datos personalizados',
      'Gerente de cuenta dedicado',
      'Opción on-premise',
    ],
    cta: 'Contactar ventas',
  },
]

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative bg-black py-32 md:py-40"
      aria-labelledby="pricing-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <h2
            id="pricing-title"
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Precios simples y transparentes
          </h2>
          <p className="text-lg text-neutral-400 md:text-xl">
            Elige el plan perfecto para ti. Sin costos ocultos, nunca.
          </p>
        </header>

        {/* Pricing Grid */}
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 lg:gap-10">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`
                relative flex flex-col rounded-2xl border p-10 md:p-12 transition-all duration-300
                ${
                  plan.highlighted
                    ? 'border-primary-500/50 bg-neutral-900/50'
                    : 'border-neutral-800 bg-neutral-900/30 hover:border-neutral-700'
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block rounded-full bg-primary-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-10 text-center">
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mb-8 text-base text-neutral-500">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-2 text-xl text-neutral-500">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="mb-10 flex-1 space-y-5" role="list">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-base text-neutral-300"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-500"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                size="lg"
                className={`w-full ${plan.highlighted ? 'bg-primary-500 hover:bg-primary-600 text-white' : ''}`}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
