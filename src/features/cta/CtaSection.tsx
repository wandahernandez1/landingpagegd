import { Button } from '@/shared/components/ui'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export function CtaSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return

    // Split text into characters, preserving nested elements
    const split = new SplitType(headingRef.current, { 
      types: 'chars',
      tagName: 'span'
    })

    // Get all chars including those inside nested spans
    const chars = headingRef.current.querySelectorAll('.char')

    // Apply gradient color directly to chars inside .text-gradient-primary
    // This is necessary because background-clip: text doesn't work on parent
    // when children are split into separate inline-block elements
    const gradientSpan = headingRef.current.querySelector('.text-gradient-primary')
    if (gradientSpan) {
      const gradientChars = gradientSpan.querySelectorAll('.char')
      gradientChars.forEach((char) => {
        const element = char as HTMLElement
        element.style.background = 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)'
        element.style.backgroundClip = 'text'
        element.style.webkitBackgroundClip = 'text'
        element.style.webkitTextFillColor = 'transparent'
      })
    }

    // Set initial state
    gsap.set(chars, {
      y: 40,
      autoAlpha: 0
    })

    // Animate on scroll - toggleActions: onEnter, onLeave, onEnterBack, onLeaveBack
    // 'play reverse play reverse' makes animation play forward when entering viewport
    // and reverse when leaving, both scrolling up and down
    gsap.to(chars, {
      duration: 0.8,
      y: 0,
      autoAlpha: 1,
      stagger: 0.02,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 85%',
        end: 'top 20%',
        toggleActions: 'play reverse play reverse'
      }
    })

    return () => {
      split.revert()
    }
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-black py-32 md:py-40"
      aria-labelledby="cta-title"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400">
              Comienza hoy
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
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
