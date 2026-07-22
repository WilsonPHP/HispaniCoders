import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { BlogCard } from '@/components/sections/BlogCard'
import { Checklist } from '@/components/sections/Checklist'
import { FAQ } from '@/components/sections/FAQ'
import { PageHeader } from '@/components/sections/PageHeader'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'
import { blogPosts } from '@/data/blogPosts'
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from '@/lib/seo'

const resourcePillars = [
  'Hiring playbooks for US engineering and product leaders',
  'Screening frameworks for technical and communication quality',
  'Operational guides for onboarding and distributed team performance',
  'Practical templates to improve hiring consistency and speed',
]

const featuredCollections = [
  {
    title: 'Hiring Strategy',
    description:
      'Frameworks for role definition, interview design, and decision criteria that improve hiring precision.',
  },
  {
    title: 'Technical Evaluation',
    description:
      'Role-specific guidance for engineering assessments, practical assignments, and communication validation.',
  },
  {
    title: 'Team Operations',
    description:
      'Tactical resources for onboarding, ownership models, and cross-functional collaboration at scale.',
  },
]

const resourcesFaq = [
  {
    question: 'Who are these resources built for?',
    answer:
      'US founders, CTOs, engineering managers, and talent leaders building or scaling high-performing teams with LATAM professionals.',
  },
  {
    question: 'Are the resources practical or high-level?',
    answer:
      'They are practical and implementation-oriented, with clear frameworks, checklists, and examples you can apply immediately.',
  },
  {
    question: 'Can we request resources for a specific hiring challenge?',
    answer:
      'Yes. Share your context and we can prioritize guidance around your role mix, timeline, and scaling constraints.',
  },
  {
    question: 'Do these resources replace direct support from HispaniCoders?',
    answer:
      'No. They complement our services and help your team make better staffing and operating decisions faster.',
  },
]

export function ResourcesPage() {
  return (
    <>
      <Seo
        title="Resources | HispaniCoders"
        description="Actionable resources for US founders and engineering leaders scaling teams with LATAM talent."
        canonicalPath="/resources"
        structuredData={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
          ]),
          buildFaqJsonLd(resourcesFaq),
        ]}
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Resources"
            title="Insights for scaling engineering teams with confidence."
            description="A curated library of practical guides, hiring frameworks, and operating playbooks for US teams working with LATAM talent."
          />
        </Section>

        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Resource focus</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                Built for execution, not generic thought leadership.
              </h2>
              <p className="mt-3 text-slate-300">
                Every resource is designed to help your team make better staffing decisions, improve
                hiring velocity, and protect delivery quality as you scale.
              </p>
              <div className="mt-5">
                <Checklist items={resourcePillars} />
              </div>
            </Card>

            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How to use this hub</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">Start with your biggest bottleneck</h2>
              <p className="mt-3 text-slate-300">
                Pick one challenge first: role clarity, evaluation quality, onboarding speed, or
                distributed execution. Then apply one framework at a time and measure outcomes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/contact">Request a Custom Guide</Button>
                <Button to="/how-it-works" variant="secondary">
                  View Process
                </Button>
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Collections</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Resource tracks by decision area.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredCollections.map((collection) => (
              <Card key={collection.title}>
                <h3 className="font-display text-2xl font-semibold text-white">{collection.title}</h3>
                <p className="mt-2 text-slate-300">{collection.description}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Featured resources</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Practical guides your team can apply this week.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                href={`/resources/${post.slug}`}
              />
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Common questions about our resources.
            </h2>
          </div>
          <FAQ items={resourcesFaq} />
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">
              Need guidance tailored to your hiring goals?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Tell us your team size, open roles, and delivery timeline. We will recommend the most
              relevant resources and a practical next-step plan.
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