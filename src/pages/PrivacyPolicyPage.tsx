import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

export function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | HispaniCoders"
        description="HispaniCoders privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services."
        canonicalPath="/privacy-policy/"
        robots="noindex, follow"
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: July 2026"
      />
      <Section>
        <Container>
          <div className="prose prose-slate max-w-3xl mx-auto">
            <h2>1. Information We Collect</h2>
            <p>
              When you use this website, we may collect the following types of information:
            </p>
            <ul>
              <li>
                <strong>Contact information</strong> — name, email address, company name, and message
                content when you submit our contact form.
              </li>
              <li>
                <strong>Usage data</strong> — pages visited, time spent on pages, referral source, and
                browser/device information, collected automatically via Google Analytics 4 (GA4).
              </li>
              <li>
                <strong>Cookies</strong> — Google Analytics uses first-party cookies to distinguish
                users and sessions. No advertising or cross-site tracking cookies are used.
              </li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information collected to:</p>
            <ul>
              <li>Respond to your inquiries and provide our staff augmentation services.</li>
              <li>Understand how visitors use our website and improve its content and performance.</li>
              <li>Communicate updates or relevant information about our services, if you have opted in.</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

            <h2>3. Google Analytics</h2>
            <p>
              This website uses Google Analytics 4 to analyze traffic and improve user experience.
              GA4 collects anonymized data including page views, session duration, and general
              geographic location (country/city level). IP addresses are anonymized by default in GA4.
            </p>
            <p>
              You can opt out of Google Analytics tracking by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to process your request.
              Analytics data is retained for 14 months as configured in Google Analytics.
            </p>

            <h2>5. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Object to or restrict processing of your data.</li>
              <li>Lodge a complaint with a supervisory authority (e.g., your national data protection authority).</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:hello@hispanicoders.com">hello@hispanicoders.com</a>.
            </p>

            <h2>6. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
              All data is transmitted over HTTPS.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of those sites and encourage you to review their privacy policies.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated revision date. Continued use of the website after changes constitutes
              acceptance of the updated policy.
            </p>

            <h2>9. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, contact us at:
            </p>
            <p>
              <strong>HispaniCoders LLC</strong><br />
              Miami, Florida, USA<br />
              <a href="mailto:hello@hispanicoders.com">hello@hispanicoders.com</a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
