import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";
import type { Tone } from "../../lib/tones";
import type { TagData } from "../../types";
import { IconBubble } from "./IconBubble";
import { Tag } from "./Tag";

interface InfoItemProps {
  icon: LucideIcon;
  tone: Tone;
  title: string;
  description: string;
  tag?: TagData;
  className?: string;
}

export function InfoItem({ icon, tone, title, description, tag, className }: InfoItemProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <IconBubble icon={icon} tone={tone} className="h-9 w-9" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          {tag && <Tag tone={tag.tone}>{tag.label}</Tag>}
        </div>
        <p className="mt-1 text-sm leading-snug text-slate-500">{description}</p>
      </div>
    </div>
  );
}
