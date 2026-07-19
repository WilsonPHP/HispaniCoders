import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function Hero() {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-brand-900/80 to-slate-900/80 p-8 sm:p-12">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        Premium LATAM Staff Augmentation
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
        Helping US companies build world-class engineering teams with top LATAM talent.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        We handle recruiting, technical vetting, hiring, contracts, payments, and
        administration so your internal leaders can focus only on delivery.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/contact">Request Talent</Button>
        <Button to="/contact" variant="secondary">
          Schedule a Call
        </Button>
      </div>
    </Card>
  )
}