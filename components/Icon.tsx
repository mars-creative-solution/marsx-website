import {
  Landmark,
  HeartPulse,
  GraduationCap,
  Banknote,
  ConciergeBell,
  ShoppingBag,
  Presentation,
  Palette,
  Building2,
  Briefcase,
  Layers,
  Cloud,
  Languages,
  Webhook,
  ShieldCheck,
  Gauge,
  BarChart3,
  BrainCircuit,
  Database,
  Sparkles,
  Box,
  Puzzle,
  Lightbulb,
  Bot,
  Expand,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/content";

const ICONS: Record<IconKey, LucideIcon> = {
  landmark: Landmark,
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  banknote: Banknote,
  "concierge-bell": ConciergeBell,
  "shopping-bag": ShoppingBag,
  presentation: Presentation,
  palette: Palette,
  building: Building2,
  briefcase: Briefcase,
  layers: Layers,
  cloud: Cloud,
  languages: Languages,
  webhook: Webhook,
  "shield-check": ShieldCheck,
  gauge: Gauge,
  "bar-chart": BarChart3,
  brain: BrainCircuit,
  database: Database,
  sparkles: Sparkles,
  box: Box,
  puzzle: Puzzle,
  lightbulb: Lightbulb,
  bot: Bot,
  expand: Expand,
};

type IconProps = {
  name: IconKey;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export default function Icon({ name, size = 22, className, strokeWidth }: IconProps) {
  const Cmp = ICONS[name];
  return <Cmp size={size} className={className} strokeWidth={strokeWidth} />;
}
