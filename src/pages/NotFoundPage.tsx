import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/ui/Seo'

export function NotFoundPage() {
  return (
    <>
      <Seo title="404 | HispaniCoders" description="Page not found." canonicalPath="/404" robots="noindex,nofollow" />
      <Container>
        <Section className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white">Page not found</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The page you are looking for does not exist or was moved.
          </p>
          <div className="mt-8">
            <Button to="/">Back to Home</Button>
          </div>
        </Section>
      </Container>
    </>
  )
}