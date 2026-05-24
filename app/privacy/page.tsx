import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Speechy AI",
  description: "Privacy Policy for Speechy AI mobile application.",
};

const LAST_UPDATED = "May 24, 2025";

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-flex items-center gap-1">
        ← Back to home
      </Link>

      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      <Separator className="mb-10" />

      <div className="prose prose-neutral max-w-none space-y-8 text-sm leading-7">

        <Section title="1. Introduction">
          <p>
            Welcome to <strong>Speechy AI</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Speechy AI (the &quot;App&quot;). Please read this policy carefully. By using the App, you agree to the terms of this Privacy Policy.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <SubSection title="2.1 Account Information">
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Email address</li>
              <li>Display name (from Google Sign-In or Apple Sign-In, or provided by you)</li>
              <li>Profile photo URL (if provided via Google Sign-In)</li>
            </ul>
          </SubSection>

          <SubSection title="2.2 Voice & Conversation Data">
            <p>
              The App uses your device&apos;s microphone to enable real-time AI voice coaching sessions. During sessions:
            </p>
            <ul>
              <li>Your voice is streamed in real time to Google&apos;s Gemini Live API for processing.</li>
              <li>We store <strong>text transcripts</strong> of your sessions in our database for feedback and progress tracking.</li>
              <li><strong>We do not store raw audio recordings</strong> on our servers.</li>
            </ul>
          </SubSection>

          <SubSection title="2.3 Usage & Analytics Data">
            <p>We automatically collect certain information about how you use the App, including:</p>
            <ul>
              <li>Session duration and frequency</li>
              <li>Scenarios practiced and scores received</li>
              <li>App features used</li>
              <li>Crash reports and performance data</li>
            </ul>
          </SubSection>

          <SubSection title="2.4 Purchase Information">
            <p>
              If you subscribe to a paid plan, payments are processed by Apple (App Store) or Google (Play Store). We do not collect or store your payment card information. We receive confirmation of your subscription status via RevenueCat.
            </p>
          </SubSection>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use your information to:</p>
          <ul>
            <li>Provide, operate, and improve the App and its features</li>
            <li>Personalize your experience and track your speaking progress</li>
            <li>Generate AI feedback on your speech performance</li>
            <li>Send you important service-related notifications</li>
            <li>Manage your subscription and in-app purchases</li>
            <li>Detect, prevent, and address technical issues and fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section title="4. Third-Party Services">
          <p>We use the following third-party services that have their own privacy policies:</p>
          <table className="w-full text-sm border-collapse mt-4">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 font-semibold">Service</th>
                <th className="text-left py-2 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="py-2 pr-4">Firebase Auth</td><td className="py-2">User authentication</td></tr>
              <tr><td className="py-2 pr-4">Firebase Firestore</td><td className="py-2">Session data & user profiles</td></tr>
              <tr><td className="py-2 pr-4">Firebase Analytics</td><td className="py-2">App usage analytics</td></tr>
              <tr><td className="py-2 pr-4">Firebase Crashlytics</td><td className="py-2">Crash reporting</td></tr>
              <tr><td className="py-2 pr-4">Google Gemini Live API</td><td className="py-2">Real-time AI voice conversation</td></tr>
              <tr><td className="py-2 pr-4">Google Sign-In</td><td className="py-2">OAuth authentication</td></tr>
              <tr><td className="py-2 pr-4">Sign in with Apple</td><td className="py-2">OAuth authentication</td></tr>
              <tr><td className="py-2 pr-4">RevenueCat</td><td className="py-2">Subscription management</td></tr>
            </tbody>
          </table>
          <p className="mt-4">
            Voice data streamed to Google&apos;s Gemini Live API is subject to{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#E8622A] hover:underline">
              Google&apos;s Privacy Policy
            </a>.
          </p>
        </Section>

        <Section title="5. Microphone Permission">
          <p>
            The App requires access to your device&apos;s microphone to enable voice coaching sessions. Microphone access is only activated during an active session and with your explicit initiation. You can revoke microphone permission at any time in your device settings, though this will prevent you from using the core features of the App.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            We retain your account information and session transcripts for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us. Upon deletion, your data is removed from our systems within 30 days, except where retention is required by law.
          </p>
        </Section>

        <Section title="7. Data Security">
          <p>
            We implement industry-standard security measures to protect your data, including encrypted data transmission (HTTPS/TLS), Firebase security rules, and Firebase App Check to prevent unauthorized API access. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </Section>

        <Section title="8. Children's Privacy">
          <p>
            The App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.
          </p>
        </Section>

        <Section title="9. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Correct</strong> inaccurate or incomplete data</li>
            <li><strong>Delete</strong> your account and associated data</li>
            <li><strong>Withdraw consent</strong> to data processing</li>
            <li><strong>Data portability</strong> — receive a copy of your data</li>
            <li><strong>Object</strong> to certain types of processing</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:privacy@speechyai.com" className="text-[#E8622A] hover:underline">
              privacy@speechyai.com
            </a>.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the &quot;Last updated&quot; date at the top of this page and, where appropriate, through in-app notification. Your continued use of the App after any changes constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
          <div className="mt-4 p-4 rounded-xl bg-muted text-sm space-y-1">
            <p><strong>Speechy AI</strong></p>
            <p>Email: <a href="mailto:privacy@speechyai.com" className="text-[#E8622A] hover:underline">privacy@speechyai.com</a></p>
          </div>
        </Section>

      </div>

      <Separator className="my-10" />

      <footer className="text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Speechy AI. All rights reserved.</p>
        <Link href="/" className="hover:text-foreground transition-colors mt-1 inline-block">
          Back to home →
        </Link>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2 pl-4 border-l-2 border-[#E8622A]/30">
      <h3 className="font-medium text-base">{title}</h3>
      {children}
    </div>
  );
}
