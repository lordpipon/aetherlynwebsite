import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Aetherlyn Hosting collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      badge="Legal"
      title="Privacy Policy"
      updated="August 11, 2026"
      sections={[
        {
          title: "1. Introduction",
          body: (
            <p>
              This Privacy Policy explains how Aetherlyn Hosting (&quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;) collects, uses, discloses and
              safeguards your information when you visit our website, use our
              dashboard or otherwise interact with our services. By using our
              services you consent to the practices described in this policy.
            </p>
          ),
        },
        {
          title: "2. Information We Collect",
          body: (
            <div className="space-y-3">
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <strong>Account information:</strong> email address, username
                  and password (stored as a secure hash);
                </li>
                <li>
                  <strong>Payment information:</strong> billing details
                  processed and stored by our payment providers — we never store
                  full card numbers;
                </li>
                <li>
                  <strong>Usage data:</strong> information about how you interact
                  with our platform, including server usage metrics;
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type,
                  device identifiers and cookies used for security and analytics.
              </li>
              </ul>
            </div>
          ),
        },
        {
          title: "3. How We Use Your Information",
          body: (
            <div className="space-y-3">
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Provide, operate and maintain our services;</li>
                <li>Process transactions and manage your account;</li>
                <li>Improve, personalize and secure our platform;</li>
                <li>
                  Communicate with you about your account, service updates and
                  important notices;
                </li>
                <li>Respond to your inquiries and provide customer support;</li>
                <li>Prevent fraud, abuse and illegal activity;</li>
                <li>
                  Comply with legal obligations and enforce our Terms of Service.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "4. Cookies and Tracking",
          body: (
            <p>
              We use cookies and similar technologies to keep you signed in,
              remember your preferences (including theme selection) and
              understand how our website is used. You can control cookies through
              your browser settings. Disabling essential cookies may prevent
              parts of the platform from functioning correctly.
            </p>
          ),
        },
        {
          title: "5. Data Sharing and Disclosure",
          body: (
            <div className="space-y-3">
              <p>
                We do not sell your personal information. We may share your data
                in the following limited circumstances:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  With trusted service providers (such as payment processors,
                  hosting infrastructure and analytics) who are bound by
                  confidentiality obligations;
                </li>
                <li>
                  When required by law, regulation, legal process or
                  governmental request;
                </li>
                <li>
                  To protect the rights, safety and property of Aetherlyn
                  Hosting, our users or the public;
                </li>
                <li>
                  In connection with a merger, acquisition or sale of assets.
                </li>
              </ul>
            </div>
          ),
        },
        {
          title: "6. Data Retention",
          body: (
            <p>
              We retain your personal information only as long as necessary to
              provide our services, comply with legal obligations, resolve
              disputes and enforce our agreements. When you delete your account,
              we will delete or anonymize your personal data unless we are
              required by law to retain it.
            </p>
          ),
        },
        {
          title: "7. Data Security",
          body: (
            <p>
              We implement appropriate technical and organizational measures to
              protect your information, including encryption in transit and at
              rest, access controls and regular security reviews. However, no
              method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </p>
          ),
        },
        {
          title: "8. Your Rights",
          body: (
            <div className="space-y-3">
              <p>
                Depending on your jurisdiction, you may have the right to access,
                correct, update or delete your personal information, to object to
                or restrict certain processing, and to data portability. To
                exercise any of these rights, contact us through the dashboard.
              </p>
              <p>
                You may also opt out of promotional communications at any time by
                following the unsubscribe instructions included in those
                communications.
              </p>
            </div>
          ),
        },
        {
          title: "9. Children&apos;s Privacy",
          body: (
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children under 13. If
              we become aware that we have collected personal information from a
              child under 13, we will take steps to delete it.
            </p>
          ),
        },
        {
          title: "10. International Data Transfers",
          body: (
            <p>
              Your information may be processed and stored on servers located
              outside of your country. Where we transfer data internationally, we
              take appropriate safeguards to protect it in accordance with this
              policy and applicable law.
            </p>
          ),
        },
        {
          title: "11. Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of material changes by posting the updated policy on this page
              and updating the &quot;Last updated&quot; date. Your continued use
              of our services after changes take effect constitutes acceptance of
              the revised policy.
            </p>
          ),
        },
        {
          title: "12. Contact Us",
          body: (
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us through the dashboard at
              dash.aetherlyn.lol.
            </p>
          ),
        },
      ]}
    />
  );
}
