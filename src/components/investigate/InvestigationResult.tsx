import { AlertTriangle, ArrowUpRight, ChevronDown, Copy, Globe, MoreVertical, Share2 } from "lucide-react";
import {
  claimRows,
  connectedEntities,
  keyEvidence,
  recommendedActions,
  resultMeta,
  resultStats,
  resultSummary,
} from "../../data/investigate";
import { cn } from "../../lib/cn";
import type { Tone } from "../../lib/tones";
import { BackLink } from "../ui/BackLink";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { EntityRow } from "../ui/EntityRow";
import { IconBubble } from "../ui/IconBubble";
import { InfoItem } from "../ui/InfoItem";
import { SectionHeader } from "../ui/SectionHeader";
import { StatTile } from "../ui/StatTile";
import { Tag } from "../ui/Tag";

const ACTION_TONES: Record<Tone, string> = {
  red: "border-red-100 bg-red-50/60",
  amber: "border-amber-100 bg-amber-50/60",
  blue: "border-blue-100 bg-blue-50/60",
  indigo: "border-indigo-100 bg-indigo-50/60",
  violet: "border-violet-100 bg-violet-50/60",
  green: "border-emerald-100 bg-emerald-50/60",
  slate: "border-slate-200 bg-slate-50",
};

export function InvestigationResult({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-6">
      <BackLink label="Back to Investigations" onClick={onBack} />

      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Investigation Result</h1>
          <Tag tone="red" className="gap-1.5 px-3 py-1 text-sm">
            <AlertTriangle className="h-3.5 w-3.5" />
            HIGH RISK
          </Tag>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Share2 className="h-4 w-4" />
            Share Report
          </Button>
          <Button variant="outline" className="px-3" aria-label="More actions">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <IconBubble icon={Globe} tone="indigo" className="h-11 w-11" />
          <div>
            <p className="flex items-center gap-2 text-xl font-bold text-slate-900">
              {resultMeta.domain}
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </p>
            <p className="mt-0.5 text-sm text-slate-500">
              {resultMeta.type} &nbsp;|&nbsp; Investigated on {resultMeta.investigatedAt}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
          <span className="text-sm text-slate-500">
            Case ID: <span className="font-semibold text-slate-800">{resultMeta.caseId}</span>
          </span>
          <Copy className="h-4 w-4 text-slate-400" />
        </div>
      </div>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {resultStats.map((stat) => (
          <StatTile key={stat.id} stat={stat} />
        ))}
      </section>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-base font-semibold text-slate-900">Summary</h2>
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/60 p-4">
              <AlertTriangle className="h-5 w-5 shrink-0 text-red-500" />
              <div>
                <p className="text-sm font-bold text-red-600">{resultSummary.headline}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{resultSummary.body}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <SectionHeader title="Claim Verification" actionLabel="How we verify claims" />

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wide text-slate-400">
                    <th className="pb-3 font-medium">Claim</th>
                    <th className="pb-3 font-medium">Verification Result</th>
                    <th className="pb-3 font-medium">Details</th>
                    <th className="pb-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {claimRows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <tr key={row.id} className="transition hover:bg-slate-50/70">
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-2.5">
                            <Icon className="h-4 w-4 shrink-0 text-brand-500" />
                            <span className="text-slate-700">{row.claim}</span>
                          </div>
                        </td>
                        <td className="py-3.5 pr-4">
                          <Tag tone={row.result.tone}>{row.result.label}</Tag>
                        </td>
                        <td className="py-3.5 pr-4 text-slate-500">{row.details}</td>
                        <td className="py-3.5">
                          <ChevronDown className="ml-auto h-4 w-4 text-slate-300" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-base font-semibold text-slate-900">Recommended Actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {recommendedActions.map((action) => (
                <div key={action.id} className={cn("rounded-xl border p-4", ACTION_TONES[action.tone])}>
                  <IconBubble icon={action.icon} tone={action.tone} className="h-9 w-9" />
                  <p className="mt-3 text-sm font-semibold text-slate-900">{action.title}</p>
                  <p className="mt-1 text-xs leading-snug text-slate-500">{action.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card className="p-6">
            <SectionHeader title="Key Evidence" actionLabel="View all evidence" />
            <div className="mt-4 space-y-4">
              {keyEvidence.map((item) => (
                <InfoItem
                  key={item.id}
                  icon={item.icon}
                  tone={item.tone}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <SectionHeader title="Connected Entities" actionLabel="View in Graph Explorer" />
            <ul className="mt-3 divide-y divide-slate-100">
              {connectedEntities.map((entity) => (
                <EntityRow
                  key={entity.id}
                  icon={entity.icon}
                  value={entity.name}
                  tag={entity.tag}
                  showChevron
                />
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
