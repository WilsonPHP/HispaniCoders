import { Card } from '@/components/ui/Card'

type RoleCardProps = {
  role: string
  description: string
}

export function RoleCard({ role, description }: RoleCardProps) {
  return (
    <Card>
      <h3 className="font-display text-xl font-semibold text-white">{role}</h3>
      <p className="mt-2 text-slate-300">{description}</p>
    </Card>
  )
}