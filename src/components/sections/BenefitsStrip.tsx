import { Card } from '@/components/ui/Card'

type BenefitsStripProps = {
  items: string[]
}

export function BenefitsStrip({ items }: BenefitsStripProps) {
  return (
    <Card className="p-4">
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5" aria-label="Key benefits">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-white/12 bg-white/[0.03] px-3 py-2 text-sm text-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}