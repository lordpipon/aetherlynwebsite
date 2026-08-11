export interface Tier {
  name: string;
  tagline: string;
  ram: string;
  cpu: string;
  disk: string;
  icon: string;
  accent: string;
  comingSoon?: boolean;
  recommended?: boolean;
  free?: boolean;
}

export const tiers: Tier[] = [
  {
    name: "Free",
    tagline: "For casual servers and testing",
    ram: "2 GB",
    cpu: "100%",
    disk: "10 GB",
    icon: "https://oldaetherlynweb.vercel.app/assets/icons/free.svg",
    accent: "#64748b",
    free: true,
  },
  {
    name: "Iron",
    tagline: "For growing communities",
    ram: "4 GB",
    cpu: "200%",
    disk: "20 GB",
    icon: "https://oldaetherlynweb.vercel.app/assets/icons/iron.svg",
    accent: "#94a3b8",
    recommended: true,
  },
  {
    name: "Gold",
    tagline: "For serious multiplayer",
    ram: "6 GB",
    cpu: "300%",
    disk: "30 GB",
    icon: "https://oldaetherlynweb.vercel.app/assets/icons/gold.svg",
    accent: "#fbbf24",
  },
  {
    name: "Diamond",
    tagline: "For large communities and modpacks",
    ram: "8 GB",
    cpu: "400%",
    disk: "40 GB",
    icon: "https://oldaetherlynweb.vercel.app/assets/icons/diamond.svg",
    accent: "#38bdf8",
  },
  {
    name: "Amethyst",
    tagline: "For the biggest, most ambitious servers",
    ram: "10 GB",
    cpu: "500%",
    disk: "50 GB",
    icon: "https://oldaetherlynweb.vercel.app/assets/icons/amethyst.svg",
    accent: "#a78bfa",
    comingSoon: true,
  },
  {
    name: "Netherite",
    tagline: "The ultimate Aetherlyn experience",
    ram: "12 GB",
    cpu: "600%",
    disk: "60 GB",
    icon: "https://oldaetherlynweb.vercel.app/assets/icons/netherite.svg",
    accent: "#9ca3af",
    comingSoon: true,
  },
];
