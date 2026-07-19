import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function TalentPage() {
  return (
    <>
      <Seo
        title="Talent | HispaniCoders"
        description="Discover the engineering profiles and disciplines we help US companies add to their internal teams."
        canonicalPath="/talent"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Talent"
            title="Technical talent coverage built for modern product teams."
            description="Prepared for future role-based sections, seniority matrices, and capability highlights."
          />
        </Section>
      </Container>
    </>
  )
}