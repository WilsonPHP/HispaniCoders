import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Checklist } from '@/components/sections/Checklist'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Seo } from '@/components/ui/Seo'
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts'
import { buildArticleJsonLd, buildBreadcrumbJsonLd } from '@/lib/seo'
import { Link, useParams } from 'react-router-dom'

export function ResourcePostPage() {
  const { slug = '' } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <Container>
        <Section>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Resources</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Resource not found
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              The article you are looking for is unavailable. Explore the main resources hub or
              contact us for guidance tailored to your hiring goals.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/resources">Back to Resources</Button>
              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </Card>
        </Section>
      </Container>
    )
  }

  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 2)
  const postPath = `/resources/${post.slug}`
  const publishedIsoDate = new Date(`${post.publishedAt} 01`).toISOString()

  return (
    <>
      <Seo
        title={`${post.title} | HispaniCoders`}
        description={post.description}
        canonicalPath={postPath}
        ogType="article"
        structuredData={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
            { name: post.title, path: postPath },
          ]),
          buildArticleJsonLd({
            title: post.title,
            description: post.description,
            path: postPath,
            publishedDate: publishedIsoDate,
          }),
        ]}
      />
      <Container>
        <Section>
          <div className="max-w-4xl">
            <Link
              className="text-sm font-semibold text-accent transition hover:text-amber-200"
              to="/resources"
            >
              Back to Resources
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {post.category}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 text-lg text-slate-300">{post.intro}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>{post.publishedAt}</span>
              <span aria-hidden>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </Section>

        <Section>
          <Card>
            <h2 className="font-display text-3xl font-semibold text-white">Key takeaways</h2>
            <div className="mt-5">
              <Checklist items={post.takeaways} />
            </div>
          </Card>
        </Section>

        <Section>
          <div className="space-y-4">
            {post.sections.map((section) => (
              <Card key={section.title}>
                <h2 className="font-display text-3xl font-semibold text-white">{section.title}</h2>
                <div className="mt-3 space-y-3 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Related resources
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Continue exploring hiring playbooks.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.slug}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {relatedPost.category}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                  {relatedPost.title}
                </h3>
                <p className="mt-2 text-slate-300">{relatedPost.excerpt}</p>
                <Link
                  className="mt-4 inline-block text-sm font-semibold text-accent transition hover:text-amber-200"
                  to={`/resources/${relatedPost.slug}`}
                >
                  Read article
                </Link>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <Card className="bg-gradient-to-r from-brand-900/70 to-slate-900/70">
            <h2 className="font-display text-3xl font-semibold text-white">
              Need help applying these frameworks?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Tell us what roles you need and where your process is getting blocked. We will help
              you translate these ideas into a practical hiring plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Request Talent</Button>
              <Button to="/resources" variant="secondary">
                More Resources
              </Button>
            </div>
          </Card>
        </Section>
      </Container>
    </>
  )
}
