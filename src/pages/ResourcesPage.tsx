import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { BlogCard } from '@/components/sections/BlogCard'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function ResourcesPage() {
  return (
    <>
      <Seo
        title="Resources | HispaniCoders"
        description="Actionable resources for US founders and engineering leaders scaling teams with LATAM talent."
        canonicalPath="/resources"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Resources"
            title="Insights for scaling engineering teams with confidence."
            description="Resource architecture ready for long-form content, guides, and conversion assets."
          />
        </Section>
        <Section>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              title="How to Evaluate LATAM Engineers"
              excerpt="A practical framework for technical and communication screening."
              href="/resources"
            />
            <BlogCard
              title="Hiring Timeline Blueprint"
              excerpt="How to reduce hiring friction across distributed engineering teams."
              href="/resources"
            />
            <BlogCard
              title="Scale From 1 to 10 Hires"
              excerpt="Operational patterns to sustain quality at higher hiring velocity."
              href="/resources"
            />
          </div>
        </Section>
      </Container>
    </>
  )
}