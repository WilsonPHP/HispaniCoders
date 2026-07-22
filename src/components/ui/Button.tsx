import { cn } from '@/utils/cn'
import { trackEvent } from '@/lib/analytics'
import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, MouseEventHandler, PropsWithChildren } from 'react'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  trackingEvent?: string
  trackingPayload?: Record<string, string | number | boolean | undefined>
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
    onClick?: MouseEventHandler<HTMLAnchorElement>
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
    const { to, className, children, onClick, trackingEvent, trackingPayload } = props

    const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
      if (trackingEvent) {
        trackEvent(trackingEvent, trackingPayload)
      }

      onClick?.(event)
    }

    return (
      <Link className={cn(baseClass, variantClass[variant], className)} to={to} onClick={handleLinkClick}>
        {children}
      </Link>
    )
  }

  const { className, children, type = 'button', trackingEvent, trackingPayload, onClick, ...rest } = props as ButtonAsButton

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (trackingEvent) {
      trackEvent(trackingEvent, trackingPayload)
    }

    onClick?.(event)
  }

  return (
    <button className={cn(baseClass, variantClass[variant], className)} type={type} onClick={handleButtonClick} {...rest}>
      {children}
    </button>
  )
}