import LegalLayout, { Section } from './LegalLayout.jsx'
import { CONTACT_EMAIL } from '../lib/constants.js'

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 15, 2026">
      <Section heading="1. Overview">
        <p>
          This Privacy Policy explains how LeadSavior AI (“LeadSavior,” “we,” “us”) collects,
          uses, and protects information when you visit our website or use our services (the
          “Services”). By using the Services, you agree to the practices described here.
        </p>
      </Section>

      <Section heading="2. Information We Collect">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-white/90">Information you provide</strong> — your name,
            email, phone number, business details, and anything you type into our website chat
            widget or share during onboarding and support.
          </li>
          <li>
            <strong className="text-white/90">Booking information</strong> — when you book a
            meeting, scheduling is handled by Calendly, which collects the details you enter
            under its own privacy policy.
          </li>
          <li>
            <strong className="text-white/90">Payment information</strong> — payments are
            processed by Stripe. We never store your full card details; Stripe handles them
            under its own privacy policy.
          </li>
          <li>
            <strong className="text-white/90">Service data</strong> — if you subscribe to our
            products, we process data needed to run them for you, such as call transcripts and
            recordings, chat conversations, appointment details, and leads generated for your
            business.
          </li>
          <li>
            <strong className="text-white/90">Technical data</strong> — our hosting provider
            (Vercel) may log standard technical information such as IP addresses for security
            and performance. We do not currently use advertising cookies or third-party
            tracking pixels on this website.
          </li>
        </ul>
      </Section>

      <Section heading="3. How We Use Information">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To provide, operate, and improve the Services;</li>
          <li>To set up and personalize your products during onboarding;</li>
          <li>To respond to inquiries and provide support;</li>
          <li>To process payments and manage subscriptions;</li>
          <li>To send service-related communications; and</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </Section>

      <Section heading="4. Sharing">
        <p>We share information only with:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-white/90">Service providers</strong> we use to operate the
            Services (such as hosting, scheduling, payment processing, telephony, and AI
            infrastructure providers), limited to what they need to perform their functions;
          </li>
          <li>
            <strong className="text-white/90">Legal authorities</strong> when required by law;
            and
          </li>
          <li>
            <strong className="text-white/90">A successor entity</strong> in the event of a
            merger, acquisition, or sale of assets.
          </li>
        </ul>
      </Section>

      <Section heading="5. Call Recording Notice">
        <p>
          The AI Receptionist product may record and transcribe phone calls to your business.
          As the business owner, you are responsible for ensuring call recording disclosures
          comply with the laws of your state and the states of your callers. We configure
          disclosure messages as part of onboarding where required.
        </p>
      </Section>

      <Section heading="6. Data Retention and Security">
        <p>
          We retain information for as long as needed to provide the Services and meet legal
          obligations, then delete or anonymize it. We use reasonable administrative and
          technical safeguards to protect your information, though no system is 100% secure.
        </p>
      </Section>

      <Section heading="7. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal information
          by emailing{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal hover:text-neon">{CONTACT_EMAIL}</a>.
          We will respond within a reasonable timeframe and in accordance with applicable law.
        </p>
      </Section>

      <Section heading="8. Children">
        <p>
          The Services are intended for businesses and are not directed to children under 13.
          We do not knowingly collect information from children.
        </p>
      </Section>

      <Section heading="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date above
          reflects the latest revision. Material changes will be communicated by email or a
          notice on our website.
        </p>
      </Section>

      <Section heading="10. Contact">
        <p>
          Privacy questions or requests:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal hover:text-neon">{CONTACT_EMAIL}</a>.
        </p>
      </Section>
    </LegalLayout>
  )
}
