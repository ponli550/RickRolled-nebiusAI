import type { StatCardData } from "../../types";
import { Card } from "../ui/Card";
import { IconBubble } from "../ui/IconBubble";
import { TrendIndicator } from "../ui/TrendIndicator";

export function StatCard({ stat }: { stat: StatCardData }) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <IconBubble icon={stat.icon} tone={stat.tone} />
        <div className="min-w-0">
          <p className="text-sm font-medium leading-snug text-slate-600">{stat.label}</p>
          <div className="mt-1.5 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900">{stat.value}</span>
            <TrendIndicator delta={stat.delta} />
          </div>
          <p className="mt-1 text-xs text-slate-400">{stat.caption}</p>
        </div>
      </div>
    </Card>
  );
}
