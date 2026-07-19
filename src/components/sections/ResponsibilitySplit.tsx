import { Card } from '@/components/ui/Card'

type ResponsibilitySplitProps = {
  leftTitle: string
  leftItems: string[]
  rightTitle: string
  rightItems: string[]
}

export function ResponsibilitySplit({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
}: ResponsibilitySplitProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <h3 className="font-display text-2xl font-semibold text-white">{leftTitle}</h3>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-300">
          {leftItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>

      <Card>
        <h3 className="font-display text-2xl font-semibold text-white">{rightTitle}</h3>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-300">
          {rightItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Card>
    </div>
  )
}