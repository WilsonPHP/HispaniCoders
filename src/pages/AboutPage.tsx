import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

const companyFacts = [
  'Founded in 2022 with a clear focus on US engineering organizations',
  'Headquartered in Miami, Florida',
  'Operating as a US LLC with structured business standards',
  'Built to connect high-performing LATAM professionals with US teams',
]

const leadershipPoints = [
  'Founder-led by a CEO with a software engineering background',
  'Deep understanding of enterprise delivery methods used by large companies',
  'Role definitions aligned with practical engineering outcomes',
  'Hiring quality evaluated through technical and communication standards',
]

const operatingPrinciples = [
  {
    title: 'Technical-first approach',
    description:
      'We design each engagement around real engineering workflows, not generic recruiting checklists.',
  },
  {
    title: 'US business alignment',
    description:
      'Our operating model is tailored to US expectations for accountability, clarity, and execution speed.',
  },
  {
    title: 'Long-term partnership mindset',
    description:
      'We focus on sustainable team performance, not short-term placement volume.',
  },
]

export function AboutPage() {
  return (
    <>
      <Seo
        title="About | HispaniCoders"
        description="HispaniCoders is a Miami-based LLC founded in 2022, helping US companies scale with top LATAM talent through a technical-first staffing model."
        canonicalPath="/about"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="About"
            title="A Miami-based team built for US engineering scale."
            description="HispaniCoders started in 2022 with one mission: help US companies grow faster with top LATAM professionals through a model grounded in technical quality and operational clarity."
          />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Company snapshot</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">Who we are</h2>
              <p className="mt-3 text-slate-300">
                HispaniCoders is headquartered in Miami and structured as a US LLC. From day one,
                we have focused on helping product and engineering leaders build reliable LATAM
                extensions of their internal teams.
              </p>
              <div className="mt-5">
                <Checklist items={companyFacts} />
              </div>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Leadership</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">CEO-led with engineering perspective</h2>
              <p className="mt-3 text-slate-300">
                Our CEO is a software engineer who understands in detail the delivery methods,
                quality expectations, and execution discipline used by leading global companies.
                That perspective shapes how we evaluate talent and support every engagement.
              </p>
              <div className="mt-5">
                <Checklist items={leadershipPoints} />
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How we operate</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Structured around the standards US teams expect.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {operatingPrinciples.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">
              Ready to build your next engineering capability?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Tell us what your team is building, where you need support, and the timeline you
              are targeting. We will propose a practical staffing plan aligned with your goals.
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