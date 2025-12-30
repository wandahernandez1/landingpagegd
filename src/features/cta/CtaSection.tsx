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

    // Set initial state - characters start below
    gsap.set(chars, {
      y: 60,
      autoAlpha: 0,
      rotateX: -15
    })

    // Create timeline for entrance animation
    const enterTl = gsap.timeline({ paused: true })
    enterTl.to(chars, {
      duration: 0.6,
      y: 0,
      autoAlpha: 1,
      rotateX: 0,
      stagger: 0.025,
      ease: 'power3.out'
    })

    // Create timeline for exit animation (scroll down - characters fall)
    const exitDownTl = gsap.timeline({ paused: true })
    exitDownTl.to(chars, {
      duration: 0.5,
      y: 80,
      autoAlpha: 0,
      rotateX: 15,
      stagger: {
        each: 0.015,
        from: 'start'
      },
      ease: 'power2.in'
    })

    // Create timeline for exit animation (scroll up - characters rise up and fade)
    const exitUpTl = gsap.timeline({ paused: true })
    exitUpTl.to(chars, {
      duration: 0.5,
      y: -60,
      autoAlpha: 0,
      rotateX: -10,
      stagger: {
        each: 0.015,
        from: 'end'
      },
      ease: 'power2.in'
    })

    // ScrollTrigger with callbacks for direction-aware animations
    ScrollTrigger.create({
      trigger: headingRef.current,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => {
        // Reset from any exit state and play entrance
        gsap.set(chars, { y: 60, autoAlpha: 0, rotateX: -15 })
        enterTl.restart()
      },
      onLeave: () => {
        // Scrolling down past element - characters fall down
        exitDownTl.restart()
      },
      onEnterBack: () => {
        // Scrolling up back into element - characters come from above
        gsap.set(chars, { y: -60, autoAlpha: 0, rotateX: -10 })
        gsap.to(chars, {
          duration: 0.6,
          y: 0,
          autoAlpha: 1,
          rotateX: 0,
          stagger: {
            each: 0.025,
            from: 'end'
          },
          ease: 'power3.out'
        })
      },
      onLeaveBack: () => {
        // Scrolling up past element - characters rise up
        exitUpTl.restart()
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      enterTl.kill()
      exitDownTl.kill()
      exitUpTl.kill()
      split.revert()
    }
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-black py-32 md:py-40 lg:py-48"
      aria-labelledby="cta-title"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-400 md:text-sm">
              Comienza hoy
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            id="cta-title"
            className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Simplifica tu gestion.
            <br />
            <span className="text-gradient-primary">Hoy mismo.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-12 max-w-xl text-base text-neutral-400 md:text-lg lg:max-w-2xl lg:text-xl">
            Unete a miles de empresas que ya transformaron su operacion 
            con Gestion Digital.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-6">
            <Button variant="primary" size="lg" className="btn-glow group gap-3 px-8 text-base md:text-lg">
              Comenzar gratis
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            
            <p className="text-sm text-neutral-600 md:text-base">
              30 dias gratis • Sin tarjeta • Cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
