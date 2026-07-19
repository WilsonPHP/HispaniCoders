import { Card } from '@/components/ui/Card'

type ChecklistProps = {
  items: string[]
}

export function Checklist({ items }: ChecklistProps) {
  return (
    <Card>
      <ul className="grid gap-3 text-slate-300" aria-label="Section benefits list">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-white/12 bg-white/[0.03] px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  )
}