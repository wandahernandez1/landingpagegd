import type { HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/utils'

const badgeVariants = cva(
  [
    'inline-flex items-center gap-1.5',
    'rounded-full font-medium',
    'transition-colors duration-200',
  ],
  {
    variants: {
      variant: {
        default: 'bg-neutral-800 text-neutral-300 border border-neutral-700',
        primary: 'bg-primary-950/50 text-primary-400 border border-primary-800/50',
        success: 'bg-green-950/50 text-green-400 border border-green-800/50',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, size, className }))} {...props} />
}
