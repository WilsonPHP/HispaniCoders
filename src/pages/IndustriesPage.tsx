import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries | HispaniCoders"
        description="Staff augmentation support for SaaS, AI, and high-growth US technology companies."
        canonicalPath="/industries"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Industries"
            title="Focused on US technology companies with high hiring velocity."
            description="This foundation is ready for vertical-specific messaging and proof points."
          />
        </Section>
      </Container>
    </>
  )
}