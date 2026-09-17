import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "../../lib/cn";

interface TrendIndicatorProps {
  delta: number;
  className?: string;
}

export function TrendIndicator({ delta, className }: TrendIndicatorProps) {
  const isUp = delta >= 0;
  const Icon = isUp ? ArrowUp : ArrowDown;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 text-sm font-semibold",
        isUp ? "text-emerald-500" : "text-red-500",
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={3} />
      {Math.abs(delta)}%
    </span>
  );
}
