import { Button } from '@/shared/components/ui'
import { Isotipo } from '@/shared/components/Isotipo'
import { Clock, CreditCard, MessageCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black" aria-label="Hero">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.08), transparent 60%)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main Content */}
      <div className="container-custom relative flex min-h-screen items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column - Content */}
          <div className="flex flex-col items-start text-left">
            {/* Tagline */}
            <div className="mb-8 opacity-0 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse" />
                La simplicidad que funciona
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl font-bold leading-[1.05] tracking-tight text-white opacity-0 animate-fade-in-up delay-100 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Gestion 
<span className="text-gradient-primary">Digital</span>
            </h1>

            {/* Description */}
            <p className="mb-10 max-w-md text-base leading-relaxed text-neutral-400 opacity-0 animate-fade-in-up delay-200">
              Software comercial que transforma la complejidad en claridad. Facturación, inventario y CRM en una plataforma unificada.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up delay-300">
              <Button variant="primary" size="lg" className="btn-glow w-fit">
                Comenzar gratis
              </Button>
            </div>
          </div>

          {/* Right Column - Isotipo */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-end lg:pr-8 xl:pr-0">            
            {/* Isotipo with float animation */}
            <div className="relative z-10 opacity-0 animate-scale-in delay-400 translate-x-8 xl:translate-x-16">
              <Isotipo 
                className="h-[340px] w-[340px] xl:h-[400px] xl:w-[400px]" 
                animate 
              />
            </div>
          </div>
        </div>
        
        {/* Benefits - Bottom Centered */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-8 text-sm text-neutral-400 opacity-0 animate-fade-in-up delay-500">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Setup en 5 minutos
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" aria-hidden="true" />
              Sin tarjeta de crédito
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Soporte en español
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
