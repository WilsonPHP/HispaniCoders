import { Card } from '@/components/ui/Card'
import type { LucideIcon } from 'lucide-react'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <Icon className="h-6 w-6 text-accent" />
      <h3 className="mt-4 font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300">{description}</p>
    </Card>
  )
}