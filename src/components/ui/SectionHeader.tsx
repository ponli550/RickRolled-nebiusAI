import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
  children?: ReactNode;
}

export function SectionHeader({ title, actionLabel, onAction, children }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      {children ??
        (actionLabel && (
          <button
            type="button"
            onClick={onAction}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition hover:text-brand-700"
          >
            {actionLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        ))}
    </div>
  );
}
