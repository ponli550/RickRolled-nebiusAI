import { useCallback, useState } from "react";
import { InvestigationInProgress } from "../components/investigate/InvestigationInProgress";
import { InvestigationResult } from "../components/investigate/InvestigationResult";
import { NewInvestigation } from "../components/investigate/NewInvestigation";
import { cn } from "../lib/cn";
import type { Phase } from "../types";

const PHASES: { id: Phase; label: string }[] = [
  { id: "new", label: "New" },
  { id: "progress", label: "In Progress" },
  { id: "result", label: "Result" },
];

function PhaseSwitcher({ phase, onChange }: { phase: Phase; onChange: (phase: Phase) => void }) {
  return (
    <div className="flex justify-end">
      <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
        {PHASES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-xs font-semibold transition",
              phase === item.id ? "bg-brand-600 text-white" : "text-slate-500 hover:bg-slate-100"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function InvestigatePage() {
  const [phase, setPhase] = useState<Phase>("new");

  const toNew = useCallback(() => setPhase("new"), []);
  const toProgress = useCallback(() => setPhase("progress"), []);
  const toResult = useCallback(() => setPhase("result"), []);

  return (
    <div className="space-y-6">
      <PhaseSwitcher phase={phase} onChange={setPhase} />

      {phase === "new" && <NewInvestigation onInvestigate={toProgress} />}
      {phase === "progress" && <InvestigationInProgress onBack={toNew} onComplete={toResult} />}
      {phase === "result" && <InvestigationResult onBack={toNew} />}
    </div>
  );
}
