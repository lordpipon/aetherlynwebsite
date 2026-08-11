import * as React from "react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface LegalSection {
  title: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  badge: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}

export function LegalPage({
  badge,
  title,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <Badge variant="secondary" className="mb-4">
            {badge}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {updated}
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <div className="prose prose-neutral dark:prose-invert mt-3 space-y-3 text-muted-foreground">
                {section.body}
              </div>
              <Separator className="mt-8" />
            </div>
          ))}
        </Reveal>
      </div>
    </main>
  );
}
