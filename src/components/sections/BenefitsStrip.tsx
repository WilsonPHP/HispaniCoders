import { Card } from '@/components/ui/Card'

type BenefitItem = {
  title: string
  description: string
}

type BenefitsStripProps = {
  items: BenefitItem[]
}

export function BenefitsStrip({ items }: BenefitsStripProps) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Why teams choose us
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="Key benefits">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3"
          >
            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  )
}