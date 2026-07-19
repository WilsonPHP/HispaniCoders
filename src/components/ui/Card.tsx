import { cn } from '@/utils/cn'
import type { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
  className?: string
}>

export function Card({ className, children }: CardProps) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-white/12 bg-white/[0.03] p-6 shadow-soft backdrop-blur-sm',
        className,
      )}
    >
      {children}
    </article>
  )
}