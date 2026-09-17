import { Lightbulb } from "lucide-react";
import { guideSteps } from "../../data/investigate";
import { Card } from "../ui/Card";
import { IconBubble } from "../ui/IconBubble";

export function HowItWorks() {
  return (
    <div className="space-y-5">
      <Card className="p-6">
        <h2 className="text-base font-semibold text-slate-900">How ScamGraph Investigates</h2>
        <p className="mt-1 text-sm text-slate-500">From raw input to a clear decision, in four simple steps.</p>

        <ol className="mt-6 space-y-6">
          {guideSteps.map((step, index) => (
            <li key={step.step} className="relative flex gap-4">
              {index < guideSteps.length - 1 && (
                <span className="absolute left-4 top-8 -bottom-6 w-px bg-slate-200" />
              )}
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-600">
                {step.step}
              </span>
              <div className="flex gap-3">
                <IconBubble icon={step.icon} tone="indigo" className="h-9 w-9" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-sm leading-snug text-slate-500">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <Card className="border-brand-100 bg-brand-50/60 p-6">
        <div className="flex gap-3">
          <IconBubble icon={Lightbulb} tone="violet" className="h-9 w-9" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Same technology, bigger protection.</p>
            <p className="mt-1 text-sm leading-snug text-slate-500">
              Powered by community reports, threat intelligence and graph analysis.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
