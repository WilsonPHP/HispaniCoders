import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHeader } from '@/components/sections/PageHeader'
import { Timeline } from '@/components/sections/Timeline'
import { Seo } from '@/components/ui/Seo'

const processTimeline = [
  { step: '01', title: 'Discovery', description: 'We define role and team requirements.' },
  { step: '02', title: 'Evaluation', description: 'We run sourcing and technical assessments.' },
  { step: '03', title: 'Selection', description: 'You interview and choose final candidates.' },
  { step: '04', title: 'Operations', description: 'We handle contracts, payments, and support.' },
]

export function HowItWorksPage() {
  return (
    <>
      <Seo
        title="How It Works | HispaniCoders"
        description="Understand the process HispaniCoders uses to help US companies hire top LATAM engineering talent."
        canonicalPath="/how-it-works"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="How It Works"
            title="A transparent and repeatable hiring framework."
            description="Built to scale from one role to multi-team hiring pipelines."
          />
        </Section>
        <Section>
          <Timeline items={processTimeline} />
        </Section>
      </Container>
    </>
  )
}