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

const augmentationAdvantages = [
  'Faster access to vetted talent without running a full internal hiring cycle',
  'Flexible capacity when roadmap pressure changes across quarters',
  'Less operational overhead for contracts, payments, and cross-border administration',
  'Strong fit for teams that need execution speed without adding permanent headcount immediately',
]

const inHouseAdvantages = [
  'Stronger fit for long-term org design when hiring demand is stable and budget is predictable',
  'Deeper internal continuity for leadership pipelines and cultural investment over time',
  'Useful when the role is strategic, permanent, and closely tied to future team structure',
  'Best when you can absorb longer time-to-hire and ongoing employment overhead',
]

const comparisonFaqs = [
  {
    question: 'Is staff augmentation only for short-term needs?',
    answer:
      'No. Many teams use staff augmentation for multi-quarter delivery goals when they need flexibility, faster hiring, and lower operational friction.',
  },
  {
    question: 'When is in-house hiring the better choice?',
    answer:
      'In-house hiring is stronger when the role is a permanent organizational investment and your team can support a longer search and full employment overhead.',
  },
  {
    question: 'How should US teams compare both models?',
    answer:
      'Compare them by time-to-impact, management overhead, flexibility, and how quickly each option helps the roadmap move.',
  },
  {
    question: 'Can companies mix both models?',
    answer:
      'Yes. Many companies keep core leadership in-house and use staff augmentation to expand execution capacity in engineering, QA, DevOps, data, or AI.',
  },
]

export function StaffAugmentationVsInHousePage() {
  useEffect(() => {
    trackBofuVisit('staff_augmentation_vs_inhouse')
  }, [])

  return (
    <>
      <Seo
        title="Staff Augmentation vs In-House Hiring | HispaniCoders"
        description="Compare staff augmentation and in-house hiring for US engineering teams across speed, flexibility, management overhead, and delivery impact."
        canonicalPath="/staff-augmentation-vs-in-house-hiring"
        structuredData={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            {
              name: 'Staff Augmentation vs In-House Hiring',
              path: '/staff-augmentation-vs-in-house-hiring',
            },
          ]),
          buildFaqJsonLd(comparisonFaqs),
        ]}
      />

      <Container>
        <Section>
          <PageHeader
            eyebrow="Comparison"
            title="Staff augmentation vs in-house hiring: which path fits your roadmap?"
            description="A practical comparison for US founders and engineering leaders deciding between faster flexible capacity and permanent internal hiring."
          />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Staff augmentation strengths
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Optimized for speed and flexibility.
              </h2>
              <div className="mt-5">
                <Checklist items={augmentationAdvantages} />
              </div>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                In-house hiring strengths
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Built for long-term internal headcount.
              </h2>
              <div className="mt-5">
                <Checklist items={inHouseAdvantages} />
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Decision framework
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white">
              Start from time-to-impact, not hiring preference.
            </h2>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>
                If you need execution capacity quickly, staff augmentation usually wins on speed,
                flexibility, and operational simplicity.
              </p>
              <p>
                If the role is part of your long-term organizational structure and you can absorb a
                slower search, in-house hiring may be the better long-range fit.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                to="/staff-augmentation"
                trackingEvent="cta_click"
                trackingPayload={{
                  location: 'staff_augmentation_vs_inhouse',
                  label: 'staff_augmentation_details',
                  destination: '/staff-augmentation',
                }}
              >
                Staff Augmentation Details
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                trackingEvent="cta_click"
                trackingPayload={{
                  location: 'staff_augmentation_vs_inhouse',
                  label: 'request_talent',
                  destination: '/contact',
                }}
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
          <FAQ items={comparisonFaqs} />
        </Section>
      </Container>
    </>
  )
}