import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { FAQ } from '@/components/sections/FAQ'
import { PageHeader } from '@/components/sections/PageHeader'
import { ResponsibilitySplit } from '@/components/sections/ResponsibilitySplit'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo'

const latamAdvantages = [
  'Meaningful overlap with US working hours for daily collaboration',
  'Strong English proficiency for clear stakeholder communication',
  'High cultural alignment with US business expectations and work style',
  'Strong engineering and product talent across multiple countries',
  'Top-tier academic training from leading universities and technical programs',
  'Faster feedback loops with real-time communication',
  'Scalable hiring paths without compromising quality standards',
]

const collaborationBenefits = [
  {
    title: 'Time-zone alignment',
    description:
      'US teams and LATAM professionals can collaborate during overlapping business hours without heavy async delays.',
  },
  {
    title: 'Communication quality',
    description:
      'Strong English communication and product-centric mindset support smooth integration into existing engineering rituals.',
  },
  {
    title: 'US cultural affinity',
    description:
      'Many LATAM professionals are deeply influenced by US work culture, making collaboration style, expectations, and delivery cadence naturally compatible.',
  },
  {
    title: 'Academic foundation',
    description:
      'Top universities and rigorous technical programs across LATAM produce professionals with strong analytical and engineering fundamentals.',
  },
  {
    title: 'Technical depth',
    description:
      'Experienced professionals across engineering, DevOps, QA, data, and AI help teams scale capabilities quickly.',
  },
  {
    title: 'Operational flexibility',
    description:
      'Teams can start with one role and expand progressively as roadmap pressure and business priorities evolve.',
  },
]

const fitSignals = [
  'Distributed engineering culture with practical ownership',
  'Business communication confidence in English across technical and non-technical contexts',
  'Cultural compatibility with US management, feedback, and execution standards',
  'Adaptability to modern product and delivery frameworks',
  'Strong alignment with US startup and SaaS execution pace',
  'Solid academic preparation that supports complex problem-solving',
  'Balanced focus on technical quality and communication reliability',
]

const latamFaqs = [
  {
    question: 'Is LATAM talent selected only because of cost?',
    answer:
      'No. The primary value is collaboration fit, technical capability, and speed of integration with US engineering teams.',
  },
  {
    question: 'Can LATAM professionals work in our daily operating schedule?',
    answer:
      'Yes. Meaningful overlap with US business hours enables real-time standups, planning, and delivery coordination.',
  },
  {
    question: 'How strong is English communication across LATAM talent?',
    answer:
      'Top LATAM professionals typically work with US teams in English every day, covering technical discussions, status updates, and cross-functional collaboration.',
  },
  {
    question: 'Is there cultural alignment with US teams?',
    answer:
      'Yes. LATAM teams are highly influenced by US business culture, which helps align communication style, accountability, and delivery expectations.',
  },
  {
    question: 'Does LATAM cover specialized technical roles?',
    answer:
      'Yes. LATAM includes strong talent across backend, frontend, DevOps, QA, data, AI, product, and support functions.',
  },
  {
    question: 'What about academic and technical training quality?',
    answer:
      'LATAM has a strong pipeline from top universities and specialized engineering programs, resulting in professionals with solid fundamentals and practical execution skills.',
  },
  {
    question: 'Can we start small before scaling the team?',
    answer:
      'Absolutely. Most companies begin with one strategic role and expand as performance and roadmap needs evolve.',
  },
]

export function WhyLatamPage() {
  return (
    <>
      <Seo
        title="Why LATAM | HispaniCoders"
        description="Learn why US engineering organizations choose top LATAM talent for speed, quality, and collaboration."
        canonicalPath="/why-latam"
        structuredData={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Why LATAM', path: '/why-latam' },
          ]),
          buildFaqJsonLd(latamFaqs),
        ]}
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Why LATAM"
            title="Top technical capability with strong US collaboration overlap."
            description="LATAM talent helps US engineering teams scale with strong English communication, cultural compatibility, first-class academic preparation, and high technical standards."
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Key advantages</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Built for collaboration, not just staffing volume.
            </h2>
          </div>
          <Checklist items={latamAdvantages} />
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why teams choose LATAM</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Practical benefits for modern US product organizations.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {collaborationBenefits.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-300">{item.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
              Your US team keeps control while LATAM professionals integrate seamlessly.
            </h2>
          </div>
          <ResponsibilitySplit
            leftTitle="Your team keeps"
            leftItems={[
              'Product strategy and technical ownership',
              'Roadmap prioritization and workflow design',
              'Delivery standards and team culture',
              'Final decisions on team composition',
            ]}
            rightTitle="LATAM talent adds"
            rightItems={[
              'Reliable execution capacity',
              'Real-time collaboration availability',
              'Specialized technical expertise',
              'Flexible expansion paths as needs evolve',
            ]}
          />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Fit signals</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Why the model works for US engineering organizations.
            </h2>
          </div>
          <Checklist items={fitSignals} />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Questions about LATAM collaboration and hiring fit.
            </h2>
          </div>
          <FAQ items={latamFaqs} />
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">Tell us what your team needs next</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share your open roles, required experience, and preferred timeline. We will propose
              the best LATAM staffing path for your US team.
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