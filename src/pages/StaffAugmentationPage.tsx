import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { CTA } from '@/components/sections/CTA'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function StaffAugmentationPage() {
  return (
    <>
      <Seo
        title="Staff Augmentation | HispaniCoders"
        description="Scale your US engineering team with pre-vetted LATAM professionals integrated into your delivery workflow."
        canonicalPath="/staff-augmentation"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Staff Augmentation"
            title="Senior LATAM professionals, embedded into your team."
            description="This page is intentionally structured for future expansion with model details, SLA, and role playbooks."
          />
        </Section>
        <Section>
          <CTA
            title="Need to fill critical engineering roles?"
            description="Share your requirements and get curated LATAM profiles aligned with your technical standards."
          />
        </Section>
      </Container>
    </>
  )
}