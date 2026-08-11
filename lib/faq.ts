export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is Aetherlyn Hosting?",
    answer:
      "Aetherlyn Hosting is a Minecraft server hosting platform built for players who want fast, reliable and affordable servers. We provide powerful hardware, instant setup and a beautiful control panel so you can get back to playing.",
  },
  {
    question: "How do I get started?",
    answer:
      "Create an account from the dashboard, pick a plan (or start free), and your server will be ready in minutes. You'll get everything you need to configure and manage it from our panel.",
  },
  {
    question: "What does 100% CPU mean?",
    answer:
      "CPU percentage refers to the amount of a full CPU core allocated to your server. For example, 100% gives you one full core, while 300% gives you the power of three full cores — perfect for heavy modpacks and large player counts.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can upgrade (or downgrade) your plan at any time from the dashboard. Upgrades apply instantly and you'll only pay the difference in price.",
  },
  {
    question: "Is the Free plan really free?",
    answer:
      "Yes, the Free plan is completely free forever. It includes 2 GB of RAM, 100% CPU and 10 GB of SSD disk — enough to run a small vanilla server or test a modpack.",
  },
  {
    question: "What is the Amethyst and Netherite tiers?",
    answer:
      "Amethyst (10 GB RAM / 500% CPU / 50 GB disk) and Netherite (12 GB RAM / 600% CPU / 60 GB disk) are our flagship plans. They're coming soon — stay tuned!",
  },
  {
    question: "What server software do you support?",
    answer:
      "We support all major server software including Vanilla, Paper, Spigot, Forge and Fabric, so you can run almost any version of Minecraft you like.",
  },
  {
    question: "Do you offer DDoS protection?",
    answer:
      "Yes. Every Aetherlyn server is protected by always-on DDoS protection at no extra cost, so your community stays online no matter what.",
  },
  {
    question: "Where can I check on the status of the network?",
    answer:
      "You can view live network status at status.aetherlyn.lol, where we report any incidents and current uptime in real time.",
  },
];
