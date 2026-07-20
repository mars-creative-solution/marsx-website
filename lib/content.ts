// Single source of truth for MarsX site copy, extracted from the official
// "MarsX Web" content document. Kept as pure serializable data (icons are
// string keys resolved by components/Icon.tsx) so it can be imported from
// both server and client components safely.

export type IconKey =
  | "landmark"
  | "heart-pulse"
  | "graduation-cap"
  | "banknote"
  | "concierge-bell"
  | "shopping-bag"
  | "presentation"
  | "palette"
  | "building"
  | "briefcase"
  | "layers"
  | "cloud"
  | "languages"
  | "webhook"
  | "shield-check"
  | "gauge"
  | "bar-chart"
  | "brain"
  | "database"
  | "sparkles"
  | "box"
  | "puzzle"
  | "lightbulb"
  | "bot"
  | "expand";

export const SITE = {
  name: "MarsX AI Solutions",
  tagline: "Creating the next generation of intelligent customer experiences.",
  location: "Dubai, United Arab Emirates",
  email: "info@marsx.ae",
  phone: "+971 55 943 1941",
  phoneHref: "tel:+971559431941",
  website: "marsx.ae",
  websiteHref: "https://marsx.ae",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/platform", label: "MarsX AI Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
] as const;

export type Solution = {
  slug: string;
  icon: IconKey;
  name: string;
  eyebrow?: string;
  summary: string;
  description: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "custom-ai",
    icon: "puzzle",
    name: "Custom AI Solutions",
    summary: "Tailored AI systems built around your objectives.",
    description:
      "From concept to deployment, we build tailored AI systems designed specifically around your business objectives, workflows, and operational requirements.",
  },
  {
    slug: "ai-experiences",
    icon: "sparkles",
    name: "AI Experiences",
    summary: "Immersive AI-powered experiences that captivate and engage.",
    description:
      "Create immersive AI-powered experiences for exhibitions, museums, visitor centers, smart cities, and customer engagement environments.",
  },
  {
    slug: "sabr",
    icon: "database",
    name: "SABR",
    eyebrow: "Enterprise AI Knowledge Foundation",
    summary: "Transform organizational knowledge into an AI-ready foundation.",
    description:
      "We organize documents, policies, procedures, manuals, and institutional knowledge into a structured intelligence layer that powers reliable AI applications.",
  },
];

export type PlatformHighlight = {
  icon: IconKey;
  title: string;
  description: string;
};

export const PLATFORM_HIGHLIGHTS: PlatformHighlight[] = [
  {
    icon: "layers",
    title: "Enterprise Architecture",
    description:
      "A robust foundation engineered for the demands of large organizations.",
  },
  {
    icon: "cloud",
    title: "Cloud & On-Premise Deployment",
    description:
      "Deploy in the cloud, on-premise, or in hybrid environments with confidence.",
  },
  {
    icon: "languages",
    title: "Multi-language Support",
    description:
      "Engage global audiences with natural conversations across languages.",
  },
  {
    icon: "webhook",
    title: "API Integration",
    description:
      "Connect seamlessly with your existing systems, tools, and data.",
  },
  {
    icon: "shield-check",
    title: "Secure Infrastructure",
    description:
      "Enterprise-grade security protecting every interaction and dataset.",
  },
  {
    icon: "gauge",
    title: "Scalable Performance",
    description:
      "Consistent performance that grows with your organization's needs.",
  },
  {
    icon: "bar-chart",
    title: "Analytics & Monitoring",
    description:
      "Actionable insight into every experience with real-time monitoring.",
  },
  {
    icon: "brain",
    title: "Knowledge-Driven AI",
    description:
      "Reliable AI grounded in your organization's structured knowledge.",
  },
];

export type Industry = {
  icon: IconKey;
  name: string;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  {
    icon: "presentation",
    name: "Events & Exhibitions",
    description: "Interactive digital presenters and visitor engagement.",
  },
  {
    icon: "landmark",
    name: "Government",
    description: "Digital citizen engagement and intelligent public services.",
  },
  {
    icon: "heart-pulse",
    name: "Healthcare",
    description:
      "Patient communication, visitor guidance, and healthcare information.",
  },
  {
    icon: "graduation-cap",
    name: "Education",
    description: "Interactive learning experiences and campus engagement.",
  },
  {
    icon: "banknote",
    name: "Banking & Finance",
    description: "Smart customer support and financial service experiences.",
  },
  {
    icon: "concierge-bell",
    name: "Hospitality",
    description: "AI-powered guest engagement and concierge experiences.",
  },
  {
    icon: "shopping-bag",
    name: "Retail",
    description:
      "Intelligent shopping assistance and personalized customer experiences.",
  },
  {
    icon: "palette",
    name: "Museums & Cultural Experiences",
    description: "AI-powered storytelling and interactive visitor journeys.",
  },
  {
    icon: "building",
    name: "Real Estate",
    description:
      "Property showcases, virtual sales representatives, and intelligent customer assistance.",
  },
  {
    icon: "briefcase",
    name: "Enterprise",
    description:
      "AI solutions designed for modern organizations across every industry.",
  },
];

export type ValuePillar = {
  icon: IconKey;
  title: string;
  description: string;
};

export const WHY_MARSX: ValuePillar[] = [
  {
    icon: "building",
    title: "Enterprise Focus",
    description: "Built for organizations of every size.",
  },
  {
    icon: "lightbulb",
    title: "Innovation First",
    description: "Technology designed around real business value.",
  },
  {
    icon: "bot",
    title: "Human-Centered AI",
    description: "AI experiences that feel natural and intuitive.",
  },
  {
    icon: "expand",
    title: "Scalable by Design",
    description: "Ready for cloud, on-premise, and enterprise deployment.",
  },
];
