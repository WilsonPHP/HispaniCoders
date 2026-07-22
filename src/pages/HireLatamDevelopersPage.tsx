import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { FAQ } from '@/components/sections/FAQ'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo'

const hiringSignals = [
  'US time-zone overlap for real-time collaboration',
  'Strong English communication with stakeholder clarity',
  'Senior-level technical ownership from day one',
  'Operational support for contracts and payments',
]

const roleTracks = [
  {
    title: 'Backend and platform engineering',
    description:
      'Senior engineers for APIs, integrations, microservices, and cloud reliability initiatives.',
  },
  {
    title: 'Frontend and product delivery',
    description:
      'React, TypeScript, and modern UI engineers who ship production-ready features quickly.',
  },
  {
    title: 'DevOps, QA, data, and AI',
    description:
      'Cross-functional specialists to improve release quality, automation, and analytics velocity.',
  },
]

const landingFaqs = [
  {
    question: 'How fast can we start interviews?',
    answer:
      'Most teams can begin interviews quickly once role scope, stack, and seniority requirements are clearly defined.',
  },
  {
    question: 'Do candidates work directly with our US team?',
    answer:
      'Yes. Professionals integrate into your existing engineering workflows while your team keeps technical ownership.',
  },
  {
    question: 'Can we hire one role first and scale later?',
    answer:
      'Yes. Many clients begin with one strategic role and expand after validating delivery impact.',
  },
  {
    question: 'What is the main difference versus freelance marketplaces?',
    answer:
      'HispaniCoders runs a curated, human-led selection process aligned to your real role needs instead of anonymous listings.',
  },
]

export function HireLatamDevelopersPage() {
  return (
    <>
      <Seo
        title="Hire LATAM Developers for US Companies | HispaniCoders"
        description="Hire senior LATAM developers with strong US collaboration overlap, clear communication, and role-aligned technical depth."
        canonicalPath="/hire-latam-developers"
        structuredData={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Hire LATAM Developers', path: '/hire-latam-developers' },
          ]),
          buildFaqJsonLd(landingFaqs),
        ]}
      />

      <Container>
        <Section>
          <PageHeader
            eyebrow="Hire LATAM Developers"
            title="Build your US engineering team with senior LATAM talent."
            description="For founders and engineering leaders who need faster hiring, strong technical ownership, and smooth integration into US workflows."
          />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why teams choose this model</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Reduce hiring delays without lowering technical standards.
              </h2>
              <div className="mt-5">
                <Checklist items={hiringSignals} />
              </div>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Hiring roadmap</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                A focused process from role definition to onboarding.
              </h2>
              <p className="mt-3 text-slate-300">
                Share your hiring goals, stack, and timeline. We curate role-aligned candidates,
                coordinate interviews, and support operations after onboarding so your team can keep
                shipping.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact">Request Talent</Button>
                <Button to="/resources" variant="secondary">
                  Explore resources
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Role coverage</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Talent tracks for high-priority engineering outcomes.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {roleTracks.map((track) => (
              <Card key={track.title}>
                <h3 className="font-display text-2xl font-semibold text-white">{track.title}</h3>
                <p className="mt-2 text-slate-300">{track.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Questions from US hiring teams.
            </h2>
          </div>
          <FAQ items={landingFaqs} />
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">
              Ready to hire your next LATAM developer?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Tell us your role, stack, and timeline. We will propose a practical hiring path for
              your US team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Request Talent</Button>
              <Button to="/staff-augmentation" variant="secondary">
                Staff augmentation details
              </Button>
            </div>
          </Card>
        </Section>
      </Container>
    </>
  )
}