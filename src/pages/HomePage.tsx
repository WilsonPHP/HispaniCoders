import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { CTA } from '@/components/sections/CTA'
import { FAQ } from '@/components/sections/FAQ'
import { FeatureCard } from '@/components/sections/FeatureCard'
import { Hero } from '@/components/sections/Hero'
import { Testimonial } from '@/components/sections/Testimonial'
import { Timeline } from '@/components/sections/Timeline'
import { Seo } from '@/components/ui/Seo'
import { BriefcaseBusiness, ClipboardCheck, Handshake, WalletCards } from 'lucide-react'

const faqs = [
  {
    question: 'Do you build software projects for clients?',
    answer:
      'No. We focus exclusively on staff augmentation for US companies. Your team keeps product ownership and delivery control.',
  },
  {
    question: 'Who manages the day-to-day work?',
    answer:
      'Your internal leaders manage scope, priorities, and workflows. We manage recruiting, hiring operations, contracts, and ongoing support.',
  },
  {
    question: 'What profiles can you help us hire?',
    answer:
      'We support software engineering, QA, DevOps, data, AI, and product roles based on your current roadmap and team maturity.',
  },
]

const timeline = [
  {
    step: '01',
    title: 'Alignment Call',
    description: 'We align on role scope, seniority, stack, and team constraints.',
  },
  {
    step: '02',
    title: 'Talent Curation',
    description: 'We source and technically evaluate LATAM professionals for your needs.',
  },
  {
    step: '03',
    title: 'Client Interviews',
    description: 'You interview shortlisted candidates and make final hiring decisions.',
  },
  {
    step: '04',
    title: 'Operational Management',
    description: 'We handle contracts, payments, and administrative support end-to-end.',
  },
]

export function HomePage() {
  return (
    <>
      <Seo
        title="HispaniCoders | LATAM Staff Augmentation for US Companies"
        description="Premium LATAM staff augmentation for founders, CTOs, and engineering leaders in the US market."
        canonicalPath="/"
      />

      <Container>
        <Section className="pb-8">
          <Hero />
        </Section>

        <Section className="pt-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How we help</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              You manage delivery. We manage everything around talent operations.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              icon={BriefcaseBusiness}
              title="Recruitment"
              description="Sourcing and qualification tailored to your stack and team standards."
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="Technical Vetting"
              description="Structured technical assessments with transparent decision signals."
            />
            <FeatureCard
              icon={Handshake}
              title="Hiring Operations"
              description="Interviews, contracts, onboarding, and ongoing administrative support."
            />
            <FeatureCard
              icon={WalletCards}
              title="Payments & Compliance"
              description="Consistent payments and operational follow-up for smooth engagements."
            />
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How it works</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              A clear process designed for speed and quality.
            </h2>
          </div>
          <Timeline items={timeline} />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Testimonial
              quote="HispaniCoders helped us hire senior LATAM engineers without distracting our leadership team from execution."
              author="VP of Engineering"
              role="US SaaS Company"
            />
            <Testimonial
              quote="Their process is polished and predictable. We moved from role definition to onboarding in weeks."
              author="CTO"
              role="US AI Startup"
            />
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Answers for founders and engineering leaders.
            </h2>
          </div>
          <FAQ items={faqs} />
        </Section>

        <Section>
          <CTA
            title="Ready to strengthen your engineering team?"
            description="Talk to us about your open roles and hiring timeline. We will design the best augmentation model for your team."
          />
        </Section>
      </Container>
    </>
  )
}