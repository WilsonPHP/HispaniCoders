import { Card } from '@/components/ui/Card'

type TimelineItem = {
  step: string
  title: string
  description: string
}

type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="grid gap-4">
      {items.map((item) => (
        <Card key={item.step} className="grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:items-start">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/20 font-semibold text-accent">
            {item.step}
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.description}</p>
          </div>
        </Card>
      ))}
    </ol>
  )
}