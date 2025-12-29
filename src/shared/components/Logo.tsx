import { COMPANY } from '@/shared/constants'

function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoBlueBar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="logoPurpleBar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="logoOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="logoTeal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="logoIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* Bar 1 - Blue */}
      <path d="M35 125 L35 65 L70 55 L70 115 Z" fill="url(#logoBlueBar)" />
      <path d="M35 65 L55 58 L90 48 L70 55 Z" fill="#7dd3fc" />
      <path d="M70 55 L90 48 L90 108 L70 115 Z" fill="#0369a1" />

      {/* Bar 2 - Purple */}
      <path d="M85 130 L85 45 L120 35 L120 120 Z" fill="url(#logoPurpleBar)" />
      <path d="M85 45 L105 38 L140 28 L120 35 Z" fill="#e9d5ff" />
      <path d="M120 35 L140 28 L140 113 L120 120 Z" fill="#6d28d9" />

      {/* Lines */}
      <line x1="55" y1="165" x2="100" y2="148" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />
      <line x1="100" y1="148" x2="145" y2="158" stroke="#2dd4bf" strokeWidth="4" strokeLinecap="round" />

      {/* Nodes */}
      <circle cx="55" cy="165" r="12" fill="url(#logoOrange)" />
      <circle cx="100" cy="148" r="14" fill="url(#logoTeal)" />
      <circle cx="145" cy="158" r="12" fill="url(#logoIndigo)" />
    </svg>
  )
}

export function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2.5 rounded-xl transition-all duration-300 hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label={`${COMPANY.name} - Ir al inicio`}
    >
      <LogoIcon className="h-8 w-8" />
      <span className="text-base font-semibold text-white tracking-tight">{COMPANY.name}</span>
    </a>
  )
}
