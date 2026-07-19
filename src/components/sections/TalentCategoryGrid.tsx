import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

type TalentCategory = {
  title: string
  description: string
}

type TalentCategoryGridProps = {
  items: TalentCategory[]
}

export function TalentCategoryGrid({ items }: TalentCategoryGridProps) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" aria-label="Talent categories">
      {items.map((item) => (
        <li key={item.title}>
          <Card className="h-full">
            <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.description}</p>
            <Link to="/talent" className="mt-4 inline-block text-sm font-semibold text-accent">
              View talent categories
            </Link>
          </Card>
        </li>
      ))}
    </ul>
  )
}