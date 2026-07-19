import { Card } from '@/components/ui/Card'

type FaqItem = {
  question: string
  answer: string
}

type FAQProps = {
  items: FaqItem[]
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <Card key={item.question} className="p-0">
          <details className="group p-5">
            <summary className="cursor-pointer list-none font-semibold text-white">
              {item.question}
            </summary>
            <p className="mt-3 text-slate-300">{item.answer}</p>
          </details>
        </Card>
      ))}
    </div>
  )
}