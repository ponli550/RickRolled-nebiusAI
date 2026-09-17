import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { tagToneClasses, type TagTone } from "../../lib/tones";

interface TagProps {
  tone?: TagTone;
  className?: string;
  children: ReactNode;
}

export function Tag({ tone = "gray", className, children }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-md px-2 py-0.5 text-xs font-semibold",
        tagToneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
