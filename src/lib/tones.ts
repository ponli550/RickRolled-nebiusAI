export const toneClasses = {
  red: "bg-red-50 text-red-500",
  indigo: "bg-indigo-50 text-indigo-500",
  violet: "bg-violet-50 text-violet-500",
  green: "bg-emerald-50 text-emerald-500",
  amber: "bg-amber-50 text-amber-500",
  blue: "bg-blue-50 text-blue-500",
  slate: "bg-slate-100 text-slate-500",
} as const;

export type Tone = keyof typeof toneClasses;

export const tagToneClasses = {
  red: "bg-red-100 text-red-600",
  amber: "bg-amber-100 text-amber-700",
  green: "bg-emerald-100 text-emerald-600",
  blue: "bg-blue-100 text-blue-600",
  indigo: "bg-indigo-100 text-indigo-600",
  violet: "bg-violet-100 text-violet-600",
  gray: "bg-slate-100 text-slate-500",
} as const;

export type TagTone = keyof typeof tagToneClasses;
