import { Button } from '@/shared/components/ui'
import { Isotipo } from '@/shared/components/Isotipo'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black" aria-label="Hero">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial gradient top */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.12), transparent 60%)'
          }}
          aria-hidden="true"
        />
        {/* Subtle noise texture */}
        <div className="bg-noise absolute inset-0" aria-hidden="true" />
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
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-neutral-400 opacity-0 animate-fade-in-up delay-200 md:text-xl">
              Software comercial que transforma la complejidad en claridad. 
              Facturacion, inventario y CRM en una plataforma unificada.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-4 opacity-0 animate-fade-in-up delay-300 sm:flex-row sm:items-center sm:gap-6">
              <Button variant="primary" size="lg" className="btn-glow">
                Comenzar gratis
              </Button>
              <span className="text-sm text-neutral-500">
                Sin tarjeta de credito
              </span>
            </div>
          </div>

          {/* Right Column - Isotipo */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-end lg:pr-8 xl:pr-0">
            {/* Glow effect */}
            <div 
              className="pointer-events-none absolute h-[500px] w-[500px] animate-pulse-glow translate-x-12"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              aria-hidden="true"
            />
            
            {/* Isotipo with float animation */}
            <div className="relative z-10 opacity-0 animate-scale-in delay-400 translate-x-8 xl:translate-x-16">
              <Isotipo 
                className="h-[340px] w-[340px] xl:h-[400px] xl:w-[400px] drop-shadow-2xl" 
                animate 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, #000, transparent)'
        }}
        aria-hidden="true"
      />
    </section>
  )
}
