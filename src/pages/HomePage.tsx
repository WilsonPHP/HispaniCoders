import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { BenefitsStrip } from '@/components/sections/BenefitsStrip'
import { Checklist } from '@/components/sections/Checklist'
import { CTA } from '@/components/sections/CTA'
import { FAQ } from '@/components/sections/FAQ'
import { FeatureCard } from '@/components/sections/FeatureCard'
import { Hero } from '@/components/sections/Hero'
import { OperationsGrid } from '@/components/sections/OperationsGrid'
import { TalentCategoryGrid } from '@/components/sections/TalentCategoryGrid'
import { Timeline } from '@/components/sections/Timeline'
import { Seo } from '@/components/ui/Seo'
import { BriefcaseBusiness, ClipboardCheck, Handshake, WalletCards } from 'lucide-react'

const faqs = [
  {
    question: 'How is Hispanicoders different from a freelance marketplace?',
    answer:
      'Hispanicoders uses a human-led recruiting process and role-based candidate selection. We are not an anonymous marketplace where clients search on their own.',
  },
  {
    question: 'Do professionals work directly with our internal team?',
    answer:
      'Yes. Professionals integrate into your existing team, tools, and workflows. Your team leads daily execution while we handle operational support.',
  },
  {
    question: 'Can we start with one professional?',
    answer:
      'Yes. You can start with one role and scale gradually as your roadmap evolves.',
  },
  {
    question: 'What happens if our requirements change?',
    answer:
      'We adapt the search criteria and candidate pipeline to your updated needs and timeline, with direct communication throughout the process.',
  },
]

const benefits = [
  {
    title: 'US time overlap',
    description: 'Daily collaboration windows that fit your team rituals and delivery cadence.',
  },
  {
    title: 'Senior LATAM talent',
    description: 'Experienced professionals across engineering, DevOps, QA, data, and product.',
  },
  {
    title: 'Curated matching',
    description: 'Human-led candidate selection aligned to your exact role and context.',
  },
  {
    title: 'Flexible ramp-up',
    description: 'Start with one strategic role and scale capacity as roadmap demands grow.',
  },
  {
    title: 'Operational reliability',
    description: 'Contracts, payments, and ongoing admin support handled end-to-end.',
  },
]

const talentCategories = [
  {
    title: 'Software Engineering',
    description:
      'Backend, frontend, and full-stack professionals for product delivery and platform growth.',
  },
  {
    title: 'AI & Data',
    description:
      'Data engineers and AI-focused professionals to support analytics and machine-learning initiatives.',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud, infrastructure, and DevOps professionals for reliability, automation, and scalability.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Manual and automation QA professionals focused on consistency, performance, and release confidence.',
  },
  {
    title: 'Product & Design',
    description:
      'Product and design professionals who support roadmap execution and user-centered experiences.',
  },
  {
    title: 'Technical Support',
    description:
      'Technical support specialists to help teams maintain service quality and operational continuity.',
  },
]

const whyLatam = [
  'Meaningful overlap with US working hours',
  'Strong technology talent across the region',
  'Easier real-time collaboration',
  'More efficient team expansion',
]

const whyHispanicoders = [
  'Human-led recruiting instead of an anonymous marketplace',
  'Candidate selection based on the actual role',
  'Direct and personalized communication',
  'Flexible team scaling',
  'Ongoing support after onboarding',
]

const timeline = [
  {
    step: '01',
    title: 'Define the role',
    description:
      'Tell us the required skills, seniority, responsibilities and preferred starting date.',
  },
  {
    step: '02',
    title: 'Review selected candidates',
    description:
      'We source and screen LATAM professionals and present the strongest matches.',
  },
  {
    step: '03',
    title: 'Interview and select',
    description: 'Your team interviews the candidates and makes the final selection.',
  },
  {
    step: '04',
    title: 'Start the engagement',
    description:
      'The selected professional joins your team while Hispanicoders manages contracts, payments and ongoing support.',
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

        <Section className="py-6">
          <BenefitsStrip items={benefits} />
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
              title="Recruiting"
              description="We source candidates according to the role, required experience, technology stack and team environment."
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="Technical Screening"
              description="We evaluate candidates based on technical skills, communication and the seniority required for the position."
            />
            <FeatureCard
              icon={Handshake}
              title="Hiring Operations"
              description="We coordinate interviews, contracts, onboarding and the administrative process behind the engagement."
            />
            <FeatureCard
              icon={WalletCards}
              title="Payments & Support"
              description="We manage international payments and provide ongoing operational support throughout the relationship."
            />
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Talent coverage
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Talent for every stage of your roadmap
            </h2>
          </div>
          <TalentCategoryGrid items={talentCategories} />
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
          <div className="mb-8 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Team operations
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              We run the operations behind your remote team
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              While your engineering team focuses on building great products,
              Hispanicoders manages the operational side of your remote workforce.
            </p>
          </div>
          <OperationsGrid />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why LATAM</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Talent proximity built for collaboration.
            </h2>
          </div>
          <Checklist items={whyLatam} />
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Why Hispanicoders
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              A focused partner for long-term team growth.
            </h2>
          </div>
          <Checklist items={whyHispanicoders} />
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
            title="Tell us who you need"
            description="Share the role, required experience and preferred starting date. We will review your requirements and explain how Hispanicoders can help."
          />
        </Section>
      </Container>
    </>
  )
}