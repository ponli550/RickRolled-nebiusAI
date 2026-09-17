import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { topCategories } from "../../data/dashboard";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

export function TopCategories() {
  return (
    <Card className="flex flex-col p-6">
      <SectionHeader title="Top Scam Categories" />

      <div className="mt-4 flex flex-1 items-center gap-4">
        <div className="relative h-44 w-44 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={topCategories}
                dataKey="value"
                innerRadius={54}
                outerRadius={82}
                paddingAngle={2}
                stroke="none"
              >
                {topCategories.map((slice) => (
                  <Cell key={slice.name} fill={slice.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-extrabold text-slate-900">1,248</span>
            <span className="text-xs text-slate-400">Total</span>
          </div>
        </div>

        <ul className="flex-1 space-y-2.5">
          {topCategories.map((slice) => (
            <li key={slice.name} className="flex items-center gap-3 text-sm">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: slice.color }} />
              <span className="flex-1 text-slate-600">{slice.name}</span>
              <span className="font-semibold text-slate-800">{slice.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
