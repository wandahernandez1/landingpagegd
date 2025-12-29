import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-xl font-medium',
    'transition-all duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer',
    'select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-white text-black',
          'hover:bg-neutral-200',
          'active:scale-[0.98]',
        ],
        secondary: [
          'bg-transparent text-white',
          'border border-neutral-700',
          'hover:bg-white/5 hover:border-neutral-600',
          'active:scale-[0.98]',
        ],
        ghost: [
          'bg-transparent text-neutral-400',
          'hover:bg-white/5 hover:text-white',
          'active:scale-[0.98]',
        ],
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-14 px-8 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, disabled, type = 'button', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
