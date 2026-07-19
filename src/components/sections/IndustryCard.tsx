import { Card } from '@/components/ui/Card'

type IndustryCardProps = {
  title: string
  summary: string
}

export function IndustryCard({ title, summary }: IndustryCardProps) {
  return (
    <Card>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300">{summary}</p>
    </Card>
  )
}