type PageHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-lg text-slate-300">{description}</p>
    </header>
  )
}