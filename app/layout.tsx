import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aetherlyn.lol"),
  title: {
    default: "Aetherlyn Hosting — Premium Minecraft Server Hosting",
    template: "%s | Aetherlyn Hosting",
  },
  description:
    "Fast, reliable and affordable Minecraft server hosting. Free DDoS protection, instant setup, modern control panel and plans for every budget.",
  keywords: [
    "minecraft hosting",
    "minecraft server hosting",
    "aetherlyn",
    "minecraft server",
    "server hosting",
  ],
  openGraph: {
    title: "Aetherlyn Hosting — Premium Minecraft Server Hosting",
    description:
      "Launch your dream server on Aetherlyn Hosting. Powerful hardware, instant setup, free DDoS protection.",
    type: "website",
    url: "https://aetherlyn.lol",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} flex min-h-screen flex-col bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
