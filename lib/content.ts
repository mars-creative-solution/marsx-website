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
  | "image"
  | "waveform"
  | "compass"
  | "globe"
  | "smartphone"
  | "monitor"
  | "hand"
  | "tv"
  | "orbit";

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
  role: "Enterprise AI Human",
  eyebrow: "MEET NASSER",
  intro:
    "A lifelike, fully customizable AI human — appearance, voice, behavior, knowledge, and deployment all personalized to fit any industry.",
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
// with no code change. Deliberately generic role + a single shared description
// across all three — the section's point is "one platform, many AI humans,"
// not fixed characters tied to a specific industry or use case.
export const AMBASSADOR_ROLE = "Enterprise AI Human";
export const AMBASSADOR_DESCRIPTION =
  "Personalize appearance, voice, behavior, knowledge, and deployment to fit any industry.";

export type Ambassador = {
  id: string;
  name: string;
  role: string;
  description: string;
  media: NasserMedia;
};

export const AMBASSADORS: Ambassador[] = [
  {
    id: "nasser",
    name: NASSER.name,
    role: AMBASSADOR_ROLE,
    description: AMBASSADOR_DESCRIPTION,
    media: NASSER.media,
  },
  {
    id: "julia",
    name: "Julia",
    role: AMBASSADOR_ROLE,
    description: AMBASSADOR_DESCRIPTION,
    media: { available: true, image: "/julia.png" },
  },
  {
    id: "jhonny",
    name: "Jhonny",
    role: AMBASSADOR_ROLE,
    description: AMBASSADOR_DESCRIPTION,
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

export type CustomizationOption = {
  icon: IconKey;
  title: string;
  description: string;
};

// The platform's core promise: every dimension of an AI human can be
// configured. Order matches the brief exactly (appearance -> voice ->
// personality -> environment -> language -> expression -> knowledge -> behavior).
export const NASSER_CUSTOMIZATION: CustomizationOption[] = [
  {
    icon: "shirt",
    title: "Appearance & Clothing",
    description:
      "National dress, corporate, or bespoke wardrobe — matched to your brand and setting.",
  },
  {
    icon: "audio-lines",
    title: "Voice & Accent",
    description:
      "Tune pace, warmth, and authority — from ceremonial and official to conversational.",
  },
  {
    icon: "smile",
    title: "Personality & Tone",
    description:
      "Shape character and demeanor so every interaction feels intentional and human.",
  },
  {
    icon: "image",
    title: "Background & Environment",
    description:
      "Any real-time backdrop — from a majlis to a museum hall to a branded studio.",
  },
  {
    icon: "languages",
    title: "Arabic & English Support",
    description:
      "Fluent bilingual delivery, with Gulf Arabic dialect precision for regional audiences.",
  },
  {
    icon: "waveform",
    title: "Lip Sync & Facial Expressions",
    description:
      "Natural mouth movement and micro-expressions synced to every word, in real time.",
  },
  {
    icon: "database",
    title: "Knowledge Base",
    description:
      "Grounded in your documents, policies, and institutional knowledge via SABR.",
  },
  {
    icon: "compass",
    title: "Behavior & Response Style",
    description:
      "Configure how direct, formal, or exploratory each answer feels — tuned to your audience.",
  },
];

export type DeploymentOption = {
  id: string;
  icon: IconKey;
  title: string;
  description: string;
  /** Larger bento tile for emphasis in DeployAnywhere. */
  featured?: boolean;
};

// Physical and digital surfaces an AI human can be deployed to. Order and
// `featured` flags drive the bento layout in components/home/DeployAnywhere.tsx —
// Holograms, Museums, and Exhibitions get emphasis per the brief, to make clear
// these AI humans live in physical spaces, not just on screens.
export const DEPLOYMENT_OPTIONS: DeploymentOption[] = [
  {
    id: "holograms",
    icon: "orbit",
    title: "Holograms",
    description: "Freestanding holographic presenters for flagship spaces.",
    featured: true,
  },
  {
    id: "museums",
    icon: "palette",
    title: "Museums",
    description: "Guided storytelling woven into permanent exhibits.",
    featured: true,
  },
  {
    id: "exhibitions",
    icon: "presentation",
    title: "Exhibitions",
    description: "Interactive presenters for events, expos, and conferences.",
    featured: true,
  },
  {
    id: "websites",
    icon: "globe",
    title: "Websites",
    description: "Embedded directly into your web experience.",
  },
  {
    id: "mobile-apps",
    icon: "smartphone",
    title: "Mobile Apps",
    description: "Native iOS and Android integration.",
  },
  {
    id: "kiosks",
    icon: "monitor",
    title: "Kiosks",
    description: "Self-service stations in lobbies and public spaces.",
  },
  {
    id: "touch-screens",
    icon: "hand",
    title: "Touch Screens",
    description: "Interactive displays for hands-on engagement.",
  },
  {
    id: "led-walls",
    icon: "tv",
    title: "LED Walls",
    description: "Large-format displays for immersive public installations.",
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
