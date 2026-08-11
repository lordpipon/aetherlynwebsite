import Link from "next/link";
import { Activity, Github, Heart } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const DASHBOARD_URL = "https://dash.aetherlyn.lol";
const STATUS_URL = "https://status.aetherlyn.lol";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                <Activity className="size-4" />
              </span>
              Aetherlyn Hosting
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Fast, reliable and affordable Minecraft server hosting. Spin up a
              server in minutes with powerful hardware and a modern control
              panel.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href={STATUS_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                  Network Status
                </Link>
              </li>
              <li>
                <Link href="/#plans" className="transition-colors hover:text-foreground">
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aetherlyn Hosting. All rights reserved.
            Not affiliated with Mojang or Microsoft.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="size-3 fill-red-500 text-red-500" /> for
            the Minecraft community
          </p>
        </div>
      </div>
    </footer>
  );
}
