import { Fragment } from "react";
import { cn } from "../../lib/cn";

interface StepperProps {
  steps: { label: string; description: string }[];
  activeIndex: number;
}

export function Stepper({ steps, activeIndex }: StepperProps) {
  return (
    <div className="flex items-start">
      {steps.map((step, index) => {
        const isReached = index <= activeIndex;

        return (
          <Fragment key={step.label}>
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                  isReached ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-400"
                )}
              >
                {index + 1}
              </span>
              <div className="max-w-[190px]">
                <p className={cn("text-sm font-semibold", isReached ? "text-slate-900" : "text-slate-400")}>
                  {step.label}
                </p>
                <p className="mt-0.5 text-xs leading-snug text-slate-500">{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <span
                className={cn("mx-4 mt-4 h-0.5 flex-1 rounded-full", index < activeIndex ? "bg-brand-500" : "bg-slate-200")}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
