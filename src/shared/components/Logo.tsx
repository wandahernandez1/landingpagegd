import { COMPANY } from '@/shared/constants'

export function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2.5 rounded-xl transition-all duration-300 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label={`${COMPANY.name} - Ir al inicio`}
    >
      <img 
        src="/isotipo.png" 
        alt="" 
        className="h-8 w-8 object-contain" 
        aria-hidden="true"
      />
      <span className="text-base font-semibold text-white tracking-tight">{COMPANY.name}</span>
    </a>
  )
}
