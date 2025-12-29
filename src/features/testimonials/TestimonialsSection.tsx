const TESTIMONIALS = [
  {
    id: 'maria',
    quote: 'Gestion Digital transformo completamente nuestras operaciones. La interfaz es tan intuitiva que el equipo la adopto en dias.',
    author: 'Maria Rodriguez',
    role: 'CEO',
    company: 'TechCorp Solutions',
    avatar: 'M',
  },
  {
    id: 'juan',
    quote: 'El control de inventario es excepcional. Por fin tenemos visibilidad real de todo nuestro stock en tiempo real.',
    author: 'Juan Gomez',
    role: 'Director de Operaciones',
    company: 'Alfa Retail',
    avatar: 'J',
  },
  {
    id: 'lucia',
    quote: 'El soporte en espanol marca la diferencia. Entienden nuestro mercado y responden al instante.',
    author: 'Lucia Perez',
    role: 'COO',
    company: 'FastLogistics',
    avatar: 'L',
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative bg-black py-32 md:py-40"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-500">
            Testimonios
          </p>
          <h2
            id="testimonials-title"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Empresas que confian
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="card-premium flex flex-col p-8"
            >
              {/* Quote */}
              <blockquote className="mb-8 flex-1 text-lg leading-relaxed text-neutral-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-4 border-t border-neutral-800/50 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-sm font-semibold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <cite className="not-italic">
                    <p className="font-medium text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </cite>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
