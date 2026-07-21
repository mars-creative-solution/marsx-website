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
// Nasser's media is intentionally pluggable: a transparent still (PNG with
// alpha) OR a looping Unreal clip (alpha WebM/HEVC, or a solid-black render
// blended into the page). Setting `video` makes it take priority over the
// still; both fall back to an elegant placeholder until a real asset exists.
// The asset MUST be background-free — CSS cannot strip a baked-in environment
// (e.g. a marble wall); that has to be removed in the render/export itself.
export type NasserMedia = {
  /**
   * Flip to `true` once a real background-free asset exists. While `false`,
   * NasserFigure shows the placeholder and never mounts an <img>/<video> — so
   * there are no 404s or console warnings for a not-yet-provided asset.
   */
  available: boolean;
  /** Transparent still (PNG with alpha). Used when no `video` is set. */
  image: string;
  /** Optional looping clip; when set it takes priority over the still. */
  video?: string;
  /** True if the asset sits on solid black — blend it into the page (screen). */
  blendBlackBackground?: boolean;
};

export const NASSER: {
  name: string;
  role: string;
  eyebrow: string;
  intro: string;
  media: NasserMedia;
} = {
  name: "Nasser",
  role: "AI Digital Ambassador",
  eyebrow: "MEET NASSER",
  intro:
    "A lifelike Emirati AI presenter who listens, understands, and responds in Arabic and English — engineered for governments, exhibitions, museums, and flagship spaces.",
  media: {
    // A transparent nasser.png is deployed on the server. If the file is ever
    // missing, NasserFigure gracefully falls back to the placeholder.
    available: true,
    image: "/nasser.png",
    video: undefined,
    blendBlackBackground: false,
  },
};

// The avatar roster shown in the "Meet the Ambassadors" gallery
// (components/home/AmbassadorsShowcase.tsx). Each entry reuses the pluggable
// NasserMedia contract, so a transparent PNG or Unreal loop drops in per avatar
// with no code change. All three expect transparent renders on the server at
// the paths below; if a file is missing, NasserFigure falls back to the
// placeholder gracefully.
export type Ambassador = {
  id: string;
  name: string;
  role: string;
  media: NasserMedia;
};

export const AMBASSADORS: Ambassador[] = [
  {
    id: "nasser",
    name: NASSER.name,
    role: NASSER.role,
    media: NASSER.media,
  },
  {
    id: "julia",
    name: "Julia",
    role: "AI Digital Ambassador",
    media: { available: true, image: "/julia.png" },
  },
  {
    id: "jhonny",
    name: "Jhonny",
    role: "AI Digital Ambassador",
    media: { available: true, image: "/jhonny.png" },
  },
];

// Faint bilingual interface fragments that fade in/out around Nasser in the
// holographic hero (components/home/HoloHud.tsx). Purely decorative — rendered
// aria-hidden — to evoke a live AI system without labeling the screen.
export type HudToken = { text: string; lang: "ar" | "en" };

export const NASSER_HUD: HudToken[] = [
  { text: "مرحبًا", lang: "ar" },
  { text: "MarsX AI", lang: "en" },
  { text: "أهلًا وسهلًا", lang: "ar" },
  { text: "الذكاء الاصطناعي", lang: "ar" },
];

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
