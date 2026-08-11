import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Cpu,
  Gauge,
  LayoutDashboard,
  MemoryStick,
  Rocket,
  Server,
  ShieldCheck,
  Timer,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { TierCard } from "@/components/tier-card";
import { FaqSection } from "@/components/faq-section";
import { tiers } from "@/lib/tiers";

const DASHBOARD_URL = "https://dash.aetherlyn.lol";
const STATUS_URL = "https://status.aetherlyn.lol";

const features = [
  {
    icon: Rocket,
    title: "Instant Setup",
    description:
      "Your server is provisioned in minutes. No waiting, no manual config — just click and play.",
  },
  {
    icon: ShieldCheck,
    title: "DDoS Protection",
    description:
      "Always-on mitigation keeps your community online and protected around the clock, free on every plan.",
  },
  {
    icon: Cpu,
    title: "Premium Hardware",
    description:
      "Dedicated, high-clock CPUs with NVMe SSD storage keep your server running smooth even with 50+ players.",
  },
  {
    icon: Gauge,
    title: "Modern Panel",
    description:
      "A clean, intuitive control panel for consoles, files, backups, databases, plugins and more.",
  },
  {
    icon: Timer,
    title: "99.9% Uptime",
    description:
      "Enterprise-grade infrastructure with redundant power and networking keeps your world always up.",
  },
  {
    icon: Zap,
    title: "Full Mod Support",
    description:
      "Run Vanilla, Paper, Spigot, Forge or Fabric. Install modpacks in a single click from our library.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Features />
      <Plans />
      <CtaBanner />
      <FaqSection />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="animate-gradient-x absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="animate-glow absolute top-1/4 -left-32 size-96 rounded-full bg-primary/20 blur-[120px]" />
        <div
          className="animate-glow absolute -right-32 bottom-1/4 size-96 rounded-full bg-primary/30 blur-[120px]"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal direction="zoom">
          <Badge
            variant="secondary"
            className="mb-6 gap-1.5 rounded-full px-4 py-1.5 shadow-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            All systems operational
            <Link
              href={STATUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              view status
            </Link>
          </Badge>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Premium Minecraft hosting,{" "}
            <span className="animate-gradient-x bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              simplified.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Launch your dream server on Aetherlyn Hosting — powerful hardware,
            instant setup, free DDoS protection and plans for every budget.
            Start completely free.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="group w-full shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 sm:w-auto"
            >
              <Link
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LayoutDashboard className="size-5" />
                Open Dashboard
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group w-full transition-all duration-300 hover:scale-105 sm:w-auto"
            >
              <Link
                href={STATUS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Activity className="size-5 text-emerald-500" />
                Network Status
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={450}>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "<1 min", label: "Setup time" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="text-xl font-bold text-primary sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="animate-float pointer-events-none absolute right-10 bottom-24 hidden lg:block">
        <Server className="size-16 text-primary/20" />
      </div>
      <div
        className="animate-float pointer-events-none absolute left-10 bottom-40 hidden lg:block"
        style={{ animationDelay: "2s" }}
      >
        <Rocket className="size-12 text-primary/20" />
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Badge variant="secondary" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to host an incredible server
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We handle the infrastructure so you can focus on what matters —
            building your community.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 80}
              className="group rounded-xl border bg-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                <feature.icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="plans" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Badge variant="secondary" className="mb-4">
            Plans & Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pick the tier that fits your server
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Start free forever and upgrade whenever you need more power. Every
            plan includes DDoS protection, backups and 24/7 support.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <TierCard tier={tier} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Need something custom?{" "}
            <Link
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll build a plan around you.
          </p>
        </Reveal>

        <Reveal delay={300} className="mt-6">
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-3 rounded-xl border border-dashed border-primary/40 bg-primary/5 px-5 py-4 text-sm text-muted-foreground">
            <MemoryStick className="size-4 shrink-0 text-primary" />
            <span>
              Need more memory to test?{" "}
              <Link
                href="https://dash.aetherlyn.lol/account/tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Write us a ticket
              </Link>{" "}
              for a free additional swap RAM.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal direction="zoom">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-blue-700 p-10 text-center text-primary-foreground shadow-2xl shadow-primary/30 sm:p-16">
            <div className="animate-glow absolute -top-20 -right-20 size-64 rounded-full bg-white/20 blur-3xl" />
            <div
              className="animate-glow absolute -bottom-20 -left-20 size-64 rounded-full bg-white/20 blur-3xl"
              style={{ animationDelay: "1.5s" }}
            />
            <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to launch your server?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Join Aetherlyn Hosting today and get your free 2GB server in under
              a minute. No credit card required.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="group transition-all duration-300 hover:scale-105"
              >
                <Link
                  href={DASHBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Rocket className="size-5" />
                  Get Started Free
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/40 bg-white/10 text-primary-foreground backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:text-primary-foreground"
              >
                <Link
                  href="/#plans"
                  className="!text-primary-foreground"
                >
                  View Plans
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
