import { ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";
import type { TagData } from "../../types";
import { Tag } from "./Tag";

interface EntityRowProps {
  icon: LucideIcon;
  label?: string;
  value: string;
  tag?: TagData;
  showChevron?: boolean;
}

export function EntityRow({ icon: Icon, label, value, tag, showChevron }: EntityRowProps) {
  return (
    <li className="flex items-center gap-3 py-2.5">
      <Icon className="h-4 w-4 shrink-0 text-brand-500" />
      {label && <span className="w-32 shrink-0 text-sm text-slate-500">{label}</span>}
      <span className={cn("min-w-0 flex-1 truncate text-sm text-slate-800", !label && "font-medium")}>
        {value}
      </span>
      {tag && <Tag tone={tag.tone}>{tag.label}</Tag>}
      {showChevron && <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />}
    </li>
  );
}
