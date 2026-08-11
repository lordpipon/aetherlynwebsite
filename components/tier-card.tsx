"use client";

import * as React from "react";
import Image from "next/image";
import {
  Cpu,
  HardDrive,
  MemoryStick,
  Sparkles,
  Check,
  Lock,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Tier } from "@/lib/tiers";

const DASHBOARD_URL = "https://dash.aetherlyn.lol";

export function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const statItems = [
    { icon: MemoryStick, label: `${tier.ram} RAM` },
    { icon: Cpu, label: `${tier.cpu} CPU` },
    { icon: HardDrive, label: `${tier.disk} SSD` },
  ];

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group",
        tier.recommended && "border-primary/50 shadow-lg shadow-primary/10",
        tier.comingSoon && "opacity-90"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {tier.recommended && (
        <div className="absolute inset-x-0 top-0 z-10 flex justify-center">
          <Badge className="mt-3 gap-1 bg-primary shadow-lg shadow-primary/40">
            <Sparkles className="size-3" />
            Most Popular
          </Badge>
        </div>
      )}

      {tier.comingSoon && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/70 backdrop-blur-sm">
          <Badge
            variant="secondary"
            className="gap-1 px-4 py-2 text-sm font-semibold"
          >
            <Lock className="size-4" />
            Coming Soon
          </Badge>
        </div>
      )}

      <CardHeader className={cn(tier.comingSoon && "opacity-60")}>
        <div className="flex items-center justify-between">
          <div className="relative size-14">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse rounded-lg bg-muted" />
            )}
            <Image
              src={tier.icon}
              alt={`${tier.name} tier icon`}
              width={56}
              height={56}
              className="animate-float drop-shadow-lg transition-all duration-500 group-hover:scale-110"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          <CardTitle className="text-xl">{tier.name}</CardTitle>
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold tracking-tight">
            {tier.price}
          </span>
          {!tier.free && !tier.comingSoon && (
            <span className="text-sm text-muted-foreground">/ month</span>
          )}
        </div>
        <CardDescription className="min-h-10">{tier.tagline}</CardDescription>
      </CardHeader>

      <CardContent className={cn(tier.comingSoon && "opacity-60")}>
        <div className="space-y-3">
          {statItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border bg-muted/50 px-3 py-2.5 transition-colors duration-300 group-hover:border-primary/30"
            >
              <Icon
                className="size-4 shrink-0"
                style={{ color: tier.accent }}
              />
              <span className="text-sm font-medium">{label}</span>
              <Check
                className="ml-auto size-4 shrink-0 text-emerald-500"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className={cn(tier.comingSoon && "pointer-events-none opacity-60")}>
        <Button
          className="w-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
          variant={tier.recommended ? "default" : "outline"}
          asChild
        >
          <a
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tier.comingSoon
              ? "Notify Me"
              : tier.free
                ? "Start Free"
                : `Get ${tier.name}`}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
