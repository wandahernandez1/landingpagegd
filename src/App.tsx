import { useLenis } from '@/shared/hooks'
import { Navbar, Footer } from '@/layouts'
import { HeroSection } from '@/features/hero'
import { FeaturesSection } from '@/features/features'
import { TestimonialsSection } from '@/features/testimonials'
import { PricingSection } from '@/features/pricing'
import { CtaSection } from '@/features/cta'

function App() {
  useLenis()

  return (
    <div className="min-h-screen bg-black">
      {/* Skip link para accesibilidad - navegacion por teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-none"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
