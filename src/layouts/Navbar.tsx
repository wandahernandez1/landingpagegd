import { Logo } from '@/shared/components/Logo'
import { Button } from '@/shared/components/ui'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-white/[0.08]">
        <nav
          className="flex h-14 items-center justify-between px-6 sm:px-8"
          aria-label="Navegacion principal"
        >
          <Logo />

          <Button variant="ghost" size="sm">
            Iniciar sesion
          </Button>
        </nav>
      </div>
    </header>
  )
}
