import { Button } from '@/shared/components/ui'
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
      <div className="relative flex min-h-screen items-center px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-none py-20 lg:py-24">
          
          {/* Content - Aligned Left */}
          <div className="flex flex-col items-start text-left">
            {/* Tagline */}
            <div className="mb-6 opacity-0 animate-fade-in-up md:mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-sm font-medium tracking-wide text-neutral-400 sm:px-5 sm:py-2 md:text-base lg:px-6 lg:py-2.5 lg:text-lg 2xl:text-xl">
                La simplicidad que funciona
              </span>
            </div>

            {/* Main Heading - Single Line */}
            <h1 className="mb-4 text-5xl font-bold leading-[1.02] tracking-tight opacity-0 animate-fade-in-up delay-100 sm:text-6xl md:mb-6 md:text-7xl lg:text-8xl xl:text-[6.5rem] 2xl:text-[7rem]">
              <span className="text-white">Gestión</span> <span className="text-gradient-primary">Digital</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-neutral-400 opacity-0 animate-fade-in-up delay-200 sm:text-base md:mb-10 md:text-lg lg:max-w-xl">
              Software comercial que transforma la complejidad en claridad.<br className="hidden sm:block" />
              Facturación, inventario y CRM en una plataforma unificada.
            </p>

            {/* CTA */}
            <div className="opacity-0 animate-fade-in-up delay-300">
              <Button variant="primary" size="md" className="px-6 text-sm font-medium sm:px-7 md:text-base">
                Comenzar gratis
              </Button>
            </div>
          </div>
        </div>
        
        {/* Benefits - Bottom Left */}
        <div className="absolute bottom-8 left-5 sm:left-8 lg:left-12 xl:left-16 md:bottom-12">
          <div className="flex flex-col items-start gap-4 text-sm text-neutral-400 opacity-0 animate-fade-in-up delay-500 sm:flex-row sm:gap-8 md:text-base">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
              Setup en 5 minutos
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
              Sin tarjeta de crédito
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
              Soporte en español
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
