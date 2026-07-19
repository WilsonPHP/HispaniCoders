import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { FormField } from '@/components/forms/FormField'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | HispaniCoders"
        description="Request talent or schedule a call with HispaniCoders to scale your US engineering team."
        canonicalPath="/contact"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Contact"
            title="Let us know your hiring goals."
            description="This form is wired for future integration with /api/contact.php and /api/request-talent.php."
          />
        </Section>

        <Section>
          <Card className="max-w-3xl">
            <form className="grid gap-4" noValidate>
              <FormField id="fullName" label="Full Name" name="fullName" placeholder="Jane Doe" />
              <FormField
                id="workEmail"
                label="Work Email"
                name="workEmail"
                placeholder="jane@company.com"
                type="email"
              />
              <FormField id="company" label="Company" name="company" placeholder="Acme Inc." />
              <FormField
                id="message"
                as="textarea"
                label="How can we help?"
                name="message"
                placeholder="Tell us about your team and roles you need."
              />
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit">Request Talent</Button>
                <Button to="/contact" variant="secondary">
                  Schedule a Call
                </Button>
              </div>
            </form>
          </Card>
        </Section>
      </Container>
    </>
  )
}