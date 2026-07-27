import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'
import { submitCV } from '@/services/careers'
import { useCallback, useRef, useState } from 'react'

export function CareersPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)
      setMessage(null)

      const formData = new FormData(e.currentTarget)
      const fullName = formData.get('fullName') as string
      const email = formData.get('email') as string
      const phone = formData.get('phone') as string
      const website = formData.get('website') as string
      const cvFile = formData.get('cv') as File

      if (!fullName || !email || !phone || !cvFile) {
        setMessage({ type: 'error', text: 'Please fill in all fields and select a CV file.' })
        setIsLoading(false)
        return
      }

      try {
        await submitCV({
          fullName,
          email,
          phone,
          website,
          cv: cvFile,
        })

        setMessage({
          type: 'success',
          text: 'Thank you! Your CV has been submitted successfully. We will review it and contact you soon.',
        })
        formRef.current?.reset()
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } catch (error) {
        setMessage({
          type: 'error',
          text: error instanceof Error ? error.message : 'Failed to submit CV. Please try again.',
        })
      } finally {
        setIsLoading(false)
      }
    },
    [],
  )

  return (
    <>
      <Seo
        title="Careers | HispaniCoders"
        description="Join HispaniCoders. Submit your CV to be considered for remote software engineering opportunities with US companies."
        canonicalPath="/careers"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Join Us"
            title="Build your career with HispaniCoders."
            description="We connect talented LATAM engineers with leading US companies. Submit your CV to be part of our network."
          />
        </Section>

        <Section>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <h2 className="font-display text-2xl font-semibold text-white">Why Join Us</h2>
              <ul className="mt-5 space-y-4 text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-accent">✓</span>
                  <span>
                    <strong className="text-white">Work with US Companies</strong> — Engage directly with leading US tech organizations on remote, long-term engagements.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-accent">✓</span>
                  <span>
                    <strong className="text-white">Competitive Compensation</strong> — Earn US-market rates for your skills and experience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-accent">✓</span>
                  <span>
                    <strong className="text-white">Professional Growth</strong> — Work on real-world projects, learn new technologies, and expand your network.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 text-accent">✓</span>
                  <span>
                    <strong className="text-white">Flexible Engagement</strong> — Support from vetting to team integration. We handle the complexity.
                  </span>
                </li>
              </ul>
            </Card>

            <Card>
              <h2 className="font-display text-2xl font-semibold text-white">Submit Your CV</h2>
              <p className="mt-3 text-sm text-slate-400">
                We review all submissions and contact qualified candidates. Please ensure your CV is current and clearly demonstrates your experience.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit} ref={formRef}>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">
                    Full Name
                  </label>
                  <input
                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 text-white placeholder-slate-500 focus:border-accent focus:outline-none"
                    name="fullName"
                    placeholder="Your full name"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">
                    Email
                  </label>
                  <input
                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 text-white placeholder-slate-500 focus:border-accent focus:outline-none"
                    name="email"
                    placeholder="your@email.com"
                    required
                    type="email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">
                    Phone
                  </label>
                  <input
                    className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900/50 px-3 py-2 text-white placeholder-slate-500 focus:border-accent focus:outline-none"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    type="tel"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-300">
                    Upload CV
                  </label>
                  <input
                    className="mt-2 w-full text-sm text-slate-400"
                    name="cv"
                    ref={fileInputRef}
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                  />
                  <p className="mt-1 text-xs text-slate-500">PDF, DOC, or DOCX. Max 5MB.</p>
                </div>

                {/* Honeypot field */}
                <input name="website" style={{ display: 'none' }} type="text" />

                {message && (
                  <div
                    className={`mt-4 rounded-lg p-3 text-sm ${
                      message.type === 'success'
                        ? 'bg-green-900/30 text-green-300'
                        : 'bg-red-900/30 text-red-300'
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <Button
                  className="mt-6 w-full"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? 'Submitting...' : 'Submit CV'}
                </Button>
              </form>
            </Card>
          </div>
        </Section>

        <Section>
          <Card>
            <h2 className="font-display text-2xl font-semibold text-white">What We Look For</h2>
            <div className="mt-5 grid gap-6 text-slate-300 sm:grid-cols-2">
              <div>
                <p className="font-medium text-white">Technical Skills</p>
                <p className="mt-2 text-sm">
                  Proficiency in modern programming languages, frameworks, and tools. Experience with backend, frontend, or full-stack development.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Communication</p>
                <p className="mt-2 text-sm">
                  Strong English communication skills, both written and verbal. Ability to work asynchronously and collaborate across time zones.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Professional Attitude</p>
                <p className="mt-2 text-sm">
                  Reliability, responsibility, and commitment to deadlines. Willingness to continuously learn and improve.
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Experience</p>
                <p className="mt-2 text-sm">
                  Minimum 3+ years of professional software development experience. Portfolio or GitHub profile demonstrating your work.
                </p>
              </div>
            </div>
          </Card>
        </Section>
      </Container>
    </>
  )
}
