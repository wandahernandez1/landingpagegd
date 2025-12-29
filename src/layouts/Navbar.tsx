import { Logo } from '@/shared/components/Logo'
import { Button } from '@/shared/components/ui'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4 rounded-2xl glass border border-white/[0.08]">
        <nav
          className="flex h-14 items-center justify-between px-4 sm:px-6"
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
