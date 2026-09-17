import { cn } from "../../lib/cn";
import { riskStyle } from "../../lib/risk";
import { Badge } from "./Badge";

export function RiskScore({ score }: { score: number }) {
  const { className } = riskStyle(score);

  return (
    <span
      className={cn(
        "inline-flex min-w-[44px] items-center justify-center rounded-lg px-2 py-1 text-sm font-bold",
        className
      )}
    >
      {score}
    </span>
  );
}

export function RiskStatus({ score }: { score: number }) {
  const { label, className, dot } = riskStyle(score);

  return (
    <Badge className={className}>
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {label}
    </Badge>
  );
}
