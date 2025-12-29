import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-neutral-900/50 border border-neutral-800',
        'p-6 md:p-8',
        'transition-all duration-300',
        'hover:border-neutral-700 hover:bg-neutral-900/80',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  as?: 'h2' | 'h3' | 'h4'
}

export function CardTitle({ className, children, as: Component = 'h3', ...props }: CardTitleProps) {
  return (
    <Component
      className={cn('text-xl font-semibold text-neutral-100', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p className={cn('text-neutral-400 leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('mt-4', className)} {...props}>
      {children}
    </div>
  )
}
