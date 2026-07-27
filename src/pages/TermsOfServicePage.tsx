import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/sections/PageHeader'
import { Seo } from '@/components/ui/Seo'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: (
      <p className="text-slate-300">
        By accessing or using the HispaniCoders website (hispanicoders.com), you agree to be bound
        by these Terms of Service. If you do not agree to these terms, please do not use our website.
        HispaniCoders LLC reserves the right to update these terms at any time; continued use of the
        site constitutes acceptance of the updated terms.
      </p>
    ),
  },
  {
    title: '2. Services Description',
    content: (
      <>
        <p className="text-slate-300">
          HispaniCoders provides staff augmentation services that connect US-based companies with
          vetted software engineering professionals from Latin America. Our services include:
        </p>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>Sourcing and vetting LATAM engineering talent.</li>
          <li>Facilitating long-term staff augmentation engagements.</li>
          <li>Supporting team integration and ongoing account management.</li>
        </ul>
        <p className="mt-3 text-slate-300">
          Specific terms of any engagement are governed by a separate service agreement executed
          between HispaniCoders and the client.
        </p>
      </>
    ),
  },
  {
    title: '3. Use of the Website',
    content: (
      <>
        <p className="text-slate-300">You agree to use this website only for lawful purposes and in a manner that does not:</p>
        <ul className="mt-3 space-y-2 text-slate-300">
          <li>Infringe the rights of any third party.</li>
          <li>Transmit unsolicited or unauthorized advertising or promotional material.</li>
          <li>Attempt to gain unauthorized access to any part of the website or its infrastructure.</li>
          <li>Interfere with or disrupt the performance or security of the website.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Intellectual Property',
    content: (
      <p className="text-slate-300">
        All content on this website — including text, graphics, logos, and code — is the property of
        HispaniCoders LLC and is protected by applicable intellectual property laws. You may not
        reproduce, distribute, or create derivative works without prior written permission.
      </p>
    ),
  },
  {
    title: '5. Disclaimer of Warranties',
    content: (
      <p className="text-slate-300">
        This website and its content are provided "as is" without warranty of any kind, express or
        implied. HispaniCoders does not warrant that the website will be uninterrupted, error-free,
        or free of viruses or other harmful components. We reserve the right to modify or discontinue
        any part of the website at any time without notice.
      </p>
    ),
  },
  {
    title: '6. Limitation of Liability',
    content: (
      <p className="text-slate-300">
        To the fullest extent permitted by law, HispaniCoders LLC shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages arising from your use of
        this website or reliance on any information provided herein. Our total liability for any
        claim arising from your use of the website shall not exceed one hundred US dollars (USD 100).
      </p>
    ),
  },
  {
    title: '7. Third-Party Links',
    content: (
      <p className="text-slate-300">
        Our website may contain links to third-party websites. These links are provided for
        convenience only. HispaniCoders has no control over the content of those sites and accepts
        no responsibility for them or for any loss or damage that may arise from their use.
      </p>
    ),
  },
  {
    title: '8. Governing Law',
    content: (
      <p className="text-slate-300">
        These Terms of Service are governed by and construed in accordance with the laws of the
        State of Florida, United States, without regard to its conflict of law provisions. Any
        disputes arising under these terms shall be subject to the exclusive jurisdiction of the
        courts located in Miami-Dade County, Florida.
      </p>
    ),
  },
  {
    title: '9. Contact',
    content: (
      <p className="text-slate-300">
        For questions about these Terms of Service,{' '}
        <Link className="text-accent underline-offset-4 hover:underline" to="/contact">
          contact us here
        </Link>
        . <span className="text-white">HispaniCoders LLC</span> — Miami, Florida, USA.
      </p>
    ),
  },
]

export function TermsOfServicePage() {
  return (
    <>
      <Seo
        title="Terms of Service | HispaniCoders"
        description="HispaniCoders terms of service. Read the terms and conditions governing use of our website and staff augmentation services."
        canonicalPath="/terms-of-service/"
        robots="noindex, follow"
      />
      <Container>
        <Section>
          <PageHeader
            eyebrow="Legal"
            title="Terms of Service"
            description="Please read these terms carefully before using our website or services."
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
