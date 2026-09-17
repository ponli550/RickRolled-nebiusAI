import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("rounded-2xl border border-slate-200/70 bg-white shadow-sm", className)}>
      {children}
    </div>
  );
}
