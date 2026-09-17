import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";
import { toneClasses, type Tone } from "../../lib/tones";

interface IconBubbleProps {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}

export function IconBubble({ icon: Icon, tone = "slate", className }: IconBubbleProps) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
        toneClasses[tone],
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}
