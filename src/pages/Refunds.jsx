import LegalLayout, { Section } from './LegalLayout.jsx'
import { CONTACT_EMAIL } from '../lib/constants.js'

export default function Refunds() {
  return (
    <LegalLayout title="Refund & Cancellation Policy" updated="July 15, 2026">
      <Section heading="1. Month-to-Month, Cancel Anytime">
        <p>
          All LeadSavior plans are billed monthly with no long-term contracts. You can cancel
          at any time, for any reason, with no cancellation fee.
        </p>
      </Section>

      <Section heading="2. How to Cancel">
        <p>
          Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal hover:text-neon">{CONTACT_EMAIL}</a>{' '}
          from the email address on your account with the subject “Cancel my subscription.”
          We will confirm your cancellation within one business day.
        </p>
        <p>
          Cancellation takes effect at the end of your current billing period. You keep full
          access to your Services until then, and you will not be billed again.
        </p>
      </Section>

      <Section heading="3. Refunds">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-white/90">Partial months:</strong> payments already made
            for the current billing period are generally non-refundable; your Services simply
            continue until the period ends.
          </li>
          <li>
            <strong className="text-white/90">Service failures:</strong> if we materially fail
            to deliver the Services you paid for (for example, an extended outage caused by
            us, or setup never completed), contact us and we will make it right — including a
            pro-rated or full refund of the affected period where appropriate.
          </li>
          <li>
            <strong className="text-white/90">Billing errors:</strong> duplicate or incorrect
            charges are refunded in full — just let us know.
          </li>
        </ul>
        <p>
          Approved refunds are issued to the original payment method, typically within 5–10
          business days depending on your bank.
        </p>
      </Section>

      <Section heading="4. What Happens After Cancellation">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>The AI Receptionist stops answering calls at the end of your billing period.</li>
          <li>Review monitoring and alerts stop at the end of your billing period.</li>
          <li>
            Websites we host are taken offline after your final billing period ends. If you
            want to keep your website content, request an export before your period ends and
            we will provide your content (copy, images you supplied, and exported page
            designs).
          </li>
          <li>We retain or delete your data as described in our <a href="/privacy" className="text-teal hover:text-neon">Privacy Policy</a>.</li>
        </ul>
      </Section>

      <Section heading="5. Questions">
        <p>
          Anything unclear, or a situation not covered here? Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal hover:text-neon">{CONTACT_EMAIL}</a>{' '}
          — we would rather fix a problem than lose your trust.
        </p>
      </Section>
    </LegalLayout>
  )
}
