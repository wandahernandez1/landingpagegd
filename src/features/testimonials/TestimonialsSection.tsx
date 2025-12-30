import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 'maria',
    quote: 'Implementamos la plataforma en una semana y vimos resultados inmediatos. La simplicidad es su mayor fortaleza.',
    author: 'María Rodríguez',
    role: 'CEO, TechCorp Solutions',
    avatar: '/avatars/maria.jpg',
    initials: 'MR',
  },
  {
    id: 'juan',
    quote: 'El control de inventario es excepcional. Por fin tenemos visibilidad real de todo nuestro stock en tiempo real.',
    author: 'Juan Gómez',
    role: 'Director de Operaciones, Alfa Retail',
    avatar: '/avatars/juan.jpg',
    initials: 'JG',
  },
  {
    id: 'lucia',
    quote: 'El soporte en español marca la diferencia. Entienden nuestro mercado y responden al instante.',
    author: 'Lucía Pérez',
    role: 'COO, FastLogistics',
    avatar: '/avatars/lucia.jpg',
    initials: 'LP',
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = TESTIMONIALS[currentIndex]

  return (
    <section
      id="testimonials"
      className="relative bg-neutral-950 py-32 md:py-40"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <header className="mx-auto mb-6 max-w-3xl text-center">
          <h2
            id="testimonials-title"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Lo que dicen sobre nuestro Software Comercial
          </h2>
        </header>

        <p className="mx-auto mb-16 max-w-2xl text-center text-base text-neutral-400 md:mb-20 md:text-lg">
          Empresas de todos los tamaños confían en nuestra gestión digital para optimizar su día a día.
        </p>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-400 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white md:-left-14 lg:-left-16"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-400 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white md:-right-14 lg:-right-16"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Testimonial Card */}
          <article className="mx-auto max-w-4xl rounded-2xl border border-neutral-800/50 bg-neutral-900/50 px-8 py-8 backdrop-blur-sm md:px-16 md:py-10 lg:px-20 lg:py-12">
            {/* Quote Icon */}
            <div className="mb-6 flex justify-center">
              <svg 
                className="h-6 w-6 text-neutral-700" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <blockquote className="mb-6 text-center text-lg font-normal leading-relaxed text-neutral-300 md:text-xl lg:text-[1.375rem] lg:leading-relaxed">
              {currentTestimonial.quote}
            </blockquote>

            {/* Divider */}
            <div className="mx-auto mb-6 h-px w-12 bg-neutral-800" aria-hidden="true" />

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-800">
                <span className="text-xs font-medium text-neutral-300">
                  {currentTestimonial.initials}
                </span>
              </div>
              <cite className="not-italic text-left">
                <p className="text-sm font-medium text-white">
                  {currentTestimonial.author}
                </p>
                <p className="text-xs text-neutral-500">
                  {currentTestimonial.role}
                </p>
              </cite>
            </div>
          </article>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2" role="tablist">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary-500'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
