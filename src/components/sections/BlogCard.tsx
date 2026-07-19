import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

type BlogCardProps = {
  title: string
  excerpt: string
  href: string
}

export function BlogCard({ title, excerpt, href }: BlogCardProps) {
  return (
    <Card>
      <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300">{excerpt}</p>
      <Link to={href} className="mt-4 inline-block text-sm font-semibold text-accent">
        Read more
      </Link>
    </Card>
  )
}