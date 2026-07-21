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
  | "expand"
  | "mic"
  | "audio-lines"
  | "shirt"
  | "smile"
  | "image";

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

// Nasser — the flagship AI digital human. Presented chest-up with tight facial
// framing (see components/home/NasserFigure.tsx). His live states drive the
// "Meet Nasser" section; the demo's purple UI is re-skinned to MarsX orange.
export const NASSER = {
  name: "Nasser",
  role: "AI Digital Ambassador",
  eyebrow: "MEET NASSER",
  intro:
    "A lifelike Emirati AI presenter who listens, understands, and responds in Arabic and English — engineered for governments, exhibitions, museums, and flagship spaces.",
  // Path to the production render. Falls back to an elegant placeholder until
  // this asset is added (see NasserFigure).
  image: "/nasser.png",
} as const;

export type NasserState = {
  key: string;
  icon: IconKey;
  label: string;
  caption: string;
};

export const NASSER_STATES: NasserState[] = [
  {
    key: "listening",
    icon: "mic",
    label: "Listening",
    caption:
      "Real-time speech recognition captures each question naturally, in Arabic or English.",
  },
  {
    key: "thinking",
    icon: "brain",
    label: "Thinking",
    caption:
      "Reasoning over your organization's knowledge through the SABR foundation for an accurate answer.",
  },
  {
    key: "responding",
    icon: "audio-lines",
    label: "Responding",
    caption:
      "Speaking back with lifelike voice, expression, and lip-sync — measured, warm, and on-brand.",
  },
];

export type CustomizationOption = {
  icon: IconKey;
  title: string;
  description: string;
};

export const NASSER_CUSTOMIZATION: CustomizationOption[] = [
  {
    icon: "shirt",
    title: "Appearance & Attire",
    description:
      "National dress, corporate, or bespoke wardrobe — matched to your brand and setting.",
  },
  {
    icon: "languages",
    title: "Language & Dialect",
    description:
      "Emirati and Gulf Arabic, English, and multilingual delivery for global audiences.",
  },
  {
    icon: "audio-lines",
    title: "Voice & Tone",
    description:
      "Tune pace, warmth, and authority — from ceremonial and official to conversational.",
  },
  {
    icon: "smile",
    title: "Personality",
    description:
      "Shape character and demeanor so every interaction feels intentional and human.",
  },
  {
    icon: "database",
    title: "Knowledge Domain",
    description:
      "Grounded in your documents, policies, and institutional knowledge via SABR.",
  },
  {
    icon: "image",
    title: "Environment & Scene",
    description:
      "Place him in any real-time Unreal Engine backdrop — from majlis to museum hall.",
  },
];

export type ProcessStep = {
  icon: IconKey;
  title: string;
  description: string;
};

export const HOW_IT_WORKS: ProcessStep[] = [
  {
    icon: "puzzle",
    title: "Define",
    description:
      "We shape appearance, voice, language, and personality around your brand and audience.",
  },
  {
    icon: "database",
    title: "Train on SABR",
    description:
      "Your knowledge is structured into an AI-ready foundation for reliable, accurate answers.",
  },
  {
    icon: "cloud",
    title: "Deploy",
    description:
      "Launch on kiosks, screens, web, and immersive installations — cloud or on-premise.",
  },
  {
    icon: "bot",
    title: "Engage",
    description:
      "Nasser converses in real time, welcoming and guiding every visitor, day and night.",
  },
];
