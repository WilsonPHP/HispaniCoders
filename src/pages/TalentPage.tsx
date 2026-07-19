import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { FAQ } from '@/components/sections/FAQ'
import { PageHeader } from '@/components/sections/PageHeader'
import { ResponsibilitySplit } from '@/components/sections/ResponsibilitySplit'
import { Timeline } from '@/components/sections/Timeline'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'

const hiringTracks = [
  {
    title: 'Core Product Delivery',
    description:
      'Profiles for teams shipping customer-facing features with tight product and engineering collaboration.',
  },
  {
    title: 'Platform & Reliability',
    description:
      'Profiles for infrastructure, performance, cloud operations, and long-term platform stability.',
  },
  {
    title: 'Data & Intelligence',
    description:
      'Profiles for analytics, data workflows, and AI-enabled product capabilities.',
  },
  {
    title: 'Quality & Release Confidence',
    description:
      'Profiles that strengthen QA practices, reduce release risk, and improve product consistency.',
  },
  {
    title: 'Product Experience',
    description:
      'Profiles that align product priorities, UX execution, and cross-functional delivery outcomes.',
  },
  {
    title: 'Operational Continuity',
    description:
      'Profiles that maintain technical support quality and help distributed teams run smoothly at scale.',
  },
]

const seniorityOptions = [
  'Mid-level contributors for established workflows and feature delivery',
  'Senior professionals for complex architecture and technical ownership',
  'Lead-level profiles for cross-team execution and mentorship',
]

const evaluationCriteria = [
  'Technical depth aligned with role requirements',
  'Communication quality for distributed collaboration',
  'Seniority fit based on scope and expected ownership',
  'Experience relevance for your product stage and stack',
]

const engagementFormats = [
  'Single role coverage for urgent team gaps',
  'Multi-role hiring for roadmap acceleration',
  'Incremental scaling as priorities evolve',
]

const talentTimeline = [
  {
    step: '01',
    title: 'Define profile requirements',
    description:
      'We align on role scope, stack, responsibilities, communication needs, and target start date.',
  },
  {
    step: '02',
    title: 'Source and evaluate',
    description:
      'We curate LATAM candidates and run role-based technical and communication screening.',
  },
  {
    step: '03',
    title: 'Interview and select',
    description:
      'Your internal team interviews shortlisted profiles and selects final candidates.',
  },
  {
    step: '04',
    title: 'Onboard and operate',
    description:
      'Selected professionals integrate into your team while we support operations behind the engagement.',
  },
]

const talentFaqs = [
  {
    question: 'Can we hire for very specific technologies?',
    answer:
      'Yes. We tailor sourcing and screening to your exact stack, domain constraints, and team environment.',
  },
  {
    question: 'Do candidates work directly inside our tools and processes?',
    answer:
      'Yes. Professionals integrate into your existing engineering workflows, ceremonies, and communication channels.',
  },
  {
    question: 'Can we start with one role and scale later?',
    answer:
      'Absolutely. Most clients start with a focused role and expand coverage as priorities grow.',
  },
  {
    question: 'What if our requirements change during the process?',
    answer:
      'We quickly adapt candidate criteria and keep communication tight so hiring stays aligned with new goals.',
  },
]

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
            description="HispaniCoders helps US companies hire vetted LATAM professionals across core engineering and product functions with role-based screening and operational support."
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Hiring tracks</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Select talent tracks based on business priorities.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Instead of forcing fixed role bundles, we map candidate profiles to the
              operating context your team needs to strengthen right now.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {hiringTracks.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">Seniority options</h2>
              <p className="mt-3 text-slate-300">
                We support role coverage across different seniority levels based on your delivery
                context and team maturity.
              </p>
              <div className="mt-5">
                <Checklist items={seniorityOptions} />
              </div>
            </Card>

            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">How candidates are evaluated</h2>
              <p className="mt-3 text-slate-300">
                Candidate selection is role-specific and centered on practical fit for your team.
              </p>
              <div className="mt-5">
                <Checklist items={evaluationCriteria} />
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Process</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              A practical framework for consistent talent matching.
            </h2>
          </div>
          <Timeline items={talentTimeline} />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Your team leads product execution. We support hiring operations.
            </h2>
          </div>
          <ResponsibilitySplit
            leftTitle="Your team leads"
            leftItems={[
              'Product priorities and roadmap direction',
              'Technical decisions and architecture',
              'Daily delivery rituals and workflows',
              'Performance expectations and collaboration standards',
            ]}
            rightTitle="HispaniCoders handles"
            rightItems={[
              'Talent sourcing and role-based curation',
              'Technical and communication pre-screening',
              'Contracts and administrative setup',
              'International payments and operational continuity',
            ]}
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Engagement flexibility
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Start lean and scale with confidence.
            </h2>
          </div>
          <Checklist items={engagementFormats} />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Common questions about talent coverage and hiring flow.
            </h2>
          </div>
          <FAQ items={talentFaqs} />
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">Tell us the profile you need</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share the role, seniority, stack, and expected start date. We will review your
              requirements and present the strongest matching path.
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