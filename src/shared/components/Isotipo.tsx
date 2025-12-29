interface IsotipoProps {
  className?: string
  animate?: boolean
}

export function Isotipo({ className = '', animate = false }: IsotipoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animate ? 'animate-float' : ''} ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Bar gradients */}
        <linearGradient id="blueBarFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id="purpleBarFront" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        
        {/* Node gradients */}
        <linearGradient id="orangeNode" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="tealNode" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5eead4" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="indigoNode" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* === BAR 1 - BLUE (Left, shorter) === */}
      {/* Front face */}
      <path
        d="M35 125 L35 65 L70 55 L70 115 Z"
        fill="url(#blueBarFront)"
      />
      {/* Top face */}
      <path
        d="M35 65 L55 58 L90 48 L70 55 Z"
        fill="#7dd3fc"
      />
      {/* Right face */}
      <path
        d="M70 55 L90 48 L90 108 L70 115 Z"
        fill="#0369a1"
      />

      {/* === BAR 2 - PURPLE (Right, taller) === */}
      {/* Front face */}
      <path
        d="M85 130 L85 45 L120 35 L120 120 Z"
        fill="url(#purpleBarFront)"
      />
      {/* Top face */}
      <path
        d="M85 45 L105 38 L140 28 L120 35 Z"
        fill="#e9d5ff"
      />
      {/* Right face */}
      <path
        d="M120 35 L140 28 L140 113 L120 120 Z"
        fill="#6d28d9"
      />

      {/* === CONNECTION LINES === */}
      <line
        x1="55"
        y1="165"
        x2="100"
        y2="148"
        stroke="#2dd4bf"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="100"
        y1="148"
        x2="145"
        y2="158"
        stroke="#2dd4bf"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* === NODE 1 - ORANGE (Left) === */}
      <circle cx="55" cy="165" r="12" fill="url(#orangeNode)" />

      {/* === NODE 2 - TEAL (Center) === */}
      <circle cx="100" cy="148" r="14" fill="url(#tealNode)" />

      {/* === NODE 3 - INDIGO (Right) === */}
      <circle cx="145" cy="158" r="12" fill="url(#indigoNode)" />
    </svg>
  )
}
