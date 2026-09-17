import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { scamTrends, trendSeries } from "../../data/dashboard";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";

export function ScamTrendsChart() {
  return (
    <Card className="p-6">
      <SectionHeader title="Scam Trends in Malaysia">
        <select
          defaultValue="30"
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 focus:border-brand-400 focus:outline-none"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 90 days</option>
        </select>
      </SectionHeader>

      <div className="mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={scamTrends} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              {trendSeries.map((series) => (
                <linearGradient key={series.key} id={`grad-${series.key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={series.color} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={series.color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>

            <CartesianGrid vertical={false} stroke="#eef2f7" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
              tick={{ fill: "#94a3b8", fontSize: 11 }}
            />
            <Tooltip
              labelFormatter={(label) => `${label}, 2025`}
              cursor={{ stroke: "#cbd5e1", strokeDasharray: "4 4" }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 25px -5px rgb(15 23 42 / 0.15)",
                fontSize: 12,
              }}
            />

            {trendSeries.map((series) => (
              <Area
                key={series.key}
                type="monotone"
                dataKey={series.key}
                name={series.label}
                stroke={series.color}
                strokeWidth={2}
                fill={`url(#grad-${series.key})`}
                dot={false}
                activeDot={{ r: 4 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        {trendSeries.map((series) => (
          <span key={series.key} className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: series.color }} />
            {series.label}
          </span>
        ))}
      </div>
    </Card>
  );
}
