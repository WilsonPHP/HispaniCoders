import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | HispaniCoders"
        description="HispaniCoders is a premium LATAM staff augmentation company serving US-based engineering teams."
        canonicalPath="/about"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="About"
            title="Operational excellence for high-performing US engineering organizations."
            description="Ready for future company story, principles, and leadership content."
          />
        </Section>
      </Container>
    </>
  )
}