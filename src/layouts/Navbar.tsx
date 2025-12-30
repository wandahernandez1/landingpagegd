import { Logo } from '@/shared/components/Logo'
import { Button } from '@/shared/components/ui'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/[0.08]">
        <nav
          className="flex h-14 items-center justify-between px-5 sm:px-6 md:h-16 lg:h-[4.5rem] lg:px-8 xl:px-12 2xl:h-20"
          aria-label="Navegacion principal"
        >
          <Logo />

          <Button variant="ghost" size="sm" className="text-sm md:text-base lg:text-lg">
            Iniciar sesion
          </Button>
        </nav>
      </div>
    </header>
  )
}
