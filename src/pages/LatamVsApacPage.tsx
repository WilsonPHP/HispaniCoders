import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { FAQ } from '@/components/sections/FAQ'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'
import { trackBofuVisit } from '@/lib/analytics'
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo'
import { useEffect } from 'react'

const latamAdvantages = [
  'Meaningful overlap with US time zones for daily standups and delivery reviews',
  'High English fluency and strong communication fit with US stakeholders',
  'Faster feedback loops in product, engineering, and cross-functional decisions',
  'Strong technical talent pipeline across backend, frontend, DevOps, data, and AI',
]

const apacTradeoffs = [
  'Larger time-zone gaps can force async-heavy collaboration',
  'Decision latency can increase during fast-moving product cycles',
  'Communication quality varies widely and needs stricter validation in interviews',
  'Useful for some coverage models, but less ideal for real-time US collaboration',
]

const decisionFaqs = [
  {
    question: 'Is APAC always a bad option for US teams?',
    answer:
      'No. APAC can work for specific models, especially where asynchronous collaboration is acceptable. The best choice depends on your operating rhythm and delivery constraints.',
  },
  {
    question: 'Why do many US startups prefer LATAM for core product roles?',
    answer:
      'Because real-time collaboration, communication clarity, and timezone overlap usually reduce execution friction across engineering and product workflows.',
  },
  {
    question: 'Should we decide mainly by hourly rates?',
    answer:
      'No. Compare expected time-to-impact, onboarding speed, management overhead, and delivery quality over the first 90 days.',
  },
  {
    question: 'Can we start with one LATAM role before scaling?',
    answer:
      'Yes. Many teams begin with one strategic role, validate delivery impact, and then expand based on roadmap priorities.',
  },
]

export function LatamVsApacPage() {
  useEffect(() => {
    trackBofuVisit('latam_vs_apac')
  }, [])

  return (
    <>
      <Seo
        title="LATAM vs APAC for US Teams | HispaniCoders"
        description="Compare LATAM and APAC hiring models for US teams across time-zone overlap, communication, speed, and delivery impact."
        canonicalPath="/latam-vs-apac"
        structuredData={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'LATAM vs APAC', path: '/latam-vs-apac' },
          ]),
          buildFaqJsonLd(decisionFaqs),
        ]}
      />

      <Container>
        <Section>
          <PageHeader
            eyebrow="Comparison"
            title="LATAM vs APAC: which model fits US engineering teams better?"
            description="A practical comparison for founders and engineering leaders deciding between real-time collaboration speed and async-heavy delivery models."
          />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">LATAM strengths</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Built for real-time US collaboration.
              </h2>
              <div className="mt-5">
                <Checklist items={latamAdvantages} />
              </div>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">APAC tradeoffs</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Strong talent, but different operational dynamics.
              </h2>
              <div className="mt-5">
                <Checklist items={apacTradeoffs} />
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Decision framework</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              Choose based on delivery model, not assumptions.
            </h2>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>
                If your team depends on daily product and engineering coordination, LATAM usually
                offers faster decision cycles and smoother integration.
              </p>
              <p>
                If your workflow is heavily asynchronous and less dependent on same-day alignment,
                APAC can still be viable. The right model is the one that protects quality and
                reduces management overhead over time.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                to="/hire-latam-developers"
                trackingEvent="cta_click"
                trackingPayload={{ location: 'latam_vs_apac', label: 'hire_latam_developers', destination: '/hire-latam-developers' }}
              >
                Hire LATAM Developers
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                trackingEvent="cta_click"
                trackingPayload={{ location: 'latam_vs_apac', label: 'request_talent', destination: '/contact' }}
              >
                Request Talent
              </Button>
            </div>
          </Card>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Common questions from US hiring teams.
            </h2>
          </div>
          <FAQ items={decisionFaqs} />
        </Section>
      </Container>
    </>
  )
}
