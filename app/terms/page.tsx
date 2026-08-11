import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms of service governing the use of Aetherlyn Hosting and its services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Terms of Service"
      updated="August 11, 2026"
      sections={[
        {
          title: "1. Agreement to Terms",
          body: (
            <div className="space-y-3">
              <p>
                By accessing or using Aetherlyn Hosting (&quot;Aetherlyn&quot;,
                &quot;we&quot;, &quot;us&quot; or &quot;our&quot;), you agree to
                be bound by these Terms of Service and all applicable laws and
                regulations. If you do not agree with any part of these terms,
                you must not use our services.
              </p>
              <p>
                These terms apply to all visitors, users and others who access
                or use our platform, website, dashboard or any related services.
              </p>
            </div>
          ),
        },
        {
          title: "2. Eligibility",
          body: (
            <p>
              You must be at least 13 years of age to use Aetherlyn Hosting. If
              you are under the age of majority in your jurisdiction, you may
              use our services only with the consent of a parent or legal
              guardian. By using our services you represent that you meet these
              requirements.
            </p>
          ),
        },
        {
          title: "3. Accounts",
          body: (
            <div className="space-y-3">
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activity that occurs under your
                account. You agree to notify us immediately of any unauthorized
                use of your account.
              </p>
              <p>
                We reserve the right to suspend or terminate accounts that
                violate these terms, engage in abusive behavior, or pose a
                security risk to our infrastructure.
              </p>
            </div>
          ),
        },
        {
          title: "4. Acceptable Use",
          body: (
            <div className="space-y-3">
              <p>You agree not to use our services to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Host, distribute or engage in any illegal activity or content
                  prohibited by applicable law;
                </li>
                <li>
                  Launch denial-of-service (DoS) attacks or otherwise attempt to
                  disrupt our network or the networks of others;
                </li>
                <li>
                  Use servers to mine cryptocurrencies or perform other
                  resource-abusive workloads not approved in advance;
                </li>
                <li>
                  Bypass or attempt to bypass any security controls, rate limits
                  or access restrictions;
                </li>
                <li>
                  Harass, threaten or abuse other users, staff or any third
                  parties.
              </li>
              </ul>
              <p>
                Violations of the Acceptable Use policy may result in immediate
                suspension or termination of services without refund.
              </p>
            </div>
          ),
        },
        {
          title: "5. Free Plan",
          body: (
            <p>
              The Free plan is provided at no cost, forever. Free resources are
              intended for legitimate Minecraft server use and reasonable
              testing. We reserve the right to suspend or restrict free servers
              that are idle, abusive or used in a manner inconsistent with these
              terms. Free plans are offered at our discretion and may be
              modified or discontinued at any time.
            </p>
          ),
        },
        {
          title: "6. Billing and Payments",
          body: (
            <div className="space-y-3">
              <p>
                Paid plans are billed on a recurring basis as selected at the
                time of purchase. All payments are processed by third-party
                payment providers, and you agree to their terms as well.
              </p>
              <p>
                We reserve the right to change pricing at any time. Price
                changes for paid plans will be communicated in advance and will
                take effect at the start of the next billing cycle.
              </p>
            </div>
          ),
        },
        {
          title: "7. Cancellation and Refunds",
          body: (
            <p>
              You may cancel your service at any time from the dashboard. Unless
              otherwise required by law, payments are non-refundable. In cases
              where services are unavailable due to our fault for an extended
              period, we may, at our discretion, provide credits or a partial
              refund.
            </p>
          ),
        },
        {
          title: "8. Service Availability",
          body: (
            <p>
              We strive to provide reliable service and a high uptime, but we do
              not guarantee uninterrupted availability. Our services may be
              temporarily unavailable for scheduled maintenance or due to
              factors beyond our control. We are not liable for any downtime,
              data loss or resulting damages.
            </p>
          ),
        },
        {
          title: "9. Limitation of Liability",
          body: (
            <p>
              To the maximum extent permitted by law, Aetherlyn Hosting shall
              not be liable for any indirect, incidental, special, consequential
              or punitive damages, including loss of profits, data, goodwill or
              other intangible losses, arising out of or related to your use of
              our services. Our total liability shall not exceed the amount you
              paid us during the twelve (12) months prior to the event giving
              rise to the claim.
            </p>
          ),
        },
        {
          title: "10. Changes to These Terms",
          body: (
            <p>
              We may revise these Terms of Service at any time. The most current
              version will always be available on this page. By continuing to
              use our services after changes take effect, you agree to be bound
              by the revised terms.
            </p>
          ),
        },
        {
          title: "11. Contact Us",
          body: (
            <p>
              If you have any questions about these Terms of Service, please
              contact us through the dashboard at dash.aetherlyn.lol.
            </p>
          ),
        },
      ]}
    />
  );
}
