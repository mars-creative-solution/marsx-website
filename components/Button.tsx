import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "glass";
  withArrow?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all";
  const styles =
    variant === "primary"
      ? "bg-accent text-black hover:scale-105 accent-glow"
      : "glass text-mist hover:bg-mist/10";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
