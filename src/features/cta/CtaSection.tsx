import { Button } from '@/shared/components/ui'
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-black py-32 md:py-40"
      aria-labelledby="cta-title"
    >
      {/* Background gradient */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59, 130, 246, 0.12), transparent 60%)'
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400">
              Comienza hoy
            </span>
          </div>

          {/* Heading */}
          <h2
            id="cta-title"
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Simplifica tu gestion.
            <br />
            <span className="text-gradient-primary">Hoy mismo.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-xl text-lg text-neutral-400">
            Unete a miles de empresas que ya transformaron su operacion 
            con Gestion Digital.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <Button variant="primary" size="lg" className="btn-glow group gap-3">
              Comenzar gratis
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            
            <p className="text-sm text-neutral-600">
              30 dias gratis • Sin tarjeta • Cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
