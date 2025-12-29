import { Logo } from '@/shared/components/Logo'
import { COMPANY, FOOTER_LINKS } from '@/shared/constants'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black" role="contentinfo">
      <div className="container-custom py-16 md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <Logo />

          <nav aria-label="Enlaces del pie de pagina">
            <ul className="flex items-center gap-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-500 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="divider-gradient mt-12" aria-hidden="true" />

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-600">
            {COMPANY.year} {COMPANY.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
