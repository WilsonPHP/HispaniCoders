import { cn } from '@/utils/cn'
import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

type ButtonAsButton = PropsWithChildren<
  BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
      to?: never
    }
>

type ButtonAsLink = PropsWithChildren<
  BaseProps & {
    to: string
  }
>

const baseClass =
  'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slateDeep'

const variantClass = {
  primary: 'bg-accent text-slate-950 hover:brightness-105',
  secondary:
    'border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30',
  ghost: 'text-slate-200 hover:text-white',
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? 'primary'

  if ('to' in props && props.to) {
    const { to, className, children } = props
    return (
      <Link className={cn(baseClass, variantClass[variant], className)} to={to}>
        {children}
      </Link>
    )
  }

  const { className, children, type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button className={cn(baseClass, variantClass[variant], className)} type={type} {...rest}>
      {children}
    </button>
  )
}