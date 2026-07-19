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

const processTimeline = [
  {
    step: '01',
    title: 'Define the role',
    description:
      'We align on required skills, seniority, responsibilities, communication expectations, and target start date.',
  },
  {
    step: '02',
    title: 'Curate and evaluate',
    description:
      'We source LATAM candidates and run role-based screening for technical fit, communication quality, and practical relevance.',
  },
  {
    step: '03',
    title: 'Interview and choose',
    description:
      'Your team interviews shortlisted candidates, validates fit with your workflows, and makes final hiring decisions.',
  },
  {
    step: '04',
    title: 'Onboard and operate',
    description:
      'The selected professional joins your team while Hispanicoders manages contracts, payments, and ongoing administrative support.',
  },
]

const whatYouReceive = [
  'Clear role scoping before search begins',
  'Shortlisted candidates matched to your real requirements',
  'Transparent communication across every hiring stage',
  'Operational continuity after onboarding',
]

const processPrinciples = [
  'Human-led candidate curation, not anonymous marketplace matching',
  'Technical screening adapted to your role context',
  'Flexible hiring pace based on your roadmap timeline',
  'Direct collaboration with your engineering leadership',
]

const howItWorksFaq = [
  {
    question: 'How quickly can we start interviewing candidates?',
    answer:
      'Timelines depend on role complexity, but most teams begin interviews shortly after role alignment and search kickoff.',
  },
  {
    question: 'Who owns technical decisions during the engagement?',
    answer:
      'Your internal team owns product and technical direction. Hispanicoders supports recruiting and operations around the engagement.',
  },
  {
    question: 'What happens if requirements change mid-process?',
    answer:
      'We adjust sourcing and candidate criteria quickly while keeping communication transparent so hiring remains aligned with your goals.',
  },
  {
    question: 'Can this process work for one role and larger hiring plans?',
    answer:
      'Yes. The same framework scales from a single strategic role to ongoing multi-role expansion.',
  },
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
            description="A practical process designed for US teams that need reliable LATAM talent integration without operational friction."
          />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">What you receive</h2>
              <p className="mt-3 text-slate-300">
                Every engagement follows a structured path so hiring decisions stay clear,
                measurable, and aligned with delivery priorities.
              </p>
              <div className="mt-5">
                <Checklist items={whatYouReceive} />
              </div>
            </Card>

            <Card>
              <h2 className="font-display text-3xl font-semibold text-white">Process principles</h2>
              <p className="mt-3 text-slate-300">
                We keep the framework simple while maintaining high standards across sourcing,
                evaluation, and operational follow-through.
              </p>
              <div className="mt-5">
                <Checklist items={processPrinciples} />
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Hiring flow</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Four steps from role definition to team integration.
            </h2>
          </div>
          <Timeline items={processTimeline} />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              You lead delivery. We run the operations behind hiring.
            </h2>
          </div>
          <ResponsibilitySplit
            leftTitle="Your team leads"
            leftItems={[
              'Product goals and roadmap priorities',
              'Technical standards and architecture decisions',
              'Daily workflow and performance expectations',
              'Final interview and hiring decisions',
            ]}
            rightTitle="HispaniCoders handles"
            rightItems={[
              'Talent sourcing and role-based curation',
              'Technical and communication pre-screening',
              'Contracts and onboarding operations',
              'Payments and ongoing administrative support',
            ]}
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Frequently asked questions about the process.
            </h2>
          </div>
          <FAQ items={howItWorksFaq} />
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">Tell us what role you need first</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share your role requirements, expected seniority, and target start date. We will
              guide you through the next steps with a clear staffing plan.
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