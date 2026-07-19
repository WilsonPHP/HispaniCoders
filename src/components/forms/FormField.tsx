import { cn } from '@/utils/cn'
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type BaseProps = {
  label: string
  id: string
  error?: string
  className?: string
}

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: 'input'
  }

type TextareaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: 'textarea'
  }

type FormFieldProps = InputFieldProps | TextareaFieldProps

const sharedClass =
  'mt-2 w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300'

export function FormField(props: FormFieldProps) {
  const { id, label, error, className } = props

  return (
    <div className={cn('w-full', className)}>
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      {props.as === 'textarea' ? (() => {
        const {
          as: _as,
          label: _label,
          error: _error,
          className: _className,
          id: _id,
          ...rest
        } = props
        return <textarea id={id} className={sharedClass} rows={5} {...rest} />
      })() : (() => {
        const {
          as: _as,
          label: _label,
          error: _error,
          className: _className,
          id: _id,
          ...rest
        } = props
        return <input id={id} className={sharedClass} {...rest} />
      })()}
      {error ? <p className="mt-1 text-xs text-rose-300">{error}</p> : null}
    </div>
  )
}