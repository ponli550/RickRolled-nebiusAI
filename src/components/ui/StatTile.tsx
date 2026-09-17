import type { ResultStat } from "../../types";
import { Card } from "./Card";
import { IconBubble } from "./IconBubble";
import { Tag } from "./Tag";
import { TrendIndicator } from "./TrendIndicator";

export function StatTile({ stat }: { stat: ResultStat }) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <IconBubble icon={stat.icon} tone={stat.tone} />
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-600">{stat.label}</p>
          <div className="mt-1.5 flex flex-wrap items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">{stat.value}</span>
            {stat.tag && <Tag tone={stat.tag.tone}>{stat.tag.label}</Tag>}
            {stat.delta !== undefined && <TrendIndicator delta={stat.delta} />}
          </div>
          <p className="mt-1 text-xs text-slate-400">{stat.caption}</p>
        </div>
      </div>
    </Card>
  );
}
