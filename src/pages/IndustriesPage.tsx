import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { FAQ } from '@/components/sections/FAQ'
import { IndustryCard } from '@/components/sections/IndustryCard'
import { PageHeader } from '@/components/sections/PageHeader'
import { ResponsibilitySplit } from '@/components/sections/ResponsibilitySplit'
import { Timeline } from '@/components/sections/Timeline'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'

const coreIndustries = [
  {
    title: 'SaaS Platforms',
    summary:
      'Product teams that need consistent feature delivery, platform stability, and faster hiring cycles.',
  },
  {
    title: 'AI Companies',
    summary:
      'Organizations building AI-enabled products that require strong engineering and data collaboration.',
  },
  {
    title: 'Fintech',
    summary:
      'Teams operating in regulated and high-trust environments where execution quality is non-negotiable.',
  },
  {
    title: 'Healthtech',
    summary:
      'Companies balancing product growth with reliability, compliance-minded workflows, and user trust.',
  },
  {
    title: 'E-commerce & Retail Tech',
    summary:
      'Engineering teams focused on scale, conversion performance, and rapid iteration cycles.',
  },
  {
    title: 'High-Growth Startups',
    summary:
      'Venture-backed teams that need flexible, high-quality capacity without operational bottlenecks.',
  },
]

const commonChallenges = [
  'Hiring velocity does not match roadmap pressure',
  'Specialized technical roles are hard to fill quickly',
  'Leadership time is consumed by recruitment operations',
  'Internal teams need flexible scaling without quality loss',
]

const recommendedTracks = [
  'Core product delivery for roadmap acceleration',
  'Platform and reliability support for scalability',
  'Data and AI talent for intelligence-driven products',
  'QA reinforcement for release consistency',
]

const industryFlow = [
  {
    step: '01',
    title: 'Industry context mapping',
    description:
      'We align on business model, product stage, team structure, and role requirements.',
  },
  {
    step: '02',
    title: 'Role-based candidate curation',
    description:
      'We source and evaluate LATAM professionals with relevant experience for your operating context.',
  },
  {
    step: '03',
    title: 'Client-led interviews',
    description:
      'Your team interviews selected candidates and makes final hiring decisions.',
  },
  {
    step: '04',
    title: 'Operational continuity',
    description:
      'We handle contracts, payments, and administrative support throughout the engagement.',
  },
]

const industriesFaqs = [
  {
    question: 'Do you only work with software companies?',
    answer:
      'We focus on technology-driven companies with engineering teams, especially SaaS, AI, fintech, healthtech, and high-growth startups.',
  },
  {
    question: 'Can you adapt talent search to our specific domain?',
    answer:
      'Yes. Candidate curation and screening are tailored to your industry context, stack, and delivery model.',
  },
  {
    question: 'Can we start with one role before expanding?',
    answer:
      'Absolutely. Many teams begin with one strategic role and then scale as delivery demand increases.',
  },
  {
    question: 'Who manages delivery after onboarding?',
    answer:
      'Your internal team manages product and technical execution; we manage operational aspects around the engagement.',
  },
]

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
            description="HispaniCoders supports US companies across multiple technology sectors with role-based LATAM talent integration and operational continuity."
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Core sectors</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Built for industries where engineering speed matters.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreIndustries.map((industry) => (
              <IndustryCard key={industry.title} title={industry.title} summary={industry.summary} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">Common hiring challenges</h2>
              <p className="mt-3 text-slate-300">
                Industry-specific product pressure often exposes the same hiring and operations bottlenecks.
              </p>
              <div className="mt-5">
                <Checklist items={commonChallenges} />
              </div>
            </Card>

            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">Recommended talent tracks</h2>
              <p className="mt-3 text-slate-300">
                We align profile curation with the most urgent capabilities your industry roadmap requires.
              </p>
              <div className="mt-5">
                <Checklist items={recommendedTracks} />
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Operating model</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Industry-aware hiring flow from role definition to operational stability.
            </h2>
          </div>
          <Timeline items={industryFlow} />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              You keep strategic control. We run staffing operations.
            </h2>
          </div>
          <ResponsibilitySplit
            leftTitle="Your team leads"
            leftItems={[
              'Product strategy and roadmap decisions',
              'Technical direction and architecture standards',
              'Day-to-day workflow and delivery priorities',
              'Performance expectations and team integration',
            ]}
            rightTitle="HispaniCoders handles"
            rightItems={[
              'Talent sourcing and profile curation',
              'Technical and communication pre-screening',
              'Contracts and operational onboarding',
              'International payments and administrative continuity',
            ]}
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Industry-related questions from US teams.
            </h2>
          </div>
          <FAQ items={industriesFaqs} />
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">Tell us your industry and hiring goals</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share your product context, open roles, and desired start date. We will recommend the
              most effective staffing path for your team.
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