import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { FAQ } from '@/components/sections/FAQ'
import { PageHeader } from '@/components/sections/PageHeader'
import { ResponsibilitySplit } from '@/components/sections/ResponsibilitySplit'
import { RoleCard } from '@/components/sections/RoleCard'
import { Timeline } from '@/components/sections/Timeline'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'

const idealFor = [
  'Founders and CTOs scaling product delivery',
  'Engineering Managers filling critical skill gaps',
  'VP Engineering teams increasing hiring velocity',
  'US SaaS and AI companies needing flexible team expansion',
]

const roleCoverage = [
  {
    role: 'Backend Engineering',
    description: 'API development, microservices, integrations, and platform reliability.',
  },
  {
    role: 'Frontend Engineering',
    description: 'Modern web interfaces with strong UX implementation and maintainable codebases.',
  },
  {
    role: 'Full-Stack Engineering',
    description: 'End-to-end product development across frontend, backend, and integrations.',
  },
  {
    role: 'DevOps & Cloud',
    description: 'Infrastructure automation, CI/CD pipelines, observability, and cloud operations.',
  },
  {
    role: 'QA & Test Automation',
    description: 'Manual and automated quality practices to improve release confidence.',
  },
  {
    role: 'Data & AI',
    description: 'Data engineering and AI-focused profiles for analytics and ML initiatives.',
  },
]

const processTimeline = [
  {
    step: '01',
    title: 'Role Discovery',
    description:
      'We align on required experience, technology stack, responsibilities, and target start date.',
  },
  {
    step: '02',
    title: 'Candidate Curation',
    description:
      'We source and screen LATAM professionals based on your real operational and technical needs.',
  },
  {
    step: '03',
    title: 'Client Interviews',
    description:
      'Your team interviews selected candidates and makes the final hiring decision.',
  },
  {
    step: '04',
    title: 'Operational Execution',
    description:
      'HispaniCoders handles contracts, payments, and administrative support during the engagement.',
  },
]

const serviceCommitments = [
  'Clear communication cadence throughout the hiring process',
  'Role-aligned candidate curation based on your criteria',
  'Operational support after onboarding for continuity and stability',
  'Flexible scaling when your requirements evolve',
]

const staffFaqs = [
  {
    question: 'Do professionals work in US-aligned working hours?',
    answer:
      'Yes. We prioritize candidates who can collaborate in meaningful overlap with your US team schedule.',
  },
  {
    question: 'Can we start with one role and expand later?',
    answer:
      'Absolutely. Many teams start with one professional and scale incrementally based on roadmap priorities.',
  },
  {
    question: 'Who manages day-to-day delivery?',
    answer:
      'Your internal team manages product direction, technical decisions, and daily workflows. We manage operations around the engagement.',
  },
  {
    question: 'What if we need to adjust requirements after starting?',
    answer:
      'We adapt role criteria and provide operational support to align staffing with your updated priorities.',
  },
]

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
            description="HispaniCoders helps US companies integrate vetted LATAM technology professionals into internal engineering teams while we manage recruiting, contracts, payments, and operations."
          />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">What this model is</h2>
              <p className="mt-3 text-slate-300">
                Staff augmentation designed for US technology teams that need experienced
                professionals integrated into existing product and engineering workflows.
              </p>
            </Card>

            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">What this model is not</h2>
              <p className="mt-3 text-slate-300">
                We are not a software factory and we do not deliver outsourced projects. Your
                team keeps full ownership of product and technical execution.
              </p>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Ideal for</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Built for companies scaling engineering with precision.
            </h2>
          </div>
          <Checklist items={idealFor} />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Role coverage</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Talent coverage across core engineering functions.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roleCoverage.map((item) => (
              <RoleCard key={item.role} role={item.role} description={item.description} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              A structured process from role definition to onboarding.
            </h2>
          </div>
          <Timeline items={processTimeline} />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              You manage the work. We manage everything else.
            </h2>
          </div>
          <ResponsibilitySplit
            leftTitle="You lead"
            leftItems={[
              'Product direction',
              'Technical decisions',
              'Sprint priorities and workflows',
              'Daily team collaboration',
            ]}
            rightTitle="HispaniCoders handles"
            rightItems={[
              'Talent sourcing and curation',
              'Technical vetting process',
              'Contracts and documentation',
              'International payments',
              'Administrative and operational support',
              'Ongoing relationship management',
            ]}
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Service commitments
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Delivery standards built for long-term collaboration.
            </h2>
          </div>
          <Checklist items={serviceCommitments} />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Common questions from US engineering leaders.
            </h2>
          </div>
          <FAQ items={staffFaqs} />
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">Tell us who you need</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share role scope, seniority, stack, and preferred start date. We will review your
              requirements and propose the right augmentation path.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Request Talent</Button>
              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </Card>
        </Section>
      </Container>
    </>
  )
}