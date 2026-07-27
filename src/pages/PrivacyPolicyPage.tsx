import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

const sections = [
  {
    title: '1. Information We Collect',
    content: (
      <>
        <p className="text-slate-300">When you use this website, we may collect the following types of information:</p>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li><span className="text-white font-medium">Contact information</span> — name, email address, company name, and message content when you submit our contact form.</li>
          <li><span className="text-white font-medium">Usage data</span> — pages visited, time spent on pages, referral source, and browser/device information, collected automatically via Google Analytics 4 (GA4).</li>
          <li><span className="text-white font-medium">Cookies</span> — Google Analytics uses first-party cookies to distinguish users and sessions. No advertising or cross-site tracking cookies are used.</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How We Use Your Information',
    content: (
      <>
        <ul className="space-y-2 text-slate-300">
          <li>Respond to your inquiries and provide our staff augmentation services.</li>
          <li>Understand how visitors use our website and improve its content and performance.</li>
          <li>Communicate updates or relevant information about our services, if you have opted in.</li>
        </ul>
        <p className="mt-3 text-slate-300">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
      </>
    ),
  },
  {
    title: '3. Google Analytics',
    content: (
      <>
        <p className="text-slate-300">
          This website uses Google Analytics 4 to analyze traffic and improve user experience.
          GA4 collects anonymized data including page views, session duration, and general
          geographic location (country/city level). IP addresses are anonymized by default in GA4.
        </p>
        <p className="mt-3 text-slate-300">
          You can opt out of Google Analytics tracking by installing the{' '}
          <a
            className="text-accent underline-offset-4 hover:underline"
            href="https://tools.google.com/dlpage/gaoptout"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>
      </>
    ),
  },
  {
    title: '4. Data Retention',
    content: (
      <p className="text-slate-300">
        Contact form submissions are retained only as long as necessary to process your request.
        Analytics data is retained for 14 months as configured in Google Analytics.
      </p>
    ),
  },
  {
    title: '5. Your Rights',
    content: (
      <>
        <p className="text-slate-300">Depending on your location, you may have the right to:</p>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your personal data.</li>
          <li>Object to or restrict processing of your data.</li>
          <li>Lodge a complaint with a supervisory authority (e.g., your national data protection authority).</li>
        </ul>
        <p className="mt-3 text-slate-300">
          To exercise any of these rights, contact us at{' '}
          <a className="text-accent underline-offset-4 hover:underline" href="mailto:contact@hispanicoders.com">
            contact@hispanicoders.com
          </a>.
        </p>
      </>
    ),
  },
  {
    title: '6. Security',
    content: (
      <p className="text-slate-300">
        We implement appropriate technical and organizational measures to protect your personal
        information against unauthorized access, alteration, disclosure, or destruction.
        All data is transmitted over HTTPS.
      </p>
    ),
  },
  {
    title: '7. Third-Party Links',
    content: (
      <p className="text-slate-300">
        Our website may contain links to third-party websites. We are not responsible for the
        privacy practices of those sites and encourage you to review their privacy policies.
      </p>
    ),
  },
  {
    title: '8. Changes to This Policy',
    content: (
      <p className="text-slate-300">
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with an updated revision date. Continued use of the website after changes constitutes
        acceptance of the updated policy.
      </p>
    ),
  },
  {
    title: '9. Contact',
    content: (
      <p className="text-slate-300">
        If you have questions about this Privacy Policy, contact us at{' '}
        <a className="text-accent underline-offset-4 hover:underline" href="mailto:contact@hispanicoders.com">
          contact@hispanicoders.com
        </a>
        . <span className="text-white">HispaniCoders LLC</span> — Miami, Florida, USA.
      </p>
    ),
  },
]

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | HispaniCoders"
        description="HispaniCoders privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services."
        canonicalPath="/privacy-policy/"
        robots="noindex, follow"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Legal"
            title="Privacy Policy"
            description="How HispaniCoders collects, uses, and protects your information."
          />
        </Section>

        <Section>
          <div className="flex flex-col gap-4">
            {sections.map((s) => (
              <Card key={s.title}>
                <h2 className="font-display text-xl font-semibold text-white">{s.title}</h2>
                <div className="mt-3">{s.content}</div>
              </Card>
            ))}
          </div>
        </Section>
      </Container>
    </>
  )
}
