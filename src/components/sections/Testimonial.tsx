import { Card } from '@/components/ui/Card'

type TestimonialProps = {
  quote: string
  author: string
  role: string
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <Card>
      <blockquote className="text-lg text-white">"{quote}"</blockquote>
      <p className="mt-4 text-sm font-semibold text-accent">{author}</p>
      <p className="text-sm text-slate-400">{role}</p>
    </Card>
  )
}