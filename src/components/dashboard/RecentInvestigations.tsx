import { ExternalLink } from "lucide-react";
import { investigations } from "../../data/dashboard";
import { Card } from "../ui/Card";
import { RiskScore, RiskStatus } from "../ui/RiskBadge";
import { SectionHeader } from "../ui/SectionHeader";

const COLUMNS = ["Query / Case", "Type", "Risk Score", "Status", "Updated"];

export function RecentInvestigations() {
  return (
    <Card className="p-6">
      <SectionHeader title="Recent Investigations" actionLabel="View all" />

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-wide text-slate-400">
              {COLUMNS.map((column) => (
                <th key={column} className="pb-3 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {investigations.map((row) => {
              const Icon = row.icon;
              return (
                <tr key={row.id} className="transition hover:bg-slate-50/70">
                  <td className="py-3.5">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 shrink-0 text-brand-500" />
                      <span className="font-medium text-slate-800">{row.query}</span>
                      <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                    </div>
                  </td>
                  <td className="py-3.5 text-slate-500">{row.type}</td>
                  <td className="py-3.5">
                    <RiskScore score={row.score} />
                  </td>
                  <td className="py-3.5">
                    <RiskStatus score={row.score} />
                  </td>
                  <td className="py-3.5 text-slate-500">{row.updatedAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
