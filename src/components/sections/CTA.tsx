import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

type CTAProps = {
  title: string
  description: string
}

export function CTA({ title, description }: CTAProps) {
  return (
    <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
      <h2 className="font-display text-3xl font-semibold text-white">{title}</h2>
      <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button to="/contact">Request Talent</Button>
        <Button to="/contact" variant="secondary">
          Schedule a Call
        </Button>
      </div>
    </Card>
  )
}