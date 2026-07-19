import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function WhyLatamPage() {
  return (
    <>
      <Seo
        title="Why LATAM | HispaniCoders"
        description="Learn why US engineering organizations choose top LATAM talent for speed, quality, and collaboration."
        canonicalPath="/why-latam"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Why LATAM"
            title="Top technical capability with strong US collaboration overlap."
            description="Prepared for deeper market insights, benchmark data, and operating comparisons."
          />
        </Section>
      </Container>
    </>
  )
}