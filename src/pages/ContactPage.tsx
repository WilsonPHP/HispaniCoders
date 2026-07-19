import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { FormField } from '@/components/forms/FormField'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'
import { submitContact } from '@/services/api'
import { useState } from 'react'

type ContactFormState = {
  fullName: string
  workEmail: string
  company: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>

const initialFormState: ContactFormState = {
  fullName: '',
  workEmail: '',
  company: '',
  message: '',
}

function validate(values: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required'
  }

  if (!values.workEmail.trim()) {
    errors.workEmail = 'Work email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.workEmail)) {
    errors.workEmail = 'Please provide a valid email address'
  }

  if (!values.company.trim()) {
    errors.company = 'Company is required'
  }

  if (!values.message.trim()) {
    errors.message = 'Please describe your hiring needs'
  }

  return errors
}

export function ContactPage() {
  const [values, setValues] = useState<ContactFormState>(initialFormState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  function updateField<Key extends keyof ContactFormState>(field: Key, value: ContactFormState[Key]) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[field]
      return next
    })
    setSubmitStatus('idle')
    setSubmitMessage('')
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitStatus('error')
      setSubmitMessage('Please review the highlighted fields and try again.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = (await submitContact(values)) as { message?: string }
      setSubmitStatus('success')
      setSubmitMessage(response.message ?? 'Your request was sent successfully.')
      setValues(initialFormState)
      setErrors({})
    } catch (error) {
      const message = error instanceof Error ? error.message : 'We could not submit your request.'
      setSubmitStatus('error')
      setSubmitMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

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
            description="Share your requirements and we will get back to you with the best staffing path for your team."
          />
        </Section>

        <Section>
          <Card className="max-w-3xl">
            <form className="grid gap-4" noValidate onSubmit={handleSubmit}>
              <FormField
                id="fullName"
                label="Full Name"
                name="fullName"
                placeholder="Jane Doe"
                value={values.fullName}
                onChange={(event) => updateField('fullName', event.target.value)}
                error={errors.fullName}
                autoComplete="name"
              />
              <FormField
                id="workEmail"
                label="Work Email"
                name="workEmail"
                placeholder="jane@company.com"
                type="email"
                value={values.workEmail}
                onChange={(event) => updateField('workEmail', event.target.value)}
                error={errors.workEmail}
                autoComplete="email"
              />
              <FormField
                id="company"
                label="Company"
                name="company"
                placeholder="Acme Inc."
                value={values.company}
                onChange={(event) => updateField('company', event.target.value)}
                error={errors.company}
                autoComplete="organization"
              />
              <FormField
                id="message"
                as="textarea"
                label="How can we help?"
                name="message"
                placeholder="Tell us about your team and roles you need."
                value={values.message}
                onChange={(event) => updateField('message', event.target.value)}
                error={errors.message}
              />

              {submitStatus !== 'idle' ? (
                <p
                  aria-live="polite"
                  className={submitStatus === 'success' ? 'text-sm text-emerald-300' : 'text-sm text-rose-300'}
                >
                  {submitMessage}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Request Talent'}
                </Button>
              </div>
            </form>
          </Card>
        </Section>
      </Container>
    </>
  )
}