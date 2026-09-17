import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronDown, RefreshCw } from "lucide-react";
import { activitySteps, caseMeta, earlySignals, liveEntities, stepperLabels } from "../../data/investigate";
import { cn } from "../../lib/cn";
import type { TagTone } from "../../lib/tones";
import type { ActivityStatus, ActivityStep } from "../../types";
import { BackLink } from "../ui/BackLink";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { EntityRow } from "../ui/EntityRow";
import { IconBubble } from "../ui/IconBubble";
import { InfoItem } from "../ui/InfoItem";
import { SectionHeader } from "../ui/SectionHeader";
import { Stepper } from "../ui/Stepper";
import { Tag } from "../ui/Tag";

const STATUS_STYLES: Record<ActivityStatus, { label: string; tone: TagTone; marker: string }> = {
  completed: { label: "Completed", tone: "green", marker: "border-emerald-500 bg-emerald-50 text-emerald-600" },
  "in-progress": { label: "In progress", tone: "indigo", marker: "border-brand-500 bg-brand-50 text-brand-600" },
  pending: { label: "Pending", tone: "gray", marker: "border-slate-200 bg-slate-50 text-slate-400" },
};

const TICK_MS = 1100;

interface TimelineItemProps {
  step: ActivityStep;
  index: number;
  status: ActivityStatus;
  isLast: boolean;
}

function TimelineItem({ step, index, status, isLast }: TimelineItemProps) {
  const Icon = step.icon;
  const style = STATUS_STYLES[status];

  return (
    <li className="relative flex gap-4 pb-6 last:pb-0">
      {!isLast && <span className="absolute left-[13px] top-7 -bottom-0 w-0.5 bg-slate-100" />}

      <span
        className={cn(
          "relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2",
          style.marker
        )}
      >
        {status === "completed" ? <CheckCircle2 className="h-4 w-4" /> : <span className="text-xs font-bold">{index + 1}</span>}
      </span>

      <IconBubble icon={Icon} tone="indigo" className="h-9 w-9" />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">{step.title}</p>
            <p className="mt-1 text-sm leading-snug text-slate-500">{step.description}</p>
          </div>
          <Tag tone={style.tone}>{style.label}</Tag>
        </div>
      </div>
    </li>
  );
}

interface InvestigationInProgressProps {
  onBack: () => void;
  onComplete: () => void;
}

export function InvestigationInProgress({ onBack, onComplete }: InvestigationInProgressProps) {
  const [completedCount, setCompletedCount] = useState(0);
  const total = activitySteps.length;

  useEffect(() => {
    const delay = completedCount >= total ? 1200 : TICK_MS;
    const timer = window.setTimeout(() => {
      if (completedCount >= total) onComplete();
      else setCompletedCount((count) => count + 1);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [completedCount, total, onComplete]);

  const activeIndex = Math.min(3, Math.floor(completedCount / 2));

  return (
    <div className="space-y-6">
      <BackLink label="Back to Investigations" onClick={onBack} />

      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Investigation in Progress</h1>
          <p className="mt-1 text-slate-500">
            Analyzing reported content to identify scam indicators and related entities.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2">
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Investigation in progress
            </p>
            <p className="mt-0.5 text-xs text-emerald-600/80">Started 24 Apr 2025, 10:24 AM</p>
          </div>
          <Button variant="outline">
            Actions
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <Card className="p-5">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {caseMeta.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              {item.icon && <IconBubble icon={item.icon} tone="indigo" />}
              <div>
                <p className="text-xs text-slate-400">{item.label}</p>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                  {item.value}
                  {item.external && <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />}
                </p>
              </div>
            </div>
          ))}

          <Tag tone="red" className="ml-auto gap-2 px-3 py-1 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            High Priority
          </Tag>
        </div>
      </Card>

      <Card className="overflow-x-auto p-6">
        <div className="min-w-[720px]">
          <Stepper steps={stepperLabels} activeIndex={activeIndex} />
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Investigation Activity Feed</h2>
              <p className="mt-1 text-sm text-slate-500">
                Live updates as we analyze and verify information from multiple sources.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="flex items-center gap-2 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Auto-refreshing
              </span>
              <RefreshCw className="h-4 w-4 text-slate-400" />
            </div>
          </div>

          <ol className="mt-6">
            {activitySteps.map((step, index) => {
              const status: ActivityStatus =
                index < completedCount ? "completed" : index === completedCount ? "in-progress" : "pending";

              return (
                <TimelineItem
                  key={step.id}
                  step={step}
                  index={index}
                  status={status}
                  isLast={index === total - 1}
                />
              );
            })}
          </ol>
        </Card>

        <div className="space-y-5">
          <Card className="p-6">
            <SectionHeader title="Live Extracted Entities">
              <Tag tone="indigo">8 entities</Tag>
            </SectionHeader>
            <ul className="mt-3 divide-y divide-slate-100">
              {liveEntities.map((entity) => (
                <EntityRow
                  key={entity.id}
                  icon={entity.icon}
                  label={entity.label}
                  value={entity.value}
                  tag={entity.tag}
                />
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <SectionHeader title="Current Findings (Early Signals)">
              <Tag tone="red">3 signals</Tag>
            </SectionHeader>
            <div className="mt-4 space-y-3">
              {earlySignals.map((finding) => (
                <div
                  key={finding.id}
                  className={cn(
                    "rounded-xl border p-4",
                    finding.tone === "red" ? "border-red-100 bg-red-50/60" : "border-amber-100 bg-amber-50/60"
                  )}
                >
                  <InfoItem
                    icon={finding.icon}
                    tone={finding.tone}
                    title={finding.title}
                    description={finding.description}
                    tag={finding.tag}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
